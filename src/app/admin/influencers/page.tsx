import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function InfluencersAdminPage() {
  const influencers = await prisma.influencer.findMany({
    include: {
      codes: {
        include: {
          attributions: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Influencer Analytics</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors text-sm">
          + Add Influencer
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow border border-gray-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b">Influencer</th>
              <th className="px-4 py-3 border-b">Code(s)</th>
              <th className="px-4 py-3 border-b">Orders</th>
              <th className="px-4 py-3 border-b">Total Revenue</th>
              <th className="px-4 py-3 border-b">Date Added</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {influencers.map((influencer) => {
              const totalOrders = influencer.codes.reduce(
                (acc, code) => acc + code.attributions.length,
                0
              );
              
              const totalRevenue = influencer.codes.reduce(
                (acc, code) => 
                  acc + code.attributions.reduce(
                    (sum, attr) => sum + Number(attr.subtotalAmount), 0
                  ),
                0
              );

              return (
                <tr key={influencer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">
                    {influencer.name}
                    <div className="text-gray-500 text-xs mt-1">{influencer.email}</div>
                  </td>
                  <td className="px-4 py-3">
                    {influencer.codes.map(c => (
                      <span key={c.id} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-1">
                        {c.code}
                      </span>
                    ))}
                    {influencer.codes.length === 0 && (
                      <span className="text-gray-400 italic">No codes</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{totalOrders}</td>
                  <td className="px-4 py-3 text-gray-700">${totalRevenue.toFixed(2)}</td>
                  <td className="px-4 py-3 text-gray-500">
                    {influencer.createdAt.toLocaleDateString()}
                  </td>
                </tr>
              );
            })}
            {influencers.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  No influencers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
