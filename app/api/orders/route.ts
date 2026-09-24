import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { createOrderToken } from '@/lib/order-token';
import { calculateOrderAmount, PRODUCT } from '@/lib/store';
import { db } from '@/lib/db';

function validText(value: unknown, max: number): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.trim().length <= max;
}

export async function POST(request: NextRequest) {
  try {
    const input = await request.json();
    if (!input || typeof input !== 'object' || Array.isArray(input)) {
      return NextResponse.json({ message: '주문 상품 또는 옵션 정보가 올바르지 않습니다.' }, { status: 400 });
    }
    const { productId, quantity, color, size, customerName, customerPhone, customerEmail,
      postalCode, address, detailAddress, deliveryMemo } = input;
    const phone = typeof customerPhone === 'string' ? customerPhone.replace(/\D/g, '') : '';
    if (
      productId !== PRODUCT.id ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 3 ||
      !PRODUCT.colors.includes(color) ||
      !PRODUCT.sizes.includes(size) ||
      !validText(customerName, 80) ||
      !/^01\d{8,9}$/.test(phone) ||
      !validText(customerEmail, 254) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim()) ||
      !validText(postalCode, 10) ||
      !validText(address, 300) ||
      !validText(detailAddress, 200) ||
      (deliveryMemo !== undefined && (typeof deliveryMemo !== 'string' || deliveryMemo.length > 500))
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
      expiresAt: Date.now() + 60 * 60 * 1000,
    });
    const sql = db();
    await sql`INSERT INTO orders
      (order_id, product_id, quantity, color, ring_size, amount, customer_name,
       customer_phone, customer_email, postal_code, address, detail_address, delivery_memo)
      VALUES (${orderId}, ${productId}, ${quantity}, ${color}, ${size}, ${amount},
       ${customerName.trim()}, ${phone}, ${customerEmail.trim()}, ${postalCode.trim()},
       ${address.trim()}, ${detailAddress.trim()}, ${(deliveryMemo || '').trim()})`;

    return NextResponse.json({ orderId, amount, orderToken });
  } catch (error) {
    console.error('Order creation failed', error);
    return NextResponse.json({ message: '주문을 생성하지 못했습니다. 잠시 후 다시 시도해 주세요.' }, { status: 503 });
  }
}
