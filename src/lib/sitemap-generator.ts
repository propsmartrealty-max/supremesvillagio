import { getAllSeoSlugStrings } from "@/lib/seo-data";

export function generateSiloSitemap(id: number): Response {
  const baseUrl = "https://www.supremesvillagio.com";
  const lastModified = new Date().toISOString();
  
  const allSlugs = getAllSeoSlugStrings();
  const CHUNK_SIZE = 10000;
  const startIndex = (id - 1) * CHUNK_SIZE;
  const endIndex = startIndex + CHUNK_SIZE;
  
  const chunkedSlugs = allSlugs.slice(startIndex, endIndex);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${chunkedSlugs.map(slugArray => {
    const pageUrl = `${baseUrl}/supreme-villagio/${slugArray.join("/")}`;
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
        <image:title>Supreme Villagio Programmatic Landing Page</image:title>
      </image:image>
      <lastmod>${lastModified}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    `;
  }).join("")}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate",
    },
  });
}
