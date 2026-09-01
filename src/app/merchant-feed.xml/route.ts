export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.supremesvillagio.com';

  const properties = [
    {
      id: 'SUP-VIL-4BHK-TH',
      title: '4 BHK Luxury Townhouse | Supreme Villagio Somatane Pune',
      description: 'Ultra-luxury 4 BHK Townhouse at Supreme Villagio Somatane. 2,200 – 2,400 sq.ft. carpet area, G+2 layout, private garden, and ready 18,500 sq.ft. Club Villagio.',
      link: `${baseUrl}/supreme-villagio/townhouses`,
      price: '28900000.00 INR',
      typology: '4 BHK Townhouse',
    },
    {
      id: 'SUP-VIL-4BHK-TW',
      title: '4 BHK Luxury Twin Villa | Supreme Villagio Somatane Pune',
      description: 'Exclusive 4 BHK Twin Villa at Supreme Villagio. 2,600 – 2,900 sq.ft. carpet area, 3-side open landscaped private lawn, double-height living room.',
      link: `${baseUrl}/supreme-villagio/4-bhk-villas`,
      price: '34500000.00 INR',
      typology: '4 BHK Twin Villa',
    },
    {
      id: 'SUP-VIL-5BHK-PR',
      title: '5 BHK Grand Presidential Villa | Supreme Villagio Somatane Pune',
      description: 'Bespoke 5 BHK Presidential Hillside Villa at Supreme Villagio. 3,400 – 3,900 sq.ft. carpet area, private elevator provision, 3 covered car bays.',
      link: `${baseUrl}/supreme-villagio/5-bhk-villas`,
      price: '48500000.00 INR',
      typology: '5 BHK Presidential Villa',
    },
    {
      id: 'SUP-VIL-PHASE-3',
      title: 'Phase 3 Hillside Villas Launch | Supreme Villagio Somatane',
      description: 'Newly launched Phase 3 Hillside Villas under active construction. MahaRERA Reg P52100055048. Milestone-linked payment plans available.',
      link: `${baseUrl}/supreme-villagio/phase-3`,
      price: '28900000.00 INR',
      typology: 'Phase 3 Hillside Villas',
    },
    {
      id: 'SUP-VIL-PHASE-1-2',
      title: 'Phase 1 & 2 Handed Over Residences | Supreme Villagio Somatane',
      description: '100% Completed luxury villas with full Occupation Certificate (OC) received. Immediate handover and active community.',
      link: `${baseUrl}/supreme-villagio/possession`,
      price: '34500000.00 INR',
      typology: 'Phase 1 & 2 Completed Villas',
    },
  ];

  const itemsXml = properties
    .map(
      (p) => `
    <item>
      <g:id>${p.id}</g:id>
      <g:title><![CDATA[${p.title}]]></g:title>
      <g:description><![CDATA[${p.description}]]></g:description>
      <g:link>${p.link}</g:link>
      <g:image_link>https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      <g:price>${p.price}</g:price>
      <g:brand>Supreme Universal</g:brand>
      <g:google_product_category>Home &amp; Garden &gt; Real Estate</g:google_product_category>
      <g:custom_label_0>${p.typology}</g:custom_label_0>
    </item>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Supreme Villagio Luxury Real Estate Portfolio</title>
    <link>${baseUrl}</link>
    <description>Ultra-Premium 4 &amp; 5 BHK Villas, Townhouses, and Gated Estates in Pune</description>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
