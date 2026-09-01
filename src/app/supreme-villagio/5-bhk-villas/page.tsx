import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Crown, Check, ArrowRight, Maximize2, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '5 BHK Luxury Presidential Villas in Somatane Pune | Supreme Villagio',
  description: 'Ultra-exclusive 5 BHK presidential villas at Supreme Villagio Somatane. 3,400–3,900 sq.ft. carpet area, private elevator provision, panoramic mountain view terraces, starting ₹4.85 Cr*.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/5-bhk-villas',
  },
  openGraph: {
    title: '5 BHK Luxury Presidential Villas in Somatane Pune | Supreme Villagio',
    description: '19 exclusive 5 BHK presidential villas at Supreme Villagio Somatane Pune with panoramic mountain views and private elevators.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/5-bhk-villas',
    type: 'website',
  },
};

const presidentialVillaSchema = {
  '@context': 'https://schema.org',
  '@type': 'SingleFamilyResidence',
  'name': '5 BHK Grand Presidential Villa at Supreme Villagio',
  'description': 'Ultra-luxury 5 BHK Presidential Villa with private elevator, 3 car parks, and panoramic Sahyadri views.',
  'numberOfBedrooms': 5,
  'numberOfBathroomsTotal': 6,
  'floorSize': {
    '@type': 'QuantitativeValue',
    'value': 3650,
    'unitCode': 'FTK',
  },
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Somatane',
    'addressRegion': 'Pune, Maharashtra',
    'postalCode': '410506',
    'addressCountry': 'IN',
  },
};

export default function FiveBhkVillasPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="villa-5bhk-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(presidentialVillaSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Flagship Presidential Collection • Only 19 Units
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">5 BHK</span> Presidential Villas
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Crafted for discerning connoisseurs, the 5 BHK Presidential Villas represent the pinnacle of luxury living in Pune. Situated on elevated hillside plots with panoramic views of the Sahyadri mountains, each residence features private elevator access, 3 covered vehicle bays, and grand entertaining terraces.
        </p>

        {/* Hero Visual Banner */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden mb-16 shadow-2xl border border-[#E4E2D3]/15">
          <Image
            src="https://cdn.supremeuniversal.com/media/Villagio-L--KD--Club-housemin.jpg"
            alt="5 BHK Grand Presidential Villa at Supreme Villagio Somatane"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C25] via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
            <span className="bg-[#E15E3F] text-white text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-sm mb-2 inline-block">
              Starting from ₹4.85 Cr*
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white">5 BHK Presidential Villa Panoramic Hillside Estate</h2>
          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Maximize2 className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Carpet Area</p>
            <p className="text-xl md:text-2xl font-heading text-white">3,400 – 3,900</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">Sq. Ft. Living Space</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Sparkles className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Exclusivity</p>
            <p className="text-xl md:text-2xl font-heading text-white">19 Villas</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">Limited Collection</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Crown className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Elevator</p>
            <p className="text-xl md:text-2xl font-heading text-white">Private Lift</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">Ground to Rooftop Sky Deck</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Shield className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Parking</p>
            <p className="text-xl md:text-2xl font-heading text-white">3 Covered Bays</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">EV Charging Pre-Installed</p>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Book a Private Presidential Villa Tour</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Experience the completed sample villa and private hillside grounds with a dedicated estate advisor.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Check Availability & Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
