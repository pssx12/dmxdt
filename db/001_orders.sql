-- Apply once to the production database before deploying the order flow.
CREATE TABLE IF NOT EXISTS orders (
  order_id text PRIMARY KEY,
  product_id text NOT NULL,
  quantity integer NOT NULL CHECK (quantity BETWEEN 1 AND 3),
  color text NOT NULL,
  ring_size text NOT NULL,
  amount integer NOT NULL CHECK (amount > 0),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text NOT NULL,
  postal_code text NOT NULL,
  address text NOT NULL,
  detail_address text NOT NULL,
  delivery_memo text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid')),
  payment_key text UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  paid_at timestamptz
);

CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders (created_at DESC);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders (status, created_at DESC);
