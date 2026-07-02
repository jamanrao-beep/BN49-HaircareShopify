import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DistributorDashboardPage() {
  // Fetch real order status records from Prisma
  const dbStatuses = await prisma.distributorOrderStatus.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Distributor Panel</h1>
      
      <div className="overflow-x-auto bg-white rounded shadow border border-gray-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b">Shopify Order ID</th>
              <th className="px-4 py-3 border-b">Region</th>
              <th className="px-4 py-3 border-b">Status</th>
              <th className="px-4 py-3 border-b">Last Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dbStatuses.map((statusRecord) => (
              <tr key={statusRecord.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">#{statusRecord.shopifyOrderId}</td>
                <td className="px-4 py-3">{statusRecord.region}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusRecord.state === 'DELIVERED' ? 'bg-green-100 text-green-800' :
                    statusRecord.state === 'REJECTED' ? 'bg-red-100 text-red-800' :
                    statusRecord.state === 'OUT_FOR_DELIVERY' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {statusRecord.state.replace(/_/g, ' ')}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {statusRecord.updatedAt.toLocaleString()}
                </td>
              </tr>
            ))}
            {dbStatuses.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                  No distributor orders found in database.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
