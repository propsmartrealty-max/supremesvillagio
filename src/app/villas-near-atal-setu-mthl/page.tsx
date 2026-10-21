import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, Car, ShieldCheck, ArrowRight, Check, MapPin, Sparkles, Trophy, Trees, Clock, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Villas near Atal Setu (MTHL) | 75 Mins from Mumbai | Supreme Villagio',
  description: 'Explore ultra-luxury 4 & 5 BHK gated villas near Atal Setu (MTHL) corridor. Just 75 mins from South/Navi Mumbai via Expressway. Ready 18,500 sq.ft. clubhouse, private gardens, mountain views.',
  keywords: [
    'villas near atal setu',
    'villas near mthl',
    'luxury villas near mumbai',
    'weekend villas near mumbai pune expressway',
    'second homes near mumbai atal setu',
    'supreme villagio mumbai buyers',
    'luxury bungalows near mumbai',
    'villas in somatane for mumbai buyers'
  ],
  alternates: {
    canonical: 'https://www.supremesvillagio.com/villas-near-atal-setu-mthl',
  },
  openGraph: {
    title: 'Luxury Villas near Atal Setu (MTHL) | Supreme Villagio',
    description: '75-minute signal-free drive from Mumbai via Atal Setu. 4 & 5 BHK luxury hillside twin villas with private lawns.',
    url: 'https://www.supremesvillagio.com/villas-near-atal-setu-mthl',
    type: 'website',
  },
};

const mthlListingSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Luxury Villas near Atal Setu (MTHL) — Supreme Villagio',
  'description': '4 & 5 BHK luxury gated hillside villas and townhouses 75 minutes from Navi Mumbai and Atal Setu via the Mumbai-Pune Expressway.',
  'url': 'https://www.supremesvillagio.com/villas-near-atal-setu-mthl',
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

const mthlFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How far is Supreme Villagio from Mumbai via Atal Setu (MTHL)?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'With the opening of Atal Setu (Mumbai Trans Harbour Link), the drive from South Mumbai (Sewri) to Navi Mumbai is just 20 minutes, and the total drive to Supreme Villagio Somatane via the Mumbai-Pune Expressway takes only 75 to 85 minutes.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Why are Mumbai buyers choosing Supreme Villagio over Lonavala or Alibaug?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Unlike Lonavala or Alibaug which suffer from extreme monsoon humidity, isolated infrastructure, and lack of municipal amenities, Supreme Villagio offers 365-day luxury living with an operational 18,500 sq.ft. clubhouse, 24/7 multi-tier security, and proximity to major hospitals and schools.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What configurations and prices are available for Mumbai investors?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Supreme Villagio offers 4 BHK Luxury Townhouses starting from ₹2.89 Cr*, 4 BHK Twin Villas starting from ₹3.45 Cr*, and 5 BHK Grand Presidential Hillside Villas starting from ₹4.85 Cr*. Phase 1 & 2 have received full Occupation Certificates (OC).'
      }
    }
  ]
};

