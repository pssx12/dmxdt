import { NextRequest, NextResponse } from 'next/server';
import { getStoredOrder, markOrderConfirmed } from '@/lib/order-db';

type TossPayment = {
  paymentKey?: string;
  orderId?: string;
  totalAmount?: number;
  status?: string;
  method?: string | null;
  approvedAt?: string | null;
  code?: string;
  message?: string;
};

function paymentInputValid(paymentKey: unknown, orderId: unknown, amount: unknown): boolean {
  return typeof paymentKey === 'string'
    && paymentKey.length <= 200 && /^[\x21-\x7e]+$/.test(paymentKey)
    && typeof orderId === 'string' && /^DMXDT-[0-9a-f]{32}$/.test(orderId)
    && Number.isInteger(amount) && (amount as number) > 0;
}

export async function POST(request: NextRequest) {
  let paymentKey: string, orderId: string, amount: number;
  try {
    const input = await request.json();
    if (!paymentInputValid(input.paymentKey, input.orderId, input.amount)) {
      return NextResponse.json({ message: '결제 승인 정보가 올바르지 않습니다.' }, { status: 400 });
    }
    paymentKey = input.paymentKey;
    orderId = input.orderId;
    amount = input.amount;
  } catch {
    return NextResponse.json({ message: '결제 승인 정보를 읽을 수 없습니다.' }, { status: 400 });
  }

  let stored;
  try {
    stored = await getStoredOrder(orderId);
  } catch {
    return NextResponse.json({
      code: 'ORDER_REVIEW_REQUIRED',
      message: '결제 상태를 확인할 수 없습니다. 다시 결제하지 말고 고객센터로 문의해 주세요.',
    }, { status: 503 });
  }
  if (!stored) return NextResponse.json({ message: '존재하지 않는 주문입니다.' }, { status: 404 });
  if (stored.amount !== amount) {
    return NextResponse.json({ message: '결제금액이 최초 주문금액과 일치하지 않습니다.' }, { status: 400 });
  }
  if (stored.status !== 'pending') {
    if (stored.payment_key === paymentKey) {
      return NextResponse.json({ orderId, amount, status: stored.status, alreadyProcessed: true });
    }
    return NextResponse.json({ message: '이미 다른 결제정보로 처리된 주문입니다.' }, { status: 409 });
  }

  const secretKey = process.env.TOSS_PAYMENTS_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ message: '결제 승인 서비스가 준비되지 않았습니다.' }, { status: 503 });
  }
  const authorization = Buffer.from(secretKey + ':').toString('base64');
  let data: TossPayment;
  let tossStatus: number;
  try {
    const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      cache: 'no-store',
      headers: {
        Authorization: 'Basic ' + authorization,
        'Content-Type': 'application/json',
        'Idempotency-Key': 'confirm-' + orderId,
      },
      body: JSON.stringify({ paymentKey, orderId, amount }),
    });
    tossStatus = response.status;
    data = (await response.json()) as TossPayment;
  } catch {
    return NextResponse.json({
      code: 'PAYMENT_RESULT_UNKNOWN',
      message: '결제사 응답을 확인하지 못했습니다. 다시 결제하지 말고 고객센터로 문의해 주세요.',
    }, { status: 502 });
  }

  if (tossStatus < 200 || tossStatus >= 300) {
    return NextResponse.json({
      code: data.code || 'TOSS_PAYMENT_ERROR',
      message: data.message || '결제 승인이 완료되지 않았습니다.',
    }, { status: tossStatus });
  }
  if (data.orderId !== orderId || data.paymentKey !== paymentKey || data.totalAmount !== amount) {
    console.error('Toss approval mismatch: ', orderId);
    return NextResponse.json({
      code: 'ORDER_REVIEW_REQUIRED',
      message: '결제 승인 결과를 확인해야 합니다. 다시 결제하지 말고 고객센터로 문의해 주세요.',
    }, { status: 503 });
  }

  const status = data.status === 'DONE' ? 'paid'
    : data.status === 'WAITING_FOR_DEPOSIT' ? 'awaiting_deposit' : null;
  if (!status) {
    return NextResponse.json({
      code: 'ORDER_REVIEW_REQUIRED',
      message: '결제사 거래상태를 확인해야 합니다. 다시 결제하지 말고 고객센터로 문의해 주세요.',
    }, { status: 503 });
  }

  try {
    await markOrderConfirmed(orderId, paymentKey, amount,
      data.method || null, data.approvedAt || null, status);
    return NextResponse.json({ orderId, amount, status });
  } catch (error) {
    console.error('Approved payment could not be persisted:', orderId,
      error instanceof Error ? error.message : 'unknown');
    return NextResponse.json({
      code: 'ORDER_REVIEW_REQUIRED',
      message: '결제는 승인되었으나 주문 기록 확인이 필요합니다. 다시 결제하지 말고 고객센터로 연락해 주세요.',
    }, { status: 503 });
  }
}
