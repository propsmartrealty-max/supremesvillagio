import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, CheckCircle2, ArrowRight, ShieldCheck, Phone, Check } from 'lucide-react';
import SeoSiloLinks from '@/components/layout/SeoSiloLinks';

export const metadata: Metadata = {
  title: 'Supreme Villagio vs Lodha Belmondo [2026 Pune Expressway Luxury Villa Comparison] | Supreme Villagio Official',
  description: 'Objective buyer comparison between Supreme Villagio (Somatane) and Lodha Belmondo (Gahunje). Compare villa carpet areas, horizontal density, private lawns, 18,500 sq.ft. Club Villagio & pricing from ₹2.89 Cr*.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio-vs-lodha-belmondo',
  },
  openGraph: {
    title: 'Supreme Villagio vs Lodha Belmondo | Pune Expressway Villa Comparison Guide',
    description: 'Detailed analysis comparing Somatane vs Gahunje luxury residences along the Mumbai-Pune Expressway.',
    url: 'https://www.supremesvillagio.com/supreme-villagio-vs-lodha-belmondo',
    type: 'website',
  },
};

const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.supremesvillagio.com/supreme-villagio-vs-lodha-belmondo#article',
  headline: 'Supreme Villagio vs Lodha Belmondo: 2026 Mumbai-Pune Expressway Villa Comparison',
  description: 'An objective architectural and investment comparison between Supreme Villagio Somatane and Lodha Belmondo Gahunje.',
  author: {
    '@type': 'Organization',
    name: 'Supreme Universal Research',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Supreme Universal',
    logo: {
      '@type': 'ImageObject',
      url: 'https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg',
    },
  },
  datePublished: '2026-08-20',
  dateModified: '2026-10-30',
};

const COMPARISON_DATA = [
  {
    parameter: 'Community Density & Masterplan',
    villagio: 'Pure low-rise 16-acre boutique horizontal estate (Twin Villas & Townhouses only, zero high-rise towers). High exclusivity with low footfall.',
    competitor: 'High-density 100+ acre township comprising thousands of high-rise apartment units alongside limited golf villas.',
  },
  {
    parameter: 'Land Ownership & Undivided Share',
    villagio: 'Direct land ownership footprint with independent private lawns on 3 sides and dedicated private terrace.',
    competitor: 'Primarily high-rise condominium ownership with fractional undivided land share (UDS) for apartment typologies.',
  },
  {
    parameter: 'Starting Price & Value Proposition',
    villagio: 'Luxury 4 BHK Townhouses start at ₹2.89 Cr* and 4 BHK Twin Villas at ₹3.45 Cr* (Unmatched carpet area per rupee).',
    competitor: 'Golf villas command ₹7 Cr – ₹15 Cr+, while apartments start from ₹1.4 Cr+ for compact 2/3 BHK formats.',
  },
  {
    parameter: 'Microclimate & Elevation',
    villagio: '616 Meters above sea level in the pristine Sahyadri foothills. Cooler breezes and zero industrial smog.',
    competitor: 'Expressway river basin elevation near Pavana river corridor.',
  },
  {
    parameter: 'Clubhouse & Lifestyle Amenities',
    villagio: '18,500 Sq.Ft. Club Villagio designed by Site Concepts Singapore. Finished, operational & exclusively reserved for villa residents.',
    competitor: '50,000 sq.ft. mega-clubhouse and 9-hole golf course shared across thousands of township residents.',
  },
  {
    parameter: 'Possession & Handover Status',
    villagio: 'Phase 1 & 2 100% OC Received with families residing. Phase 3 statutory delivery Dec 2028.',
    competitor: 'Delivered phases operational with ongoing resale and secondary transactions.',
  },
  {
    parameter: 'Hinjewadi IT Corridor Commute',
    villagio: '20 minutes via Mumbai-Pune Expressway / NH-48 bypass. Swift reverse-traffic flow.',
    competitor: '15–20 minutes via Gahunje Expressway connector.',
  },
];

