import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { checkoutEnabled } from '@/lib/checkout-config';
import { createStoredOrder } from '@/lib/order-db';
import { calculateOrderAmount, PRODUCT } from '@/lib/store';

function value(input: unknown, maxLength: number): string | null {
  if (typeof input !== 'string') return null;
  const trimmed = input.trim();
  return trimmed.length > 0 && trimmed.length <= maxLength ? trimmed : null;
}

export async function POST(request: NextRequest) {
  if (!checkoutEnabled()) {
    return NextResponse.json({ message: '현재 결제 준비 중입니다. 구매 전 고객센터에 문의해 주세요.' }, { status: 503 });
  }
  try {
    const body = await request.json();
    const { productId, quantity, color, size } = body;
    if (productId !== PRODUCT.id || !Number.isInteger(quantity)
      || quantity < 1 || quantity > 3
      || !PRODUCT.colors.includes(color) || !PRODUCT.sizes.includes(size)) {
      return NextResponse.json({ message: '상품 또는 옵션 정보가 올바르지 않습니다.' }, { status: 400 });
    }

    const customerName = value(body.customerName, 80);
    const customerPhone = typeof body.customerPhone === 'string'
      ? body.customerPhone.replace(/\D/g, '') : '';
    const customerEmail = value(body.customerEmail, 160)?.toLowerCase();
    const postalCode = value(body.postalCode, 10);
    const address = value(body.address, 200);
    const detailAddress = value(body.detailAddress, 200);
    const deliveryMemo = body.deliveryMemo === undefined || body.deliveryMemo === ''
      ? '' : value(body.deliveryMemo, 300);

    if (!customerName || customerName.length < 2
      || !/^01\d{8,9}$/.test(customerPhone)
      || !customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)
      || !postalCode || !address || !detailAddress || deliveryMemo === null) {
      return NextResponse.json({ message: '주문자 및 배송정보를 정확히 입력해 주세요.' }, { status: 400 });
    }

    const orderId = 'DMXDT-' + randomUUID().replace(/-/g, '');
    const amount = calculateOrderAmount(quantity);
    await createStoredOrder({
      order_id: orderId,
      product_id: productId,
      quantity,
      color,
      size,
      amount,
      customer_name: customerName,
      customer_phone: customerPhone,
      customer_email: customerEmail,
      postal_code: postalCode,
      address,
      detail_address: detailAddress,
      delivery_memo: deliveryMemo,
    });

    return NextResponse.json({ orderId, amount });
  } catch (error) {
    console.error('DMXDT order creation error', error instanceof Error ? error.message : 'unknown');
    return NextResponse.json({ message: '주문 저장에 실패했습니다. 잠시 후 다시 시도해 주세요.' }, { status: 503 });
  }
}
