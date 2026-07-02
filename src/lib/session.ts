import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const secretKey = process.env.SESSION_SECRET || 'super-secret-fallback-key-change-in-production'
const encodedKey = new TextEncoder().encode(secretKey)

export async function createSession(payload: any) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
    
  return session
}

export async function verifySession(session: string | undefined = '') {
  try {
    if (!session) return null
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    return null
  }
}
