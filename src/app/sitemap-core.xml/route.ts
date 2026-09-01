export const dynamic = 'force-static';
export async function GET() {
  const baseUrl = 'https://www.supremesvillagio.com';
  const lastModified = new Date().toISOString();

  const corePages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/supreme-villagio-rera', priority: '1.0', changefreq: 'weekly' },
    { url: '/supreme-villagio/price', priority: '1.0', changefreq: 'weekly' },
    { url: '/supreme-villagio/4-bhk-villas', priority: '0.95', changefreq: 'weekly' },
    { url: '/supreme-villagio/5-bhk-villas', priority: '0.95', changefreq: 'weekly' },
    { url: '/supreme-villagio/townhouses', priority: '0.95', changefreq: 'weekly' },
    { url: '/supreme-villagio/floor-plans', priority: '0.95', changefreq: 'weekly' },
    { url: '/supreme-villagio/location', priority: '0.9', changefreq: 'weekly' },
    { url: '/supreme-villagio/investment', priority: '0.9', changefreq: 'weekly' },
    { url: '/supreme-villagio/phase-1', priority: '0.9', changefreq: 'weekly' },
    { url: '/supreme-villagio/phase-2', priority: '0.9', changefreq: 'weekly' },
    { url: '/supreme-villagio/phase-3', priority: '0.9', changefreq: 'weekly' },
    { url: '/supreme-villagio-vs-paranjape-forest-trails', priority: '0.85', changefreq: 'monthly' },
    { url: '/somatane-vs-hinjewadi', priority: '0.85', changefreq: 'monthly' },
    { url: '/villas-in-somatane', priority: '0.9', changefreq: 'weekly' },
    { url: '/talegaon-luxury-villas', priority: '0.9', changefreq: 'weekly' },
    { url: '/villas-near-mumbai-pune-expressway', priority: '0.9', changefreq: 'weekly' },
    { url: '/supreme-villagio/vision', priority: '0.8', changefreq: 'monthly' },
    { url: '/supreme-villagio/architecture', priority: '0.8', changefreq: 'monthly' },
    { url: '/supreme-villagio/residences', priority: '0.8', changefreq: 'monthly' },
    { url: '/supreme-villagio/amenities', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'monthly' },
    { url: '/terms', priority: '0.3', changefreq: 'monthly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${corePages.map(page => {
    const pageUrl = `${baseUrl}${page.url}`;
    return `
    <url>
      <loc>${pageUrl}</loc>
      <xhtml:link rel="alternate" hreflang="en-US" href="${pageUrl}" />
      <xhtml:link rel="alternate" hreflang="en-GB" href="${pageUrl}" />
      <xhtml:link rel="alternate" hreflang="en-AE" href="${pageUrl}" />
      <xhtml:link rel="alternate" hreflang="en-IN" href="${pageUrl}" />
      <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl}" />
      <image:image>
        <image:loc>https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg</image:loc>
        <image:title>Supreme Villagio Somatane</image:title>
      </image:image>
      <lastmod>${lastModified}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
    `;
  }).join('')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
