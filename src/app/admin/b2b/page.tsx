import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function B2BApplicationsPage() {
  const applications = await prisma.b2BApplication.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">B2B Applications</h1>
      <div className="overflow-x-auto bg-white rounded shadow border border-gray-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b">Business Name</th>
              <th className="px-4 py-3 border-b">Contact</th>
              <th className="px-4 py-3 border-b">Status</th>
              <th className="px-4 py-3 border-b">Date</th>
              <th className="px-4 py-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{app.businessName}</td>
                <td className="px-4 py-3">
                  {app.contactName}
                  <div className="text-gray-500 text-xs mt-1">{app.email}</div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    app.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                    app.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {app.createdAt.toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <Link href={`/admin/b2b/${app.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                    Review
                  </Link>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  No B2B applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
