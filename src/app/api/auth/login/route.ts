import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { createSession } from '@/lib/session'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user || !user.password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const passwordsMatch = await bcrypt.compare(password, user.password)
    
    if (!passwordsMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Create session payload
    const sessionPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name
    }

    const token = await createSession(sessionPayload)

    const response = NextResponse.json({ success: true, role: user.role }, { status: 200 })
    
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
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
