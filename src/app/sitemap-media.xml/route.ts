export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.supremesvillagio.com';

  const mediaItems = [
    {
      pageUrl: '/',
      imageUrl: `${baseUrl}/images/hero-desktop.webp`,
      title: 'Supreme Villagio Somatane Luxury 4 & 5 BHK Villas Exterior Render',
      caption: 'Panoramic view of Supreme Villagio 16-acre gated villa community in Somatane Pune off Mumbai-Pune Expressway',
    },
    {
      pageUrl: '/',
      imageUrl: `${baseUrl}/images/hero-mobile.webp`,
      title: 'Supreme Villagio Luxury Villas & Townhouses Pune',
      caption: 'Entrance facade and hillside landscape of Supreme Villagio Somatane',
    },
    {
      pageUrl: '/supreme-villagio/floor-plans',
      imageUrl: `${baseUrl}/images/floorplan_4bhk_1784120309412.webp`,
      title: 'Supreme Villagio 4 BHK Luxury Twin Villa Floor Plan Blueprint',
      caption: '2,600 to 2,900 sq.ft. carpet area blueprint featuring double-height living room and private 3-side garden',
    },
    {
      pageUrl: '/supreme-villagio/floor-plans',
      imageUrl: `${baseUrl}/images/floorplan_5bhk_1784120331220.webp`,
      title: 'Supreme Villagio 5 BHK Grand Presidential Villa Floor Plan Blueprint',
      caption: '3,400 to 3,900 sq.ft. presidential villa layout with private elevator shaft, terrace lounge, and 3 car bays',
    },
    {
      pageUrl: '/supreme-villagio/floor-plans',
      imageUrl: `${baseUrl}/images/floorplan_rowhouse_1784120349629.webp`,
      title: 'Supreme Villagio 4 BHK Townhouse Floor Plan Layout',
      caption: '2,200 to 2,400 sq.ft. G+2 luxury townhouse architectural layout with private terrace and landscaped backyard',
    },
    {
      pageUrl: '/supreme-villagio/amenities',
      imageUrl: 'https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg',
      title: 'Club Villagio 18,500 Sq.Ft. Operational Clubhouse',
      caption: 'Finished and operational grand lifestyle clubhouse with Olympic-length pool, gymnasium, and squash courts',
    },
    {
      pageUrl: '/supreme-villagio-rera',
      imageUrl: 'https://cdn.supremeuniversal.com/media/SupremeVillagioIP52100046867_cwrz1A.jpg',
      title: 'Supreme Villagio Phase 1 MahaRERA Certificate P52100046867',
      caption: 'Verified Government MahaRERA QR Certificate for Phase 1 with 100% Occupation Certificate (OC) granted',
    },
    {
      pageUrl: '/supreme-villagio-rera',
      imageUrl: 'https://cdn.supremeuniversal.com/media/SupremeVillagioIIP52100049506_zdy3oY.jpg',
      title: 'Supreme Villagio Phase 2 MahaRERA Certificate P52100049506',
      caption: 'Verified Government MahaRERA QR Certificate for Phase 2 with full OC received and families residing',
    },
    {
      pageUrl: '/supreme-villagio-rera',
      imageUrl: 'https://cdn.supremeuniversal.com/media/SUPREMEVILLAGIOIIIP52100055048_6dYFb3.jpg',
      title: 'Supreme Villagio Phase 3 MahaRERA Certificate P52100055048',
      caption: 'Official MahaRERA registration for Phase 3 Hillside Villas completion Dec 2028',
    },
    {
      pageUrl: '/supreme-villagio/master-plan',
      imageUrl: 'https://cdn.supremeuniversal.com/media/Supreme-Villagio--Desktop-Banner-3_IOrvdm.jpg',
      title: 'Supreme Villagio 16-Acre Master Plan & Landscape Design',
      caption: 'Site Concepts International Singapore master plan layout for 16-acre boutique luxury estate in Pune West',
    },
    {
      pageUrl: '/supreme-villagio/4-bhk-villas',
      imageUrl: 'https://cdn.supremeuniversal.com/images/villagio-render.jpg',
      title: 'Supreme Villagio 4 BHK Luxury Twin Villa Elevation',
      caption: 'Contemporary architectural twin villa with European stone cladding and landscaped garden boundary',
    },
    {
      pageUrl: '/supreme-villagio/5-bhk-villas',
      imageUrl: 'https://cdn.supremeuniversal.com/media/Q9b1g7_Supreme-Villagio-Logo.svg',
      title: 'Supreme Villagio Presidential Residences Brand Mark',
      caption: 'Official emblem for Supreme Villagio ultra-luxury residential collection',
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
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
