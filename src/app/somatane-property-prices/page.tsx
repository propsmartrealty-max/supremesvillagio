import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { TrendingUp, BarChart3, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Somatane Property Prices 2026 | Villa Rates, Land Trends & Growth Matrix',
  description: 'Comprehensive 2026 pricing analysis for Somatane Pune real estate. Capital values, price per sq.ft. trends (₹4,500 to ₹9,200/sq.ft.), Ring Road impact, and luxury villa returns.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/somatane-property-prices',
  },
  openGraph: {
    title: 'Somatane Property Prices & Investment Trends (2026)',
    description: 'Somatane real estate price trends, villa cost sheets, and 5-year capital appreciation analysis.',
    url: 'https://www.supremesvillagio.com/somatane-property-prices',
    type: 'website',
  },
};

const priceTrendSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Somatane Property Price Index & Trends',
  'description': 'Price matrix and historical capital growth data for Somatane, Pune real estate.',
  'url': 'https://www.supremesvillagio.com/somatane-property-prices',
};

export default function SomatanePropertyPricesPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="somatane-prices-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceTrendSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Real Estate Valuation & Pricing Intelligence
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Somatane Property <span className="text-[#E15E3F] italic">Prices & Growth Trends</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          Somatane’s residential micro-market has experienced accelerated capital appreciation, driven by the PMRDA Ring Road expansion, Hinjewadi tech corridor overflow, and growing HNI preference for horizontal gated villas over cramped urban apartments.
        </p>

        {/* Pricing Matrix Table */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 rounded-sm p-8 mb-16 overflow-x-auto">
          <h2 className="text-2xl font-heading mb-6">Somatane Villa & Residential Price Benchmark (2026)</h2>
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#E4E2D3]/20 text-[#E15E3F] uppercase tracking-widest text-xs">
                <th className="py-3 px-4">Typology / Asset Class</th>
                <th className="py-3 px-4">Carpet Area Range</th>
                <th className="py-3 px-4">Price Range (2026)</th>
                <th className="py-3 px-4">YoY Appreciation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E2D3]/10 font-light text-[#E4E2D3]/80">
              <tr>
                <td className="py-4 px-4 font-medium text-white">4 BHK Luxury Townhouse</td>
                <td className="py-4 px-4">2,200 – 2,400 Sq. Ft.</td>
                <td className="py-4 px-4 text-[#E15E3F] font-semibold">₹2.89 Cr – ₹3.25 Cr*</td>
                <td className="py-4 px-4 text-[#1A6F44] font-semibold">+14.2%</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">4 BHK Luxury Twin Villa</td>
                <td className="py-4 px-4">2,600 – 2,900 Sq. Ft.</td>
                <td className="py-4 px-4 text-[#E15E3F] font-semibold">₹3.45 Cr – ₹4.10 Cr*</td>
                <td className="py-4 px-4 text-[#1A6F44] font-semibold">+15.8%</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">5 BHK Presidential Villa</td>
                <td className="py-4 px-4">3,400 – 3,900 Sq. Ft.</td>
                <td className="py-4 px-4 text-[#E15E3F] font-semibold">₹4.85 Cr – ₹6.20 Cr*</td>
                <td className="py-4 px-4 text-[#1A6F44] font-semibold">+16.5%</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">Somatane Villa Land / Sq.Ft. Rate</td>
                <td className="py-4 px-4">Per Sq. Ft. Built-up</td>
                <td className="py-4 px-4 text-[#E15E3F] font-semibold">₹7,500 – ₹9,200 / Sq.Ft.</td>
                <td className="py-4 px-4 text-[#1A6F44] font-semibold">+13.4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-heading mb-1">Calculate Your Exact Villa Outlay</h3>
            <p className="text-sm text-[#E4E2D3]/70 font-light">
              Use our live EMI and 7% Maharashtra Stamp Duty calculator to generate a detailed cost sheet.
            </p>
          </div>
          <Link
            href="/supreme-villagio/emi-calculator"
            className="bg-[#E15E3F] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#F07F63] transition-colors whitespace-nowrap shadow-lg"
          >
            Launch EMI Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}
