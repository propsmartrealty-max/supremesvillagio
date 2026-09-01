export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.supremesvillagio.com';

  const mediaItems = [
    {
      pageUrl: '/',
      imageUrl: 'https://cdn.supremeuniversal.com/media/Q9b1g7_Supreme-Villagio-Logo.svg',
      title: 'Supreme Villagio Official Logo',
      caption: 'Official logo of Supreme Villagio Luxury Villas & Townhouses Somatane Pune',
    },
    {
      pageUrl: '/',
      imageUrl: 'https://cdn.supremeuniversal.com/media/Supreme-Villagio--Desktop-Banner-3_IOrvdm.jpg',
      title: 'Supreme Villagio 4 & 5 BHK Luxury Gated Community',
      caption: 'Panoramic architectural view of Supreme Villagio in Somatane, Pune',
    },
    {
      pageUrl: '/supreme-villagio/amenities',
      imageUrl: 'https://cdn.supremeuniversal.com/media/1Xi8pH_seologo.jpg',
      title: '18,500 Sq.Ft. Club Villagio Clubhouse',
      caption: 'World-class operational Club Villagio amenities at Supreme Villagio Somatane',
    },
    {
      pageUrl: '/supreme-villagio/4-bhk-villas',
      imageUrl: 'https://cdn.supremeuniversal.com/media/SupremeVillagioIP52100046867_cwrz1A.jpg',
      title: 'Supreme Villagio 4 BHK Luxury Twin Villa Elevation',
      caption: '4 BHK luxury twin villa architectural blueprint and private 3-side garden',
    },
    {
      pageUrl: '/supreme-villagio/5-bhk-villas',
      imageUrl: 'https://cdn.supremeuniversal.com/media/SupremeVillagioIIP52100049506_zdy3oY.jpg',
      title: 'Supreme Villagio 5 BHK Grand Presidential Villa',
      caption: '5 BHK hillside presidential villa with private elevator and 3 covered car bays',
    },
    {
      pageUrl: '/supreme-villagio/master-plan',
      imageUrl: 'https://cdn.supremeuniversal.com/media/SUPREMEVILLAGIOIIIP52100055048_6dYFb3.jpg',
      title: 'Supreme Villagio 16-Acre Master Plan Layout',
      caption: 'Site Concepts International Singapore master plan layout for Supreme Villagio',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${mediaItems
    .map(
      (item) => `
    <url>
      <loc>${baseUrl}${item.pageUrl}</loc>
      <image:image>
        <image:loc>${item.imageUrl}</image:loc>
        <image:title><![CDATA[${item.title}]]></image:title>
        <image:caption><![CDATA[${item.caption}]]></image:caption>
      </image:image>
    </url>
    `
    )
    .join('')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
