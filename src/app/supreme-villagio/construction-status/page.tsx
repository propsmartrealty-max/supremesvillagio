import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { HardHat, CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio Construction Status & Live Progress (September 2026)',
  description: 'Verified construction updates for Supreme Villagio Somatane. Phase 1 & 2 OC Received and Handed Over. Phase 3 Hillside Villas in active superstructure. MahaRERA P52100055048.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/construction-status',
  },
  openGraph: {
    title: 'Supreme Villagio Construction Status & Handover Timeline (2026)',
    description: 'Real-time construction audit of Supreme Villagio Somatane Pune. Phase 1 & 2 Completed. Phase 3 active progress.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/construction-status',
    type: 'website',
  },
};

const constructionSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Supreme Villagio Construction Status Update',
  'description': 'Live construction milestone audit for Supreme Villagio Somatane, Pune.',
  'url': 'https://www.supremesvillagio.com/supreme-villagio/construction-status',
  'datePosted': '2026-09-02',
};

export default function ConstructionStatusPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="construction-status-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(constructionSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <HardHat className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Live Engineering & Handover Audit
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Supreme Villagio <span className="text-[#E15E3F] italic">Construction Status</span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider text-[#E4E2D3]/70 uppercase mb-8">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-[#1A6F44]" /> Last Verified: September 2, 2026
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#E15E3F]" /> Source: MahaRERA / Project Site Audit
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-[#E15E3F]" /> Somatane, Pune West
          </span>
        </div>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          Supreme Universal maintains absolute milestone transparency. Phases 1 & 2 are 100% finished with full Occupation Certificates (OC) granted and families residing in their bespoke villas. Phase 3 hillside residences are progressing rapidly ahead of statutory schedule.
        </p>

        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phase 1 */}
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#1A6F44]/30 text-[#1A6F44] border border-[#1A6F44] px-3 py-1 text-xs uppercase font-bold tracking-widest rounded-sm">
                OC Received • Handed Over
              </span>
              <CheckCircle2 className="w-6 h-6 text-[#1A6F44]" />
            </div>
            <h3 className="text-2xl font-heading mb-2">Phase I Residences</h3>
            <p className="text-xs text-[#E15E3F] font-mono mb-4">MahaRERA: P52100046867</p>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light mb-6">
              <li>• 100% Civil & MEP Works Finished</li>
              <li>• Full Occupation Certificate (OC) Issued</li>
              <li>• Homeowner Possession Handed Over</li>
              <li>• Internal Avenue Roads & Lighting Live</li>
            </ul>
            <Link
              href="/supreme-villagio/phase-1"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E15E3F] hover:underline"
            >
              View Phase 1 Overview <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Phase 2 */}
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#1A6F44]/30 text-[#1A6F44] border border-[#1A6F44] px-3 py-1 text-xs uppercase font-bold tracking-widest rounded-sm">
                OC Received • Handed Over
              </span>
              <CheckCircle2 className="w-6 h-6 text-[#1A6F44]" />
            </div>
            <h3 className="text-2xl font-heading mb-2">Phase II Residences</h3>
            <p className="text-xs text-[#E15E3F] font-mono mb-4">MahaRERA: P52100049506</p>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light mb-6">
              <li>• 100% Civil Superstructure Delivered</li>
              <li>• Landscape Spine by Site Concepts Singapore Live</li>
              <li>• 18,500 Sq.Ft. Club Villagio Fully Operational</li>
              <li>• Security & Concierge Operational 24x7</li>
            </ul>
            <Link
              href="/supreme-villagio/phase-2"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E15E3F] hover:underline"
            >
              View Phase 2 Overview <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Phase 3 */}
          <div className="bg-[#1C2C25] border border-[#E15E3F]/40 p-8 rounded-sm shadow-xl relative">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#E15E3F]/20 text-[#E15E3F] border border-[#E15E3F] px-3 py-1 text-xs uppercase font-bold tracking-widest rounded-sm">
                Under Active Construction
              </span>
              <Clock className="w-6 h-6 text-[#E15E3F]" />
            </div>
            <h3 className="text-2xl font-heading mb-2">Phase III Hillside Villas</h3>
            <p className="text-xs text-[#E15E3F] font-mono mb-4">MahaRERA: P52100055048</p>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light mb-6">
              <li>• Hillside Villa Plinth Works Completed</li>
              <li>• RCC Superstructure Slabs in Rapid Progress</li>
              <li>• Underground Utility Ducts & Storm Drains Laid</li>
              <li>• Statutory MahaRERA Possession: Dec 31, 2028</li>
            </ul>
            <Link
              href="/supreme-villagio/phase-3"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E15E3F] hover:underline"
            >
              View Phase 3 Inventory <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-heading mb-1">Schedule a Live Site & Sample Villa Inspection</h3>
            <p className="text-sm text-[#E4E2D3]/70 font-light">
              Tour the completed Phase 1 & 2 sample villas and experience the active 18,500 sq.ft. Club Villagio in person.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/supreme-villagio-rera"
              className="border border-[#E4E2D3]/30 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#E15E3F] transition-colors"
            >
              Verify MahaRERA
            </Link>
            <Link
              href="/supreme-villagio/price"
              className="bg-[#E15E3F] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#F07F63] transition-colors shadow-lg"
            >
              View Price Matrix
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
