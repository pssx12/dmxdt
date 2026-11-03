import { orderStorageConfigured } from '@/lib/order-db';

export function checkoutEnabled(): boolean {
  const clientKey = process.env.NEXT_PUBLIC_TOSS_PAYMENTS_CLIENT_KEY || '';
  const secretKey = process.env.TOSS_PAYMENTS_SECRET_KEY || '';
  const bothConfigured = Boolean(clientKey && secretKey);
  const sameMode = clientKey.startsWith('test_') === secretKey.startsWith('test_');
  return process.env.PAYMENTS_ENABLED === 'true'
    && bothConfigured && sameMode && orderStorageConfigured();
}
