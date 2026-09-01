import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Somatane vs Hinjewadi Living & Real Estate Comparison | Pune Real Estate Guide',
  description: 'Should you buy in Somatane or Hinjewadi? Comprehensive comparison of villa living vs high-rise apartments, air quality, space, traffic, and price appreciation.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/somatane-vs-hinjewadi',
  },
};

const COMPARISON = [
  {
    factor: 'Living Typology',
    somatane: 'Independent 4 & 5 BHK luxury villas & townhouses with private gardens (Supreme Villagio).',
    hinjewadi: 'High-density multi-storey apartment complexes with shared common spaces.',
  },
  {
    factor: 'Air Quality & Microclimate',
    somatane: '616m elevation, clean hill-station air index, surrounded by Sahyadri green valleys.',
    hinjewadi: 'Urban IT corridor with elevated dust, heavy vehicular emissions, and heat island effect.',
  },
  {
    factor: 'Traffic & Daily Commute',
    somatane: '20–25 minutes signal-free drive to Hinjewadi Phase 1, 2, 3 via Expressway / NH-48.',
    hinjewadi: '30–45 minutes battling peak-hour bottleneck traffic inside Hinjewadi crossroads.',
  },
  {
    factor: 'Pricing & Space Efficiency',
    somatane: '2,600+ sq.ft. villa with private plot starting ~₹2.89 Cr* (exceptional value per sq.ft.).',
    hinjewadi: 'Premium 3 BHK apartments often cost ₹1.8 – ₹2.5 Cr for 1,100–1,400 sq.ft.',
  },
  {
    factor: 'Long-Term Land Ownership',
    somatane: 'Pure freehold proportionate land ownership in a low-density 16-acre community.',
    hinjewadi: 'Undivided share of land (UDS) shared among hundreds of apartment owners.',
  },
];

export default function SomataneVsHinjewadiPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Real Estate Location Decision Guide
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Somatane vs <span className="italic text-[#E15E3F]">Hinjewadi</span> Living Comparison
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          For IT leaders and business executives working in Hinjewadi, choosing between a high-rise flat in Hinjewadi vs a private luxury villa in Somatane is one of the most critical real estate decisions. Here is an objective analysis of lifestyle, health, commute, and financial returns.
        </p>

        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#23362E]/90 border-b border-[#E4E2D3]/15 text-xs uppercase tracking-widest text-[#E4E2D3]">
                  <th className="p-4 md:p-6 w-1/4">Evaluation Metric</th>
                  <th className="p-4 md:p-6 w-3/8 text-[#E15E3F] font-bold">Somatane (Supreme Villagio)</th>
                  <th className="p-4 md:p-6 w-3/8 text-white">Hinjewadi Suburbs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E2D3]/10">
                {COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-medium text-white">
                      {row.factor}
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3] bg-[#E15E3F]/5 border-r border-[#E4E2D3]/10 font-light leading-relaxed">
                      {row.somatane}
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3]/70 font-light leading-relaxed">
                      {row.hinjewadi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Upgrade to Villa Living at Supreme Villagio</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Enjoy 25-minute signal-free connectivity to Hinjewadi with 4x the space and private lawns.</p>
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
