import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Home, ShieldCheck, ArrowRight, Check, MapPin, Compass, Trophy, Building, Trees } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Bungalows in Pune [4 & 5 BHK Gated Estates • Ready OC from ₹2.89 Cr*]',
  description: 'Explore Pune\'s most luxurious gated bungalows at Supreme Villagio Somatane. Independent 4 & 5 BHK twin bungalows, 3-side open lawns, 18,500 sq.ft. Club Villagio & 75 mins to Mumbai. Phase 1 & 2 OC Received. Download 2026 Price List & Brochure.',
  keywords: [
    'luxury bungalows in pune',
    'bungalows in pune',
    'gated bungalows pune',
    'twin bungalows pune',
    '4 bhk bungalows in pune',
    '5 bhk bungalows in pune',
    'supreme villagio bungalows',
    'luxury villas pune for mumbai buyers',
    'weekend bungalows near mumbai pune expressway',
    'somatane bungalows'
  ],
  alternates: {
    canonical: 'https://www.supremesvillagio.com/luxury-bungalows-pune',
  },
  openGraph: {
    title: 'Luxury Bungalows in Pune [4 & 5 BHK Gated Estates • Ready OC from ₹2.89 Cr*]',
    description: 'Ultra-premium 4 & 5 BHK gated twin bungalows and independent estates in Pune West. 3 mins from Mumbai-Pune Expressway.',
    url: 'https://www.supremesvillagio.com/luxury-bungalows-pune',
    type: 'website',
  },
};

const bungalowSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Luxury Bungalows in Pune — Supreme Villagio',
  'description': 'Ultra-luxury 4 & 5 BHK gated twin bungalows and hillside estates in Somatane, Pune with 3-side open private lawns, 18,500 sq.ft. clubhouse, and 3-min Mumbai-Pune Expressway access.',
  'url': 'https://www.supremesvillagio.com/luxury-bungalows-pune',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Survey No. 44, Near Mumbai-Pune Expressway, Somatane Phata',
    'addressLocality': 'Somatane, Talegaon Dabhade, Pune',
    'postalCode': '410506',
    'addressRegion': 'Maharashtra',
    'addressCountry': 'IN'
  },
  'offers': {
    '@type': 'AggregateOffer',
    'priceCurrency': 'INR',
    'lowPrice': '28900000',
    'highPrice': '65000000',
    'offerCount': '210',
    'availability': 'https://schema.org/InStock'
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Which is the most luxurious bungalow project in Pune?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Supreme Villagio in Somatane is widely recognized as Pune’s benchmark luxury bungalow community. Spread across 16 scenic hillside acres at 616m elevation, it offers 4 & 5 BHK gated twin bungalows, 4 BHK townhouses, 65% open green landscapes by Site Concepts Singapore, and the operational 18,500 sq.ft. Club Villagio.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Why is Supreme Villagio the preferred bungalow choice for Mumbai buyers?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Located just 3 minutes from the Mumbai-Pune Expressway toll gate, Supreme Villagio provides seamless signal-free access to Mumbai (75–85 minutes to Navi Mumbai & Atal Setu MTHL). Mumbai buyers choose it for pristine hill-station air (AQI < 50), scenic Sahyadri mountain horizons, and substantially greater carpet area and land ownership compared to high-density Mumbai or Lonavala properties.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What are the prices of luxury bungalows in Pune at Supreme Villagio?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Prices start from ₹2.89 Cr* for 4 BHK Luxury Townhouses (2,200 – 2,400 sq.ft.), ₹3.45 Cr* for 4 BHK Twin Bungalows with 3-side private lawns (2,600 – 2,900 sq.ft.), and ₹4.85 Cr* for 5 BHK Grand Presidential Hillside Bungalows with private elevators (3,400 – 3,900 sq.ft.).'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is Supreme Villagio MahaRERA approved and ready for possession?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Phase 1 (MahaRERA: P52100046867) and Phase 2 (MahaRERA: P52100049506) are 100% completed with Occupation Certificate (OC) received and handed over to homeowners. Phase 3 (MahaRERA: P52100055048) is under active construction with statutory completion scheduled for December 31, 2028.'
      }
    }
  ]
};

export default function LuxuryBungalowsPunePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bungalowSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Pune’s Premier Luxury Bungalow Benchmark
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Luxury Bungalows in <span className="text-[#E15E3F] italic">Pune</span> — Supreme Villagio
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/90 max-w-4xl mb-12 leading-relaxed">
          While standalone bungalows in central Pune (Prabhat Road, Koregaon Park, Aundh) suffer from traffic congestion, lack of modern amenities, and steep redevelopment costs, master-planned gated twin bungalows at <strong>Supreme Villagio Somatane</strong> redefine horizontal luxury. Set across 16 lush hillside acres at 616m elevation, it combines independent land ownership with the world-class security and recreation of an 18,500 sq.ft. operational clubhouse.
        </p>

        {/* Mumbai Buyer Highlight Banner */}
        <div className="bg-[#1C2C25] border border-[#E15E3F]/40 p-8 rounded-sm mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E15E3F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-[#E15E3F]/20 text-[#E15E3F] text-xs font-bold uppercase tracking-widest mb-3 rounded">
                Preferred Destination for Mumbai &amp; Pune Buyers
              </span>
              <h2 className="text-2xl md:text-3xl font-heading text-white mb-2">
                Just 3 Minutes from Mumbai–Pune Expressway Toll Gateway
              </h2>
              <p className="text-sm text-[#E4E2D3]/80 font-light max-w-2xl leading-relaxed">
                Seamless signal-free access: 75–85 minutes to Navi Mumbai and Atal Setu (MTHL), 30 minutes to Lonavala, and 20 minutes to Hinjawadi IT Park. Experience pure mountain air (AQI &lt; 50) and majestic Sahyadri views without the chaotic pollution of metropolitan centers.
              </p>
            </div>
            <Link
              href="/villas-near-mumbai-pune-expressway"
              className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-6 py-3 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 shrink-0 flex items-center gap-2"
            >
              Mumbai Buyer Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Core Bungalow Typologies */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading text-white mb-8 border-b border-[#E4E2D3]/15 pb-4">
            Curated Bungalow Configurations &amp; Floor Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 4 BHK Townhouse */}
            <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#E15E3F] font-bold uppercase tracking-widest mb-2 block">G+2 Vertical Living</span>
                <h3 className="text-xl font-heading mb-2">4 BHK Luxury Townhouses</h3>
                <p className="text-lg font-heading text-[#E15E3F] mb-4">Starting from ₹2.89 Cr*</p>
                <ul className="space-y-2 text-xs text-[#E4E2D3]/80 font-light mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Carpet Area: 2,200 – 2,400 Sq. Ft.</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Private Ground Lawn &amp; Sky Lounge</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 2 Covered Car Parking Bays</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Double-Height Volumetric Living Room</li>
                </ul>
              </div>
              <Link
                href="/supreme-villagio/townhouses"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E15E3F] hover:underline"
              >
                Townhouse Blueprint <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 BHK Twin Bungalow */}
            <div className="bg-[#1C2C25] border border-[#E15E3F]/40 p-8 rounded-sm shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2 block">3-Side Open Gardens</span>
                <h3 className="text-xl font-heading mb-2">4 BHK Luxury Twin Bungalows</h3>
                <p className="text-lg font-heading text-[#E15E3F] mb-4">Starting from ₹3.45 Cr*</p>
                <ul className="space-y-2 text-xs text-[#E4E2D3]/80 font-light mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Carpet Area: 2,600 – 2,900 Sq. Ft.</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 3-Side Peripheral Landscaped Lawn</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Master Suite with Walk-In Dressing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Double-Height 20+ Ft Living Ceilings</li>
                </ul>
              </div>
              <Link
                href="/supreme-villagio/4-bhk-villas"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E15E3F] hover:underline"
              >
                Twin Bungalow Blueprint <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 5 BHK Presidential Bungalow */}
            <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-2 block">Presidential Hillside</span>
                <h3 className="text-xl font-heading mb-2">5 BHK Grand Presidential Bungalows</h3>
                <p className="text-lg font-heading text-[#E15E3F] mb-4">Starting from ₹4.85 Cr*</p>
                <ul className="space-y-2 text-xs text-[#E4E2D3]/80 font-light mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Carpet Area: 3,400 – 3,900 Sq. Ft.</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Private Elevator Provision &amp; 3 Car Bays</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Unobstructed Sahyadri Mountain Views</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Private Staff Quarters &amp; Service Entry</li>
                </ul>
              </div>
              <Link
                href="/supreme-villagio/5-bhk-villas"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E15E3F] hover:underline"
              >
                Presidential Blueprint <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Comparison: Standalone Central Pune vs Supreme Villagio */}
        <div className="bg-[#1C2C25] p-8 md:p-12 border border-[#E4E2D3]/15 rounded-sm mb-16">
          <h2 className="text-2xl font-heading text-white mb-6">
            Why Discerning Buyers Choose Supreme Villagio over Central Pune Standalone Plots
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[#E4E2D3]/80 border-collapse">
              <thead>
                <tr className="border-b border-[#E4E2D3]/20 text-[#E15E3F] uppercase text-xs tracking-wider">
                  <th className="py-3 px-4">Feature / Parameter</th>
                  <th className="py-3 px-4">Supreme Villagio (Somatane)</th>
                  <th className="py-3 px-4">Standalone Pune Bungalows</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E2D3]/10">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Community &amp; Security</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">16-Acre 24/7 Gated Multi-Tier Sanctuary</td>
                  <td className="py-3.5 px-4 text-stone/60">Standalone street-facing; requires private guards</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Clubhouse &amp; Amenities</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">18,500 Sq.Ft. Club Villagio (Ready &amp; Active)</td>
                  <td className="py-3.5 px-4 text-stone/60">No communal club; expensive personal upkeep</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Air Quality &amp; Environment</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">AQI &lt; 50 (Misty 616m Hillside Climate)</td>
                  <td className="py-3.5 px-4 text-stone/60">AQI 120–180 (Urban vehicular exhaust &amp; noise)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Mumbai Travel Time</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">3 mins to Expressway; 75 mins to Navi Mumbai</td>
                  <td className="py-3.5 px-4 text-stone/60">Requires navigating 45–60 mins of Pune city traffic</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">MahaRERA Regulatory Status</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">Phase 1 &amp; 2 OC Handed Over; Phase 3 Registered</td>
                  <td className="py-3.5 px-4 text-stone/60">Often unorganized title or complex inheritance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading text-white mb-8 border-b border-[#E4E2D3]/15 pb-4">
            Frequently Asked Questions by Luxury Bungalow Buyers
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-6 rounded-sm">
                <h3 className="text-lg font-heading text-white mb-2">{faq.name}</h3>
                <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Bar */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Schedule a Private Bungalow Tour</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Experience the completed Phase 1 &amp; 2 sample villas and operational clubhouse.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/supreme-villagio/price"
              className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
            >
              Get Cost Sheet <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/supreme-villagio-rera"
              className="border border-[#E4E2D3]/30 text-white font-bold px-6 py-4 text-xs uppercase tracking-widest hover:bg-white/10 transition-all shrink-0"
            >
              Verify MahaRERA
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
