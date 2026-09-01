import { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Talegaon Real Estate & Property Prices 2026 | Luxury Villas & Homes',
  description: 'Talegaon real estate market overview. Property price trends, industrial growth, connectivity, and nearby luxury gated villas at Supreme Villagio Somatane.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/talegaon-real-estate',
  },
};

export default function TalegaonRealEstatePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <Landmark className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Talegaon Growth Hub
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Talegaon <span className="italic text-[#E15E3F]">Real Estate</span> & Property Overview
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Talegaon and its neighboring Somatane corridor represent Pune West&apos;s strongest industrial and residential synergy. With multinational automotive and manufacturing giants in Talegaon MIDC and Chakan, the demand for premium gated villas is at an all-time high.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-2xl font-heading text-white mb-3">Supreme Villagio — 8 Mins Away</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              Providing luxury 4 & 5 BHK twin villas and townhouses in a serene 16-acre low-density setting with ready clubhouse amenities.
            </p>
            <Link href="/supreme-villagio/price" className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold hover:text-white flex items-center gap-1">
              Explore Pricing & Cost Sheets <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-2xl font-heading text-white mb-3">Key Infrastructure Catalysts</h3>
            <ul className="space-y-2.5 text-xs text-[#E4E2D3]/80 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>8 minutes to Talegaon MIDC and industrial leaders</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct access to Mumbai-Pune Expressway & NH-48</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Near top schools, Pawana multispeciality hospital</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Explore Real Estate in Talegaon & Somatane</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Experience the completed sample villa and private hillside estate.</p>
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
