import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://www.clarity.ms https://*.clarity.ms;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https://cdn.supremeuniversal.com https://images.unsplash.com https://www.supremeuniversal.com https://www.facebook.com https://*.cloudfront.net https://d66htbxvzotmo.cloudfront.net https://*.google-analytics.com https://*.googletagmanager.com;
  font-src 'self' data: https://fonts.gstatic.com;
  media-src 'self' blob: https://d66htbxvzotmo.cloudfront.net https://cdn.supremeuniversal.com;
  connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google-analytics.com https://a.clarity.ms https://*.clarity.ms https://cdn.supremeuniversal.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  frame-src 'self' https://www.google.com https://maps.google.com https://*.google.com;
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.supremeuniversal.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.supremeuniversal.com',
      },
      {
        protocol: 'https',
        hostname: 'd66htbxvzotmo.cloudfront.net',
      },
    ],
  },
  async redirects() {
    return [
      // Single-L Phonetic Typo Aliases
      { source: '/supreme-vilagio', destination: '/', permanent: true },
      { source: '/supreme-vilagio-somatane', destination: '/', permanent: true },
      { source: '/supreme-vilagio-pune', destination: '/', permanent: true },
      { source: '/vilagio', destination: '/', permanent: true },
      { source: '/vilagio-somatane', destination: '/', permanent: true },
      { source: '/vilagio-pune', destination: '/', permanent: true },
      { source: '/supreme-vilagio/price', destination: '/supreme-villagio/price', permanent: true },
      { source: '/supreme-vilagio/contact', destination: '/supreme-villagio/contact', permanent: true },
      { source: '/supreme-vilagio/floor-plans', destination: '/supreme-villagio/floor-plans', permanent: true },
      { source: '/supreme-vilagio/reviews', destination: '/supreme-villagio/reviews', permanent: true },
      { source: '/supreme-vilagio/resale', destination: '/supreme-villagio/resale', permanent: true },
      // High-Intent Shortcuts
      { source: '/price', destination: '/supreme-villagio/price', permanent: true },
      { source: '/cost-sheet', destination: '/supreme-villagio/price', permanent: true },
      { source: '/rera', destination: '/supreme-villagio-rera', permanent: true },
      { source: '/floorplans', destination: '/supreme-villagio/floor-plans', permanent: true },
      { source: '/reviews', destination: '/supreme-villagio/reviews', permanent: true },
      { source: '/brochure', destination: '/supreme-villagio/brochure', permanent: true },
      { source: '/location', destination: '/supreme-villagio/location', permanent: true },
      { source: '/amenities', destination: '/supreme-villagio/amenities', permanent: true },
      { source: '/lodha-belmondo', destination: '/supreme-villagio-vs-lodha-belmondo', permanent: true },
      { source: '/forest-trails', destination: '/supreme-villagio-vs-paranjape-forest-trails', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
          {
            key: 'Cache-Tag',
            value: 'supreme-villagio, real-estate, somatane-villas, property-pricing',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
