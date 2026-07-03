import { config } from "dotenv"
config({ path: ".env.local" })
import { prisma } from "./src/lib/db"
import bcrypt from "bcryptjs"

async function main() {
  const passwordHash = await bcrypt.hash("password123", 10)

  // 1. Admin
  await prisma.user.upsert({
    where: { email: "admin@bn49.com" },
    update: { password: passwordHash, role: "ADMIN" },
    create: {
      email: "admin@bn49.com",
      name: "Super Admin",
      password: passwordHash,
      role: "ADMIN"
    }
  })

  // 2. Influencer
  await prisma.user.upsert({
    where: { email: "influencer@bn49.com" },
    update: { password: passwordHash, role: "INFLUENCER" },
    create: {
      email: "influencer@bn49.com",
      name: "Top Influencer",
      password: passwordHash,
      role: "INFLUENCER"
    }
  })

  // 3. (Removed Distributor)

  // 4. Seed Influencer Data (For the Influencer Dashboard)
  const influencerRecord = await prisma.influencer.upsert({
    where: { email: "influencer@bn49.com" },
    update: {},
    create: {
      name: "Top Influencer",
      email: "influencer@bn49.com",
    }
  })

  const influencerCode = await prisma.influencerCode.upsert({
    where: { code: "GLOW20" },
    update: { commissionRate: 15 },
    create: {
      influencerId: influencerRecord.id,
      code: "GLOW20",
      commissionRate: 15,
      isActive: true,
    }
  })

  // Add some fake order attributions if they don't exist
  await prisma.orderAttribution.upsert({
    where: { shopifyOrderId_influencerCodeId: { shopifyOrderId: "1001", influencerCodeId: influencerCode.id } },
    update: {},
    create: { shopifyOrderId: "1001", influencerCodeId: influencerCode.id, subtotalAmount: 4500, currencyCode: "INR", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2) }
  })
  await prisma.orderAttribution.upsert({
    where: { shopifyOrderId_influencerCodeId: { shopifyOrderId: "1002", influencerCodeId: influencerCode.id } },
    update: {},
    create: { shopifyOrderId: "1002", influencerCodeId: influencerCode.id, subtotalAmount: 12000, currencyCode: "INR", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2) }
  })
  await prisma.orderAttribution.upsert({
    where: { shopifyOrderId_influencerCodeId: { shopifyOrderId: "1003", influencerCodeId: influencerCode.id } },
    update: {},
    create: { shopifyOrderId: "1003", influencerCodeId: influencerCode.id, subtotalAmount: 8000, currencyCode: "INR", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5) }
  })
  await prisma.orderAttribution.upsert({
    where: { shopifyOrderId_influencerCodeId: { shopifyOrderId: "1004", influencerCodeId: influencerCode.id } },
    update: {},
    create: { shopifyOrderId: "1004", influencerCodeId: influencerCode.id, subtotalAmount: 15000, currencyCode: "INR", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14) }
  })

  // 5. Seed B2B Applications (For the Approval Dashboard)
  await prisma.b2BApplication.createMany({
    data: [
      { email: "pending@salon.com", contactName: "Alice", businessName: "Alice Salon", status: "PENDING" },
      { email: "approved@wholesale.com", contactName: "Bob", businessName: "Bob Wholesale", status: "APPROVED" },
    ],
    skipDuplicates: true,
  })

  console.log("Users and mock data seeded successfully!")
  console.log("------------------------")
  console.log("Admin: admin@bn49.com / password123")
  console.log("Influencer: influencer@bn49.com / password123")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
