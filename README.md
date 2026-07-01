# BN49 Partner Dashboard

This is the Next.js dashboard prototype for BN49's B2B, influencer, and distributor workflows.

The current app is still a static UI prototype. The technical audit recommends evolving it into the custom Shopify app/backend layer for:

- Shopify OAuth and authenticated admin sessions.
- B2B application approvals and customer tagging.
- Influencer code attribution and analytics.
- Distributor order queues with region-based access.
- Webhook processing, audit logs, and database-backed workflow state.

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Checks

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## Environment

Use the root `.env.example` as the source of required variables. For local Next.js development, copy the needed values into `b2b-dashboards/.env.local`.

The app does not currently connect to Shopify or a database. When Phase 1 begins, add the Shopify app credentials, Admin API scopes, webhook secret, and database URL before enabling live routes.

## Current API Contracts

The app has no Postgres persistence yet, but these routes are wired for Shopify Admin API operations:

- `POST /api/b2b/applications`
- `POST /api/b2b/customers/[customerId]/approve`
- `POST /api/b2b/customers/[customerId]/reject`
- `POST /api/influencers/discounts`
- `GET /api/influencers/orders?code=CODE`
- `GET /api/distributor/orders?region=REGION`
- `POST /api/distributor/orders/[orderId]/status`
- `POST /api/webhooks/shopify`

Internal mutation routes require `Authorization: Bearer $BN49_ADMIN_API_TOKEN`.

## Important Boundary

Liquid theme code can show B2B UI, but it cannot securely enforce approval, pricing, restricted product access, distributor RBAC, or webhook workflows. Those responsibilities belong in this app plus Shopify platform features such as Admin API, Functions, discounts, webhooks, and a durable database.
