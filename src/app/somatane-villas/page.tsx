import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Mountain, Trees, Compass, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Villas in Somatane Pune | Independent Luxury Gated Villas (2026)',
  description: 'Explore luxury villas for sale in Somatane, Pune. Discover 4 & 5 BHK gated villa developments, 616m elevation, clean mountain air, and 20-min connectivity to Hinjewadi.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/somatane-villas',
  },
  openGraph: {
    title: 'Villas in Somatane Pune | Luxury Gated Community Living',
    description: 'Somatane villa market analysis and luxury gated bungalow developments in Pune West.',
    url: 'https://www.supremesvillagio.com/somatane-villas',
    type: 'website',
  },
};

const somataneSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Luxury Villas in Somatane Pune',
  'description': 'Comprehensive directory and guide to luxury villas and gated communities in Somatane, Pune.',
  'url': 'https://www.supremesvillagio.com/somatane-villas',
  'spatialCoverage': {
    '@type': 'Place',
    'name': 'Somatane, Pune',
    'sameAs': 'https://en.wikipedia.org/wiki/Somatane',
  },
};

export default function SomataneVillasPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="somatane-villas-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(somataneSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-2 mb-4">
          <Mountain className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Somatane Micro-Market Authority
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Villas in <span className="text-[#E15E3F] italic">Somatane, Pune</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          Somatane has emerged as Pune’s premier low-density horizontal residential destination. Perched at 616 meters altitude along the Western Ghats mountain ridges, Somatane offers year-round cool temperatures, pristine Air Quality Index (AQI), and swift signal-free expressway access to Hinjewadi IT Park and Baner.
        </p>

        {/* Why Somatane Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-xl font-heading mb-3">616m Hill Microclimate</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              Temperatures in Somatane stay 2–4°C cooler than central Pune with misty monsoon mornings and low AQI levels, creating a genuine hill-station sanctuary.
            </p>
            <span className="text-xs text-[#E15E3F] font-bold uppercase tracking-wider">Pristine Sahyadri Air</span>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-xl font-heading mb-3">20-Min Hinjewadi Access</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              Direct access via the Mumbai-Pune Expressway and NH-48 bypass puts Hinjewadi Phase 1, 2, and 3 just 18 km away without internal city gridlock.
            </p>
            <span className="text-xs text-[#1A6F44] font-bold uppercase tracking-wider">Fast Corporate Commute</span>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-xl font-heading mb-3">Pure Freehold Land Share</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              Unlike high-rise apartments where undivided land share (UDS) is negligible, Somatane villas grant extensive proportionate freehold land ownership.
            </p>
            <span className="text-xs text-[#E15E3F] font-bold uppercase tracking-wider">Generational Asset Security</span>
          </div>
        </div>

        {/* Supreme Villagio Showcase */}
        <div className="bg-[#1C2C25] border border-[#E15E3F]/40 p-10 rounded-sm mb-16 shadow-2xl">
          <span className="bg-[#E15E3F]/20 text-[#E15E3F] border border-[#E15E3F]/40 px-3 py-1 text-xs uppercase font-bold tracking-widest rounded-sm mb-4 inline-block">
            Benchmark Somatane Villa Development
          </span>
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Supreme Villagio — 16-Acre Master-Planned Villa Estate</h2>
          <p className="text-sm md:text-base text-[#E4E2D3]/80 font-light leading-relaxed mb-8 max-w-3xl">
            Supreme Universal’s flagship gated estate featuring ready 18,500 sq.ft. Club Villagio, Singapore-designed landscapes, and luxury 4 & 5 BHK villas. Phase 1 & 2 handed over with OC; Phase 3 under active construction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 border-y border-[#E4E2D3]/10 py-6">
            <div>
              <p className="text-xs text-[#E4E2D3]/60 uppercase tracking-wider mb-1">4 BHK Townhouses</p>
              <p className="text-xl font-heading text-white">From ₹2.89 Cr*</p>
            </div>
            <div>
              <p className="text-xs text-[#E4E2D3]/60 uppercase tracking-wider mb-1">4 BHK Twin Villas</p>
              <p className="text-xl font-heading text-white">From ₹3.45 Cr*</p>
            </div>
            <div>
              <p className="text-xs text-[#E4E2D3]/60 uppercase tracking-wider mb-1">5 BHK Presidential</p>
              <p className="text-xl font-heading text-white">From ₹4.85 Cr*</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/supreme-villagio/price"
              className="bg-[#E15E3F] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#F07F63] transition-colors"
            >
              View Price Sheet
            </Link>
            <Link
              href="/supreme-villagio-rera"
              className="border border-[#E4E2D3]/30 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#E15E3F] transition-colors"
            >
              Verify MahaRERA
            </Link>
          </div>
        </div>

        {/* Breadcrumb / Related Links */}
        <div className="border-t border-[#E4E2D3]/15 pt-8 flex flex-wrap gap-4 justify-between items-center text-xs uppercase tracking-widest">
          <Link href="/somatane-real-estate" className="text-[#E15E3F] hover:underline flex items-center gap-1">
            Somatane Real Estate Hub <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/somatane-vs-hinjewadi" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Somatane vs Hinjewadi Guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/luxury-villas-pune" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Pune Luxury Villas Directory <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
