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

  // 3. Distributor
  await prisma.user.upsert({
    where: { email: "distributor@bn49.com" },
    update: { password: passwordHash, role: "DISTRIBUTOR" },
    create: {
      email: "distributor@bn49.com",
      name: "North India Distributor",
      password: passwordHash,
      role: "DISTRIBUTOR"
    }
  })

  console.log("Users seeded successfully!")
  console.log("------------------------")
  console.log("Admin: admin@bn49.com / password123")
  console.log("Influencer: influencer@bn49.com / password123")
  console.log("Distributor: distributor@bn49.com / password123")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
