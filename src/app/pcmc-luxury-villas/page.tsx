import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Factory, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Villas near PCMC & Talegaon Pune | 4 & 5 BHK Gated Communities',
  description: 'Luxury 4 & 5 BHK villas near PCMC, Nigdi, and Talegaon. Discover Supreme Villagio Somatane (10 mins from PCMC/Talegaon) with private gardens and 18,500 sq.ft. clubhouse.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/pcmc-luxury-villas',
  },
  openGraph: {
    title: 'Luxury Villas near PCMC & Talegaon Pune | Supreme Villagio',
    description: 'Executive villas for PCMC business owners and industrial leaders. 10-min commute, starting ₹2.89 Cr*.',
    url: 'https://www.supremesvillagio.com/pcmc-luxury-villas',
    type: 'website',
  },
};

const pcmcSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Luxury Villas near PCMC',
  'description': 'Luxury gated villas and townhouses near PCMC and Talegaon MIDC.',
  'url': 'https://www.supremesvillagio.com/pcmc-luxury-villas',
};

export default function PcmcLuxuryVillasPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="pcmc-villas-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pcmcSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-2 mb-4">
          <Factory className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            PCMC & Industrial Leadership Housing
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Luxury Villas near <span className="text-[#E15E3F] italic">PCMC & Talegaon</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          For business owners, manufacturing leaders, and senior executives in the Pimpri-Chinchwad (PCMC), Talegaon MIDC, and Chakan industrial belts, Supreme Villagio provides a serene, low-density horizontal retreat just 10 to 15 minutes away via the expressway corridor.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-xl font-heading mb-3">10-Min Fast Commute</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              Direct access to Nigdi, Akurdi, Chinchwad, and Talegaon MIDC via the Old Mumbai-Pune Highway and expressway bypass.
            </p>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-xl font-heading mb-3">5-Tier Security</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              Gated community with 24x7 biometric access control, RFID vehicle management, and perimeter video analytics.
            </p>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-xl font-heading mb-3">MahaRERA Assurance</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
              Phases 1 & 2 100% completed with OC received. Phase 3 active construction (MahaRERA Reg P52100055048).
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-[#E4E2D3]/15 pt-8 flex flex-wrap gap-4 justify-between items-center text-xs uppercase tracking-widest">
          <Link href="/talegaon-real-estate" className="text-[#E15E3F] hover:underline flex items-center gap-1">
            Talegaon Market Hub <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio/price" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Price Matrix (From ₹2.89 Cr*) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio-rera" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            MahaRERA Numbers <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
