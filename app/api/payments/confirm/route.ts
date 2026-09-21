import { NextRequest, NextResponse } from 'next/server';
import { verifyOrderToken } from '@/lib/order-token';

export async function POST(request: NextRequest) {
  const { paymentKey, orderId, amount, orderToken } = await request.json();
  if (!paymentKey || !orderId || !Number.isInteger(amount) || amount < 1 || !orderToken) {
    return NextResponse.json({ message: '결제 승인 정보가 올바르지 않습니다.' }, { status: 400 });
  }

  const storedOrder = verifyOrderToken(orderToken);
  if (!storedOrder || storedOrder.orderId !== orderId || storedOrder.amount !== amount) {
    return NextResponse.json({ message: '주문번호 또는 결제금액이 최초 주문 정보와 일치하지 않습니다.' }, { status: 400 });
  }

  const secretKey = process.env.TOSS_PAYMENTS_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ message: '결제 승인 키가 설정되지 않았습니다.' }, { status: 503 });
  }
  const authorization = Buffer.from(`${secretKey}:`).toString('base64');
  const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
    method: 'POST',
    headers: { Authorization: `Basic ${authorization}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentKey, orderId, amount }),
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
