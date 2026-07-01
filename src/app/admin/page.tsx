export default function AdminHomePage() {
  const endpoints = [
    {
      label: "Submit B2B Application",
      method: "POST",
      path: "/api/b2b/applications",
      note: "Validates business details and applies B2B_Pending when Shopify Admin credentials are configured.",
    },
    {
      label: "Approve B2B Customer",
      method: "POST",
      path: "/api/b2b/customers/[customerId]/approve",
      note: "Internal-token protected. Removes pending/rejected tags and applies wholesale. Can optionally set taxExempt.",
    },
    {
      label: "Reject B2B Customer",
      method: "POST",
      path: "/api/b2b/customers/[customerId]/reject",
      note: "Internal-token protected. Removes pending/wholesale tags and applies B2B_Rejected.",
    },
    {
      label: "Create Influencer Discount",
      method: "POST",
      path: "/api/influencers/discounts",
      note: "Internal-token protected. Creates a Shopify percentage discount code.",
    },
    {
      label: "Influencer Orders",
      method: "GET",
      path: "/api/influencers/orders?code=CODE",
      note: "Reads Shopify orders for a discount code and returns order/revenue metrics.",
    },
    {
      label: "Distributor Orders",
      method: "GET",
      path: "/api/distributor/orders?region=Pune",
      note: "Internal-token protected. Reads recent Shopify orders and filters by shipping region.",
    },
    {
      label: "Distributor Status",
      method: "POST",
      path: "/api/distributor/orders/[orderId]/status",
      note: "Internal-token protected. Applies distributor_status:* order tags in Shopify.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-brand-50)] px-6 py-10 text-[var(--color-brand-900)]">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-brand-600)]">
            BN49 Admin
          </p>
          <h1 className="mt-2 text-3xl font-bold">Backend Foundation</h1>
        </div>

        <section className="rounded-lg border border-[var(--border)] bg-white/70 p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Implemented No-Database API Contracts</h2>
          <p className="mt-3 text-[var(--color-brand-600)]">
            These routes connect the storefront and future admin dashboard to Shopify Admin
            API behavior without requiring Postgres yet. Persistence, audit logs, RBAC users,
            and durable analytics are intentionally left for the database phase.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-3 pr-4">Flow</th>
                  <th className="py-3 pr-4">Method</th>
                  <th className="py-3 pr-4">Endpoint</th>
                  <th className="py-3">Behavior</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint) => (
                  <tr key={endpoint.path} className="border-b border-[var(--border)]/60">
                    <td className="py-3 pr-4 font-semibold">{endpoint.label}</td>
                    <td className="py-3 pr-4">{endpoint.method}</td>
                    <td className="py-3 pr-4 font-mono text-xs">{endpoint.path}</td>
                    <td className="py-3 text-[var(--color-brand-600)]">{endpoint.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
