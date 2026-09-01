import { Metadata } from 'next';
import Link from 'next/link';
import { Car, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Villas Near Mumbai Pune Expressway | Weekend Homes & Estates',
  description: 'Luxury 4 & 5 BHK villas and weekend homes near Mumbai-Pune Expressway at Supreme Villagio Somatane. 75 mins to Navi Mumbai Airport, 30 mins to Lonavala, starting ₹2.89 Cr*.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/villas-near-mumbai-pune-expressway',
  },
};

export default function VillasNearExpresswayPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-4">
          <Car className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Mumbai–Pune Expressway Corridor
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Villas Near <span className="italic text-[#E15E3F]">Mumbai–Pune Expressway</span>
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          For buyers from Mumbai and Pune looking for luxury primary residences or serene weekend retreat homes, Supreme Villagio in Somatane offers the ultimate Expressway location — just 3 minutes from the toll gateway with signal-free highway travel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-2xl font-heading text-white mb-3">The Perfect Weekend & Primary Residence</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-4">
              Escape city pollution without sacrificing connectivity. Supreme Villagio offers 4 & 5 BHK twin villas and townhouses surrounded by misty mountain horizons and resort-style wellness amenities.
            </p>
            <div className="flex items-center justify-between text-xs text-[#E15E3F] font-bold uppercase tracking-wider">
              <span>Starting from ₹2.89 Cr*</span>
              <Link href="/supreme-villagio/price" className="hover:underline flex items-center gap-1">
                Explore Pricing <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-[#1C2C25] p-8 border border-[#E4E2D3]/15">
            <h3 className="text-2xl font-heading text-white mb-3">Travel Times</h3>
            <ul className="space-y-2.5 text-xs text-[#E4E2D3]/80 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3 mins to Mumbai-Pune Expressway toll gate</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30 mins to Lonavala hill station</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>75–85 mins to Navi Mumbai International Airport</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>25 mins to Baner / Balewadi High Street</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Book a Private Expressway Tour</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Experience the seamless drive and serene hill views.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Check Availability <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
