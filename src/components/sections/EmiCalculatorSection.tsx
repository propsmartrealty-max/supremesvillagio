"use client";

import { useState } from 'react';
import { Calculator, ShieldCheck, ArrowRight, IndianRupee } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';

export default function EmiCalculatorSection() {
  const { openContactModal } = useModal();

  // State
  const [propertyPrice, setPropertyPrice] = useState<number>(28900000); // 2.89 Cr
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);

  // Calculations
  const loanAmount = propertyPrice * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;

  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // Maharashtra Duties (7% Stamp Duty + ~30,000 Reg + 5% GST if applicable)
  const stampDuty = propertyPrice * 0.07;
  const registration = 30000;
  const totalOutlay = propertyPrice + stampDuty + registration;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    }).format(val);
  };

  const formatLakhCr = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakh`;
  };

  return (
    <section className="py-20 md:py-28 bg-[#1C2C25] text-[#E4E2D3] border-t border-[#E4E2D3]/15">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
          <Calculator className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Interactive Financial Planner
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-light text-white">
              EMI & <span className="italic text-[#E15E3F]">Stamp Duty</span> Calculator
            </h2>
            <p className="text-sm md:text-base text-[#E4E2D3]/75 font-light mt-2 max-w-2xl">
              Calculate exact monthly loan repayments and Maharashtra statutory registration costs for Supreme Villagio residences.
            </p>
          </div>
          <div className="bg-[#23362E] px-4 py-2 rounded border border-[#E4E2D3]/10 text-xs text-emerald-400 font-medium flex items-center gap-2 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4" /> Pre-Approved: HDFC • SBI • ICICI • Axis
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sliders Form */}
          <div className="lg:col-span-7 bg-[#23362E] p-8 md:p-10 rounded-sm border border-[#E4E2D3]/15 shadow-2xl space-y-8">
            {/* Property Value Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs uppercase tracking-widest text-[#E4E2D3]/70 font-medium">
                  Property Consideration (Villa Price)
                </label>
                <span className="text-lg font-heading text-[#E15E3F] font-semibold">
                  {formatLakhCr(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min={28900000}
                max={60000000}
                step={500000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-charcoal rounded-lg appearance-none cursor-pointer accent-[#E15E3F]"
              />
              <div className="flex justify-between text-[11px] text-[#E4E2D3]/50 mt-1 font-mono">
                <span>₹2.89 Cr (4 BHK Townhouse)</span>
                <span>₹6.00 Cr (5 BHK Hillside)</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs uppercase tracking-widest text-[#E4E2D3]/70 font-medium">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="text-base font-heading text-white">
                  {formatLakhCr(propertyPrice * (downPaymentPercent / 100))}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-charcoal rounded-lg appearance-none cursor-pointer accent-[#E15E3F]"
              />
              <div className="flex justify-between text-[11px] text-[#E4E2D3]/50 mt-1 font-mono">
                <span>10% (Min RERA Token)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Interest Rate & Tenure Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs uppercase tracking-widest text-[#E4E2D3]/70 font-medium">
                    Interest Rate
                  </label>
                  <span className="text-base font-heading text-[#E15E3F] font-semibold">{interestRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min={7.5}
                  max={12}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-charcoal rounded-lg appearance-none cursor-pointer accent-[#E15E3F]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs uppercase tracking-widest text-[#E4E2D3]/70 font-medium">
                    Loan Tenure
                  </label>
                  <span className="text-base font-heading text-white">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-charcoal rounded-lg appearance-none cursor-pointer accent-[#E15E3F]"
                />
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#23362E] to-[#17251F] p-8 md:p-10 rounded-sm border border-[#E15E3F]/40 shadow-2xl flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold mb-1">
                Estimated Monthly Repayment
              </p>
              <p className="text-4xl md:text-5xl font-heading text-white mb-6">
                {formatINR(emi)}
                <span className="text-sm font-sans font-light text-[#E4E2D3]/60 block mt-1">per month</span>
              </p>

              <div className="space-y-3 py-6 border-y border-[#E4E2D3]/10 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#E4E2D3]/70">Principal Loan Amount:</span>
                  <span className="text-white font-medium">{formatLakhCr(loanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#E4E2D3]/70">Total Interest Payable:</span>
                  <span className="text-[#E4E2D3]">{formatLakhCr(totalInterest)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#E4E2D3]/70">Maharashtra Stamp Duty (7%):</span>
                  <span className="text-white font-medium">{formatLakhCr(stampDuty)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#E4E2D3]/70">Registration Duty (Fixed):</span>
                  <span className="text-white font-medium">₹30,000</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E4E2D3]/10 text-sm font-semibold">
                  <span className="text-[#E15E3F]">Total Capital Outlay:</span>
                  <span className="text-white">{formatLakhCr(totalOutlay)}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={openContactModal}
                className="w-full bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold py-4 px-6 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Apply for Bank Pre-Approval <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
