import { NextRequest, NextResponse } from 'next/server';

const docsSecretKey = 'test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6';

export async function POST(request: NextRequest) {
  const { paymentKey, orderId, amount } = await request.json();
  if (!paymentKey || !orderId || !Number.isInteger(amount) || amount < 1) {
    return NextResponse.json({ message: '결제 승인 정보가 올바르지 않습니다.' }, { status: 400 });
  }
  const secretKey = process.env.TOSS_PAYMENTS_SECRET_KEY || docsSecretKey;
  const authorization = Buffer.from(`${secretKey}:`).toString('base64');
  const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
    method: 'POST',
    headers: { Authorization: `Basic ${authorization}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentKey, orderId, amount }),
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
