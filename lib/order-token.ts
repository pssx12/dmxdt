import { createHmac, timingSafeEqual } from 'node:crypto';

export type OrderTokenPayload = {
  orderId: string;
  productId: string;
  quantity: number;
  color: string;
  size: string;
  amount: number;
  expiresAt: number;
};

function signingSecret() {
  const secret = process.env.ORDER_SIGNING_SECRET;
  if (!secret) throw new Error('ORDER_SIGNING_SECRET 환경변수가 설정되지 않았습니다.');
  return secret;
}

function signature(value: string) {
  return createHmac('sha256', signingSecret()).update(value).digest('base64url');
}

export function createOrderToken(payload: OrderTokenPayload) {
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${encoded}.${signature(encoded)}`;
}

export function verifyOrderToken(token: string): OrderTokenPayload | null {
  const [encoded, receivedSignature] = token.split('.');
  if (!encoded || !receivedSignature) return null;

  const expectedSignature = signature(encoded);
  const received = Buffer.from(receivedSignature);
  const expected = Buffer.from(expectedSignature);
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8')) as OrderTokenPayload;
    if (!payload.orderId || !payload.productId || payload.expiresAt < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}
