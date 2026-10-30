"use client";

import React, { useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import PressSection from "@/components/sections/PressSection";
import { useModal } from "@/contexts/ModalContext";

const VisionSection = dynamic(() => import("@/components/sections/VisionSection"));
const ArchitectureSection = dynamic(() => import("@/components/sections/ArchitectureSection"));
const MasterplanSection = dynamic(() => import("@/components/sections/MasterplanSection"));
const FeaturesSliderSection = dynamic(() => import("@/components/sections/FeaturesSliderSection"));
const LocationSection = dynamic(() => import("@/components/sections/LocationSection"));
const GallerySection = dynamic(() => import("@/components/sections/GallerySection"));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));
const AmenitiesSection = dynamic(() => import("@/components/sections/AmenitiesSection"));
const FloorPlanSection = dynamic(() => import("@/components/sections/FloorPlanSection"));
const DeveloperLegacySection = dynamic(() => import("@/components/sections/DeveloperLegacySection"));
const TestimonialSection = dynamic(() => import("@/components/sections/TestimonialSection"));
const ConstructionUpdatesSection = dynamic(() => import("@/components/sections/ConstructionUpdatesSection"));
const SeoSiloLinks = dynamic(() => import("@/components/layout/SeoSiloLinks"));

export interface LandingPageProps {
  heroHeadline1?: string;
  heroHeadline2?: string;
  heroSubline?: string;
  highlightWords?: string[];
  pricing?: string;
  typology?: string;
  intent?: string; // e.g. "floor-plan", "price", "reviews", "brochure", "location", "construction"
  dynamicSeoParagraph?: string;
}

export default function LandingPageTemplate({ 
  heroHeadline1 = "Supreme Villagio Somatane",
  heroHeadline2 = "Luxury Bungalows & Villas in Pune",
  heroSubline = "4 & 5 BHK Gated Community Villas & Townhouses • Near PCMC & Mumbai-Pune Expressway",
  highlightWords = ["Somatane", "Bungalows", "Villas"],
  pricing = "₹2.89 Cr*",
  typology = "4 & 5 BHK",
  intent = "general",
  dynamicSeoParagraph
}: LandingPageProps) {
  const { openBrochureModal } = useModal();

  // If intent is brochure, pop it immediately upon load
  useEffect(() => {
    if (intent.includes("brochure")) {
      const timer = setTimeout(() => {
        openBrochureModal();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [intent, openBrochureModal]);

  // Dynamic Intent Reordering Engine
  const sections = useMemo(() => {
    const baseSections = [
      { id: "press", component: <PressSection key="press" /> },
      { id: "vision", component: <VisionSection key="vision" typology={typology} /> },
      { id: "architecture", component: <ArchitectureSection key="arch" /> },
      { id: "masterplan", component: <MasterplanSection key="masterplan" /> },
      { id: "features", component: <FeaturesSliderSection key="features" /> },
      { id: "amenities", component: <AmenitiesSection key="amenities" /> },
      { id: "floor-plan", component: <FloorPlanSection key="floor-plan" /> },
      { id: "construction", component: <ConstructionUpdatesSection key="construction" /> },
      { id: "location", component: <LocationSection key="location" typology={typology} /> },
      { id: "developer", component: <DeveloperLegacySection key="developer" /> },
      { id: "reviews", component: <TestimonialSection key="reviews" /> },
      { id: "gallery", component: <GallerySection key="gallery" /> },
      { id: "faq", component: <FaqSection key="faq" /> },
    ];

    // Rearrange based on search intent
    if (intent.includes("floor-plan")) {
      const idx = baseSections.findIndex(s => s.id === "floor-plan");
      const [item] = baseSections.splice(idx, 1);
      baseSections.unshift(item);
    } else if (intent.includes("location") || intent.includes("map")) {
      const idx = baseSections.findIndex(s => s.id === "location");
      const [item] = baseSections.splice(idx, 1);
      baseSections.unshift(item);
    } else if (intent.includes("review") || intent.includes("testimonial")) {
      const idx = baseSections.findIndex(s => s.id === "reviews");
      const [item] = baseSections.splice(idx, 1);
      baseSections.unshift(item);
    } else if (intent.includes("construction") || intent.includes("status")) {
      const idx = baseSections.findIndex(s => s.id === "construction");
      const [item] = baseSections.splice(idx, 1);
      baseSections.unshift(item);
    }

    return baseSections.map(s => s.component);
  }, [intent, typology]);

  return (
    <>
      <HeroSection 
        headlineLine1={heroHeadline1}
        headlineLine2={heroHeadline2}
        subline={heroSubline}
        highlightWords={highlightWords}
        pricing={pricing}
        typology={typology}
      />
      
      {/* Google Knowledge Graph & Featured Snippet Definition Block */}
      <section className="bg-charcoal text-cream py-10 border-b border-white/10" aria-label="Supreme Villagio Somatane Overview">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-xl">
            <h2 className="text-xl md:text-2xl font-heading text-white mb-3">
              Supreme Villagio Somatane: West Pune&apos;s Benchmark Villa &amp; Bungalow Landmark
            </h2>
            <p className="text-stone text-sm md:text-base leading-relaxed mb-5">
              <strong>Supreme Villagio Somatane</strong> is an ultra-luxury 16-acre horizontal gated residential development situated at Somatane Phata, Pune, along the Mumbai-Pune Expressway corridor. Developed by Supreme Universal with master planning by Site Concepts International (Singapore), the estate offers 4 &amp; 5 BHK Luxury Twin Villas and 4 BHK Townhouses with 100% full Occupation Certificate (OC), zero GST liability, and the operational 18,500 sq.ft. Club Villagio. Conveniently connected within 12 minutes to PCMC / Nigdi Pradhikaran and 20 minutes to Hinjewadi IT Park.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-4 border-t border-white/10">
              <div>
                <span className="text-gold font-semibold block mb-0.5">Starting Price</span>
                <span className="text-white font-medium">₹2.89 Cr* (0% Brokerage)</span>
              </div>
              <div>
                <span className="text-gold font-semibold block mb-0.5">MahaRERA Reg</span>
                <span className="text-white font-medium">P52100046867 (Phase 1 OC)</span>
              </div>
              <div>
                <span className="text-gold font-semibold block mb-0.5">Location Access</span>
                <span className="text-white font-medium">Somatane Phata • NH-48</span>
              </div>
              <div>
                <span className="text-gold font-semibold block mb-0.5">Direct Helpline</span>
                <a href="tel:+917744009295" className="text-gold hover:underline font-mono font-medium">+91 7744009295</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {dynamicSeoParagraph && (
        <section className="bg-charcoal text-cream py-12 border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
            <p className="text-lg md:text-xl font-light leading-relaxed">
              {dynamicSeoParagraph}
            </p>
          </div>
        </section>
      )}
      {sections}
      <SeoSiloLinks currentTypology={typology} />
    </>
  );
}
