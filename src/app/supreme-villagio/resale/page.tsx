import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight, Home, Building2, Key, Phone, Calendar } from 'lucide-react';
import SeoSiloLinks from '@/components/layout/SeoSiloLinks';

export const metadata: Metadata = {
  title: 'Supreme Villagio Resale Villas & Ready OC Units [2026 Price List from ₹2.89 Cr*] | Supreme Villagio Official',
  description: 'Verified guide to Supreme Villagio resale villas and ready-to-move OC units in Somatane, Pune. Phase 1 & 2 100% OC Received. 4 & 5 BHK Twin Villas with 0% Brokerage & direct developer guarantee.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/resale',
  },
  openGraph: {
    title: 'Supreme Villagio Resale Villas & Ready Possession Inventory 2026',
    description: 'Explore verified ready-to-move villas and townhouses at Supreme Villagio Somatane. Phase 1 & 2 OC Received with 0% Brokerage.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/resale',
    type: 'website',
  },
};

const resaleSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  '@id': 'https://www.supremesvillagio.com/supreme-villagio/resale#listing',
  name: 'Supreme Villagio Ready Possession & Resale Luxury Villas',
  description: 'Verified ready-to-move 4 & 5 BHK luxury villas and townhouses in Supreme Villagio Somatane with full Occupation Certificate (OC).',
  url: 'https://www.supremesvillagio.com/supreme-villagio/resale',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '28900000',
    highPrice: '55000000',
    offerCount: '12',
  },
};

