"use client";

import React, { useMemo, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, Building2, MapPin, ShieldCheck, Compass } from "lucide-react";
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

      {/* Enterprise Keyword Authority Matrix */}
      <section className="bg-charcoal text-cream py-16 border-t border-white/10" aria-label="Supreme Villagio Somatane Search Knowledge Matrix">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Google Search &amp; Buyer Knowledge Matrix
              </div>
              <h2 className="text-2xl md:text-3xl font-heading text-white">
                Supreme Villagio Somatane: Authoritative Project Directory
              </h2>
            </div>
            <Link
              href="/supreme-villagio-somatane"
              className="mt-4 md:mt-0 text-xs font-semibold text-gold hover:text-white transition-colors flex items-center gap-1.5"
            >
              Explore Full Somatane Directory Hub <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1: Brand & Official Docs */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider pb-2 border-b border-white/10">
                <Building2 className="w-4 h-4" />
                Official Documentation
              </div>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="/supreme-villagio-somatane/price-list-2026" className="text-cream hover:text-gold transition-colors font-medium block">
                    • 2026 Price List &amp; Cost Sheet
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Starting ₹2.89 Cr* with 0% brokerage</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/brochure-download-pdf-2026" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Official Brochure PDF Download
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">High-res e-deck &amp; specifications</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/floor-plans-pdf" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Architectural Floor Plans PDF
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">RERA approved carpet area blueprints</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/rera-number-and-certificates" className="text-cream hover:text-gold transition-colors font-medium block">
                    • MahaRERA Numbers &amp; Clear Title
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">P52100046867, P52100049506, P52100055048</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/actual-photos-and-construction-gallery" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Actual Photos &amp; Completed Gallery
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Real photographs of delivered villas</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/address-location-directions-map" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Exact GPS Address &amp; Map
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Sector 1, Somatane Phata (3 mins to Toll)</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Residences & Typologies */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider pb-2 border-b border-white/10">
                <Compass className="w-4 h-4" />
                Residences &amp; Typologies
              </div>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="/supreme-villagio-somatane/4-bhk-twin-villas" className="text-cream hover:text-gold transition-colors font-medium block">
                    • 4 BHK Luxury Twin Villas
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">2,600 – 2,900 sq.ft. with 3-side lawn</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/5-bhk-presidential-villas" className="text-cream hover:text-gold transition-colors font-medium block">
                    • 5 BHK Presidential Hillside Villas
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">3,400 – 3,900 sq.ft. with private elevator</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/townhouses-and-row-houses" className="text-cream hover:text-gold transition-colors font-medium block">
                    • 4 BHK Luxury Townhouses
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">G+2 residences with private terrace</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/ready-possession-oc-villas" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Ready Possession OC Units
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Phase 1 &amp; 2 OC with 0% GST liability</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/resale-villas-and-townhouses" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Resale Villas &amp; Ready Units
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Verified inventory with 0% brokerage</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/villas-for-rent-somatane" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Villas for Rent &amp; Rental Yields
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">₹85k - ₹1.25L monthly executive leases</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Regional Corridors */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider pb-2 border-b border-white/10">
                <MapPin className="w-4 h-4" />
                Regional Commute Corridors
              </div>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="/supreme-villagio-somatane/for-pune-buyers" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Pune Primary Buyers (Hinjewadi/Baner)
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">20-minute reverse commute to IT Park</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/for-pimpri-chinchwad-pcmc-buyers" className="text-cream hover:text-gold transition-colors font-medium block">
                    • PCMC Industrialists (Nigdi/Chinchwad)
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">12 mins from Nigdi Pradhikaran via NH-48</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/villas-near-chakan-midc" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Executive Villas near Chakan MIDC
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">20 mins to Mercedes, Bajaj &amp; Mahindra hubs</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/villas-near-ravet-kiwale-pcmc" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Villas near Ravet &amp; Kiwale Gateway
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Landed living at apartment prices</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/villas-near-wakad-baner-pune" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Villas near Wakad &amp; Baner West Pune
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">22 mins to Balewadi High Street</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/villas-near-talegaon-dabhade" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Villas near Talegaon Dabhade
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">5 mins to Talegaon MIDC &amp; Station</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Mumbai & Comparisons */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider pb-2 border-b border-white/10">
                <ShieldCheck className="w-4 h-4" />
                Mumbai Weekend &amp; Benchmarks
              </div>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="/supreme-villagio-somatane/weekend-second-homes-mumbai" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Mumbai 75-Min Weekend Homes
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Direct signal-free highway transit</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/villas-near-atal-setu-mthl" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Villas via Atal Setu (MTHL)
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Fast connectivity from BKC / South Mumbai</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/second-homes-near-lonavala-khandala" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Second Homes near Lonavala
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Bypass Khandala ghat monsoon traffic</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/vs-lodha-belmondo-comparison" className="text-cream hover:text-gold transition-colors font-medium block">
                    • Supreme Villagio vs Lodha Belmondo
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Landed private lawns vs high-rise towers</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/club-villagio-amenities" className="text-cream hover:text-gold transition-colors font-medium block">
                    • 18,500 Sq.Ft. Club Villagio
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">Operational pool, gym, banquet &amp; sports</span>
                </li>
                <li>
                  <Link href="/supreme-villagio-somatane/master-plan-layout-map" className="text-cream hover:text-gold transition-colors font-medium block">
                    • 16-Acre Master Layout &amp; Zoning
                  </Link>
                  <span className="text-stone-300 text-xs block mt-0.5">65% open green landscape by Singapore firm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <SeoSiloLinks currentTypology={typology} />
    </>
  );
}
