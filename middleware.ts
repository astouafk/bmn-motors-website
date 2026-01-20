// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirections 301
  const redirects: Record<string, string> = {
    '/vehicules': '/voitures-location-vente-dakar',
    '/rentals': '/location-voiture-luxe-dakar',
    '/experience': '/notre-experience',
  }

  // Redirection pour les véhicules individuels
  if (pathname.startsWith('/vehicules/')) {
    const slug = pathname.replace('/vehicules/', '')
    return NextResponse.redirect(
      new URL(`/voitures/${slug}`, request.url),
      { status: 301 }
    )
  }

  // Redirection simple
  if (redirects[pathname]) {
    return NextResponse.redirect(
      new URL(redirects[pathname], request.url),
      { status: 301 }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/vehicules/:path*',
    '/rentals',
    '/experience',
  ],
}