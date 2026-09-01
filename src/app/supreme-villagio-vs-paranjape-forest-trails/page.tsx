import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Scale, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio vs Paranjape Forest Trails | Pune Luxury Villa Comparison Guide',
  description: 'Objective buyer comparison between Supreme Villagio (Somatane) and Paranjape Forest Trails (Bhugaon). Compare location, altitude, expressway connectivity, price per sq.ft., and villa layouts.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio-vs-paranjape-forest-trails',
  },
  openGraph: {
    title: 'Supreme Villagio vs Paranjape Forest Trails | Villa Comparison Guide',
    description: 'Detailed analysis comparing Somatane vs Bhugaon luxury villa communities in Pune.',
    url: 'https://www.supremesvillagio.com/supreme-villagio-vs-paranjape-forest-trails',
    type: 'website',
  },
};

const COMPARISON_TABLE = [
  {
    parameter: 'Location & Micro-Market',
    villagio: 'Somatane, Pune (Direct Mumbai-Pune Expressway Gateway)',
    competitor: 'Bhugaon / Paud Road, Pune West',
  },
  {
    parameter: 'Altitude & Microclimate',
    villagio: '616 Meters (Lonavala-grade cool hill climate, clean air index)',
    competitor: '560 Meters (Standard Pune suburban elevation)',
  },
  {
    parameter: 'Expressway & Mumbai Access',
    villagio: '3 minutes from Expressway entry. Signal-free connectivity to Mumbai & Navi Mumbai Airport.',
    competitor: 'Requires navigating Chandani Chowk and Paud Road municipal traffic bottlenecks.',
  },
  {
    parameter: 'Hinjewadi IT Corridor Commute',
    villagio: '20–25 minutes via Expressway & NH-48 Bypass.',
    competitor: '25–35 minutes via Chandani Chowk / Pashan-Sus Link.',
  },
  {
    parameter: 'Villa Densities & Masterplan',
    villagio: 'Pure low-rise 16-acre estate (Twin Villas & Townhouses only, zero high-rise towers).',
    competitor: 'Mixed township including high-rise apartment clusters alongside villas.',
  },
  {
    parameter: 'Clubhouse Readiness',
    villagio: 'Ready-to-use 18,500 sq.ft. Club Villagio with operational amenities.',
    competitor: 'Township club amenities operational across phases.',
  },
  {
    parameter: 'Starting Price Bracket',
    villagio: 'Starting from ₹2.89 Cr* (High value-to-space ratio)',
    competitor: 'Villas generally start from ₹3.5 Cr+ for comparable carpet areas.',
  },
];

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Objective Buyer Decision Guide
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio vs <span className="italic text-[#E15E3F]">Paranjape Forest Trails</span>
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Choosing between Pune&apos;s leading luxury villa developments requires evaluating connectivity, microclimate, masterplan density, and pricing efficiency. Here is a balanced, fact-based comparison between Supreme Villagio (Somatane) and Paranjape Forest Trails (Bhugaon).
        </p>

        {/* Comparison Table */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#23362E]/90 border-b border-[#E4E2D3]/15 text-xs uppercase tracking-widest text-[#E4E2D3]">
                  <th className="p-4 md:p-6 w-1/4">Feature / Metric</th>
                  <th className="p-4 md:p-6 w-3/8 text-[#E15E3F] font-bold">Supreme Villagio (Somatane)</th>
                  <th className="p-4 md:p-6 w-3/8 text-white">Paranjape Forest Trails (Bhugaon)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E2D3]/10">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-medium text-white">
                      {row.parameter}
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3] bg-[#E15E3F]/5 border-r border-[#E4E2D3]/10 font-light leading-relaxed">
                      {row.villagio}
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3]/70 font-light leading-relaxed">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Takeaway */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 md:p-12 rounded-sm mb-16">
          <h3 className="text-2xl font-heading text-white mb-4">The Verdict: Which Project Fits Your Lifestyle?</h3>
          <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
            If you prioritize a pure low-rise villa-only sanctuary with cooler hill-station temperatures, effortless Mumbai–Expressway connectivity, and ready resort amenities without city traffic, <strong>Supreme Villagio</strong> is the ideal choice.
          </p>
          <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
            If your daily routine requires closer proximity to Kothrud / Paud Road and you prefer a vast township ecosystem with high-rise residential towers, <strong>Forest Trails</strong> offers a viable alternative in South-West Pune.
          </p>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Tour Supreme Villagio in Person</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Experience the cooler microclimate, ready clubhouse, and sample villas.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Explore Pricing & Book Tour <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
