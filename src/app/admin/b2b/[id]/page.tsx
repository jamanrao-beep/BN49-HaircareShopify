import { prisma } from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import { addCustomerTags, removeCustomerTags } from "@/lib/shopify/customers";
import { getOptionalEnv } from "@/lib/env";
import Link from "next/link";

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
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/admin/b2b" className="text-sm text-blue-600 hover:underline">
          &larr; Back to Applications
        </Link>
      </div>

      <div className="bg-white rounded shadow border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{application.businessName}</h1>
              <p className="text-gray-500 mt-1">Submitted {application.createdAt.toLocaleDateString()}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              application.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
              application.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}>
              {application.status}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Contact Name</h3>
              <p className="mt-1 text-gray-900">{application.contactName}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
              <p className="mt-1 text-gray-900">{application.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Tax ID / GSTIN</h3>
              <p className="mt-1 text-gray-900">{application.taxId || 'Not provided'}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Shopify Customer ID</h3>
              <p className="mt-1 text-gray-900">{application.shopifyCustomerId || 'Unknown'}</p>
            </div>
          </div>

          {application.message && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">Message</h3>
              <div className="mt-1 p-4 bg-gray-50 rounded text-gray-700 whitespace-pre-wrap">
                {application.message}
              </div>
            </div>
          )}

          {application.status === "REJECTED" && application.rejectionReason && (
            <div>
              <h3 className="text-sm font-medium text-red-600">Rejection Reason</h3>
              <p className="mt-1 text-gray-900">{application.rejectionReason}</p>
            </div>
          )}
        </div>

        {application.status === "PENDING" && (
          <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col gap-4">
            <h3 className="text-lg font-medium text-gray-900">Review Actions</h3>
            <div className="flex gap-4">
              <form action={approveApplication} className="flex-1">
                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Approve Application
                </button>
              </form>
            </div>
            <div className="border-t border-gray-300 my-2"></div>
            <form action={rejectApplication} className="flex flex-col gap-3">
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Rejection Reason (Optional)
                </label>
                <input 
                  type="text" 
                  id="reason" 
                  name="reason" 
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm" 
                  placeholder="Explain why this was rejected..."
                />
              </div>
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Reject Application
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
