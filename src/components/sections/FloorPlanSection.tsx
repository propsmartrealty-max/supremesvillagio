/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useModal } from "@/contexts/ModalContext";
import { Maximize2 } from "lucide-react";
import Image from "next/image";

const FLOOR_PLANS = [
  {
    id: "4-BHK-TWIN",
    name: "4 BHK Twin Villas",
    carpetArea: "Approx. 2,800 sq.ft.",
    plotArea: "Approx. 3,500 sq.ft.",
    highlights: ["Private Garden", "Double-Height Living", "Staff Quarters"],
    description: "Designed for families seeking expansive horizontal living without compromising on privacy. Features a beautifully landscaped private garden and grand double-height living spaces.",
    coverImage: "/images/floorplan_4bhk_1784120309412.jpg",
  },
  {
    id: "5-BHK-VILLA",
    name: "5 BHK Luxury Villas",
    carpetArea: "Approx. 4,200 sq.ft.",
    plotArea: "Approx. 5,000 sq.ft.",
    highlights: ["Private Elevator", "Terrace Lounge", "Home Theatre Option"],
    description: "The pinnacle of luxury in Somatane. These massive 5-bedroom residences come equipped with space for a private elevator and an expansive terrace lounge for entertaining.",
    coverImage: "/images/floorplan_5bhk_1784120331220.jpg",
  },
  {
    id: "ROW-HOUSE",
    name: "Luxury Row Houses",
    carpetArea: "Approx. 2,100 sq.ft.",
    plotArea: "Approx. 2,500 sq.ft.",
    highlights: ["Community Living", "Efficient Layout", "Modern Architecture"],
    description: "Perfectly balanced townhouses offering the security of a gated community with the independence of a villa. Smartly designed layouts maximize natural light and ventilation.",
    coverImage: "/images/floorplan_rowhouse_1784120349629.jpg",
  },
];

export default function FloorPlanSection() {
  const { openContactModal } = useModal();

  return (
    <section id="residences" className="py-20 md:py-32 bg-charcoal text-white relative border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">The Residences</p>
          <h2 className="text-4xl md:text-6xl font-heading font-light leading-tight">
            Curated Spaces for <br className="hidden md:block"/>
            <span className="text-white/50 italic">Elevated Living</span>
          </h2>
        </div>

        {/* Cinematic Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FLOOR_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative h-[600px] w-full bg-black rounded-sm overflow-hidden"
            >
              {/* Cover Image */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                <img 
                  src={plan.coverImage} 
                  alt={plan.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-30 transition-opacity duration-700" 
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 pointer-events-none" />

              {/* Default State Content (Bottom) */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full transition-all duration-700 group-hover:translate-y-full group-hover:opacity-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                  <p className="text-gold text-xs uppercase tracking-widest font-bold">{plan.carpetArea}</p>
                </div>
                <h3 className="text-3xl font-heading text-cream mb-1 group-hover:text-gold transition-colors">{plan.name}</h3>
              </div>

              {/* Hover State Content (Reveals on Hover) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 bg-charcoal/95 backdrop-blur-md">
                <div>
                  <h3 className="text-2xl font-heading text-gold-gradient font-medium mb-3">{plan.name}</h3>
                  <p className="text-cream/80 font-light leading-relaxed text-sm mb-6 line-clamp-4">
                    {plan.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 pt-5 border-t border-gold/20">
                    <div className="bg-white/5 p-3 border border-white/5">
                      <p className="text-[10px] text-gold uppercase tracking-widest mb-1 font-semibold">Carpet Area</p>
                      <p className="text-sm font-medium text-cream">{plan.carpetArea}</p>
                    </div>
                    <div className="bg-white/5 p-3 border border-white/5">
                      <p className="text-[10px] text-gold uppercase tracking-widest mb-1 font-semibold">Plot Area</p>
                      <p className="text-sm font-medium text-cream">{plan.plotArea}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {plan.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-cream/90 text-sm font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 mr-3 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={openContactModal}
                  className="mt-6 flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-charcoal py-3.5 px-6 text-xs uppercase tracking-widest font-bold shadow-lg shadow-amber-500/25 hover:brightness-110 hover:shadow-amber-500/40 active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
                >
                  <Maximize2 size={16} /> Request Floor Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