export default function ResalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resaleSchema) }}
      />
      <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/supreme-villagio" className="hover:underline">Supreme Villagio</Link>
            <span>/</span>
            <span className="text-white">Resale &amp; Ready OC Units</span>
          </div>

          <div className="mb-12 border-b border-white/10 pb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A880]/20 text-[#C5A880] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% OC Received • Zero Construction Risk • 0% Brokerage
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-light tracking-wide text-white mb-4">
              Supreme Villagio Resale &amp; Ready Possession Villas
            </h1>
            <p className="text-stone text-base md:text-lg max-w-3xl leading-relaxed">
              Looking for resale villas or ready-to-move-in homes at Supreme Villagio Somatane? Phase 1 and Phase 2 are completely delivered with full Occupation Certificates (OC), zero GST liability, and families actively residing. Tour our certified ready inventory directly through the developer desk.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-[#1C2C25] p-5 rounded-lg border border-white/10 text-center">
              <span className="block text-2xl md:text-3xl font-heading font-bold text-[#C5A880]">Phase 1 &amp; 2</span>
              <span className="text-stone text-xs uppercase tracking-wider mt-1 block">100% Ready OC</span>
            </div>
            <div className="bg-[#1C2C25] p-5 rounded-lg border border-white/10 text-center">
              <span className="block text-2xl md:text-3xl font-heading font-bold text-white">0%</span>
              <span className="text-stone text-xs uppercase tracking-wider mt-1 block">GST on Ready Units</span>
            </div>
            <div className="bg-[#1C2C25] p-5 rounded-lg border border-white/10 text-center">
              <span className="block text-2xl md:text-3xl font-heading font-bold text-[#C5A880]">₹2.89 Cr*</span>
              <span className="text-stone text-xs uppercase tracking-wider mt-1 block">Starting Price</span>
            </div>
            <div className="bg-[#1C2C25] p-5 rounded-lg border border-white/10 text-center">
              <span className="block text-2xl md:text-3xl font-heading font-bold text-white">88+</span>
              <span className="text-stone text-xs uppercase tracking-wider mt-1 block">Residing Families</span>
            </div>
          </div>

          {/* Developer Direct vs Broker Resale Comparison */}
          <div className="bg-[#1C2C25] p-8 md:p-10 rounded-lg border border-white/10 mb-12">
            <h2 className="text-2xl font-heading text-white font-medium mb-4">
              Direct Developer Desk vs. Third-Party Resale Brokers
            </h2>
            <p className="text-stone text-sm mb-6 leading-relaxed">
              When purchasing a pre-owned or ready unit in Supreme Villagio, engaging directly with the official Supreme Universal desk protects your investment and ensures crystal-clear title documentation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="border border-[#C5A880]/30 p-6 rounded bg-[#23362E]/70 space-y-3">
                <h3 className="text-white font-semibold flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A880]" /> Official Developer Channel
                </h3>
                <ul className="space-y-2 text-stone text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A880] font-bold">✓</span> <strong>0% Brokerage:</strong> Save ₹5 to ₹10 Lakhs in broker commissions.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A880] font-bold">✓</span> <strong>Direct Title Transfer:</strong> Smooth NOC and society transfer without intermediary friction.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A880] font-bold">✓</span> <strong>Builder Warranty &amp; Handover Snagging:</strong> Dedicated facility management support.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A880] font-bold">✓</span> <strong>Instant Bank Loan Sanction:</strong> SBI, HDFC, and ICICI pre-approved file processing.
                  </li>
                </ul>
              </div>

              <div className="border border-white/10 p-6 rounded bg-[#23362E]/40 space-y-3">
                <h3 className="text-stone font-semibold flex items-center gap-2 text-base">
                  <span>⚠️</span> Unverified Third-Party Resale Portals
                </h3>
                <ul className="space-y-2 text-stone text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span> High 2% brokerage fees added to property cost.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span> Potential society transfer delays and unverified maintenance dues.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span> Inaccurate floor plans and outdated carpet area representations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Available Ready Inventory Configurations */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-heading text-white font-medium">
              Verified Ready-to-Move Typologies at Supreme Villagio
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1C2C25] p-6 rounded-lg border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#C5A880] font-bold">Ready OC</span>
                  <span className="text-xs text-stone">Phase 1 &amp; 2</span>
                </div>
                <h3 className="text-xl font-heading text-white font-semibold">4 BHK Luxury Townhouse</h3>
                <p className="text-stone text-xs">Carpet Area: 2,200 – 2,400 Sq.Ft. | G+2 Layout with Private Terrace</p>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs text-stone">All-Inclusive Starting At</span>
                  <p className="text-xl font-bold text-white">₹2.89 Cr*</p>
                </div>
                <Link
                  href="/supreme-villagio/contact"
                  className="block text-center w-full py-2.5 bg-[#C5A880] text-[#17181a] font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#b0936c] transition-colors"
                >
                  Request Ready Unit List
                </Link>
              </div>

              <div className="bg-[#1C2C25] p-6 rounded-lg border border-[#C5A880]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#C5A880] font-bold">Most Popular</span>
                  <span className="text-xs text-stone">Phase 1 &amp; 2</span>
                </div>
                <h3 className="text-xl font-heading text-white font-semibold">4 BHK Twin Villa</h3>
                <p className="text-stone text-xs">Carpet Area: 2,600 – 2,900 Sq.Ft. | 3-Side Open Lawn &amp; Double-Height Living</p>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs text-stone">All-Inclusive Starting At</span>
                  <p className="text-xl font-bold text-white">₹3.45 Cr*</p>
                </div>
                <Link
                  href="/supreme-villagio/contact"
                  className="block text-center w-full py-2.5 bg-[#C5A880] text-[#17181a] font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#b0936c] transition-colors"
                >
                  Request Ready Unit List
                </Link>
              </div>

              <div className="bg-[#1C2C25] p-6 rounded-lg border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#C5A880] font-bold">Presidential</span>
                  <span className="text-xs text-stone">Limited Units</span>
                </div>
                <h3 className="text-xl font-heading text-white font-semibold">5 BHK Presidential Villa</h3>
                <p className="text-stone text-xs">Carpet Area: 3,400 – 3,900 Sq.Ft. | Private Elevator &amp; 3 Covered Car Parks</p>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs text-stone">All-Inclusive Starting At</span>
                  <p className="text-xl font-bold text-white">₹4.85 Cr*</p>
                </div>
                <Link
                  href="/supreme-villagio/contact"
                  className="block text-center w-full py-2.5 bg-[#C5A880] text-[#17181a] font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#b0936c] transition-colors"
                >
                  Request Ready Unit List
                </Link>
              </div>
            </div>
          </div>

          {/* Action Call */}
          <div className="bg-gradient-to-r from-[#1C2C25] via-[#23362E] to-[#1C2C25] p-8 md:p-10 rounded-lg border border-[#C5A880]/30 text-center space-y-4">
            <h2 className="text-2xl font-heading text-white">Tour Actual Ready Resale &amp; OC Units Today</h2>
            <p className="text-stone text-sm max-w-2xl mx-auto">
              Skip the middlemen. Speak directly with our resident advisory desk to schedule an immediate site inspection of available ready homes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <a
                href="tel:+917744009295"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A880] text-[#17181a] font-bold text-sm uppercase tracking-wider rounded hover:bg-[#b0936c] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call +91 7744009295
              </a>
              <Link
                href="/supreme-villagio/contact"
                className="w-full sm:w-auto px-8 py-3.5 border border-[#C5A880] text-[#C5A880] font-bold text-sm uppercase tracking-wider rounded hover:bg-[#C5A880]/10 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Physical Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SeoSiloLinks />
    </>
  );
}
