import React from 'react';
import Link from 'next/link';

export default function SeoSiloLinks({ currentTypology }: { currentTypology?: string }) {
  const bungalowsAndVillas = [
    { title: "Luxury Bungalows in Pune", href: "/luxury-bungalows-pune", desc: "4 & 5 BHK gated twin bungalows with private lawns" },
    { title: "Luxury Villas in Pune", href: "/luxury-villas-pune", desc: "Benchmark horizontal living across 16 scenic acres" },
    { title: "4 BHK Luxury Villas", href: "/4-bhk-villas-pune", desc: "Double-height living rooms and private gardens" },
    { title: "5 BHK Presidential Hillside Villas", href: "/5-bhk-villas-pune", desc: "Private elevator, 3-car parking, panoramic views" },
    { title: "4 BHK Townhouses", href: "/supreme-villagio/townhouses", desc: "G+2 luxury residences with private terrace" },
    { title: "Ready Bungalows Pune (100% OC)", href: "/supreme-villagio-somatane/ready-to-move-independent-bungalows-pune", desc: "Ready to move villas with zero GST liability" },
    { title: "Villas vs Apartments in Pune", href: "/villas-vs-apartments-pune", desc: "Why HNI buyers prefer land ownership over flats" },
  ];

  const expresswayAndMumbai = [
    { title: "Supreme Villagio Somatane Portal", href: "/supreme-villagio-somatane", desc: "Master directory & verified project fact sheet" },
    { title: "Somatane 2026 Price List", href: "/supreme-villagio-somatane/price-list-2026", desc: "Official villa & townhouse cost breakdown" },
    { title: "Ready OC Villas Somatane", href: "/supreme-villagio-somatane/ready-possession-oc-villas", desc: "Immediate possession & 0% GST liability" },
    { title: "Villas Near Mumbai-Pune Expressway", href: "/villas-near-mumbai-pune-expressway", desc: "3 mins from Expressway toll; ideal for Mumbai buyers" },
    { title: "Villas Near Atal Setu (MTHL)", href: "/villas-near-atal-setu-mthl", desc: "75 mins signal-free drive from Mumbai via Atal Setu & Expressway" },
    { title: "Somatane Real Estate Guide", href: "/somatane-real-estate", desc: "Pune's fastest-growing luxury horizontal estate hub" },
    { title: "Villas in Somatane", href: "/somatane-villas", desc: "616m elevation, hill-station microclimate & clean air" },
    { title: "Somatane vs Hinjewadi IT Park", href: "/somatane-vs-hinjewadi", desc: "20-minute commute to Phase 1, 2 & 3 IT corridors" },
    { title: "Talegaon Luxury Real Estate", href: "/talegaon-luxury-villas", desc: "Connectivity to MIDC & Mumbai-Pune Expressway" },
    { title: "Villas Near Chakan MIDC", href: "/supreme-villagio-somatane/villas-near-chakan-midc", desc: "20 mins to Mercedes, Bajaj & Mahindra auto hub" },
    { title: "Supreme Villagio vs Forest Trails", href: "/supreme-villagio-vs-paranjape-forest-trails", desc: "Comparative analysis of Pune's premier villa projects" },
    { title: "Supreme Villagio vs Lodha Belmondo", href: "/supreme-villagio-vs-lodha-belmondo", desc: "Expressway luxury villa & townhouse comparison" },
    { title: "Supreme Villagio vs Belmondo 2026", href: "/supreme-villagio-somatane/vs-lodha-belmondo-comparison", desc: "Horizontal landed villas vs township high-rise" },
  ];

  const projectPortfolio = [
    { title: "Official Contact & Sales Office", href: "/supreme-villagio/contact", desc: "Direct developer phone +91 7744009295 & site visit desk" },
    { title: "Official Brochure PDF Download", href: "/supreme-villagio-somatane/brochure-download-pdf-2026", desc: "Download high-resolution e-brochure & layouts" },
    { title: "Exact Address & GPS Location", href: "/supreme-villagio-somatane/address-location-directions-map", desc: "Survey 44, Somatane Phata (3 mins to Toll)" },
    { title: "Resale & Ready Possession OC Units", href: "/supreme-villagio/resale", desc: "Phase 1 & 2 ready OC villas with 0% brokerage" },
    { title: "MahaRERA Certifications (OC Received)", href: "/supreme-villagio-rera", desc: "Verified RERA P52100046867, P52100049506, P52100055048" },
    { title: "16-Acre Master Plan & Layout", href: "/supreme-villagio/master-plan", desc: "Site Concepts Singapore landscape masterplan" },
    { title: "18,500 Sq.Ft. Club Villagio", href: "/supreme-villagio/amenities", desc: "Infinity pool, gym, yoga pavilion, squash court" },
    { title: "Villa Blueprints & Floor Plans", href: "/supreme-villagio/floor-plans", desc: "Detailed carpet areas and spatial layouts" },
    { title: "Transparent Pricing & Cost Sheets", href: "/supreme-villagio/price", desc: "All-inclusive pricing starting from ₹2.89 Cr*" },
    { title: "NRI Investment & Repatriation Desk", href: "/supreme-villagio/nri-guide", desc: "FEMA guidelines & currency advantage advisory" },
  ];

  return (
    <section className="bg-charcoal text-cream py-16 border-t border-white/10 text-xs">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center md:text-left mb-10">
          <p className="text-gold uppercase tracking-[0.2em] font-semibold text-[11px] mb-2">Pune Luxury Real Estate Authority</p>
          <h2 className="text-2xl md:text-3xl font-heading text-cream font-light">Supreme Villagio Ecosystem &amp; Directory</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-gold font-bold uppercase tracking-wider text-xs pb-2 mb-4 border-b border-white/10">
              Pune Luxury Bungalows &amp; Villas
            </h3>
            <ul className="space-y-4">
              {bungalowsAndVillas.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="group block">
                    <span className="text-cream group-hover:text-gold transition-colors font-medium block">
                      {item.title}
                    </span>
                    <span className="text-stone text-[11px] block mt-0.5">
                      {item.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-gold font-bold uppercase tracking-wider text-xs pb-2 mb-4 border-b border-white/10">
              Mumbai Corridor &amp; Location
            </h3>
            <ul className="space-y-4">
              {expresswayAndMumbai.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="group block">
                    <span className="text-cream group-hover:text-gold transition-colors font-medium block">
                      {item.title}
                    </span>
                    <span className="text-stone text-[11px] block mt-0.5">
                      {item.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-gold font-bold uppercase tracking-wider text-xs pb-2 mb-4 border-b border-white/10">
              Specifications &amp; Verification
            </h3>
            <ul className="space-y-4">
              {projectPortfolio.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="group block">
                    <span className="text-cream group-hover:text-gold transition-colors font-medium block">
                      {item.title}
                    </span>
                    <span className="text-stone text-[11px] block mt-0.5">
                      {item.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
