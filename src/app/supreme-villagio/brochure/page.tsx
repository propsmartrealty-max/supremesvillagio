import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FileText, Download, ShieldCheck, Check, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Download Supreme Villagio Official Brochure & Floor Plan Kit (PDF)',
  description: 'Download the official Supreme Villagio Somatane brochure PDF. Includes high-resolution 4 & 5 BHK villa floor plans, 16-acre master layout by Site Concepts Singapore, and cost sheet.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/brochure',
  },
  openGraph: {
    title: 'Download Supreme Villagio Official Brochure & Master Plan (PDF)',
    description: 'Instant PDF download of Supreme Villagio Somatane floor plans, pricing matrix, and master plan.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/brochure',
    type: 'website',
  },
};

const brochureSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  'name': 'Supreme Villagio Official Brochure & Technical Dossier',
  'fileFormat': 'application/pdf',
  'url': 'https://www.supremesvillagio.com/supreme-villagio/brochure',
  'publisher': {
    '@type': 'Organization',
    'name': 'Supreme Universal',
  },
};

export default function BrochurePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="brochure-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brochureSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Official Technical Kit & E-Brochure
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Supreme Villagio <span className="text-[#E15E3F] italic">Brochure & Dossier</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          Access the complete architectural portfolio for Supreme Villagio Somatane. The kit includes high-resolution CAD floor plans, plot dimension matrices, Club Villagio amenity catalogs, and the 16-acre Singapore landscape master plan.
        </p>

        {/* Brochure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Main Brochure */}
          <div className="bg-[#1C2C25] border border-[#E15E3F]/40 p-8 rounded-sm shadow-xl">
            <div className="text-[#E15E3F] mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading mb-2">Master Project Brochure</h3>
            <p className="text-xs text-[#E4E2D3]/60 mb-6">PDF Document • 48 Pages • High-Res</p>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> 16-Acre Master Site Plan</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> 18,500 Sq.Ft. Club Villagio Specs</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Landscape Masterplan (SCI Singapore)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Western Ghats Elevation & Microclimate</li>
            </ul>
            <a
              href="https://d66htbxvzotmo.cloudfront.net/media/Supreme-Villagio-E-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#E15E3F] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#F07F63] transition-colors"
            >
              <Download className="w-4 h-4" /> Download E-Brochure
            </a>
          </div>

          {/* Floor Plans Kit */}
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <div className="text-[#1A6F44] mb-4">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading mb-2">4 & 5 BHK Floor Plan Kit</h3>
            <p className="text-xs text-[#E4E2D3]/60 mb-6">PDF Technical Drawings • Level-by-Level</p>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> 4 BHK Townhouse (G+2 Blueprint)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> 4 BHK Twin Villa (3-Side Lawn)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> 5 BHK Presidential (Elevator Layout)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Usable Carpet & Plot Area Schedule</li>
            </ul>
            <Link
              href="/supreme-villagio/floor-plans"
              className="inline-flex items-center justify-center gap-2 w-full border border-[#E4E2D3]/30 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#E15E3F] transition-colors"
            >
              Explore Floor Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Pricing & Cost Sheet */}
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <div className="text-[#E15E3F] mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading mb-2">Price & Payment Schedule</h3>
            <p className="text-xs text-[#E4E2D3]/60 mb-6">Detailed Cost Breakdown • Milestone Plan</p>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Unit-wise Starting Price Breakdown</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Maharashtra 7% Stamp Duty Matrix</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Phase 3 Milestone Payment Schedule</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Pre-approved Banking Partner Details</li>
            </ul>
            <Link
              href="/supreme-villagio/price"
              className="inline-flex items-center justify-center gap-2 w-full border border-[#E4E2D3]/30 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#E15E3F] transition-colors"
            >
              View Price Matrix <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
