import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, HardHat, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio Phase 3 (New Launch & Under Construction) | MahaRERA P52100055048',
  description: 'Supreme Villagio Phase 3 Somatane. Newly launched 4 & 5 BHK luxury hillside twin villas. Active construction stage with MahaRERA revised completion December 2028.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/phase-3',
  },
};

export default function PhaseThreePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <HardHat className="w-5 h-5 text-amber-400" />
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Active Construction • MahaRERA P52100055048 • Possession Dec 2028
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">Phase III</span>
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          MahaRERA Registration Number: <strong className="text-white font-mono">P52100055048</strong>. 
          Phase III introduces the most prestigious hillside plots in Supreme Villagio, featuring ultra-premium 4 & 5 BHK Twin Villas with private elevators, expansive sunset decks, and milestone-linked flexible payment plans.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <p className="text-xs uppercase tracking-widest text-[#E15E3F] mb-1 font-semibold">Status</p>
            <p className="text-2xl font-heading text-amber-400">Under Construction</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light mt-1">Active structural execution</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <p className="text-xs uppercase tracking-widest text-[#E15E3F] mb-1 font-semibold">RERA Number</p>
            <p className="text-xl font-mono text-white">P52100055048</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light mt-1">Verified on MahaRERA</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <p className="text-xs uppercase tracking-widest text-[#E15E3F] mb-1 font-semibold">Possession Date</p>
            <p className="text-2xl font-heading text-white">Dec 31, 2028*</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light mt-1">MahaRERA statutory schedule</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Book Phase III Launch Pricing & Early Bird Benefits</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Lock in introductory milestone payment plans for 4 & 5 BHK hillside villas.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Explore Phase III Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
