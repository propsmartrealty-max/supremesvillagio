"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "An absolute masterpiece of horizontal living. Moving our family from a Baner high-rise to our 5 BHK villa in Somatane gave us 3,800 sq.ft. of private space and clean mountain air.",
    author: "P. Kulkarni",
    role: "Homeowner, Phase 1 Villa & VP Tech, Hinjewadi"
  },
  {
    text: "The 18,500 sq. ft. Club Villagio is fully operational. Having an Olympic-length pool and squash courts inside a gated community 20 mins from our Hinjewadi office is incredible.",
    author: "S. Deshpande",
    role: "Resident, Phase 1 Twin Villa & Entrepreneur"
  },
  {
    text: "Supreme Universal's build quality and MahaRERA transparency made this our easiest luxury property purchase in Pune. The 3-side open garden layout is unmatched.",
    author: "A. Mehta",
    role: "Homeowner, Phase 2 Twin Villa"
  },
  {
    text: "As an NRI based in Dubai, securing a Phase 3 hillside villa close to the Mumbai-Pune Expressway was the best capital appreciation decision for our retirement portfolio.",
    author: "R. Nair",
    role: "Investor, Phase 3 Villa, Dubai NRI"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Massive Background Quote Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16">
        <div className="text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">Words of Trust</p>
          <h2 className="text-4xl md:text-5xl font-heading font-light">
            The <span className="text-white/50 italic">Supreme</span> Experience
          </h2>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35,
            ease: "linear", 
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-8 px-4"
        >
          {/* Double array once for smooth continuous CSS infinite scroll */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[500px] flex-shrink-0 bg-white/5 border border-white/10 p-10 whitespace-normal hover:bg-white/10 transition-colors duration-500 rounded-sm"
            >
              <div className="text-gold mb-6">
                <Quote size={32} />
              </div>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-white/90">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <p className="font-heading text-lg">{testimonial.author}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
