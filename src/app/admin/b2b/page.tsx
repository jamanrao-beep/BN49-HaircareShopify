import { prisma } from "@/lib/db";
import Link from "next/link";
import { FileCheck2, Clock, CheckCircle2, XCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function B2BApplicationsPage() {
  const applications = await prisma.b2BApplication.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8 max-w-7xl mx-auto w-full animate-fade-in-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-[var(--color-brand-900)]">B2B Approvals</h1>
          <p className="text-[var(--color-brand-700)] font-medium">Review and manage wholesale account applications.</p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-white/60 border border-white/40 shadow-sm rounded-xl px-4 py-2 flex items-center gap-3">
            <Clock className="w-5 h-5 text-yellow-600" />
            <div>
              <p className="text-sm font-bold text-[var(--color-brand-900)]">{applications.filter(a => a.status === 'PENDING').length}</p>
              <p className="text-xs text-[var(--color-brand-600)] font-medium">Pending</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/60 border border-white/40 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white/50 border-b border-white/40 text-[var(--color-brand-800)]">
              <tr>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Business Name</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Contact</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Status</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Date</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/40">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-white/40 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="font-bold text-[var(--color-brand-900)]">{app.businessName}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-[var(--color-brand-800)]">{app.contactName}</p>
                    <p className="text-[var(--color-brand-600)] text-xs mt-0.5 font-medium">{app.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-sm border ${
                      app.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                      app.status === 'APPROVED' ? 'bg-green-100 text-green-800 border-green-200' :
                      'bg-red-100 text-red-800 border-red-200'
                    }`}>
                      {app.status === 'PENDING' && <Clock className="w-3 h-3" />}
                      {app.status === 'APPROVED' && <CheckCircle2 className="w-3 h-3" />}
                      {app.status === 'REJECTED' && <XCircle className="w-3 h-3" />}
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[var(--color-brand-700)] font-medium">
                    {app.createdAt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link 
                      href={`/admin/b2b/${app.id}`} 
                      className="inline-flex items-center justify-center px-4 py-2 bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-700)] text-white shadow-md hover:shadow-lg rounded-lg text-sm font-bold transition-all"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-[var(--color-brand-600)]">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center shadow-sm">
                        <FileCheck2 className="w-6 h-6 text-[var(--color-brand-500)]" />
                      </div>
                      <p className="font-semibold">No B2B applications found.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
