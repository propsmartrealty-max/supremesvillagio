/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";

const UPDATES = [
  {
    date: "OC Granted • Phase 1 & 2 Delivered",
    title: "Phase 1 & 2: Handed Over to Residents",
    description: "Physical execution is 100% complete with full Occupation Certificates (P52100046867 & P52100049506). Homeowners are currently residing in the low-density estate.",
    image: "https://cdn.supremeuniversal.com/media/Supreme-Villagio--Desktop-Banner-2_sx0rpm.jpg"
  },
  {
    date: "Ready & Operational",
    title: "18,500 Sq.Ft. Club Villagio Ready",
    description: "The grand clubhouse is fully operational featuring an Olympic-length pool, badminton and squash courts, banquet halls, and a state-of-the-art wellness gym.",
    image: "https://cdn.supremeuniversal.com/media/Villagio-L--KD--Club-housemin.jpg"
  },
  {
    date: "Active Launch • Dec 2028 Schedule",
    title: "Phase 3: Hillside Villas Under Construction",
    description: "Structural plinth and superstructure works are actively progressing for Phase 3 hillside 4 & 5 BHK villas under MahaRERA registration P52100055048.",
    image: "https://cdn.supremeuniversal.com/media/fIAB41_Villagio--KD--Wellness-Spine.jpg"
  }
];

export default function ConstructionUpdatesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-cream text-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[#E15E3F] uppercase tracking-[0.2em] text-sm font-semibold mb-4">MahaRERA Live Status</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light">
              Construction & <span className="italic text-[#E15E3F]">Delivery</span> Milestones
            </h2>
          </div>
          <p className="text-charcoal/70 max-w-md text-sm md:text-base leading-relaxed font-light">
            Transparency is our benchmark. Phase 1 & 2 are completed and handed over with OC, while Phase 3 proceeds on strict statutory timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {UPDATES.map((update, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group bg-white p-6 rounded-sm border border-charcoal/10 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-[240px] md:h-[280px] overflow-hidden rounded-sm mb-6">
                  <img 
                    src={update.image} 
                    alt={update.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#23362E]/90 text-white backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-white/10">
                    {update.date}
                  </div>
                </div>
                <h3 className="text-xl font-heading text-[#23362E] mb-2">{update.title}</h3>
                <p className="text-charcoal/75 text-sm font-light leading-relaxed">{update.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
