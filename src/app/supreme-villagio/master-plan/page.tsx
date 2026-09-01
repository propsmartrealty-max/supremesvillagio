import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, CheckCircle2, ArrowRight, TreePine, Map } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio Master Plan | 16-Acre Low-Rise Gated Community Layout',
  description: 'Explore the 16-acre master plan of Supreme Villagio Somatane. Designed by Site Concepts International, Singapore. 65% open green space, wellness spine, and Club Villagio.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/master-plan',
  },
  openGraph: {
    title: 'Supreme Villagio Master Plan | 16-Acre Low-Rise Gated Community Layout',
    description: 'Site layout and master plan for Supreme Villagio Somatane Pune by Site Concepts International.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/master-plan',
    type: 'website',
  },
};

export default function MasterPlanPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-2 mb-4">
          <Map className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            16-Acre Low-Rise Masterplan
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">Master Plan</span> & Site Layout
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Crafted in collaboration with Singapore-based landscape master planner Mark Mahan (Site Concepts International), the 16-acre Supreme Villagio master plan is conceived as a pedestrian-friendly, nature-integrated sanctuary with over 65% dedicated open green spaces and zero high-rise density.
        </p>

        <div className="relative w-full h-[450px] md:h-[600px] rounded-sm overflow-hidden mb-16 shadow-2xl border border-[#E4E2D3]/15">
          <Image
            src="https://cdn.supremeuniversal.com/media/fIAB41_Villagio--KD--Wellness-Spine.jpg"
            alt="Supreme Villagio 16 Acre Master Plan and Wellness Spine"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C25] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
            <span className="bg-[#E15E3F] text-white text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-sm mb-2 inline-block">
              Singapore Designed Masterplan
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white">Central Wellness Spine & Botanical Green Zones</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-xl font-heading text-white mb-3">1. Central Wellness Spine</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              A continuous pedestrian corridor connecting all residential clusters with reflexology tracks, meditation gazebos, and aromatic butterfly gardens.
            </p>
          </div>
          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-xl font-heading text-white mb-3">2. Club Villagio Hub</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              18,500 sq.ft. grand community clubhouse featuring an Olympic-length swimming pool, banquet halls, squash court, indoor games, and wellness gymnasium.
            </p>
          </div>
          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-xl font-heading text-white mb-3">3. Low-Rise Exclusivity</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              100% villas and townhouses with zero high-rise shadow casting, ensuring uninterrupted mountain winds and sunlight for every single home.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Request High-Resolution Master Plan PDF</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Download the complete site blueprint with villa numbering and plot demarcations.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Download Masterplan <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
