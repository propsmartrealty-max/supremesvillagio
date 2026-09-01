import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Tag, ArrowRight, ShieldCheck, Check, Calculator, Download } from 'lucide-react';
import EmiCalculatorSection from '@/components/sections/EmiCalculatorSection';

export const metadata: Metadata = {
  title: 'Supreme Villagio Price, Cost Sheet & Payment Schedule | Somatane Pune',
  description: 'Official price breakdown for Supreme Villagio Somatane. 4 & 5 BHK luxury twin villas and townhouses starting from ₹2.89 Cr*. Request all-inclusive cost sheet.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/price',
  },
  openGraph: {
    title: 'Supreme Villagio Price, Cost Sheet & Payment Schedule',
    description: 'Detailed price breakdown for 4 & 5 BHK villas and townhouses in Supreme Villagio, Somatane Pune.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/price',
    type: 'website',
  },
};

const PRICING_DATA = [
  {
    typology: '4 BHK Premium Townhouse',
    carpetArea: '2,200 – 2,400 Sq. Ft.',
    plotArea: 'Low-density green plot',
    startingPrice: '₹2.89 Cr*',
    bookingAmount: '10%',
    status: 'Ready / Under Construction',
    features: [
      'G+2 independent layout with private terrace',
      'Designer modular kitchen fittings',
      'Private parking for 2 vehicles',
      'Direct access to landscaped walking spine',
    ],
  },
  {
    typology: '4 BHK Luxury Twin Villa',
    carpetArea: '2,600 – 2,900 Sq. Ft.',
    plotArea: 'Generous private garden plot',
    startingPrice: '₹3.45 Cr*',
    bookingAmount: '10%',
    status: 'Phase 1 & 2 OC Received',
    popular: true,
    features: [
      'Expansive 3-side open private lawn',
      'Double-height ceiling in formal living room',
      'Master suite with walk-in wardrobe',
      'Dedicated servant quarter & utility zone',
    ],
  },
  {
    typology: '5 BHK Grand Presidential Villa',
    carpetArea: '3,400 – 3,900 Sq. Ft.',
    plotArea: 'Premium corner & hillside plots',
    startingPrice: '₹4.85 Cr*',
    bookingAmount: '10%',
    status: 'Exclusive 19 Units Only',
    features: [
      'Private elevator provision & rooftop gazebo',
      'Uninterrupted Sahyadri mountain vistas',
      '3 covered car parks with EV charging',
      'Customizable entertainment / home theatre lounge',
    ],
  },
];

const priceSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Supreme Villagio Price & Cost Sheet',
  'description': 'Price matrix for 4 & 5 BHK villas and townhouses at Supreme Villagio Somatane, Pune.',
  'url': 'https://www.supremesvillagio.com/supreme-villagio/price',
  'offers': {
    '@type': 'AggregateOffer',
    'priceCurrency': 'INR',
    'lowPrice': '28900000',
    'highPrice': '65000000',
    'offerCount': '138',
  },
};

