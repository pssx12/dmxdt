export type OrderStatus = 'pending' | 'paid' | 'awaiting_deposit';

export type StoreOrder = {
  order_id: string;
  product_id: string;
  color: string;
  size: string;
  quantity: number;
  amount: number;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  postal_code: string;
  address: string;
  detail_address: string;
  delivery_memo: string;
  status: OrderStatus;
  payment_key: string | null;
  payment_method: string | null;
  approved_at: string | null;
};

export type NewOrder = Omit<StoreOrder,
  'status' | 'payment_key' | 'payment_method' | 'approved_at'>;

export function orderStorageConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function requestUrl(path: string): string {
  const base = process.env.SUPABASE_URL?.replace(/\/+$/, '');
  if (!base || !/^https:\/\//.test(base)) {
    throw new Error('주문 저장소 주소가 설정되지 않았습니다.');
  }
  return base + '/rest/v1/' + path;
}

async function request<T>(path: string, init: RequestInit): Promise<T> {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error('주문 저장소 인증이 설정되지 않았습니다.');
  const response = await fetch(requestUrl(path), {
    ...init,
    cache: 'no-store',
    headers: {
      apikey: key,
      Authorization: 'Bearer ' + key,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...init.headers,
    },
  });
  if (!response.ok) {
    console.error('DMXDT order storage failed:', response.status);
    throw new Error('주문 저장 서비스에 문제가 발생했습니다. 고객센터에 문의해 주세요.');
  }
  return (await response.json()) as T;
}

export async function createStoredOrder(order: NewOrder): Promise<void> {
  const rows = await request<StoreOrder[]>('dmxdt_orders', {
    method: 'POST',
    body: JSON.stringify({ ...order, status: 'pending' }),
  });
  if (!Array.isArray(rows) || rows.length !== 1) {
    throw new Error('주문 저장 결과를 확인하지 못했습니다.');
  }
}

export async function getStoredOrder(orderId: string): Promise<StoreOrder | null> {
  const query = '?select=*&order_id=eq.' + encodeURIComponent(orderId) + '&limit=1';
  const rows = await request<StoreOrder[]>('dmxdt_orders' + query, { method: 'GET' });
  return rows[0] || null;
}

export async function markOrderConfirmed(
  orderId: string,
  paymentKey: string,
  amount: number,
  method: string | null,
  approvedAt: string | null,
  status: Exclude<OrderStatus, 'pending'>,
): Promise<StoreOrder> {
  const query = '?order_id=eq.' + encodeURIComponent(orderId)
    + '&amount=eq.' + amount
    + '&status=in.(pending,awaiting_deposit)';
  const rows = await request<StoreOrder[]>('dmxdt_orders' + query, {
    method: 'PATCH',
    body: JSON.stringify({
      status,
      payment_key: paymentKey,
      payment_method: method,
      approved_at: approvedAt,
      updated_at: new Date().toISOString(),
    }),
  });
  if (rows.length === 1) return rows[0];
  const existing = await getStoredOrder(orderId);
  if (existing && existing.payment_key === paymentKey && existing.amount === amount
    && existing.status === status) return existing;
  throw new Error('결제 결과를 주문 내역과 대조하지 못했습니다. 고객센터에 문의해 주세요.');
}
