import Link from "next/link";
import { FileCheck2, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const pendingB2B = await prisma.b2BApplication.count({
    where: { status: 'PENDING' }
  });

  const totalInfluencers = await prisma.influencer.count();

  return (
    <div className="p-8 max-w-7xl mx-auto w-full animate-fade-in-up">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-[var(--color-brand-900)]">Admin Dashboard</h1>
        <p className="text-[var(--color-brand-600)] font-medium">Welcome to the BN49 Partner Management Portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* B2B Approvals Card */}
        <div className="bg-white/60 border border-white/40 shadow-xl rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden group hover:bg-white/80 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-500)]/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-[var(--color-brand-500)]/20"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-600)] flex items-center justify-center text-white shadow-md">
              <FileCheck2 className="w-6 h-6" />
            </div>
            {pendingB2B > 0 && (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200 shadow-sm">
                {pendingB2B} Pending
              </span>
            )}
          </div>
          
          <h2 className="text-xl font-bold text-[var(--color-brand-900)] mb-2 relative z-10">B2B Applications</h2>
          <p className="text-[var(--color-brand-700)] text-sm mb-8 line-clamp-2 relative z-10 font-medium">
            Review wholesale account requests, assign customer tags in Shopify, and manage your B2B distribution network.
          </p>
          
          <Link 
            href="/admin/b2b" 
            className="inline-flex items-center gap-2 text-[var(--color-brand-600)] font-bold text-sm hover:text-[var(--color-brand-800)] transition-colors relative z-10"
          >
            Manage Applications <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Influencers Card */}
        <div className="bg-white/60 border border-white/40 shadow-xl rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden group hover:bg-white/80 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-blue-500/20"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 shadow-sm">
              {totalInfluencers} Active
            </span>
          </div>
          
          <h2 className="text-xl font-bold text-[var(--color-brand-900)] mb-2 relative z-10">Influencer Network</h2>
          <p className="text-[var(--color-brand-700)] text-sm mb-8 line-clamp-2 relative z-10 font-medium">
            View your influencer partners, check their order attributions, and monitor commission payouts.
          </p>
          
          <Link 
            href="/admin/influencers" 
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors relative z-10"
          >
            View Network <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="mt-12 p-6 bg-white/60 border border-white/40 shadow-lg rounded-2xl backdrop-blur-xl flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-green-600 shrink-0 mt-1" />
        <div>
          <h3 className="text-[var(--color-brand-900)] font-bold mb-1">System Status: Active</h3>
          <p className="text-sm text-[var(--color-brand-700)] font-medium">
            The Shopify Admin API connection is active. B2B approvals will instantly update customer tags in your Shopify store.
          </p>
        </div>
      </div>
    </div>
  );
}
