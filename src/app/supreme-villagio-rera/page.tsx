import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio RERA Number, Phase Status & Possession Dates | MahaRERA Verified',
  description: 'Verified MahaRERA registration details for Supreme Villagio Somatane (P52100046867, P52100049506, P52100055048). Phase 1 & 2 OC received, Phase 3 possession schedule.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio-rera',
  },
  openGraph: {
    title: 'Supreme Villagio RERA Number, Phase Status & Possession Dates',
    description: 'Official MahaRERA registration records and phase-wise completion details for Supreme Villagio Somatane, Pune.',
    url: 'https://www.supremesvillagio.com/supreme-villagio-rera',
    type: 'website',
  },
};

const RERA_DATA = [
  {
    phase: 'Supreme Villagio Phase I',
    reraNumber: 'P52100046867',
    typology: 'Townhouses & Twin Villas',
    status: 'Completed / OC Received',
    statusType: 'completed',
    possession: 'Ready for Possession / Handover Complete',
    reraLink: 'https://maharera.mahaonline.gov.in',
    highlights: 'Occupation Certificate (OC) received. Club Villagio operational.',
  },
  {
    phase: 'Supreme Villagio Phase II',
    reraNumber: 'P52100049506',
    typology: 'Luxury Twin Villas & Townhouses',
    status: 'Completed / OC Received',
    statusType: 'completed',
    possession: 'Ready for Possession',
    reraLink: 'https://maharera.mahaonline.gov.in',
    highlights: 'Physical construction complete with OC granted. Gated security active.',
  },
  {
    phase: 'Supreme Villagio Phase III',
    reraNumber: 'P52100055048',
    typology: '4 & 5 BHK Twin Villas',
    status: 'Under Construction (Active)',
    statusType: 'active',
    possession: 'December 2028 (MahaRERA Revised Completion)',
    reraLink: 'https://maharera.mahaonline.gov.in',
    highlights: 'Earthworks & RCC structural stages in progress. Premium hillside villa plots.',
  },
];

const reraSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Supreme Villagio Somatane RERA Registrations',
  'description': 'MahaRERA verified compliance for Supreme Villagio Somatane Phases 1, 2, and 3.',
  'url': 'https://www.supremesvillagio.com/supreme-villagio-rera',
  'permit': [
    {
      '@type': 'GovernmentPermit',
      'name': 'MahaRERA Registration Phase 1',
      'permitNumber': 'P52100046867',
      'validIn': { '@type': 'AdministrativeArea', 'name': 'Maharashtra, India' },
    },
    {
      '@type': 'GovernmentPermit',
      'name': 'MahaRERA Registration Phase 2',
      'permitNumber': 'P52100049506',
      'validIn': { '@type': 'AdministrativeArea', 'name': 'Maharashtra, India' },
    },
    {
      '@type': 'GovernmentPermit',
      'name': 'MahaRERA Registration Phase 3',
      'permitNumber': 'P52100055048',
      'validIn': { '@type': 'AdministrativeArea', 'name': 'Maharashtra, India' },
    },
  ],
};

export default function ReraPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="rera-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reraSchema) }}
      />

      <div className="container mx-auto max-w-5xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Regulatory & Compliance Transparency
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">MahaRERA</span> Registrations & Phase Status
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Supreme Villagio is a fully approved, RERA-registered 16-acre villa estate in Somatane, Pune. 
          To provide complete transparency to homebuyers and investors, here are the verified registration numbers, 
          Occupation Certificate (OC) statuses, and possession schedules filed with the Maharashtra Real Estate Regulatory Authority (MahaRERA).
        </p>

        {/* Phase Table */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E4E2D3]/15 bg-[#23362E]/80 text-[#E4E2D3] text-xs uppercase tracking-widest font-semibold">
                  <th className="p-4 md:p-6">Project Phase</th>
                  <th className="p-4 md:p-6">MahaRERA No.</th>
                  <th className="p-4 md:p-6">Typology</th>
                  <th className="p-4 md:p-6">Status & OC</th>
                  <th className="p-4 md:p-6">Possession Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E2D3]/10 text-sm">
                {RERA_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-medium text-white">
                      {item.phase}
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="font-mono bg-[#E15E3F]/10 text-[#E15E3F] px-2.5 py-1 rounded text-xs font-semibold border border-[#E15E3F]/30">
                        {item.reraNumber}
                      </span>
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3]/80 font-light">
                      {item.typology}
                    </td>
                    <td className="p-4 md:p-6">
                      <div className="flex items-center gap-2">
                        {item.statusType === 'completed' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        )}
                        <span className="font-medium text-white">{item.status}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-[#E4E2D3]/80 font-light">
                      {item.possession}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deep Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {RERA_DATA.map((item, idx) => (
            <div key={idx} className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-6 md:p-8 rounded-sm flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#E15E3F] font-bold block mb-2">
                  Phase 0{idx + 1}
                </span>
                <h3 className="text-xl font-heading text-white mb-3">{item.phase}</h3>
                <p className="text-xs font-mono text-[#E4E2D3]/70 mb-4">RERA: {item.reraNumber}</p>
                <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-6">
                  {item.highlights}
                </p>
              </div>
              <a
                href={item.reraLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E15E3F] font-semibold hover:text-white transition-colors"
              >
                Verify on MahaRERA <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Regulatory FAQ Section */}
        <div className="border-t border-[#E4E2D3]/15 pt-12">
          <h2 className="text-2xl md:text-3xl font-heading font-light text-white mb-8">
            Frequently Asked Regulatory & Compliance Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/10">
              <h4 className="text-lg font-heading text-[#E15E3F] mb-2">
                How do I verify Supreme Villagio on the official MahaRERA website?
              </h4>
              <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
                Visit <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="underline text-white">maharera.mahaonline.gov.in</a>, navigate to &quot;Search Project Details&quot;, select &quot;Registered Projects&quot;, and search using any of the three RERA registration numbers: <strong>P52100046867</strong> (Phase 1), <strong>P52100049506</strong> (Phase 2), or <strong>P52100055048</strong> (Phase 3).
              </p>
            </div>
            <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/10">
              <h4 className="text-lg font-heading text-[#E15E3F] mb-2">
                What is the difference between physical completion and RERA revised possession dates?
              </h4>
              <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
                Physical construction of Phases 1 and 2 is completed with Occupation Certificates received. For Phase 3, MahaRERA records reflect a formal compliance completion date of 31 December 2028, providing buyers full statutory protection under MahaRERA guidelines.
              </p>
            </div>
            <div className="bg-[#1C2C25] p-6 border border-[#E4E2D3]/10">
              <h4 className="text-lg font-heading text-[#E15E3F] mb-2">
                Is home loan financing approved by major banks for Supreme Villagio?
              </h4>
              <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed">
                Yes. Due to clear legal title and active RERA registrations, Supreme Villagio is pre-approved for home loans by premier financial institutions including HDFC Bank, SBI, ICICI Bank, Axis Bank, and Kotak Mahindra Bank.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Request Verified Legal & RERA Dossier</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Download complete title deeds, sanction plans, and MahaRERA certificates.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Explore Pricing & Plans <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
