import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio Possession Date, Handover & OC Status | Somatane Pune',
  description: 'Verified possession dates and Occupation Certificate status for Supreme Villagio Somatane. Phase 1 & 2 handed over with OC, Phase 3 possession schedule December 2028.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/possession',
  },
  openGraph: {
    title: 'Supreme Villagio Possession Date & Phase Handover Status',
    description: 'Detailed possession timeline and OC status for Supreme Villagio Somatane Pune.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/possession',
    type: 'website',
  },
};

export default function PossessionPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Possession & Handover Status
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">Possession</span> Dates & OC Timelines
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          To ensure total clarity for buyers, here is the official status across all three phases of Supreme Villagio in Somatane, distinguishing between completed and handed-over phases versus newly launched under-construction inventory.
        </p>

        <div className="space-y-6 mb-16">
          <div className="bg-[#1C2C25] border border-emerald-500/30 p-8 rounded-sm shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  Handed Over / OC Granted
                </span>
                <h2 className="text-2xl font-heading text-white mt-2">Phase I (MahaRERA: P52100046867)</h2>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            </div>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-3">
              Construction is 100% complete with full Occupation Certificate (OC) issued. Key handovers are complete, and community residents are enjoying the operational 18,500 sq.ft. Club Villagio.
            </p>
          </div>

          <div className="bg-[#1C2C25] border border-emerald-500/30 p-8 rounded-sm shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  Handed Over / OC Granted
                </span>
                <h2 className="text-2xl font-heading text-white mt-2">Phase II (MahaRERA: P52100049506)</h2>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            </div>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-3">
              Physical construction and infrastructure works are completed with OC received. Townhouses and luxury twin villas are ready for possession.
            </p>
          </div>

          <div className="bg-[#1C2C25] border border-amber-500/30 p-8 rounded-sm shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  Under Construction • Active Launch
                </span>
                <h2 className="text-2xl font-heading text-white mt-2">Phase III (MahaRERA: P52100055048)</h2>
              </div>
              <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
            </div>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-3">
              Phase 3 hillside villas are currently in active construction stage. The statutory MahaRERA revised completion schedule is <strong>31 December 2028</strong>, providing statutory milestone protection for investors.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Check Ready vs Under Construction Inventory</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Explore available configurations with immediate move-in or flexible milestone plans.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Explore Price & Inventory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
