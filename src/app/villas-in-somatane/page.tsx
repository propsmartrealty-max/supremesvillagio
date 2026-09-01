import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Villas in Somatane Pune | Luxury Bungalows & Gated Community Homes',
  description: 'Find luxury 4 & 5 BHK villas and townhouses in Somatane, Pune. Explore Supreme Villagio with 16 acres of low-rise master-planned living, mountain views, starting ₹2.89 Cr*.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/villas-in-somatane',
  },
};

export default function VillasInSomatanePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <Compass className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Somatane Real Estate Hub
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Luxury <span className="italic text-[#E15E3F]">Villas in Somatane</span>, Pune
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Somatane has emerged as Pune&apos;s premier destination for luxury villa and bungalow living. Nestled along the Mumbai-Pune Expressway at an altitude of 616 meters, Somatane offers cleaner air, picturesque mountain horizons, and effortless connectivity to Baner and Hinjewadi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-2xl font-heading text-white mb-3">Supreme Villagio Somatane</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              The flagship 16-acre gated community featuring 4 & 5 BHK Twin Villas and independent Townhouses. Phase 1 & 2 OC received, ready 18,500 sq.ft. Club Villagio.
            </p>
            <div className="flex items-center justify-between text-xs text-[#E15E3F] font-bold uppercase tracking-wider">
              <span>Starting from ₹2.89 Cr*</span>
              <Link href="/supreme-villagio/price" className="hover:underline flex items-center gap-1">
                View Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-2xl font-heading text-white mb-3">Why Choose Somatane?</h3>
            <ul className="space-y-2.5 text-xs text-[#E4E2D3]/80 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero high-rise congestion; 100% low-rise living</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>20 minutes to Hinjewadi Phase 1, 2, 3</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cooler microclimate matching Lonavala</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Explore Available Villas in Somatane</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Schedule a private tour of Supreme Villagio today.</p>
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
