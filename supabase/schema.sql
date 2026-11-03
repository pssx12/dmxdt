-- DMXDT 주문 저장용 Supabase Postgres 테이블
-- Supabase SQL Editor에서 1회 실행. 운영 비밀키는 GitHub에 입력하지 마세요.
create table if not exists public.dmxdt_orders (
  order_id text primary key,
  product_id text not null,
  color text not null,
  size text not null,
  quantity integer not null check (quantity between 1 and 3),
  amount integer not null check (amount > 0),
  customer_name text not null,
  customer_phone text not null,
  customer_email text not null,
  postal_code text not null,
  address text not null,
  detail_address text not null,
  delivery_memo text not null default '',
  status text not null default 'pending'
    check (status in ('pending', 'paid', 'awaiting_deposit')),
  payment_key text unique,
  payment_method text,
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_dmxdt_orders_created_at
  on public.dmxdt_orders (created_at desc);
create index if not exists idx_dmxdt_orders_status
  on public.dmxdt_orders (status, created_at desc);

-- 브라우저 클라이언트에는 직접 주문 조회·삽입 권한을 부여하지 않음.
alter table public.dmxdt_orders enable row level security;
revoke all on table public.dmxdt_orders from anon, authenticated;

-- 운영자는 Supabase 대시보드의 Table Editor에서 주문을 확인할 수 있음.
-- 서비스 역할 키(SUPABASE_SERVICE_ROLE_KEY)는 서버 환경변수에만 보관.
