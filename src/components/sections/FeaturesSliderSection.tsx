"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURES = [
  {
    title: "Lonavala Weather, Without the Premium",
    tag: "Microclimate",
    tagColor: "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/30",
    borderTop: "border-t-emerald-600",
    desc: "At the same altitude as Lonavala, Somatane enjoys a cooler microclimate and cleaner air — a rare combination of comfort and value just minutes from city life.",
  },
  {
    title: "Ready-to-Use Club Villagio",
    tag: "Clubhouse",
    tagColor: "bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/30",
    borderTop: "border-t-amber-600",
    desc: "A clubhouse that brings the community together — with a grand banquet hall, gym, yoga and meditation zones, games room, and a mini theatre.",
  },
  {
    title: "Wellness Designed Into Everyday Life",
    tag: "Wellness",
    tagColor: "bg-teal-500/10 text-teal-800 dark:text-teal-300 border-teal-500/30",
    borderTop: "border-t-teal-600",
    desc: "A wellness-focused masterplan with reflexology paths, yoga decks, forest trails, and outdoor fitness areas.",
  },
  {
    title: "Curated Green Experiences",
    tag: "Nature",
    tagColor: "bg-green-500/10 text-green-800 dark:text-green-300 border-green-500/30",
    borderTop: "border-t-green-600",
    desc: "From butterfly gardens and bird pavilions to spice patches and blossom trails — every landscape element is designed to slow you down.",
  },
  {
    title: "Designed by Global Landscape Experts",
    tag: "Architecture",
    tagColor: "bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-500/30",
    borderTop: "border-t-blue-600",
    desc: "Crafted in collaboration with Site Concepts International, led by Singapore-based Mark Mahan, every inch of greenery is shaped with design intention.",
  },
  {
    title: "Crafted Homes With Premium Specifications",
    tag: "Luxury Spec",
    tagColor: "bg-yellow-500/10 text-yellow-800 dark:text-yellow-300 border-yellow-500/30",
    borderTop: "border-t-yellow-600",
    desc: "From modular kitchens with designer fittings to wooden flooring, false ceilings, and smart security — your home is designed to feel elevated.",
  },
  {
    title: "A Complete, Self-Sustained Ecosystem",
    tag: "Community",
    tagColor: "bg-orange-500/10 text-orange-800 dark:text-orange-300 border-orange-500/30",
    borderTop: "border-t-orange-600",
    desc: "Co-working spaces, kids’ play areas, celebration lawns, and daily convenience zones come together to make Villagio more than a home.",
  },
  {
    title: "Low-Rise Living Amidst Nature",
    tag: "16 Acres",
    tagColor: "bg-rose-500/10 text-rose-800 dark:text-rose-300 border-rose-500/30",
    borderTop: "border-t-rose-600",
    desc: "No high-rises, just uninterrupted views of skies and mountain ranges. With over 65% open spaces and thoughtfully landscaped zones.",
  }
];

export default function FeaturesSliderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const totalWidth = slider.scrollWidth - window.innerWidth;

      gsap.to(slider, {
        x: () => -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="amenities" ref={containerRef} className="h-[100dvh] w-full bg-cream text-charcoal overflow-hidden flex flex-col justify-between pt-24 pb-12 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10 max-w-4xl shrink-0">
        <h2 className="text-xs uppercase tracking-widest text-[#8A2D17] font-bold mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8A2D17] inline-block" /> Chapter III: Amenities
        </h2>
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-heading font-light leading-tight text-charcoal">
          Everything You Need, <span className="italic font-normal text-[#8A2D17]">Exactly Where You Want It</span>
        </h3>
      </div>

      <div ref={sliderRef} className="flex gap-6 md:gap-10 px-6 md:px-12 lg:px-24 items-center w-max my-auto">
        {FEATURES.map((feature, idx) => (
          <div 
            key={idx}
            className={`w-[300px] md:w-[380px] flex-shrink-0 bg-white border border-charcoal/15 border-t-4 ${feature.borderTop} p-6 md:p-8 h-[300px] md:h-[320px] flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-500 rounded-sm group relative`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[11px] uppercase tracking-widest font-semibold px-3 py-0.5 rounded-full border ${feature.tagColor}`}>
                  {feature.tag}
                </span>
                <span className="text-3xl font-heading text-charcoal/60 group-hover:text-primary transition-colors duration-500 font-light">
                  0{idx + 1}
                </span>
              </div>
              <h4 className="text-xl md:text-2xl font-heading text-charcoal mb-2 group-hover:text-primary transition-colors duration-500 font-medium leading-snug">
                {feature.title}
              </h4>
            </div>
            <p className="text-charcoal font-normal leading-relaxed text-sm">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
