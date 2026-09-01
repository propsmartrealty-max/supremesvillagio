import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Home, Compass, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: '4 BHK Villas in Pune for Sale | Luxury Gated Villa Estates (2026)',
  description: 'Explore the best 4 BHK villas in Pune. Independent twin villas and townhouses from ₹2.89 Cr* with private gardens, 18,500 sq.ft. clubhouse, and mountain views at Supreme Villagio.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/4-bhk-villas-pune',
  },
  openGraph: {
    title: '4 BHK Villas in Pune | Luxury Gated Villa Projects',
    description: '4 BHK luxury villas and twin bungalows for sale in Pune West. Starting from ₹2.89 Cr*.',
    url: 'https://www.supremesvillagio.com/4-bhk-villas-pune',
    type: 'website',
  },
};

const fourBhkPuneSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': '4 BHK Luxury Villas in Pune',
  'description': '4 BHK luxury villas, twin bungalows, and townhouses in Pune real estate.',
  'url': 'https://www.supremesvillagio.com/4-bhk-villas-pune',
  'offers': {
    '@type': 'AggregateOffer',
    'priceCurrency': 'INR',
    'lowPrice': '28900000',
    'highPrice': '42000000',
  },
};

export default function FourBhkVillasPunePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="4bhk-pune-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fourBhkPuneSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-2 mb-4">
          <Home className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Pune Luxury Typology Hub
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          4 BHK Villas in <span className="text-[#E15E3F] italic">Pune</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          The demand for 4 BHK villas in Pune has surged among HNIs and multi-generational families seeking expansive horizontal living, private wrap-around gardens, and proportionate land ownership that high-rise apartments cannot provide.
        </p>

        {/* Configurations Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 4 BHK Townhouse */}
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <span className="text-xs text-[#E15E3F] font-bold uppercase tracking-widest mb-2 block">G+2 Living</span>
            <h3 className="text-2xl font-heading mb-2">4 BHK Luxury Townhouses</h3>
            <p className="text-xl font-heading text-[#E15E3F] mb-4">Starting from ₹2.89 Cr*</p>
            <ul className="space-y-2 text-sm text-[#E4E2D3]/80 font-light mb-6">
              <li>• Carpet Area: 2,200 – 2,400 Sq. Ft.</li>
              <li>• Private ground-floor lawn & rooftop party terrace</li>
              <li>• Dedicated 2 covered car parking bays</li>
              <li>• Double-height ceilings in living & dining</li>
            </ul>
            <Link
              href="/supreme-villagio/townhouses"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E15E3F] hover:underline"
            >
              Explore Townhouse Blueprint <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 BHK Twin Villa */}
          <div className="bg-[#1C2C25] border border-[#E15E3F]/40 p-8 rounded-sm shadow-xl">
            <span className="text-xs text-[#1A6F44] font-bold uppercase tracking-widest mb-2 block">3-Side Open Privacy</span>
            <h3 className="text-2xl font-heading mb-2">4 BHK Luxury Twin Villas</h3>
            <p className="text-xl font-heading text-[#E15E3F] mb-4">Starting from ₹3.45 Cr*</p>
            <ul className="space-y-2 text-sm text-[#E4E2D3]/80 font-light mb-6">
              <li>• Carpet Area: 2,600 – 2,900 Sq. Ft.</li>
              <li>• 3-side open expansive landscaped garden</li>
              <li>• Master bedroom suite with walk-in dressing lounge</li>
              <li>• Full access to operational 18,500 sq.ft. Club Villagio</li>
            </ul>
            <Link
              href="/supreme-villagio/4-bhk-villas"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E15E3F] hover:underline"
            >
              Explore 4 BHK Twin Villa <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-[#E4E2D3]/15 pt-8 flex flex-wrap gap-4 justify-between items-center text-xs uppercase tracking-widest">
          <Link href="/supreme-villagio/5-bhk-villas" className="text-[#E15E3F] hover:underline flex items-center gap-1">
            Looking for 5 BHK Presidential? <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio/price" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Complete Price Sheet <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/somatane-real-estate" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Somatane Market Guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
