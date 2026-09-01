import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Villas vs High-Rise Apartments in Pune | Investment & Lifestyle Comparison',
  description: 'Comparing luxury villas vs high-rise apartments in Pune. Space, land ownership, privacy, appreciation, maintenance costs, and gated community lifestyle.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/villas-vs-apartments-pune',
  },
};

const COMPARISON = [
  {
    parameter: 'Land Ownership',
    villa: 'Direct freehold proportionate land ownership. Land values appreciate over time.',
    apartment: 'Undivided Share of Land (UDS) divided among hundreds of flat owners in a tower.',
  },
  {
    parameter: 'Privacy & Noise',
    villa: '100% private detached structure with zero shared walls, ceiling, or floor noise.',
    apartment: 'Shared walls, elevators, corridors, and potential overhead footsteps/drilling noise.',
  },
  {
    parameter: 'Private Outdoor Space',
    villa: 'Exclusive 3-side open garden lawn, private patio, and dedicated rooftop sky terrace.',
    apartment: 'Limited cantilevered balcony space with views often obstructed by neighboring towers.',
  },
  {
    parameter: 'Density & Air Quality',
    villa: 'Low-density 16-acre estate (Supreme Villagio) at 616m altitude with pure clean breezes.',
    apartment: 'High-density vertical living in congested urban pockets with elevated dust and traffic.',
  },
  {
    parameter: 'Long-Term Capital Appreciation',
    villa: 'Higher historical appreciation driven by land scarcity in Pune West growth corridors.',
    apartment: 'Building structure depreciates over 25–30 years with ongoing structural maintenance.',
  },
];

export default function VillasVsApartmentsPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Property Typology Guide
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Villas vs <span className="italic text-[#E15E3F]">High-Rise Apartments</span> in Pune
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          When investing ₹3 Cr+ in Pune real estate, should you purchase a premium 4 BHK flat in a congested suburb like Baner/Wakad or an expansive independent luxury villa in a gated estate like Supreme Villagio Somatane? Here is the financial and lifestyle breakdown.
        </p>

        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#23362E]/90 border-b border-[#E4E2D3]/15 text-xs uppercase tracking-widest text-[#E4E2D3]">
                  <th className="p-4 md:p-6 w-1/4">Feature</th>
                  <th className="p-4 md:p-6 w-3/8 text-[#E15E3F] font-bold">Gated Luxury Villa (Supreme Villagio)</th>
                  <th className="p-4 md:p-6 w-3/8 text-white">Urban High-Rise Apartment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E2D3]/10">
                {COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-medium text-white">
                      {row.parameter}
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3] bg-[#E15E3F]/5 border-r border-[#E4E2D3]/10 font-light leading-relaxed">
                      {row.villa}
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3]/70 font-light leading-relaxed">
                      {row.apartment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Upgrade from an Apartment to a Villa</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Experience true horizontal luxury living at Supreme Villagio Somatane.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Explore Villa Options <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
