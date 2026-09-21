import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { createOrderToken } from '@/lib/order-token';
import { calculateOrderAmount, PRODUCT } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const { productId, quantity, color, size } = await request.json();
    if (
      productId !== PRODUCT.id ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 10 ||
      !PRODUCT.colors.includes(color) ||
      !PRODUCT.sizes.includes(size)
    ) {
      return NextResponse.json({ message: '주문 상품 또는 옵션 정보가 올바르지 않습니다.' }, { status: 400 });
    }

    const orderId = `DMXDT-${randomUUID().replaceAll('-', '')}`;
    const amount = calculateOrderAmount(quantity);
    const orderToken = createOrderToken({
      orderId,
      productId,
      quantity,
      color,
      size,
      amount,
      expiresAt: Date.now() + 10 * 60 * 1000,
    });

    return NextResponse.json({ orderId, amount, orderToken });
  } catch (error) {
    const message = error instanceof Error ? error.message : '주문을 생성하지 못했습니다.';
    return NextResponse.json({ message }, { status: 500 });
  }
}
