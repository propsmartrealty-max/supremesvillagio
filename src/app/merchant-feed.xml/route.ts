export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.supremesvillagio.com';
  const lastModified = new Date().toISOString();

  const inventoryPages = [
    {
      url: '/supreme-villagio/townhouses',
      title: '4 BHK Luxury Townhouses | Supreme Villagio Somatane Pune',
      priority: '0.95',
      changefreq: 'weekly',
    },
    {
      url: '/supreme-villagio/4-bhk-villas',
      title: '4 BHK Luxury Twin Villas | Supreme Villagio Somatane Pune',
      priority: '0.95',
      changefreq: 'weekly',
    },
    {
      url: '/supreme-villagio/5-bhk-villas',
      title: '5 BHK Grand Presidential Villas | Supreme Villagio Somatane Pune',
      priority: '0.95',
      changefreq: 'weekly',
    },
    {
      url: '/supreme-villagio/phase-3',
      title: 'Phase 3 Hillside Villas Launch | Supreme Villagio Somatane',
      priority: '0.95',
      changefreq: 'weekly',
    },
    {
      url: '/supreme-villagio/possession',
      title: 'Phase 1 & 2 Ready OC Handed Over Residences | Supreme Villagio',
      priority: '0.95',
      changefreq: 'weekly',
    },
    {
      url: '/supreme-villagio/price',
      title: 'Official Price List & Cost Sheets 2026 | Supreme Villagio',
      priority: '1.0',
      changefreq: 'daily',
    },
    {
      url: '/supreme-villagio/resale',
      title: 'Resale Villas & Ready Possession Units | Supreme Villagio',
      priority: '0.95',
      changefreq: 'weekly',
    },
    {
      url: '/supreme-villagio/contact',
      title: 'Official Sales Office & Direct Developer Desk | Supreme Villagio',
      priority: '1.0',
      changefreq: 'daily',
    },
    {
      url: '/supreme-villagio/floor-plans',
      title: 'Architectural Floor Plans & Layout Blueprints | Supreme Villagio',
      priority: '0.95',
      changefreq: 'weekly',
    },
    {
      url: '/supreme-villagio/amenities',
      title: '18,500 Sq.Ft. Club Villagio & 16-Acre Amenities | Supreme Villagio',
      priority: '0.95',
      changefreq: 'weekly',
    },
    {
      url: '/supreme-villagio-rera',
      title: 'MahaRERA Certifications P52100046867 | Supreme Villagio',
      priority: '1.0',
      changefreq: 'weekly',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${inventoryPages
    .map((p) => {
      const pageUrl = `${baseUrl}${p.url}`;
      return `
  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-IN" href="${pageUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl}" />
    <image:image>
      <image:loc>https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg</image:loc>
      <image:title>${p.title}</image:title>
    </image:image>
  </url>`;
    })
    .join('')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