export default function PricePage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="price-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Transparent Pricing & Cost Matrix
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">Price</span>, Cost Sheet & Payment Plans
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Located in Somatane just 25 minutes from Baner and Hinjewadi, Supreme Villagio offers luxury villa ownership at a fraction of central Pune prices. Explore the transparent pricing matrix below across 4 BHK townhouses, 4 BHK twin villas, and 5 BHK grand presidential villas.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PRICING_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#1C2C25] border ${
                item.popular ? 'border-[#E15E3F] shadow-2xl relative' : 'border-[#E4E2D3]/15'
              } p-8 rounded-sm flex flex-col justify-between`}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E15E3F] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                  Most Preferred Configuration
                </div>
              )}

              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#E15E3F] font-semibold block mb-2">
                  {item.status}
                </span>
                <h2 className="text-2xl font-heading text-white mb-4">{item.typology}</h2>

                <div className="mb-6 pb-6 border-b border-[#E4E2D3]/10">
                  <p className="text-xs uppercase tracking-widest text-[#E4E2D3]/60 mb-1">Starting From</p>
                  <p className="text-3xl md:text-4xl font-heading text-[#E15E3F] font-normal">
                    {item.startingPrice}
                  </p>
                  <p className="text-xs text-[#E4E2D3]/60 mt-1 font-light">*Govt. taxes & registration additional</p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#E4E2D3]/60">Carpet Area:</span>
                    <span className="text-white font-medium">{item.carpetArea}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#E4E2D3]/60">Plot Feature:</span>
                    <span className="text-white font-medium">{item.plotArea}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#E4E2D3]/60">Booking Token:</span>
                    <span className="text-white font-medium">{item.bookingAmount}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {item.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#E4E2D3]/85 font-light leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/supreme-villagio-rera"
                className="w-full text-center bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold py-3.5 px-4 text-xs uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Request Detailed Cost Sheet
              </Link>
            </div>
          ))}
        </div>

        {/* Cost Sheet Calculator Breakdown */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 md:p-12 rounded-sm mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-[#E15E3F]" />
            <h3 className="text-2xl font-heading text-white">All-Inclusive Cost Sheet Component Breakdown</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-heading text-lg text-[#E15E3F] mb-3">Base & Infrastructure Charges</h4>
              <ul className="space-y-2 text-[#E4E2D3]/80 font-light">
                <li>• <strong>Agreement Value</strong>: Base rate calculated on verified RERA carpet area.</li>
                <li>• <strong>Clubhouse Charges</strong>: One-time access to 18,500 sq.ft. ready Club Villagio.</li>
                <li>• <strong>Infrastructure & Power Backup</strong>: Dedicated transformer & underground cabling.</li>
                <li>• <strong>Reserved Villa Parking</strong>: 2 to 3 designated vehicle parking slots.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg text-[#E15E3F] mb-3">Government Levies & Statutory Duties</h4>
              <ul className="space-y-2 text-[#E4E2D3]/80 font-light">
                <li>• <strong>Stamp Duty</strong>: As per Maharashtra state government real estate norms.</li>
                <li>• <strong>Registration Fees</strong>: Fixed state registration charges.</li>
                <li>• <strong>GST</strong>: Applicable as per Under Construction / OC status.</li>
                <li>• <strong>Maintenance Deposit</strong>: Corpus fund for long-term estate upkeep.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive EMI Calculator */}
        <div className="mb-16">
          <EmiCalculatorSection />
        </div>

        {/* Payment Schedule Table */}
        <div className="border-t border-[#E4E2D3]/15 pt-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-heading font-light text-white mb-6">
            Milestone-Linked Payment Schedule (Phase 3)
          </h3>
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 rounded-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-[#23362E]/80 border-b border-[#E4E2D3]/15 text-xs uppercase tracking-widest text-[#E4E2D3]">
                <tr>
                  <th className="p-4 md:p-6">Construction Milestone</th>
                  <th className="p-4 md:p-6">Payment Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E2D3]/10">
                <tr>
                  <td className="p-4 md:p-6 text-white font-medium">On Booking & Execution of Agreement</td>
                  <td className="p-4 md:p-6 text-[#E15E3F] font-bold">10% + Stamp Duty</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-white font-medium">Completion of Plinth / Foundation</td>
                  <td className="p-4 md:p-6 text-[#E4E2D3]/80">15%</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-white font-medium">Completion of Ground & First Floor RCC Slabs</td>
                  <td className="p-4 md:p-6 text-[#E4E2D3]/80">25% (Milestone installments)</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-white font-medium">Completion of Brickwork, Internal Plaster & Flooring</td>
                  <td className="p-4 md:p-6 text-[#E4E2D3]/80">25%</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-white font-medium">Completion of External Painting, Landscaping & Fixtures</td>
                  <td className="p-4 md:p-6 text-[#E4E2D3]/80">20%</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-white font-medium">On Notice of Possession / Key Handover</td>
                  <td className="p-4 md:p-6 text-[#E15E3F] font-bold">5% + Maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bank Approvals & CTA */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Pre-Approved Banking Partners</span>
            </div>
            <h3 className="text-2xl font-heading text-white mb-2">Ready to Receive Custom EMI Calculations?</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Financing available up to 80% with HDFC, SBI, ICICI, and Axis Bank at attractive rates.</p>
          </div>
          <Link
            href="/supreme-villagio/floor-plans"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            View Floor Plans <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
