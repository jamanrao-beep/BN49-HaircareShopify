import { prisma } from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import { addCustomerTags, removeCustomerTags } from "@/lib/shopify/customers";
import { getOptionalEnv } from "@/lib/env";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, Clock, Building2, User, Mail, FileText, ShoppingBag } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function B2BApplicationDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const application = await prisma.b2BApplication.findUnique({
    where: { id },
  });

  if (!application) {
    notFound();
  }

  async function approveApplication() {
    "use server";
    
    await prisma.b2BApplication.update({
      where: { id },
      data: { status: "APPROVED", reviewedAt: new Date() },
    });

    if (application?.shopifyCustomerId) {
       if (getOptionalEnv("SHOPIFY_SHOP_DOMAIN") && getOptionalEnv("SHOPIFY_ADMIN_ACCESS_TOKEN")) {
         await removeCustomerTags(application.shopifyCustomerId, ["B2B_Pending"]);
         await addCustomerTags(application.shopifyCustomerId, ["wholesale"]);
       }
    }

    redirect("/admin/b2b");
  }

  async function rejectApplication(formData: FormData) {
    "use server";
    const reason = formData.get("reason") as string;
    
    await prisma.b2BApplication.update({
      where: { id },
      data: { status: "REJECTED", reviewedAt: new Date(), rejectionReason: reason },
    });

    if (application?.shopifyCustomerId) {
       if (getOptionalEnv("SHOPIFY_SHOP_DOMAIN") && getOptionalEnv("SHOPIFY_ADMIN_ACCESS_TOKEN")) {
         await removeCustomerTags(application.shopifyCustomerId, ["B2B_Pending"]);
       }
    }

    redirect("/admin/b2b");
  }

  return (
    <div className="p-8 max-w-4xl mx-auto w-full animate-fade-in-up">
      <div className="mb-8">
        <Link 
          href="/admin/b2b" 
          className="inline-flex items-center gap-2 text-sm text-[var(--color-brand-600)] hover:text-[var(--color-brand-900)] transition-colors px-3 py-1.5 rounded-lg hover:bg-white/50 font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Applications
        </Link>
      </div>

      <div className="bg-white/60 border border-white/40 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
        {/* Header */}
        <div className="p-8 border-b border-white/40 flex flex-col md:flex-row md:items-start justify-between gap-6 bg-white/30">
          <div className="flex gap-4 items-start">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[var(--color-brand-500)] shrink-0 shadow-sm border border-white/40">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[var(--color-brand-900)] mb-2">{application.businessName}</h1>
              <p className="text-[var(--color-brand-700)] flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4" /> 
                Submitted on {application.createdAt.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
          
          <div className="shrink-0">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-sm border ${
              application.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
              application.status === 'APPROVED' ? 'bg-green-100 text-green-800 border-green-200' :
              'bg-red-100 text-red-800 border-red-200'
            }`}>
              {application.status === 'PENDING' && <Clock className="w-4 h-4" />}
              {application.status === 'APPROVED' && <CheckCircle2 className="w-4 h-4" />}
              {application.status === 'REJECTED' && <XCircle className="w-4 h-4" />}
              {application.status}
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Details Column */}
          <div className="flex-1 p-8 lg:border-r border-white/40 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-600)] mb-4 flex items-center gap-2">
                <User className="w-4 h-4" /> Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[var(--color-brand-500)] mb-1 font-bold">Full Name</p>
                  <p className="font-bold text-[var(--color-brand-900)] text-lg">{application.contactName}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-brand-500)] mb-1 font-bold">Email Address</p>
                  <a href={`mailto:${application.email}`} className="font-bold text-[var(--color-brand-500)] hover:text-[var(--color-brand-700)] transition-colors flex items-center gap-2 text-lg">
                    {application.email} <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/40 pt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-600)] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" /> Business Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[var(--color-brand-500)] mb-1 font-bold">Tax ID / GSTIN</p>
                  <p className="font-bold font-mono bg-white/80 inline-block px-3 py-1.5 rounded-lg text-[var(--color-brand-900)] border border-white/40 shadow-sm">
                    {application.taxId || 'Not provided'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-brand-500)] mb-1 font-bold">Shopify Customer ID</p>
                  <p className="font-bold text-[var(--color-brand-900)] flex items-center gap-2 text-lg">
                    {application.shopifyCustomerId || 'Unknown'}
                    {application.shopifyCustomerId && <ShoppingBag className="w-5 h-5 text-[var(--color-brand-500)]" />}
                  </p>
                </div>
              </div>
            </div>

            {application.message && (
              <div className="border-t border-white/40 pt-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-600)] mb-4">Message</h3>
                <div className="bg-white/50 border border-white/40 p-5 rounded-xl text-[var(--color-brand-800)] leading-relaxed italic font-medium shadow-sm">
                  "{application.message}"
                </div>
              </div>
            )}
            
            {application.status === "REJECTED" && application.rejectionReason && (
              <div className="border-t border-white/40 pt-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-4">Rejection Reason</h3>
                <div className="bg-red-50 border border-red-200 p-5 rounded-xl text-red-800 font-medium shadow-sm">
                  {application.rejectionReason}
                </div>
              </div>
            )}
          </div>

          {/* Actions Column */}
          {application.status === "PENDING" && (
            <div className="w-full lg:w-80 bg-white/40 p-8 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--color-brand-900)] mb-2">Review Actions</h3>
                <p className="text-sm text-[var(--color-brand-700)] font-medium">Make a decision on this wholesale application.</p>
              </div>

              <form action={approveApplication}>
                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" /> Approve Account
                </button>
              </form>

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-white/40"></div>
                <span className="shrink-0 px-4 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-500)]">OR</span>
                <div className="flex-grow border-t border-white/40"></div>
              </div>

              <form action={rejectApplication} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="reason" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-brand-600)] mb-2">
                    Rejection Reason
                  </label>
                  <textarea 
                    id="reason" 
                    name="reason" 
                    rows={3}
                    className="w-full bg-white/80 border border-white/40 rounded-xl px-4 py-3 text-sm text-[var(--color-brand-900)] placeholder-[var(--color-brand-400)] focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all resize-none shadow-sm font-medium" 
                    placeholder="Provide a reason (optional)..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white/60 hover:bg-red-50 border border-white/40 hover:border-red-200 text-red-600 font-bold py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow-md flex justify-center items-center gap-2"
                >
                  <XCircle className="w-5 h-5" /> Reject Account
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
