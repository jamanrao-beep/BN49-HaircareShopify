import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySession } from '@/lib/session'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  
  // Exclude static files and api routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico') {
    return NextResponse.next()
  }

  const sessionCookie = req.cookies.get('auth_session')?.value
  const session = await verifySession(sessionCookie)
  const isLoggedIn = !!session

  // Public routes (Login & Signup)
  if (pathname === '/' || pathname === '/influencer/signup') {
    if (isLoggedIn) {
      const role = session.role
      if (role === 'INFLUENCER') return NextResponse.redirect(new URL('/influencer', req.url))
      if (role === 'ADMIN') return NextResponse.redirect(new URL('/admin', req.url))
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
    return NextResponse.next()
  }

  // Protected routes
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const role = session.role

  if (pathname.startsWith('/influencer') && role !== 'INFLUENCER' && role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/unauthorized', req.url))
  }
  
  if (pathname.startsWith('/admin') && role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/unauthorized', req.url))
  }

  return NextResponse.next()
}
