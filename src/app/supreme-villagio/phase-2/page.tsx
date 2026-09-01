import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio Phase 2 (OC Received) | MahaRERA P52100049506',
  description: 'Supreme Villagio Phase 2 Somatane. Luxury twin villas and townhouses with OC received. Verified MahaRERA registration P52100049506.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/phase-2',
  },
};

export default function PhaseTwoPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
            Completed • OC Received • MahaRERA P52100049506
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">Phase II</span>
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          MahaRERA Registration Number: <strong className="text-white font-mono">P52100049506</strong>. 
          Phase II continues the low-density architectural masterplan of Supreme Villagio with premium townhouses and twin villas embedded in curated botanical landscapes by Singapore-based Site Concepts International.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <p className="text-xs uppercase tracking-widest text-[#E15E3F] mb-1 font-semibold">Status</p>
            <p className="text-2xl font-heading text-emerald-400">OC Received</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light mt-1">Gated community active</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <p className="text-xs uppercase tracking-widest text-[#E15E3F] mb-1 font-semibold">RERA Number</p>
            <p className="text-xl font-mono text-white">P52100049506</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light mt-1">Verified on MahaRERA</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <p className="text-xs uppercase tracking-widest text-[#E15E3F] mb-1 font-semibold">Landscape</p>
            <p className="text-2xl font-heading text-white">65% Open Green</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light mt-1">Site Concepts International</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Explore Available Units in Phase II</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Explore 4 BHK townhouse and twin villa availability.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Check Phase II Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
