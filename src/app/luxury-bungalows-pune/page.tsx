import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Sparkles, Home, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Bungalows in Pune | Gated Twin Bungalow Estates (2026)',
  description: 'Looking for luxury bungalows in Pune? Discover 4 & 5 BHK gated twin bungalows in Somatane starting from ₹2.89 Cr* with private wrap-around gardens, 18,500 sq.ft. clubhouse, and mountain views.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/luxury-bungalows-pune',
  },
  openGraph: {
    title: 'Luxury Bungalows in Pune | Supreme Villagio',
    description: 'Ultra-premium twin bungalows and independent estates in Pune West. Starting from ₹2.89 Cr*.',
    url: 'https://www.supremesvillagio.com/luxury-bungalows-pune',
    type: 'website',
  },
};

const bungalowSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Luxury Bungalows in Pune',
  'description': 'Luxury bungalows, twin bungalows, and gated estates in Pune.',
  'url': 'https://www.supremesvillagio.com/luxury-bungalows-pune',
};

export default function LuxuryBungalowsPunePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="bungalows-pune-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bungalowSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Pune Gated Bungalow Benchmark
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Luxury Bungalows in <span className="text-[#E15E3F] italic">Pune</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          While standalone bungalows in central Pune (Prabhat Road, Koregaon Park) often lack modern amenities and community security, master-planned gated twin bungalows at Supreme Villagio combine the autonomy of an independent home with the luxury of an 18,500 sq.ft. operational clubhouse and 24/7 security.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-xl font-heading mb-3">3-Side Open Gardens</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              Every twin bungalow features private peripheral lawns, breakfast patios, and landscaped greenery on three sides.
            </p>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-xl font-heading mb-3">Double-Height Living</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              Volumetric architectural planning with 20+ ft vertical ceiling voids delivers dramatic natural light and panoramic hill views.
            </p>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-xl font-heading mb-3">16-Acre Sanctuary</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              Over 65% open green spaces designed by Site Concepts International, Singapore, with sensory walkways and fruit orchards.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-[#E4E2D3]/15 pt-8 flex flex-wrap gap-4 justify-between items-center text-xs uppercase tracking-widest">
          <Link href="/supreme-villagio/4-bhk-villas" className="text-[#E15E3F] hover:underline flex items-center gap-1">
            4 BHK Twin Bungalows <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio/5-bhk-villas" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            5 BHK Grand Bungalows <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio/price" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Pricing & Payment Plans <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
