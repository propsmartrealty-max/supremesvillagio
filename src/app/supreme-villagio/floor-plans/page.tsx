import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Layers, Download, Check, ArrowRight, Maximize2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio Floor Plans | 4 & 5 BHK Villas & Townhouses Blueprints',
  description: 'Download official floor plans for Supreme Villagio Somatane. Detailed carpet areas, plot sizes, room dimensions for 4 BHK Townhouses, 4 BHK Twin Villas, and 5 BHK Villas.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/floor-plans',
  },
  openGraph: {
    title: 'Supreme Villagio Floor Plans | 4 & 5 BHK Villas & Townhouses Blueprints',
    description: 'Explore room-by-room dimensions and layout blueprints for Supreme Villagio Somatane Pune.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/floor-plans',
    type: 'website',
  },
};

const PLANS = [
  {
    name: '4 BHK Luxury Twin Villa (Type A)',
    carpetArea: '2,750 Sq. Ft.',
    plotArea: '3,200 – 3,600 Sq. Ft.',
    image: 'https://cdn.supremeuniversal.com/media/Supreme-Villagio--Desktop-Banner-2_sx0rpm.jpg',
    levels: [
      'Ground Floor: Double-height living, dining, show kitchen, guest bedroom, garden deck, 2 car ports.',
      'First Floor: Master suite with walk-in dressing, kids bedroom with attached bath, family lounge.',
      'Second Floor: 4th bedroom / executive study, attached bathroom, open party terrace.',
    ],
  },
  {
    name: '4 BHK Premium Townhouse (Type B)',
    carpetArea: '2,300 Sq. Ft.',
    plotArea: 'Independent G+2 Plot',
    image: 'https://cdn.supremeuniversal.com/media/fIAB41_Villagio--KD--Wellness-Spine.jpg',
    levels: [
      'Ground Floor: Living & dining area opening to patio, modular kitchen, powder room, covered parking.',
      'First Floor: 2 master bedrooms with dedicated ensuite baths and sit-out balconies.',
      'Second Floor: 4th bedroom, private entertainment terrace with pergola provision.',
    ],
  },
  {
    name: '5 BHK Grand Presidential Villa (Type C)',
    carpetArea: '3,650 Sq. Ft.',
    plotArea: '4,500+ Sq. Ft. Hillside Plot',
    image: 'https://cdn.supremeuniversal.com/media/Villagio-L--KD--Club-housemin.jpg',
    levels: [
      'Ground Floor: Formal & informal living halls, private lift lobby, guest suite, servant room, 3 car bays.',
      'First Floor: Ultra-luxury master suite with jacuzzi bath, 2 additional bedrooms with dressing rooms.',
      'Second Floor: 5th bedroom, private home cinema lounge, rooftop sky observatory & BBQ terrace.',
    ],
  },
];

export default function FloorPlansPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Architectural Layouts & Blueprints
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">Floor Plans</span> & Blueprint Directory
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Designed by international master planners with zero space wastage, large fenestration for natural cross-ventilation, and maximum garden exposure. Explore the level-by-level architectural blueprints below.
        </p>

        {/* Floor Plan Cards */}
        <div className="space-y-12 mb-16">
          {PLANS.map((plan, idx) => (
            <div key={idx} className="bg-[#1C2C25] border border-[#E4E2D3]/15 rounded-sm p-8 md:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-[260px] md:h-[320px] rounded-sm overflow-hidden border border-[#E4E2D3]/10">
                  <Image
                    src={plan.image}
                    alt={`${plan.name} Floor Plan Render`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#E15E3F] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                      RERA Carpet: {plan.carpetArea}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading text-white mb-2">{plan.name}</h2>
                    <p className="text-xs font-mono text-[#E15E3F] mb-6 uppercase tracking-wider">
                      Plot Space: {plan.plotArea}
                    </p>

                    <h4 className="text-xs uppercase tracking-widest text-[#E4E2D3]/60 mb-3 font-semibold">
                      Level-by-Level Space Distribution
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {plan.levels.map((lvl, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-3 text-xs md:text-sm text-[#E4E2D3]/85 font-light leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{lvl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/supreme-villagio/price"
                      className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold py-3 px-6 text-xs uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all"
                    >
                      Request Cost Sheet
                    </Link>
                    <Link
                      href="/supreme-villagio-rera"
                      className="border border-[#E4E2D3]/20 text-[#E4E2D3] py-3 px-6 text-xs uppercase tracking-widest hover:border-[#E15E3F] hover:text-[#E15E3F] transition-all"
                    >
                      View RERA Certifications
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Need Exact CAD / Vector Architectural Drawings?</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Our engineering team can share high-res PDF booklets including electrical and plumbing layout plans.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Contact Sales Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
