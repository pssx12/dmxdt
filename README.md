# DMXDT Platform V1

DMXDT Official Platform built with Next.js.

## Deploy
GitHub + Vercel 자동배포용 프로젝트입니다.

## PG review branch setup

Copy `.env.example` values into the deployment environment. Never commit a Toss secret key.

- `NEXT_PUBLIC_TOSS_PAYMENTS_CLIENT_KEY`: Toss client key
- `TOSS_PAYMENTS_SECRET_KEY`: matching Toss secret key
- `ORDER_SIGNING_SECRET`: random server-only HMAC secret
- `NEXT_PUBLIC_MAIL_ORDER_NUMBER`: mail-order business registration number

The payment flow creates a server-validated order token before opening Toss Payments. The confirmation endpoint rejects changed order IDs or amounts.

## Order database rollout

Current setup (2026-09-24): the Neon Free `dmxdt-orders` resource is connected to
**dmxdt-platform Preview only** with a Sensitive `DATABASE_URL`. The `orders` schema has
been applied. This connection uses the database's default branch; Preview is not yet
isolated from a future Production connection. Use a separate database or Neon branch
before connecting Production. Do not put the URL in a `NEXT_PUBLIC_` variable or commit it.

The Preview project still needs its own `ORDER_SIGNING_SECRET` and matching Toss **test**
client/secret keys. Do not reuse live payment keys. Until these are set, checkout and
payment confirmation cannot be tested end to end.

1. Apply `db/001_orders.sql` in the database SQL editor before deploying the order flow. Vercel's Neon query editor accepts one SQL statement at a time, so run the table and each index separately.
2. Deploy a preview branch with a test database and Toss **test** keys. Check that an order
   is created as `pending` with its ring size and delivery details, then verify a successful
   test payment changes it to `paid` and stores `payment_key` and `paid_at`.
3. Confirm the order through a restricted database console. There is no public order lookup
   or admin login in this change. Limit database-console access to staff handling orders.
4. Reconcile every Toss successful payment with exactly one `paid` row before going live.
   If Toss approval succeeds but the DB write fails, the checkout tells the customer not
   to pay again; inspect the Toss transaction and update the matching order manually.
5. Set a retention policy for abandoned `pending` orders, then remove them with a scheduled database job. For a seven-day policy:
   `DELETE FROM orders WHERE status = 'pending' AND created_at < now() - interval '7 days';`
   Back up and verify the filter before enabling automatic deletion.

Creating a DB and accepting a provider integration may have separate terms and charges.
Production payment keys and public sales copy are not changed by this branch.
