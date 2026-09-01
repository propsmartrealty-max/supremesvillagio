import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Home, Check, ArrowRight, Compass, Maximize2, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: '4 BHK Luxury Twin Villas in Somatane Pune | Supreme Villagio',
  description: 'Explore 4 BHK luxury twin villas at Supreme Villagio Somatane. 2,600+ sq.ft. carpet area, 3-side open private garden, mountain views, and ready Club Villagio.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/4-bhk-villas',
  },
  openGraph: {
    title: '4 BHK Luxury Twin Villas in Somatane Pune | Supreme Villagio',
    description: 'Exclusive 4 BHK twin villas at Supreme Villagio Somatane Pune across 16 scenic acres with private gardens.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/4-bhk-villas',
    type: 'website',
  },
};

const villaSchema = {
  '@context': 'https://schema.org',
  '@type': 'SingleFamilyResidence',
  'name': '4 BHK Luxury Twin Villa at Supreme Villagio',
  'description': '4 BHK Twin Villa featuring private garden, double-height living room, and Sahyadri mountain views.',
  'numberOfBedrooms': 4,
  'numberOfBathroomsTotal': 4,
  'floorSize': {
    '@type': 'QuantitativeValue',
    'value': 2750,
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

export default function FourBhkVillasPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="villa-4bhk-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(villaSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Home className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Luxury Twin Villa Inventory
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">4 BHK</span> Twin Villas
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Designed for families seeking uncompromised privacy, green space, and architectural elegance. 
          The 4 BHK Twin Villas at Supreme Villagio feature 3-side open plots, double-height living areas, 
          and seamless integration with Somatane&apos;s 616m hill-station climate.
        </p>

        {/* Hero Visual Banner */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden mb-16 shadow-2xl border border-[#E4E2D3]/15">
          <Image
            src="https://cdn.supremeuniversal.com/media/Supreme-Villagio--Desktop-Banner-2_sx0rpm.jpg"
            alt="4 BHK Luxury Twin Villa Exterior at Supreme Villagio Somatane"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C25] via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
            <span className="bg-[#E15E3F] text-white text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-sm mb-2 inline-block">
              Starting from ₹3.45 Cr*
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white">4 BHK Twin Villa Elevation & Private Lawn</h2>
          </div>
        </div>

        {/* Key Specifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Maximize2 className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Carpet Area</p>
            <p className="text-xl md:text-2xl font-heading text-white">2,600 – 2,900</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">Sq. Ft. RERA Area</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Compass className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Plot Orientation</p>
            <p className="text-xl md:text-2xl font-heading text-white">3-Side Open</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">Private Garden Courtyard</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Home className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Structure</p>
            <p className="text-xl md:text-2xl font-heading text-white">G + 2 Floors</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">With Private Terrace</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Shield className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">RERA Status</p>
            <p className="text-xl md:text-2xl font-heading text-emerald-400">OC Received</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">Phases 1 & 2 Approved</p>
          </div>
        </div>

        {/* Detailed Layout & Floor Level Features */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 md:p-12 rounded-sm mb-16">
          <h3 className="text-2xl md:text-3xl font-heading font-light text-white mb-8">
            Architectural Level-by-Level Layout
          </h3>

          <div className="space-y-8 divide-y divide-[#E4E2D3]/10">
            <div className="pt-6 first:pt-0">
              <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold block mb-1">Level 01</span>
              <h4 className="text-xl font-heading text-white mb-3">Ground Level: Grand Living, Dining & Guest Bedroom</h4>
              <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
                Expansive double-height living room seamlessly extending onto the private wooden deck and wrap-around garden lawn. Designer show kitchen with separate utility zone, powder room, and private guest suite with garden views.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[#E4E2D3]/70">
                <span>• 2 Covered Car Parks</span>
                <span>• Foyer & Vestibule</span>
                <span>• Private Landscaped Garden</span>
                <span>• Outdoor Breakfast Patio</span>
              </div>
            </div>

            <div className="pt-6">
              <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold block mb-1">Level 02</span>
              <h4 className="text-xl font-heading text-white mb-3">First Level: Master Suite & Kids Bedroom Lounge</h4>
              <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
                Grand master suite featuring a dedicated walk-in dressing wardrobe, 5-fixture ensuite bath with freestanding tub provision, and private sunset-facing balcony. Adjoining spacious kids bedroom with ensuite bathroom.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[#E4E2D3]/70">
                <span>• Walk-in Dresser</span>
                <span>• Hardwood Finished Flooring</span>
                <span>• Family Entertainment Lounge</span>
                <span>• Large Picture Windows</span>
              </div>
            </div>

            <div className="pt-6">
              <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold block mb-1">Level 03</span>
              <h4 className="text-xl font-heading text-white mb-3">Second Level: Studio / 4th Bedroom & Rooftop Terrace</h4>
              <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
                A versatile 4th bedroom or private executive work studio with attached terrace. Expansive open rooftop sky lounge designed for stargazing and private barbecue gatherings overlooking the Sahyadri mountains.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[#E4E2D3]/70">
                <span>• Panoramic Sky Terrace</span>
                <span>• Private Work Studio Space</span>
                <span>• Barbecue Deck Provision</span>
                <span>• Utility & Solar Provisions</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Download 4 BHK Twin Villa Floor Plan PDF</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Get full architectural blueprints with room-by-room dimensions.</p>
          </div>
          <Link
            href="/supreme-villagio/floor-plans"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Download Blueprints <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
