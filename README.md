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

Use a Neon Postgres database connected to the **dmxdt-platform** Vercel project. Configure
`DATABASE_URL` as a server-only variable for Production; use a separate database or branch
for Preview. Do not put it in a `NEXT_PUBLIC_` variable or commit the actual URL.

1. Apply `db/001_orders.sql` in the database SQL editor before deploying the order flow.
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
