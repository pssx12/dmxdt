import { NextRequest, NextResponse } from 'next/server';
import { verifyOrderToken } from '@/lib/order-token';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  let input;
  try { input = await request.json(); } catch {
    return NextResponse.json({ message: '결제 승인 정보가 올바르지 않습니다.' }, { status: 400 });
  }
  const { paymentKey, orderId, amount, orderToken } = input;
  if (!paymentKey || !orderId || !Number.isInteger(amount) || amount < 1 || !orderToken) {
    return NextResponse.json({ message: '결제 승인 정보가 올바르지 않습니다.' }, { status: 400 });
  }

  let storedOrder;
  try { storedOrder = verifyOrderToken(orderToken); } catch (error) {
    console.error('Order token verification unavailable', error);
    return NextResponse.json({ message: '주문 확인 서비스가 준비되지 않았습니다.' }, { status: 503 });
  }
  if (!storedOrder || storedOrder.orderId !== orderId || storedOrder.amount !== amount) {
    return NextResponse.json({ message: '주문번호 또는 결제금액이 최초 주문 정보와 일치하지 않습니다.' }, { status: 400 });
  }

  let sql;
  let rows;
  try {
    sql = db();
    rows = await sql`SELECT order_id, amount, status, payment_key FROM orders WHERE order_id = ${orderId}`;
  } catch (error) {
    console.error('Order lookup failed', { orderId, error });
    return NextResponse.json({ message: '주문 조회에 실패했습니다. 다시 결제하지 말고 고객센터에 주문번호를 알려주세요.' }, { status: 503 });
  }
  const order = rows[0];
  if (!order || Number(order.amount) !== amount) {
    return NextResponse.json({ message: '저장된 주문 정보가 일치하지 않습니다.' }, { status: 400 });
  }
  if (order.status === 'paid') {
    return order.payment_key === paymentKey
      ? NextResponse.json({ orderId, amount, status: 'DONE' })
      : NextResponse.json({ message: '이미 다른 결제로 승인된 주문입니다.' }, { status: 409 });
  }

  const secretKey = process.env.TOSS_PAYMENTS_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ message: '결제 승인 키가 설정되지 않았습니다.' }, { status: 503 });
  }
  const authorization = Buffer.from(`${secretKey}:`).toString('base64');
  try {
    const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: { Authorization: `Basic ${authorization}`, 'Content-Type': 'application/json',
        'Idempotency-Key': orderId },
      body: JSON.stringify({ paymentKey, orderId, amount }),
    });
    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json({ message: data.message || '결제 승인에 실패했습니다.' }, { status: response.status });
    }
    if (data.status !== 'DONE' || data.orderId !== orderId || data.totalAmount !== amount || data.paymentKey !== paymentKey) {
      console.error('Unexpected payment confirmation response', { orderId, status: data.status });
      return NextResponse.json({ message: '승인 결과 확인이 필요합니다. 고객센터에 주문번호를 알려주세요.' }, { status: 502 });
    }
    const updated = await sql`UPDATE orders SET status = 'paid', payment_key = ${paymentKey}, paid_at = now()
      WHERE order_id = ${orderId} AND status = 'pending' RETURNING order_id`;
    if (updated.length === 0) {
      return NextResponse.json({ message: '승인된 주문의 저장 상태를 확인해야 합니다. 고객센터에 주문번호를 알려주세요.' }, { status: 409 });
    }
    return NextResponse.json({ orderId, amount, status: 'DONE' });
  } catch (error) {
    console.error('Payment confirmation or recording failed', { orderId, error });
    return NextResponse.json({ message: '승인 상태 확인이 필요합니다. 다시 결제하지 말고 고객센터에 주문번호를 알려주세요.' }, { status: 503 });
  }
}
