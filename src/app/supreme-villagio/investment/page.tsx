import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { TrendingUp, BarChart3, Landmark, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio Investment Thesis & Capital Appreciation Analysis | Pune Real Estate',
  description: 'Detailed financial and infrastructure investment analysis for Supreme Villagio Somatane. Pune Ring Road impact, Hinjewadi expansion, rental yield, and land value appreciation.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/investment',
  },
  openGraph: {
    title: 'Supreme Villagio Investment Thesis & Capital Appreciation Analysis',
    description: 'Data-backed real estate investment analysis for luxury villas in Somatane Pune at Supreme Villagio.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/investment',
    type: 'website',
  },
};

export default function InvestmentPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Real Estate Investment Thesis
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">Investment</span> & Growth Analysis
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          An objective, data-driven analysis of the macroeconomic growth drivers, infrastructure investments, and capital appreciation potential of luxury villa ownership in the Somatane–Talegaon growth corridor.
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm shadow-xl">
            <BarChart3 className="w-6 h-6 text-[#E15E3F] mb-4" />
            <h2 className="text-2xl font-heading text-white mb-3">1. Hinjewadi IT Corridor Spillover</h2>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              With over 400,000 tech professionals and multinational leaders residing in Pune West, high-income executives are increasingly choosing spacious horizontal villas in Somatane over cramped high-rise apartments in congested central suburbs.
            </p>
            <ul className="space-y-2 text-xs text-[#E4E2D3]/70">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>20-minute signal-free commute via Expressway</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Significantly lower cost per sq.ft. compared to Baner</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm shadow-xl">
            <Landmark className="w-6 h-6 text-[#E15E3F] mb-4" />
            <h2 className="text-2xl font-heading text-white mb-3">2. Mega Infrastructure Catalysts</h2>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              Government infrastructure spending is heavily concentrated in the PMRDA Pune Ring Road and the Missing Link Expressway tunnel, cutting travel times from Mumbai by 30 minutes and driving land valuations upward.
            </p>
            <ul className="space-y-2 text-xs text-[#E4E2D3]/70">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pune Ring Road connecting directly to Somatane</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Navi Mumbai Airport operational connectivity in ~75 mins</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm shadow-xl">
            <TrendingUp className="w-6 h-6 text-[#E15E3F] mb-4" />
            <h2 className="text-2xl font-heading text-white mb-3">3. Villa Scarcity & Land Value Appreciation</h2>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              Unlike high-rise apartments where supply is multiplied vertically across hundreds of floors, gated villa communities offer pure proportionate land ownership with fixed low-density exclusivity.
            </p>
            <ul className="space-y-2 text-xs text-[#E4E2D3]/70">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Land value historically appreciates faster than building depreciation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Only 16 acres of low-rise Master-Planned estate in Somatane</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm shadow-xl">
            <ShieldCheck className="w-6 h-6 text-[#E15E3F] mb-4" />
            <h2 className="text-2xl font-heading text-white mb-3">4. Weekend Home & Rental Yield Potential</h2>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              Somatane serves as an attractive luxury second home destination for Mumbai and Pune HNIs looking for weekend wellness retreats, creating secondary income opportunities via premium stays.
            </p>
            <ul className="space-y-2 text-xs text-[#E4E2D3]/70">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Resort-style Clubhouse & amenities managed by Supreme Universal</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ready community infrastructure with 24x7 gated security</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Request Detailed ROI & Investment Report</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Get historical micro-market appreciation data and rental yield case studies.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Request Investment Deck <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
