/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AMENITIES = [
  {
    title: "Club Villagio",
    description: "18,500 sq. ft. of exclusive recreation and wellness.",
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "row-span-2",
    image: "https://cdn.supremeuniversal.com/media/jfpM5D_Villagio-L--KD--Club-housemin.jpg",
  },
  {
    title: "Infinity Pool",
    description: "Temperature-controlled swimming pool overlooking the hills.",
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-1",
    image: "https://cdn.supremeuniversal.com/media/tIaHE6_Villagio-L--Club-housemin.jpg",
  },
  {
    title: "Yoga Pavilion",
    description: "Find inner peace in our dedicated meditation zones.",
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-1",
    image: "https://cdn.supremeuniversal.com/media/fIAB41_Villagio--KD--Wellness-Spine.jpg",
  },
  {
    title: "Organic Gardens",
    description: "Stroll through meticulously landscaped green spaces.",
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-1",
    image: "https://cdn.supremeuniversal.com/media/Bc6Vxj_Grand-Central-Boulevard_880-X-900_Villagio-08.jpg",
  },
  {
    title: "State-of-the-Art Gym",
    description: "Equipped with the latest fitness technology.",
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "row-span-1",
    image: "https://cdn.supremeuniversal.com/media/Supreme-Villagio--Desktop-Banner-5_H7lC84.jpg",
  }
];

export default function AmenitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="amenities" className="py-20 md:py-32 bg-background relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4"
          >
            A Life Extraordinary
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-light leading-tight"
          >
            Discover the <span className="text-foreground/50 italic">Pinnacle</span> of Wellness & Recreation.
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 md:auto-rows-[300px]">
          {AMENITIES.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden group rounded-sm ${amenity.colSpan} ${amenity.rowSpan} bg-charcoal-card border border-white/10 hover:border-gold/60 transition-all duration-500 shadow-xl h-[300px] md:h-auto`}
            >
              {/* Warm gradient overlay for rich color depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent z-20 opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 z-10 pointer-events-none mix-blend-screen" />

              <motion.div 
                className="absolute inset-0 w-full h-full"
                style={{ y: amenity.rowSpan.includes("2") ? y : 0 }}
              >
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </motion.div>

              <div className="absolute bottom-0 left-0 p-8 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Exclusive Amenity</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading text-cream mb-2 group-hover:text-gold transition-colors duration-300">{amenity.title}</h3>
                <p className="text-cream/80 font-light opacity-90 group-hover:opacity-100 transition-opacity duration-500 text-sm max-w-lg leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
