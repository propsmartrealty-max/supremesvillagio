import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Extract country from Cloudflare/Vercel Edge headers (fallback to 'IN' for local dev)
  const country = request.geo?.country || request.headers.get('cf-ipcountry') || request.headers.get('x-vercel-ip-country') || 'IN';

  // Determine currency based on HNI/NRI target regions
  let currency = 'INR';
  if (['US', 'CA'].includes(country)) {
    currency = 'USD';
  } else if (['AE', 'SA', 'QA', 'OM', 'BH', 'KW'].includes(country)) {
    currency = 'AED'; // Middle East NRIs
  } else if (['GB'].includes(country)) {
    currency = 'GBP'; // UK NRIs
  } else if (['SG', 'MY'].includes(country)) {
    currency = 'SGD'; // Southeast Asia
  }

  // If the user is from UAE, US, UK, Singapore, Australia, Canada etc., flag them as NRI
  const isNRI = ['AE', 'US', 'GB', 'SG', 'AU', 'CA'].includes(country);

  // Clone the request headers and append our custom geo headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-country', country);
  requestHeaders.set('x-is-nri', isNRI ? 'true' : 'false');
  requestHeaders.set('x-user-currency', currency);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set cookies for frontend components to consume seamlessly without React hydration errors
  response.cookies.set('user-country', country, { maxAge: 86400, path: '/' });
  response.cookies.set('user-currency', currency, { maxAge: 86400, path: '/' });
  response.cookies.set('nri_status', isNRI ? 'true' : 'false', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });

  // Add custom headers to the response so backend APIs/analytics can track the geo-source
  response.headers.set('x-user-currency', currency);
  response.headers.set('x-user-country', country);
  response.headers.set('x-is-nri', isNRI ? 'true' : 'false');

  return response;
}

// Only run proxy on the main routes, ignore static files, API routes, and images to save compute
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.*|merchant-feed.*|llms.txt|robots.txt).*)',
  ],
};
