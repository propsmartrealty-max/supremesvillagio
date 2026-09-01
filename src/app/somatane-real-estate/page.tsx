import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Somatane Real Estate & Property Market Guide 2026 | Pune West',
  description: 'Comprehensive guide to Somatane real estate market in Pune. Property rates, infrastructure catalysts, villa trends, and Supreme Villagio 4 & 5 BHK twin villas.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/somatane-real-estate',
  },
};

export default function SomataneRealEstatePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <Compass className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Somatane Real Estate Intelligence
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Somatane <span className="italic text-[#E15E3F]">Real Estate</span> & Property Overview
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Somatane is Pune&apos;s fastest-appreciating horizontal residential market. Located at 616 meters altitude along the Mumbai-Pune Expressway, Somatane offers luxury villa sanctuaries within 20 minutes of Hinjewadi IT Park and 25 minutes of Baner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-2xl font-heading text-white mb-3">Market Drivers</h3>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Ring Road Connectivity:</strong> Direct junction linking Pune West to South Pune.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Clean Microclimate:</strong> Sahyadri breezes with air quality superior to urban Pune.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Gated Villa Communities:</strong> Supreme Villagio leading the 16-acre master-planned segment.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-2xl font-heading text-white mb-3">Supreme Villagio Snapshot</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              Featuring 4 & 5 BHK luxury twin villas and townhouses starting from ₹2.89 Cr*. Phase 1 & 2 OC received, ready 18,500 sq.ft. Club Villagio.
            </p>
            <Link href="/supreme-villagio/price" className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold hover:text-white flex items-center gap-1">
              Explore Pricing & Cost Sheets <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Explore Property in Somatane</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Schedule a private chauffeur-driven visit to Supreme Villagio.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Check Availability <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
