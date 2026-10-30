import { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, ShieldCheck, CheckCircle2, Phone, Calendar, ArrowRight, Percent, FileCheck } from 'lucide-react';
import SeoSiloLinks from '@/components/layout/SeoSiloLinks';

export const metadata: Metadata = {
  title: 'Supreme Villagio Bank Approvals & Home Loans [SBI, HDFC, ICICI, Axis] | Supreme Villagio Official',
  description: 'Verified home loan approvals for Supreme Villagio Somatane. Pre-approved by State Bank of India (SBI), HDFC Bank, ICICI Bank, and Axis Bank. Up to 80% funding, lowest interest rates, and express 72-hour sanction.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/banks',
  },
  openGraph: {
    title: 'Supreme Villagio Bank Approvals & Home Loan Advisory | Official Desk',
    description: 'Pre-approved home loans by SBI, HDFC, ICICI, and Axis Bank for 4 & 5 BHK luxury villas at Supreme Villagio Somatane.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/banks',
    type: 'website',
  },
};

const bankLoanSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialProduct',
  '@id': 'https://www.supremesvillagio.com/supreme-villagio/banks#loan',
  name: 'Supreme Villagio Pre-Approved Home Loan Assistance',
  description: 'Pre-approved mortgage financing for luxury villas and townhouses at Supreme Villagio Somatane through tier-1 Indian banks.',
  provider: {
    '@type': 'RealEstateAgent',
    name: 'Supreme Universal Financial Advisory Desk',
    telephone: '+917744009295',
    url: 'https://www.supremesvillagio.com/',
  },
  annualPercentageRate: '8.40% - 9.15%',
  feesAndCommissionsSpecification: 'Nil pre-payment penalties on floating rate loans across all approved public & private lenders.',
};

const APPROVED_BANKS = [
  {
    name: 'State Bank of India (SBI)',
    type: 'Public Sector (Sovereign Trust)',
    projectCode: 'Pre-Approved Project Code for Phase 1, 2 & 3',
    maxFunding: 'Up to 80% of Agreement Value',
    rates: 'From 8.40% p.a.*',
    highlights: ['Zero pre-payment penalties', 'Direct builder tie-up disbursement', 'Concessional processing fees for defense & PSU executives'],
  },
  {
    name: 'HDFC Bank',
    type: 'Private Sector (Fast-Track Processing)',
    projectCode: 'Express Digital Appraisal Approval',
    maxFunding: 'Up to 75% - 80%',
    rates: 'From 8.50% p.a.*',
    highlights: ['Digital sanction within 72 hours', 'Doorstep document pickup', 'Special NRI funding programs with overseas income proof'],
  },
  {
    name: 'ICICI Bank',
    type: 'Private Sector (Flexible Tranches)',
    projectCode: 'Pre-Approved Builder Relationship',
    maxFunding: 'Up to 80%',
    rates: 'From 8.55% p.a.*',
    highlights: ['Flexible step-up EMI options', 'Milestone-based disbursement tracking', 'Instant online eligibility certification'],
  },
  {
    name: 'Axis Bank',
    type: 'Private Sector (Tailored Tenure)',
    projectCode: 'Approved Residential Asset Tier-1',
    maxFunding: 'Up to 75%',
    rates: 'From 8.60% p.a.*',
    highlights: ['Tenure up to 30 years', 'High loan quantum sanction for HNIs & business owners', 'Dedicated relationship manager support'],
  },
];

