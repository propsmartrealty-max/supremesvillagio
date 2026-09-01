import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { HelpCircle, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio FAQ — 20+ Critical Questions Answered (Price, RERA, Possession)',
  description: 'Complete FAQ directory for Supreme Villagio Somatane Pune. Get verified factual answers on villa pricing, MahaRERA registrations, carpet areas, Club Villagio, and possession dates.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/faq',
  },
  openGraph: {
    title: 'Supreme Villagio FAQ — Complete Buyer Guide & Answers',
    description: 'Frequently asked questions regarding Supreme Villagio Somatane pricing, RERA numbers, possession, and floor plans.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/faq',
    type: 'website',
  },
};

const MASTER_FAQS = [
  {
    category: 'Pricing & Commercials',
    q: 'What is the starting price for villas and townhouses at Supreme Villagio?',
    a: '4 BHK Luxury Townhouses start at ₹2.89 Cr* (2,200 – 2,400 sq.ft.). 4 BHK Luxury Twin Villas start at ₹3.45 Cr* (2,600 – 2,900 sq.ft.). 5 BHK Grand Presidential Villas start at ₹4.85 Cr* (3,400 – 3,900 sq.ft.). All prices are subject to government statutory charges.'
  },
  {
    category: 'Pricing & Commercials',
    q: 'What are the government taxes and stamp duty charges in Maharashtra?',
    a: 'Government charges include 7% Maharashtra Stamp Duty and a fixed ₹30,000 Registration Fee. Applicable GST applies to under-construction Phase 3 units (nil GST for OC-received Phase 1 & 2 resales).'
  },
  {
    category: 'MahaRERA & Legal',
    q: 'What are the MahaRERA numbers for Supreme Villagio?',
    a: 'Phase 1: P52100046867 | Phase 2: P52100049506 | Phase 3: P52100055048. All registrations are verified on the official MahaRERA website (maharera.mahaonline.gov.in).'
  },
  {
    category: 'MahaRERA & Legal',
    q: 'Is the land freehold title?',
    a: 'Yes, Supreme Villagio is built on 100% clear, marketable freehold land with proportionate land share allocated to each villa and townhouse purchaser.'
  },
  {
    category: 'Possession & Handover',
    q: 'What is the possession status of Phase 1 and Phase 2?',
    a: 'Phase 1 and Phase 2 are 100% completed with full Occupation Certificates (OC) received and handed over to homeowners. Families are actively residing in the community.'
  },
  {
    category: 'Possession & Handover',
    q: 'When is Phase 3 scheduled for possession?',
    a: 'Phase 3 Hillside Villas have a statutory MahaRERA completion date of December 31, 2028, with construction progressing rapidly ahead of schedule.'
  },
  {
    category: 'Amenities & Masterplan',
    q: 'What is Club Villagio and is it operational?',
    a: 'Club Villagio is an 18,500 sq.ft. grand lifestyle clubhouse. It is 100% finished and operational, featuring an Olympic-length swimming pool, heated kids’ pool, squash court, badminton court, wellness gymnasium, cafe, and banquet halls.'
  },
  {
    category: 'Location & Commute',
    q: 'How far is Supreme Villagio from Hinjewadi IT Park and Baner?',
    a: 'Supreme Villagio is 20 minutes (18 km) from Hinjewadi IT Park Phases 1, 2, and 3 via the Mumbai-Pune Expressway / NH-48 bypass, and 25 minutes (25 km) from Baner & Balewadi High Street.'
  },
];

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': MASTER_FAQS.map(f => ({
    '@type': 'Question',
    'name': f.q,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': f.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <div className="container mx-auto max-w-5xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Factual Knowledge Base
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Frequently Asked <span className="text-[#E15E3F] italic">Questions</span>
        </h1>

        <p className="text-lg font-light text-[#E4E2D3]/85 max-w-3xl mb-12 leading-relaxed">
          Clear, verified answers regarding Supreme Villagio Somatane pricing, MahaRERA certificates, possession timelines, and architectural specifications.
        </p>

        {/* FAQs List */}
        <div className="space-y-6 mb-16">
          {MASTER_FAQS.map((faq, idx) => (
            <div key={idx} className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
              <span className="text-[10px] bg-[#E15E3F]/20 text-[#E15E3F] border border-[#E15E3F]/30 px-2.5 py-1 rounded-sm uppercase tracking-widest font-bold mb-3 inline-block">
                {faq.category}
              </span>
              <h3 className="text-xl font-heading text-white mb-3">{faq.q}</h3>
              <p className="text-sm md:text-base text-[#E4E2D3]/80 font-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Hub Links */}
        <div className="border-t border-[#E4E2D3]/15 pt-8 flex flex-wrap gap-4 justify-between items-center text-xs uppercase tracking-widest">
          <Link href="/supreme-villagio/price" className="text-[#E15E3F] hover:underline flex items-center gap-1">
            Price & Cost Sheet <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio-rera" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            MahaRERA Certifications <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio/construction-status" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Construction Updates <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
