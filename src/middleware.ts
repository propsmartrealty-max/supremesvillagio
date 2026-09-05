import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchCrawler = /Googlebot|Bingbot|Applebot|YandexBot|DuckDuckBot|Baiduspider|GPTBot|PerplexityBot|Claude-Web|Google-Extended/i.test(userAgent);

  // Extract country from Cloudflare/Vercel Edge headers (fallback to 'IN' for local dev)
  const country = request.headers.get('cf-ipcountry') || request.headers.get('x-vercel-ip-country') || 'IN';

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
  requestHeaders.set('x-is-crawler', isSearchCrawler ? 'true' : 'false');

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Only set cookies for human visitors to keep responses ultra-lean and maximally cacheable for Googlebot
  if (!isSearchCrawler) {
    response.cookies.set('user-country', country, { maxAge: 86400, path: '/' });
    response.cookies.set('user-currency', currency, { maxAge: 86400, path: '/' });
    response.cookies.set('nri_status', isNRI ? 'true' : 'false', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
  }

  // Add Cloudflare Early Hints (HTTP 103) & preconnect Link headers
  response.headers.set(
    'Link',
    '<https://d66htbxvzotmo.cloudfront.net>; rel="preconnect"; crossorigin, <https://cdn.supremeuniversal.com>; rel="preconnect"; crossorigin, <https://fonts.googleapis.com>; rel="preconnect", <https://fonts.gstatic.com>; rel="preconnect"; crossorigin'
  );

  // Global Edge SEO and telemetry headers
  response.headers.set('x-user-currency', currency);
  response.headers.set('x-user-country', country);
  response.headers.set('x-is-nri', isNRI ? 'true' : 'false');
  response.headers.set('x-robots-tag', 'all, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  response.headers.set('x-edge-seo-engine', 'cloudflare-active');

  return response;
}

// Only run proxy on the main routes, ignore static files, API routes, and images to save compute
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.*|merchant-feed.*|llms.txt|robots.txt).*)',
  ],
};
