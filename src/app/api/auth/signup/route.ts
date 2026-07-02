import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { createSession } from '@/lib/session'
import { createPercentageDiscountCode } from '@/lib/shopify/discounts'
import crypto from 'crypto'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    
    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Name, email, and password required' }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Run in transaction or sequentially
    // 1. Create User
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'INFLUENCER'
      }
    })

    // 2. Create Influencer Record
    const influencer = await prisma.influencer.create({
      data: {
        name,
        email,
      }
    })

    // 3. Generate a unique discount code
    // Example: BN49-AMAN-A1B2
    const namePrefix = name.substring(0, 4).toUpperCase().replace(/[^A-Z]/g, '')
    const randomSuffix = crypto.randomBytes(2).toString('hex').toUpperCase()
    const discountCode = `BN49-${namePrefix}-${randomSuffix}`

    // 4. Try to create the code in Shopify
    // We wrap this in a try-catch so the signup doesn't completely fail if Shopify env vars are missing
    let shopifyCodeCreated = false
    try {
      if (process.env.SHOPIFY_ADMIN_ACCESS_TOKEN && process.env.SHOPIFY_SHOP_DOMAIN) {
        await createPercentageDiscountCode({
          title: `Influencer Code: ${discountCode}`,
          code: discountCode,
          percentage: 15 // 15% off by default
        })
        shopifyCodeCreated = true
      } else {
        console.warn("Skipping Shopify discount creation because SHOPIFY_ADMIN_ACCESS_TOKEN is missing")
      }
    } catch (shopifyError) {
      console.error("Failed to create Shopify discount code:", shopifyError)
      // We will still proceed with creating the code locally for now
    }

    // 5. Create InfluencerCode in DB
    await prisma.influencerCode.create({
      data: {
        influencerId: influencer.id,
        code: discountCode,
        commissionRate: 15.0 // 15% commission default
      }
    })

    // 6. Create session payload
    const sessionPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name
    }

    const token = await createSession(sessionPayload)

    const response = NextResponse.json({ 
      success: true, 
      role: user.role,
      shopifyCodeCreated
    }, { status: 200 })
    
    // Set cookie
    response.cookies.set({
      name: 'auth_session',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    return response
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
