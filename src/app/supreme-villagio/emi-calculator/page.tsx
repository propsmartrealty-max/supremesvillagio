import { Metadata } from 'next';
import Link from 'next/link';
import EmiCalculatorSection from '@/components/sections/EmiCalculatorSection';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio EMI Calculator & Stamp Duty Estimator | Pune Luxury Villas',
  description: 'Calculate monthly home loan EMIs and Maharashtra statutory registration charges (7% stamp duty + registration) for 4 & 5 BHK villas at Supreme Villagio Somatane.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/emi-calculator',
  },
};

export default function EmiCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">EMI & Loan</span> Calculator
        </h1>
        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed max-w-3xl">
          Plan your luxury villa investment with accurate monthly EMI calculations, down payment adjustments, and complete statutory duty breakdowns for Maharashtra real estate.
        </p>
      </div>

      <EmiCalculatorSection />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl mt-16">
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 md:p-12 rounded-sm shadow-xl">
          <h2 className="text-2xl font-heading text-white mb-6">Home Loan Banking Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#E4E2D3]/80 font-light">
            <div className="p-4 bg-[#23362E] rounded border border-[#E4E2D3]/10">
              <h3 className="text-white font-medium mb-1">Pre-Approved Project Status</h3>
              <p className="text-xs text-[#E4E2D3]/70">Fast-track legal clearance with leading banks: HDFC, State Bank of India, ICICI Bank, and Axis Bank.</p>
            </div>
            <div className="p-4 bg-[#23362E] rounded border border-[#E4E2D3]/10">
              <h3 className="text-white font-medium mb-1">Competitive Interest Rates</h3>
              <p className="text-xs text-[#E4E2D3]/70">Special floating & fixed interest rate slabs for salaried professionals and NRI applicants.</p>
            </div>
            <div className="p-4 bg-[#23362E] rounded border border-[#E4E2D3]/10">
              <h3 className="text-white font-medium mb-1">Up to 80% Loan Value</h3>
              <p className="text-xs text-[#E4E2D3]/70">Financing eligibility up to 80% of registered agreement value based on applicant income.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/supreme-villagio/price"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E15E3F] hover:text-white font-bold transition-colors"
          >
            ← Back to Full Cost Sheet & Price Matrix
          </Link>
        </div>
      </div>
    </main>
  );
}
