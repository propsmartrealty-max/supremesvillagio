import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Laptop, Compass, Clock, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Villas near Hinjewadi IT Park Pune | 4 & 5 BHK Gated Estates',
  description: 'Looking for luxury villas near Hinjewadi IT Park? Discover 4 & 5 BHK independent gated villas at Somatane (20 mins away) with private lawns, mountain views, and ready 18,500 sq.ft. clubhouse.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/hinjewadi-villas',
  },
  openGraph: {
    title: 'Luxury Villas near Hinjewadi IT Park Pune | Supreme Villagio',
    description: 'Executive villa community for Hinjewadi tech leaders. 20-minute commute, 16 acres of greenery, 4 & 5 BHK luxury villas.',
    url: 'https://www.supremesvillagio.com/hinjewadi-villas',
    type: 'website',
  },
};

const hinjewadiSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Luxury Villas near Hinjewadi IT Park',
  'description': 'Executive gated villa residences near Hinjewadi Phases 1, 2, and 3.',
  'url': 'https://www.supremesvillagio.com/hinjewadi-villas',
};

export default function HinjewadiVillasPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="hinjewadi-villas-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hinjewadiSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-2 mb-4">
          <Laptop className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Tech Executive Housing Guide
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Luxury Villas near <span className="text-[#E15E3F] italic">Hinjewadi IT Park</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          For IT Directors, CXOs, and tech entrepreneurs working in Hinjewadi Phases 1, 2, and 3, dense high-rise apartments in Wakad or Hinjewadi come with severe traffic congestion, poor air quality, and minimal open space. Located just 20 minutes away via the expressway bypass, Somatane’s Supreme Villagio delivers low-density horizontal villa living amidst clean mountain air.
        </p>

        {/* Commute & Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <Clock className="w-6 h-6 text-[#1A6F44] mb-3" />
            <h3 className="text-xl font-heading mb-2">20-Min Signal-Free Commute</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              18 km direct connectivity via the Mumbai-Pune Expressway and NH-48 bypass bypasses the bottleneck choke points of Shivaji Chowk and Wakad Flyover.
            </p>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <ShieldCheck className="w-6 h-6 text-[#E15E3F] mb-3" />
            <h3 className="text-xl font-heading mb-2">3,800+ Sq.Ft. Private Domain</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              Enjoy private 3-side wrap-around gardens, double-height living rooms, home office suites, and dedicated multi-car covered parking bays.
            </p>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <Compass className="w-6 h-6 text-[#1A6F44] mb-3" />
            <h3 className="text-xl font-heading mb-2">Ready 18,500 Sq.Ft. Club</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              Unwind after work in the Olympic-length swimming pool, squash court, state-of-the-art gym, or fine-dining lounge without leaving the gates.
            </p>
          </div>
        </div>

        {/* Supreme Villagio Highlight Card */}
        <div className="bg-[#1C2C25] border border-[#E15E3F]/40 p-10 rounded-sm mb-16">
          <span className="bg-[#E15E3F]/20 text-[#E15E3F] border border-[#E15E3F]/40 px-3 py-1 text-xs uppercase font-bold tracking-widest rounded-sm mb-4 inline-block">
            Executive Villa Recommendation
          </span>
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Supreme Villagio Somatane</h2>
          <p className="text-sm md:text-base text-[#E4E2D3]/80 font-light leading-relaxed mb-6 max-w-3xl">
            16-acre master-planned low-density gated community. Phase 1 & 2 100% completed with OC received. Phase 3 4 & 5 BHK villas available with customized milestone payment plans.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/supreme-villagio/price"
              className="bg-[#E15E3F] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#F07F63] transition-colors"
            >
              View Cost Sheet (From ₹2.89 Cr*)
            </Link>
            <Link
              href="/somatane-vs-hinjewadi"
              className="border border-[#E4E2D3]/30 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#E15E3F] transition-colors"
            >
              Read Hinjewadi vs Somatane Study
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
