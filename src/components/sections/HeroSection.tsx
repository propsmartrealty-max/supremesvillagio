"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Play } from "lucide-react";
import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import { useModal } from "@/contexts/ModalContext";
import DynamicPrice from "@/components/ui/DynamicPrice";

interface HeroSectionProps {
  headlineLine1?: string;
  headlineLine2?: string;
  subline?: string;
  highlightWords?: string[];
  pricing?: string;
  typology?: string;
}

export default function HeroSection({
  headlineLine1 = "A New Paradigm of",
  headlineLine2 = "Horizontal Living",
  subline = "4 & 5 BHK Villas & 4 BHK Townhouses in Somatane, Pune",
  highlightWords = ["Paradigm", "Horizontal", "Living"],
  pricing = "₹2.89 Cr*",
  typology = "4 & 5 BHK"
}: HeroSectionProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openContactModal } = useModal();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    // GSAP Intro Animation
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-logo",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" }
    ).fromTo(
      ".hero-text-reveal",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power4.out" },
      "-=1"
    ).fromTo(
      ".hero-panel",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=1"
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-charcoal">
      {/* Background Media */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <Image 
          src="https://cdn.supremeuniversal.com/media/Supreme-Villagio--Desktop-Banner-3_IOrvdm.jpg"
          alt={`${headlineLine1} ${headlineLine2} - ${subline}`}
          title={`${headlineLine1} ${headlineLine2}`}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={100}
          className="object-cover object-center transform scale-105 transition-transform duration-[20s] ease-linear hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/20 via-transparent to-emerald-950/20 mix-blend-overlay pointer-events-none" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
      >
        <div className="mb-12 hero-logo">
          <Image 
            src="https://cdn.supremeuniversal.com/media/Q9b1g7_Supreme-Villagio-Logo.svg"
            alt="Supreme Villagio Somatane Logo"
            width={300}
            height={100}
            className="mx-auto drop-shadow-[0_10px_20px_rgba(245,184,27,0.15)] brightness-0 invert" 
          />
        </div>

        <div className="overflow-hidden mb-6 flex flex-col items-center justify-center">
          <TextReveal 
            text={headlineLine1} 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-cream max-w-5xl leading-tight drop-shadow-md" 
            delay={0.5} 
            highlightWords={highlightWords}
            highlightClass="text-gold-gradient italic font-light font-heading"
          />
          <TextReveal 
            text={headlineLine2} 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-normal text-cream max-w-5xl leading-tight drop-shadow-md" 
            delay={1}
            highlightWords={highlightWords}
            highlightClass="text-gold-gradient italic font-light font-heading"
          />
        </div>
        
        <div className="overflow-hidden mb-12">
          <p className="hero-text-reveal text-lg md:text-xl text-cream/90 max-w-2xl font-light tracking-wide drop-shadow-sm">
            {subline}
          </p>
        </div>

        <div className="overflow-hidden flex flex-col sm:flex-row gap-6 items-center">
          <button 
            onClick={openContactModal}
            className="hero-text-reveal bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-charcoal px-9 py-4 text-sm uppercase tracking-widest font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:brightness-110 active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
            aria-label="Book a private tour of Supreme Villagio"
          >
            Book Private Tour
          </button>
          <button 
            className="hero-text-reveal flex items-center justify-center gap-3 border border-gold/40 bg-white/5 text-cream px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold/15 hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-md rounded-none"
            aria-label="Watch the Supreme Villagio walkthrough film"
          >
            <Play size={16} className="text-gold" /> Watch Film
          </button>
        </div>
      </motion.div>

      {/* Floating Info Panel (Real Data) */}
      <div className="hero-panel absolute bottom-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 border-t border-gold/20 bg-charcoal/90 backdrop-blur-xl py-4 md:py-6 shadow-2xl">
            <div className="px-2 md:px-4 border-r border-white/10 md:last:border-0">
              <p className="text-[10px] md:text-xs text-gold uppercase tracking-widest mb-1 font-bold">Typology</p>
              <p className="text-xs md:text-sm text-cream font-medium">{typology}</p>
            </div>
            <div className="px-2 md:px-4 border-none md:border-r border-white/10 md:last:border-0">
              <p className="text-[10px] md:text-xs text-gold uppercase tracking-widest mb-1 font-bold">Project Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs md:text-sm text-cream font-medium">Under Construction</p>
              </div>
            </div>
            <div className="px-2 md:px-4 border-r border-white/10 md:last:border-0 mt-2 md:mt-0">
              <p className="text-[10px] md:text-xs text-gold uppercase tracking-widest mb-1 font-bold">Location</p>
              <p className="text-xs md:text-sm text-cream font-medium">Somatane, Pune</p>
            </div>
            <div className="px-2 md:px-4 mt-2 md:mt-0">
              <p className="text-[10px] md:text-xs text-gold uppercase tracking-widest mb-1 font-bold">Starting Price</p>
              <p className="text-xs md:text-sm font-semibold text-gold-gradient"><DynamicPrice fallbackPrice={pricing} /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