export default function VillasNearMthlPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mthlListingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mthlFaqSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Car className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Mumbai Luxury Gateway via Atal Setu
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Luxury Villas Near <span className="text-[#E15E3F] italic">Atal Setu (MTHL)</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3] max-w-4xl mb-12 leading-relaxed">
          The opening of <strong>Atal Setu (Mumbai Trans Harbour Link)</strong> has transformed the weekend living landscape for Mumbai and Navi Mumbai homeowners. In just <strong>75 to 85 signal-free minutes</strong> from South Mumbai and Navi Mumbai, you arrive at <strong>Supreme Villagio Somatane</strong> — an exclusive 16-acre hillside gated estate nestled at 616m elevation with pristine mountain air (AQI &lt; 50).
        </p>

        {/* Commute Benchmark Card */}
        <div className="bg-[#1C2C25] border border-[#E15E3F]/40 p-8 rounded-sm mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E15E3F]/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-heading text-white mb-6">
            The New Mumbai–Pune Commute Equation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-[#E15E3F] pl-4">
              <span className="text-xs text-gold uppercase tracking-wider block font-bold mb-1">South Mumbai (Sewri)</span>
              <p className="text-2xl font-heading text-white">80 Mins</p>
              <p className="text-xs text-stone mt-1">Via Atal Setu &amp; Mumbai-Pune Expressway</p>
            </div>
            <div className="border-l-2 border-[#E15E3F] pl-4">
              <span className="text-xs text-gold uppercase tracking-wider block font-bold mb-1">Navi Mumbai / Kharghar</span>
              <p className="text-2xl font-heading text-white">65 Mins</p>
              <p className="text-xs text-stone mt-1">Direct Expressway Toll Bypass</p>
            </div>
            <div className="border-l-2 border-[#E15E3F] pl-4">
              <span className="text-xs text-gold uppercase tracking-wider block font-bold mb-1">Expressway Toll Exit</span>
              <p className="text-2xl font-heading text-white">3 Mins</p>
              <p className="text-xs text-stone mt-1">Somatane Phata interchange</p>
            </div>
          </div>
        </div>

        {/* Comparison: Somatane vs Alibaug vs Lonavala */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-heading font-light mb-8 text-center md:text-left">
            Why Mumbai Elite Choose <span className="text-[#E15E3F] italic">Somatane</span> Over Traditional Hubs
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-[#E4E2D3]/15 text-sm">
              <thead>
                <tr className="bg-[#1C2C25] text-gold text-xs uppercase tracking-widest border-b border-[#E4E2D3]/15">
                  <th className="p-4">Lifestyle Metric</th>
                  <th className="p-4 bg-[#E15E3F]/10 text-white font-bold">Supreme Villagio (Somatane)</th>
                  <th className="p-4">Alibaug</th>
                  <th className="p-4">Lonavala / Khandala</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E2D3]/10">
                <tr>
                  <td className="p-4 font-medium text-white">Commute Reliability</td>
                  <td className="p-4 bg-[#E15E3F]/5 text-white font-semibold">100% Weather-Proof 6-Lane Expressway (75 mins)</td>
                  <td className="p-4 text-stone">Dependent on RORO / boat schedules &amp; rough sea cancellations</td>
                  <td className="p-4 text-stone">Heavy ghat traffic jams on monsoon weekends</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Amenities &amp; Management</td>
                  <td className="p-4 bg-[#E15E3F]/5 text-white font-semibold">Ready 18,500 sq.ft. Club Villagio + 5-Star Facility Management</td>
                  <td className="p-4 text-stone">High standalone caretaker costs; isolated plots</td>
                  <td className="p-4 text-stone">Aging unmanaged layouts with limited sports infrastructure</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Legal Transparency</td>
                  <td className="p-4 bg-[#E15E3F]/5 text-white font-semibold">MahaRERA Registered + OC Received on Phase 1 &amp; 2</td>
                  <td className="p-4 text-stone">Frequent CRZ &amp; agricultural land title risks</td>
                  <td className="p-4 text-stone">Gram Panchayat approvals with municipal water shortages</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Year-Round Livability</td>
                  <td className="p-4 bg-[#E15E3F]/5 text-white font-semibold">365 Days Mountain Climate (616m Altitude, AQI &lt; 50)</td>
                  <td className="p-4 text-stone">Oppressive coastal humidity &amp; salt corrosion</td>
                  <td className="p-4 text-stone">Severe dampness, leaks, and commercial tourist overcrowding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading text-white mb-2">Schedule Your Private VIP Villa Tour</h3>
            <p className="text-sm text-stone max-w-xl font-light">
              Experience the 18,500 sq.ft. clubhouse and inspect ready-to-move sample villas with double-height ceilings and private hillside lawns.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/supreme-villagio/price"
              className="px-6 py-3.5 bg-[#E15E3F] text-white uppercase text-xs tracking-widest font-bold hover:brightness-110 transition-all text-center"
            >
              View Cost Sheet
            </Link>
            <a
              href="https://wa.me/917744009295?text=Hello,%20I%20am%20from%20Mumbai%20and%20interested%20in%20Supreme%20Villagio%20villas%20via%20Atal%20Setu."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-[#E15E3F] text-gold uppercase text-xs tracking-widest font-bold hover:bg-[#E15E3F]/10 transition-all text-center"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
