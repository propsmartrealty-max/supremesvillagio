import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Building2, Check, ArrowRight, Maximize2, TreePine } from 'lucide-react';

export const metadata: Metadata = {
  title: '4 BHK Luxury Townhouses in Somatane Pune | Supreme Villagio',
  description: '4 BHK luxury townhouses at Supreme Villagio Somatane Pune. 2,200–2,400 sq.ft. carpet area, independent G+2 low-rise living, private parking, starting ₹2.89 Cr*.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/townhouses',
  },
  openGraph: {
    title: '4 BHK Luxury Townhouses in Somatane Pune | Supreme Villagio',
    description: 'Exclusive 4 BHK townhouses in Somatane Pune at Supreme Villagio with ready clubhouse and resort amenities.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/townhouses',
    type: 'website',
  },
};

const townhouseSchema = {
  '@context': 'https://schema.org',
  '@type': 'SingleFamilyResidence',
  'name': '4 BHK Luxury Townhouse at Supreme Villagio',
  'description': 'G+2 independent townhouse with private terrace, covered parking, and 65% open green spaces.',
  'numberOfBedrooms': 4,
  'numberOfBathroomsTotal': 4,
  'floorSize': {
    '@type': 'QuantitativeValue',
    'value': 2300,
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

export default function TownhousesPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="townhouse-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(townhouseSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Independent G+2 Townhouses
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">4 BHK</span> Luxury Townhouses
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Combining the freedom of an independent home with the safety and amenities of a gated 16-acre resort community. 
          The townhouses at Supreme Villagio offer multi-level living with private rooftop terraces and dedicated vehicle parking.
        </p>

        {/* Hero Visual Banner */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden mb-16 shadow-2xl border border-[#E4E2D3]/15">
          <Image
            src="https://cdn.supremeuniversal.com/media/fIAB41_Villagio--KD--Wellness-Spine.jpg"
            alt="4 BHK Townhouse Row and Landscaped Wellness Spine at Supreme Villagio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C25] via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
            <span className="bg-[#E15E3F] text-white text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-sm mb-2 inline-block">
              Starting from ₹2.89 Cr*
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white">Independent G+2 Townhouses Along The Central Green Spine</h2>
          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Maximize2 className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Carpet Area</p>
            <p className="text-xl md:text-2xl font-heading text-white">2,200 – 2,400</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">Sq. Ft. Efficient Plan</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Building2 className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Configuration</p>
            <p className="text-xl md:text-2xl font-heading text-white">4 Bedrooms</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">G+2 Multi-Level Layout</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <TreePine className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Open Space</p>
            <p className="text-xl md:text-2xl font-heading text-emerald-400">65% Green</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">Zero High-Rise Shadows</p>
          </div>
          <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/15">
            <Maximize2 className="w-5 h-5 text-[#E15E3F] mb-3" />
            <p className="text-[11px] text-[#E4E2D3]/60 uppercase tracking-widest mb-1">Terrace</p>
            <p className="text-xl md:text-2xl font-heading text-white">Private Sky Deck</p>
            <p className="text-xs text-[#E4E2D3]/70 font-light">Exclusive Rooftop</p>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Request Townhouse Cost Sheet & Floor Plans</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Explore payment schedules and immediate possession options.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Check Price & Availability <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