export default function BanksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bankLoanSchema) }}
      />
      <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/supreme-villagio" className="hover:underline">Supreme Villagio</Link>
            <span>/</span>
            <span className="text-white">Bank Approvals &amp; Home Loans</span>
          </div>

          <div className="mb-12 border-b border-white/10 pb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A880]/20 text-[#C5A880] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Clear Marketable Freehold Title • Zero Legal Friction
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-light tracking-wide text-white mb-4">
              Pre-Approved Bank Loans &amp; Mortgage Partners
            </h1>
            <p className="text-stone text-base md:text-lg max-w-3xl leading-relaxed">
              Because Supreme Villagio is built on 100% freehold land with verified MahaRERA registrations and full Occupation Certificates (OC) for completed phases, all premier financial institutions in India have pre-approved the project for streamlined home loan sanctioning.
            </p>
          </div>

          {/* Bank Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {APPROVED_BANKS.map((bank, idx) => (
              <div 
                key={idx}
                className="bg-[#1C2C25] p-6 md:p-8 rounded-lg border border-white/10 hover:border-[#C5A880]/50 transition-colors shadow-xl space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold block">{bank.type}</span>
                    <h2 className="text-xl md:text-2xl font-heading text-white font-medium mt-1">{bank.name}</h2>
                  </div>
                  <div className="p-2.5 bg-[#C5A880]/10 rounded-md text-[#C5A880]">
                    <Landmark className="w-5 h-5" />
                  </div>
                </div>

                <div className="py-3 border-y border-white/10 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-stone block">Indicative Interest Rate</span>
                    <strong className="text-white text-sm font-semibold">{bank.rates}</strong>
                  </div>
                  <div>
                    <span className="text-stone block">Maximum Funding</span>
                    <strong className="text-white text-sm font-semibold">{bank.maxFunding}</strong>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-stone font-semibold block">Key Advantages:</span>
                  <ul className="space-y-1.5 text-xs text-stone">
                    {bank.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+917744009295"
                    className="block text-center w-full py-2.5 bg-[#C5A880] hover:bg-[#b0936c] text-[#17181a] font-semibold text-xs uppercase tracking-wider rounded transition-colors"
                  >
                    Connect with Bank Loan Manager
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Step-by-Step Home Loan Process */}
          <div className="bg-[#1C2C25] p-8 md:p-10 rounded-lg border border-white/10 mb-16 space-y-6">
            <h2 className="text-2xl font-heading text-white font-medium">
              3-Step Fast-Track Home Loan Process at Supreme Villagio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="p-5 border border-white/10 rounded bg-[#23362E]/70 space-y-2">
                <span className="text-2xl font-bold text-[#C5A880] font-heading">01</span>
                <h3 className="text-white font-semibold">Unit Selection &amp; Allotment</h3>
                <p className="text-stone text-xs leading-relaxed">
                  Select your preferred 4 or 5 BHK villa and receive your official Supreme Universal cost sheet and unit allotment letter.
                </p>
              </div>

              <div className="p-5 border border-white/10 rounded bg-[#23362E]/70 space-y-2">
                <span className="text-2xl font-bold text-[#C5A880] font-heading">02</span>
                <h3 className="text-white font-semibold">Direct Bank Verification</h3>
                <p className="text-stone text-xs leading-relaxed">
                  Our dedicated in-house banking desk coordinates directly with SBI, HDFC, or your preferred lender. Title legal verification is pre-cleared.
                </p>
              </div>

              <div className="p-5 border border-white/10 rounded bg-[#23362E]/70 space-y-2">
                <span className="text-2xl font-bold text-[#C5A880] font-heading">03</span>
                <h3 className="text-white font-semibold">Express Sanction &amp; Handover</h3>
                <p className="text-stone text-xs leading-relaxed">
                  Receive your sanction letter within 72 hours. Complete 7% stamp duty registration and proceed with key handover for ready OC residences.
                </p>
              </div>
            </div>
          </div>

          {/* Conversion CTA */}
          <div className="bg-gradient-to-r from-[#1C2C25] via-[#23362E] to-[#1C2C25] p-8 md:p-10 rounded-lg border border-[#C5A880]/30 text-center space-y-4">
            <h2 className="text-2xl font-heading text-white">Need Customized Loan Eligibility Calculation?</h2>
            <p className="text-stone text-sm max-w-2xl mx-auto">
              Our financial concierge provides confidential tax planning, repatriation advisory for NRIs, and bank comparison sheets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <a
                href="tel:+917744009295"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A880] text-[#17181a] font-bold text-sm uppercase tracking-wider rounded hover:bg-[#b0936c] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Loan Desk (+91 7744009295)
              </a>
              <Link
                href="/supreme-villagio/emi-calculator"
                className="w-full sm:w-auto px-8 py-3.5 border border-[#C5A880] text-[#C5A880] font-bold text-sm uppercase tracking-wider rounded hover:bg-[#C5A880]/10 transition-colors flex items-center justify-center gap-2"
              >
                Open EMI &amp; Stamp Duty Calculator <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SeoSiloLinks />
    </>
  );
}
