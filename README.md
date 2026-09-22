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
