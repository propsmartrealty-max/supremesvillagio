import { Metadata } from 'next';
import Link from 'next/link';
import { Car, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Sparkles, Trophy, Building2, Trees } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Villas Near Mumbai Pune Expressway | Luxury Weekend Homes & Estates',
  description: 'Luxury 4 & 5 BHK villas near Mumbai-Pune Expressway at Supreme Villagio Somatane. 3 mins from Expressway toll, 75 mins from Navi Mumbai & Atal Setu. Starting ₹2.89 Cr*.',
  keywords: [
    'villas near mumbai pune expressway',
    'luxury villas near mumbai',
    'weekend homes near mumbai pune expressway',
    'second homes near mumbai',
    'luxury bungalows near expressway',
    'villas in somatane for mumbai buyers',
    'supreme villagio expressway villas',
    'pune villas for mumbai investors'
  ],
  alternates: {
    canonical: 'https://www.supremesvillagio.com/villas-near-mumbai-pune-expressway',
  },
  openGraph: {
    title: 'Villas Near Mumbai Pune Expressway | Supreme Villagio',
    description: 'Ultra-luxury 4 & 5 BHK villas and weekend retreat bungalows 3 mins from Mumbai-Pune Expressway toll gate. Starting from ₹2.89 Cr*.',
    url: 'https://www.supremesvillagio.com/villas-near-mumbai-pune-expressway',
    type: 'website',
  },
};

const expresswayListingSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Luxury Villas Near Mumbai-Pune Expressway — Supreme Villagio',
  'description': 'Exclusive 4 & 5 BHK twin villas and townhouses in Somatane, Pune located 3 mins from the Mumbai-Pune Expressway with 18,500 sq.ft. clubhouse and mountain views.',
  'url': 'https://www.supremesvillagio.com/villas-near-mumbai-pune-expressway',
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

const expresswayFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Why is Supreme Villagio the top choice for Mumbai buyers seeking a villa?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Located just 3 minutes (1.5 km) from the Mumbai-Pune Expressway toll gate, Supreme Villagio provides seamless signal-free transit to Mumbai (75–85 mins to Navi Mumbai & Atal Setu MTHL). Mumbai buyers enjoy 616m hill-station altitude, pure unpolluted air (AQI < 50), resort living with an 18,500 sq.ft. clubhouse, and 3x more carpet area compared to South Mumbai, Bandra, or Alibaug properties.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How far is Supreme Villagio from key hubs in Mumbai and Pune?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Supreme Villagio is situated 3 minutes from the Expressway toll plaza, 30 minutes from Lonavala, 75–85 minutes from Navi Mumbai International Airport, 20 minutes from Hinjewadi IT Park Phase 1, and 25 minutes from Baner / Balewadi High Street.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can Mumbai buyers use Supreme Villagio as a dual weekend retreat and primary residence?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. With hybrid work cultures and the opening of the Mumbai Trans Harbour Link (Atal Setu), senior executives, entrepreneurs, and NRI families increasingly reside at Supreme Villagio full-time or spend long weekends enjoying the private lawn gardens, Olympic pool, and Sahyadri mountain horizons.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the starting price for expressway villas at Supreme Villagio?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'All-inclusive pricing begins from ₹2.89 Cr* for 4 BHK Townhouses (2,200 – 2,400 sq.ft.), ₹3.45 Cr* for 4 BHK Twin Villas (2,600 – 2,900 sq.ft.), and ₹4.85 Cr* for 5 BHK Presidential Hillside Villas (3,400 – 3,900 sq.ft.).'
      }
    }
  ]
};

