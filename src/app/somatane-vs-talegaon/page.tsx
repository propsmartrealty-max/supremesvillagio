import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Somatane vs Talegaon Real Estate Comparison | Which is Better for Villas?',
  description: 'Compare Somatane vs Talegaon for luxury property investment. Elevation, Expressway connectivity, green cover, and Supreme Villagio 4 & 5 BHK villa living.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/somatane-vs-talegaon',
  },
};

const COMPARISON = [
  {
    metric: 'Geographical Altitude & Climate',
    somatane: '616 Meters (Lonavala-grade cool breezes and misty mountain views).',
    talegaon: '600 Meters (Pleasant semi-urban climate, closer to industrial hub).',
  },
  {
    metric: 'Expressway & Toll Access',
    somatane: 'Immediate 3-minute access to Mumbai-Pune Expressway entrance.',
    talegaon: '10–15 minutes through local town roads to reach Expressway tolls.',
  },
  {
    metric: 'Residential Density',
    somatane: 'Predominantly low-density luxury villa estates (Supreme Villagio 16 acres).',
    talegaon: 'Higher mix of affordable and mid-segment high-rise apartment complexes.',
  },
  {
    metric: 'Commute to Hinjewadi IT Park',
    somatane: '20–25 minutes via Expressway / NH-48 direct bypass.',
    talegaon: '25–35 minutes via Somatane Phata junction.',
  },
];

export default function SomataneVsTalegaonPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Regional Comparison Guide
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Somatane vs <span className="italic text-[#E15E3F]">Talegaon</span> Real Estate
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Both Somatane and Talegaon are prime growth hubs in Pune West. However, for buyers seeking pure low-rise luxury villa living, cleaner air, and immediate Expressway access, Somatane offers distinct advantages.
        </p>

        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#23362E]/90 border-b border-[#E4E2D3]/15 text-xs uppercase tracking-widest text-[#E4E2D3]">
                  <th className="p-4 md:p-6 w-1/4">Comparison Metric</th>
                  <th className="p-4 md:p-6 w-3/8 text-[#E15E3F] font-bold">Somatane (Supreme Villagio)</th>
                  <th className="p-4 md:p-6 w-3/8 text-white">Talegaon Town</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E2D3]/10">
                {COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-medium text-white">
                      {row.metric}
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3] bg-[#E15E3F]/5 border-r border-[#E4E2D3]/10 font-light leading-relaxed">
                      {row.somatane}
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3]/70 font-light leading-relaxed">
                      {row.talegaon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Explore Villas at Supreme Villagio Somatane</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Experience low-density luxury living just 25 minutes from Baner.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Explore Pricing & Floor Plans <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