export default function LodhaComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/supreme-villagio" className="hover:underline">Supreme Villagio</Link>
            <span>/</span>
            <span className="text-white">Supreme Villagio vs Lodha Belmondo</span>
          </div>

          <div className="mb-12 border-b border-white/10 pb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A880]/20 text-[#C5A880] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Scale className="w-3.5 h-3.5" /> 2026 Mumbai-Pune Expressway Buyer Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-light tracking-wide text-white mb-4">
              Supreme Villagio vs Lodha Belmondo
            </h1>
            <p className="text-stone text-base md:text-lg max-w-3xl leading-relaxed">
              Evaluating luxury real estate along the Mumbai-Pune Expressway corridor? Compare Supreme Villagio (Somatane) and Lodha Belmondo (Gahunje) across density, villa carpet areas, community exclusivity, and total cost of ownership.
            </p>
          </div>

          {/* Key Differentiator Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#1C2C25] p-6 rounded-lg border border-[#C5A880]/30 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#C5A880] font-bold block">Low-Density Boutique Luxury</span>
              <h2 className="text-xl font-heading text-white font-medium">Why Buyers Choose Supreme Villagio</h2>
              <p className="text-stone text-xs leading-relaxed">
                Supreme Villagio is strictly a horizontal, low-density sanctuary of twin villas and townhouses spread across 16 acres. Residents enjoy private land ownership, 3-side open lawns, and peaceful living without thousands of high-rise apartment neighbours crowding shared amenities.
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-white">Starting from ₹2.89 Cr* (Ready OC Villas)</span>
              </div>
            </div>

            <div className="bg-[#1C2C25] p-6 rounded-lg border border-white/10 space-y-3">
              <span className="text-xs uppercase tracking-wider text-stone font-bold block">Integrated Golf Township</span>
              <h2 className="text-xl font-heading text-white font-medium">Lodha Belmondo Profile</h2>
              <p className="text-stone text-xs leading-relaxed">
                Lodha Belmondo is a sprawling 100+ acre integrated township centered around a 9-hole golf course. While offering resort-scale amenities, the vast majority of units are high-rise multi-storey apartments, with independent villas commanding significant ₹7 Cr+ price premiums.
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-stone">Township Living with Mixed High-Rise Densities</span>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-[#1C2C25] rounded-lg border border-white/10 overflow-hidden mb-16 shadow-xl">
            <div className="p-6 border-b border-white/10 bg-[#23362E]/50">
              <h2 className="text-xl font-heading text-white font-semibold">
                Feature-by-Feature Architectural Comparison Matrix
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-black/20 text-[#C5A880] uppercase tracking-wider text-[11px]">
                    <th className="p-4 md:p-5 w-1/4 font-semibold">Evaluation Criteria</th>
                    <th className="p-4 md:p-5 w-3/8 font-semibold text-white bg-[#C5A880]/10">Supreme Villagio (Somatane)</th>
                    <th className="p-4 md:p-5 w-3/8 font-semibold">Lodha Belmondo (Gahunje)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-stone">
                  {COMPARISON_DATA.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 md:p-5 font-medium text-white align-top">{row.parameter}</td>
                      <td className="p-4 md:p-5 align-top bg-[#C5A880]/5 text-[#E4E2D3] leading-relaxed">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{row.villagio}</span>
                        </div>
                      </td>
                      <td className="p-4 md:p-5 align-top text-stone leading-relaxed">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Decision Guide */}
          <div className="bg-[#1C2C25] p-8 md:p-10 rounded-lg border border-white/10 mb-16 space-y-6">
            <h2 className="text-2xl font-heading text-white font-medium">
              The Verdict: Which Expressway Home is Right for You?
            </h2>
            <div className="space-y-4 text-stone text-sm leading-relaxed">
              <p>
                <strong>Choose Supreme Villagio if:</strong> You value private land ownership, absolute peace, and low-density exclusivity. With only twin villas and townhouses, 18,500 sq.ft. of private club amenities, and ready OC possession starting from ₹2.89 Cr*, it provides superior per-square-foot living space and long-term land appreciation.
              </p>
              <p>
                <strong>Choose Lodha Belmondo if:</strong> You prefer large-scale township environments with thousands of residents, on-site golf course facilities, or are seeking high-rise apartment typologies rather than horizontal villa residences.
              </p>
            </div>
          </div>

          {/* Conversion CTA */}
          <div className="bg-gradient-to-r from-[#1C2C25] via-[#23362E] to-[#1C2C25] p-8 md:p-10 rounded-lg border border-[#C5A880]/30 text-center space-y-4">
            <h2 className="text-2xl font-heading text-white">Experience Supreme Villagio in Person</h2>
            <p className="text-stone text-sm max-w-2xl mx-auto">
              Tour our ready Phase 1 &amp; 2 sample villas and explore the operational Club Villagio clubhouse just 3 minutes off the Mumbai-Pune Expressway.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <a
                href="tel:+917744009295"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A880] text-[#17181a] font-bold text-sm uppercase tracking-wider rounded hover:bg-[#b0936c] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call +91 7744009295
              </a>
              <Link
                href="/supreme-villagio/contact"
                className="w-full sm:w-auto px-8 py-3.5 border border-[#C5A880] text-[#C5A880] font-bold text-sm uppercase tracking-wider rounded hover:bg-[#C5A880]/10 transition-colors flex items-center justify-center gap-2"
              >
                Schedule Site Tour <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SeoSiloLinks />
    </>
  );
}