export default function VillasNearExpresswayPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(expresswayListingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(expresswayFaqSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Car className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Mumbai–Pune Expressway Luxury Corridor
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Luxury Villas Near <span className="italic text-[#E15E3F]">Mumbai–Pune Expressway</span>
        </h1>

        <p className="text-lg md:text-xl text-[#E4E2D3]/90 font-light leading-relaxed mb-12 max-w-4xl">
          For discerning buyers from Mumbai seeking an unpolluted weekend sanctuary or primary estate home, <strong>Supreme Villagio in Somatane</strong> provides the ultimate Expressway location — situated just 3 minutes from the toll gateway with completely signal-free highway connectivity to Mumbai, Navi Mumbai, and Pune West.
        </p>

        {/* Travel & Commute Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15 rounded-sm">
            <span className="text-xs text-[#E15E3F] font-bold uppercase tracking-widest mb-2 block">Prime Transit Node</span>
            <h2 className="text-2xl font-heading text-white mb-4">Unmatched Connectivity for Mumbai Commuters</h2>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-6">
              Skip the chaotic inner-city bottlenecks. Supreme Villagio is strategically positioned right off the Expressway corridor at Somatane Phata, giving you direct access to Mumbai via the 6-lane expressway without crossing Pune traffic.
            </p>
            <div className="flex items-center justify-between text-xs text-[#E15E3F] font-bold uppercase tracking-wider pt-4 border-t border-[#E4E2D3]/10">
              <span>Townhouses from ₹2.89 Cr* | Villas from ₹3.45 Cr*</span>
              <Link href="/supreme-villagio/price" className="hover:underline flex items-center gap-1">
                View Price Matrix <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15 rounded-sm">
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2 block">Precise Travel Times</span>
            <h2 className="text-2xl font-heading text-white mb-4">Signal-Free Gateway</h2>
            <ul className="space-y-3 text-xs text-[#E4E2D3]/85 font-light">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>3 Mins (1.5 Km):</strong> Mumbai-Pune Expressway Toll Plaza</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>75–85 Mins:</strong> Navi Mumbai &amp; Atal Setu (MTHL) to South Mumbai</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>30 Mins (32 Km):</strong> Lonavala &amp; Khandala Hill Station</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>20–25 Mins:</strong> Hinjawadi IT Park (Phase 1, 2, 3)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>25 Mins:</strong> Baner / Balewadi High Street</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Mumbai Buyers Choose Supreme Villagio */}
        <div className="bg-[#1C2C25] p-8 md:p-12 border border-[#E15E3F]/40 rounded-sm mb-16 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-heading text-white mb-6">
            Why Mumbai HNIs Choose Supreme Villagio over Alibaug or Lonavala
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#E4E2D3]/80">
            <div className="p-4 bg-white/5 border border-white/5 rounded">
              <h3 className="font-heading text-white text-lg mb-2">Pristine Hill Microclimate</h3>
              <p className="text-xs leading-relaxed font-light">
                Situated at 616 meters altitude, Somatane enjoys cool breezes, misty mornings, and AQI &lt; 50 year-round — vastly healthier than Mumbai’s coastal humidity and urban smog.
              </p>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded">
              <h3 className="font-heading text-white text-lg mb-2">Ready 18,500 Sq.Ft. Clubhouse</h3>
              <p className="text-xs leading-relaxed font-light">
                Unlike standalone villas with isolated upkeep, Club Villagio provides an operational Olympic-length swimming pool, squash and badminton courts, spa, and wellness gym.
              </p>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded">
              <h3 className="font-heading text-white text-lg mb-2">Clear Title &amp; OC Handover</h3>
              <p className="text-xs leading-relaxed font-light">
                Alibaug and rural plots often carry agricultural zoning disputes. Supreme Villagio features 100% legal residential title with Phase 1 &amp; 2 OC received and MahaRERA approved.
              </p>
            </div>
          </div>
        </div>

        {/* Expressway FAQs */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading text-white mb-8 border-b border-[#E4E2D3]/15 pb-4">
            Frequently Asked Questions by Mumbai Buyers
          </h2>
          <div className="space-y-6">
            {expresswayFaqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-6 rounded-sm">
                <h3 className="text-lg font-heading text-white mb-2">{faq.name}</h3>
                <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Plan Your Expressway Site Visit</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Drive down via the Expressway for a private tour of our ready sample villas.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/supreme-villagio/price"
              className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
            >
              Get Cost Sheet <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/supreme-villagio/location"
              className="border border-[#E4E2D3]/30 text-white font-bold px-6 py-4 text-xs uppercase tracking-widest hover:bg-white/10 transition-all shrink-0"
            >
              View Route Map
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
