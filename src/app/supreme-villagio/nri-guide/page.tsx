import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NRI Guide to Buying Luxury Villas in Pune | Supreme Villagio Somatane',
  description: 'Complete NRI real estate investment guide for Supreme Villagio Somatane Pune. FEMA regulations, NRE/NRO banking, repatriation of funds, and power of attorney guidance.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/nri-guide',
  },
  openGraph: {
    title: 'NRI Guide to Buying Luxury Villas in Pune | Supreme Villagio',
    description: 'FEMA guidelines, taxation, and NRI services for luxury villa investments in Pune at Supreme Villagio.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/nri-guide',
    type: 'website',
  },
};

export default function NriGuidePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            NRI Real Estate Investment Desk
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          NRI Guide to Investing in <span className="italic text-[#E15E3F]">Supreme Villagio</span>, Pune
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Supreme Universal provides a dedicated NRI concierge desk to assist global Indians across the UAE, USA, UK, Singapore, and Canada with seamless luxury villa acquisitions in Somatane, Pune.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-xl font-heading text-white mb-4">FEMA & Legal Eligibility</h3>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>NRIs and OCIs hold full legal rights to acquire residential freehold villas in India without prior RBI approval.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Seamless execution via Special Power of Attorney (PoA) without requiring physical travel to India.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-xl font-heading text-white mb-4">Banking & Repatriation</h3>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Payments processed securely via inward remittance in foreign currency or standard NRE / NRO bank accounts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Principal investment and capital gains are 100% repatriable per RBI / FEMA guidelines.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Connect with NRI Portfolio Specialist</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Receive virtual 3D walkthroughs, video consultations, and custom payment structures.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Request NRI Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
