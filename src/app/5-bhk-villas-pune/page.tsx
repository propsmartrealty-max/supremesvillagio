import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Crown, Compass, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: '5 BHK Villas in Pune for Sale | Grand Presidential Estates (2026)',
  description: 'Discover ultra-luxury 5 BHK villas in Pune for sale. 3,400 – 3,900 sq.ft. carpet area, private elevator provision, 3 car bays, and mountain views at Supreme Villagio Somatane (from ₹4.85 Cr*).',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/5-bhk-villas-pune',
  },
  openGraph: {
    title: '5 BHK Luxury Villas in Pune | Supreme Villagio Presidential',
    description: 'Exclusive 19 hillside presidential villas in Pune West. Private elevator, mountain panoramas, ₹4.85 Cr*.',
    url: 'https://www.supremesvillagio.com/5-bhk-villas-pune',
    type: 'website',
  },
};

const fiveBhkPuneSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': '5 BHK Grand Presidential Villas in Pune',
  'description': 'Ultra-luxury 5 BHK hillside presidential villas in Pune.',
  'url': 'https://www.supremesvillagio.com/5-bhk-villas-pune',
  'offers': {
    '@type': 'Offer',
    'priceCurrency': 'INR',
    'price': '48500000',
    'availability': 'https://schema.org/LimitedAvailability',
  },
};

export default function FiveBhkVillasPunePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="5bhk-pune-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fiveBhkPuneSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Ultra-Luxury Presidential Collection
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          5 BHK Villas in <span className="text-[#E15E3F] italic">Pune</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          For Pune’s business magnates, industrial leaders, and global NRI families, standard luxury apartments cannot match the privacy and grandeur of an independent 5 BHK Presidential Villa. Supreme Villagio features a limited collection of only 19 bespoke hillside estates overlooking the Sahyadri mountains.
        </p>

        {/* Highlight Card */}
        <div className="bg-[#1C2C25] border border-[#E15E3F]/40 p-10 rounded-sm mb-16 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs text-[#E15E3F] font-bold uppercase tracking-widest block mb-1">
                Limited 19 Hillside Estates Only
              </span>
              <h2 className="text-3xl font-heading">5 BHK Grand Presidential Villa</h2>
            </div>
            <div className="text-right md:text-left">
              <span className="text-xs text-[#E4E2D3]/60 uppercase tracking-widest block">Starting Price</span>
              <span className="text-3xl font-heading text-[#E15E3F]">₹4.85 Cr*</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-y border-[#E4E2D3]/10 py-6 text-sm text-[#E4E2D3]/80 font-light">
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Carpet Area: 3,400 – 3,900 Sq. Ft.</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Private elevator provision from ground to sky terrace</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> 3 covered vehicle bays with EV charging infrastructure</li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Double-height grand formal receiving lounge</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Customizable entertainment / private home theatre suite</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Uninterrupted 180-degree Sahyadri mountain vistas</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/supreme-villagio/5-bhk-villas"
              className="bg-[#E15E3F] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#F07F63] transition-colors shadow-lg"
            >
              Explore 5 BHK Layout Blueprint
            </Link>
            <Link
              href="/supreme-villagio/price"
              className="border border-[#E4E2D3]/30 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#E15E3F] transition-colors"
            >
              Request 5 BHK Cost Sheet
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
