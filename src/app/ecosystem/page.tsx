import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Supreme Villagio Somatane Ecosystem | Complete Master Directory & Authority Hub",
  description: "The authoritative master ecosystem directory for Supreme Villagio in Somatane, Pune. Explore 16 acres of luxury 4 & 5 BHK twin villas, Club Villagio, price matrices, MahaRERA registrations, and regional connectivity.",
  keywords: [
    "Supreme Villagio Somatane Ecosystem",
    "Supreme Villagio Somante Ecosystem",
    "Supreme Villagio Ecosystem",
    "Supreme Villagio Somatane",
    "Supreme Villagio Somante",
    "Villagio Somatane",
    "Club Villagio Somatane",
    "Supreme Villagio 4 BHK",
    "Supreme Villagio 5 BHK",
    "Supreme Villagio Villas",
    "Supreme Villagio Price",
    "Supreme Villagio MahaRERA",
    "Supreme Universal Somatane",
    "Supreme Villagio Floor Plans",
    "Supreme Villagio Reviews"
  ],
  alternates: {
    canonical: "https://www.supremesvillagio.com/ecosystem",
  },
  openGraph: {
    title: "Supreme Villagio Somatane Ecosystem | Complete Master Directory",
    description: "The official master ecosystem hub for Supreme Villagio in Somatane, Pune. 16 acres of low-rise luxury villas, Club Villagio, and MahaRERA compliance.",
    url: "https://www.supremesvillagio.com/ecosystem",
    type: "website",
  },
};

const ecosystemFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.supremesvillagio.com/ecosystem#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Supreme Villagio Somatane Ecosystem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Supreme Villagio Somatane Ecosystem represents a comprehensive 16-acre luxury residential development in Somatane, Pune (often searched as Somante). It integrates 4 & 5 BHK luxury twin villas, 4 BHK townhouses, the operational 18,500 sq.ft. Club Villagio, 65% open green spaces, and verified MahaRERA certifications under developer Supreme Universal."
      }
    },
    {
      "@type": "Question",
      "name": "Is Somatane also spelled or searched as Somante?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 'Somante' is a widely used phonetical search variation of Somatane Phata in Pune. Supreme Villagio is officially located at Survey No. 44, Somatane, Pune 410506, situated at an altitude of 616 meters directly accessible from the Mumbai-Pune Expressway."
      }
    },
    {
      "@type": "Question",
      "name": "What are the key residential typologies in the Supreme Villagio Ecosystem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ecosystem offers three primary configurations: 4 BHK Luxury Townhouses (2,200 - 2,400 sq.ft. from ₹2.89 Cr*), 4 BHK Luxury Twin Villas with 3-side open lawns (2,600 - 2,900 sq.ft. from ₹3.45 Cr*), and 5 BHK Grand Presidential Hillside Villas with private elevator provisions (3,400 - 3,900 sq.ft. from ₹4.85 Cr*)."
      }
    },
    {
      "@type": "Question",
      "name": "What are the MahaRERA numbers for the Supreme Villagio Ecosystem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phase I: MahaRERA Reg P52100046867 (Handed Over with OC). Phase II: MahaRERA Reg P52100049506 (Handed Over with OC). Phase III: MahaRERA Reg P52100055048 (Under Active Construction, Completion Dec 31, 2028)."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities does Club Villagio provide within the ecosystem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Club Villagio is an 18,500 sq.ft. operational clubhouse featuring an Olympic-length swimming pool, squash and badminton courts, high-performance gymnasium, banquet halls, wellness spa, and landscaped walking trails along the central wellness spine."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.supremesvillagio.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Ecosystem",
      "item": "https://www.supremesvillagio.com/ecosystem"
    }
  ]
};

export default function EcosystemHub() {
  const pillars = [
    {
      category: "Pillar 1: Masterplan & Land Parcels",
      items: [
        { title: "16-Acre Master Site Layout", desc: "Designed by Site Concepts International, Singapore with 65% open greens", href: "/supreme-villagio/master-plan" },
        { title: "Phase 1 Residences", desc: "100% Completed, OC Received & Handed Over (RERA: P52100046867)", href: "/supreme-villagio/phase-1" },
        { title: "Phase 2 Residences", desc: "100% Completed, OC Received & Handed Over (RERA: P52100049506)", href: "/supreme-villagio/phase-2" },
        { title: "Phase 3 New Launch", desc: "Active Construction with statutory completion Dec 31, 2028 (RERA: P52100055048)", href: "/supreme-villagio/phase-3" },
      ]
    },
    {
      category: "Pillar 2: Luxury Residences & Typologies",
      items: [
        { title: "4 BHK Luxury Twin Villas", desc: "2,600 – 2,900 sq.ft. with 3-side wrap-around lawn and double-height living", href: "/supreme-villagio/4-bhk-villas" },
        { title: "5 BHK Grand Presidential Villas", desc: "3,400 – 3,900 sq.ft. with private elevator, 3 car bays, and mountain horizons", href: "/supreme-villagio/5-bhk-villas" },
        { title: "4 BHK Luxury Townhouses", desc: "2,200 – 2,400 sq.ft. G+2 gated low-density community living from ₹2.89 Cr*", href: "/supreme-villagio/townhouses" },
        { title: "Floor Plans & Blueprints Kit", desc: "Full dimensional architectural blueprints and carpet area schedules", href: "/supreme-villagio/floor-plans" },
      ]
    },
    {
      category: "Pillar 3: Lifestyle & Clubhouse",
      items: [
        { title: "18,500 Sq.Ft. Club Villagio", desc: "Olympic swimming pool, squash, badminton, and premium fitness suites", href: "/supreme-villagio/amenities" },
        { title: "Central Wellness Spine", desc: "Pedestrian-only green boulevard and natural elevation landscaping", href: "/supreme-villagio/architecture" },
        { title: "Developer Heritage & Vision", desc: "Supreme Universal's 40+ year track record delivering 75+ landmark addresses", href: "/supreme-villagio/vision" },
        { title: "Homeowner Reviews & Testimonials", desc: "Verified experiences and reviews from resident villa owners", href: "/supreme-villagio/reviews" },
      ]
    },
    {
      category: "Pillar 4: Geographic & Microclimate Ecosystem",
      items: [
        { title: "Somatane Real Estate Intelligence", desc: "616-meter altitude hill-station microclimate & clean air index (frequently searched as Somante)", href: "/somatane-real-estate" },
        { title: "Somatane vs Hinjewadi IT Park", desc: "20-minute signal-free commute analysis for IT leaders & senior executives", href: "/somatane-vs-hinjewadi" },
        { title: "Somatane vs Talegaon Growth Corridor", desc: "Infrastructure expansion, industrial MIDC proximity, and capital appreciation", href: "/somatane-vs-talegaon" },
        { title: "Supreme Villagio vs Forest Trails", desc: "Comprehensive comparative benchmark of Pune's premier villa projects", href: "/supreme-villagio-vs-paranjape-forest-trails" },
      ]
    },
    {
      category: "Pillar 5: Legal & Statutory Compliance",
      items: [
        { title: "MahaRERA Certifications Hub", desc: "Direct government verification: P52100046867, P52100049506, P52100055048", href: "/supreme-villagio-rera" },
        { title: "Possession Timeline & Site Audit", desc: "Ready OC inventory vs active Phase 3 construction milestone reports", href: "/supreme-villagio/possession" },
        { title: "Official Project Brochure & Dossier", desc: "Download high-resolution masterplan, floor plans, and technical specification sheet", href: "/supreme-villagio/brochure" },
        { title: "Frequently Asked Questions", desc: "Authoritative answers covering title, approvals, maintenance, and booking", href: "/supreme-villagio/faq" },
      ]
    },
    {
      category: "Pillar 6: Financial Transparency & Advisory",
      items: [
        { title: "Transparent Price & Cost Sheet Matrix", desc: "Unit-wise starting rates, 7% Maharashtra stamp duty, and payment schedules", href: "/supreme-villagio/price" },
        { title: "Interactive EMI & Financial Calculator", desc: "Monthly installment estimates with pre-approved banking partner interest rates", href: "/supreme-villagio/emi-calculator" },
        { title: "NRI Investment Advisory Desk", desc: "FEMA compliance, NRE/NRO accounts, power of attorney, and wealth repatriation", href: "/supreme-villagio/nri-guide" },
        { title: "Investment Potential & ROI Analysis", desc: "Capital growth drivers, Pune Ring Road expansion, and rental yield forecasting", href: "/supreme-villagio/investment" },
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecosystemFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-charcoal text-cream font-sans pt-32 pb-24 px-4 md:px-12">
        <div className="container mx-auto max-w-7xl">
          {/* Header Banner */}
          <div className="mb-16 border-b border-white/10 pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs uppercase tracking-widest mb-4">
              Official Master Directory
            </div>
            <h1 className="text-4xl md:text-6xl font-heading text-gold mb-6 leading-tight">
              Supreme Villagio Somatane Ecosystem
            </h1>
            <p className="text-lg text-stone/90 max-w-4xl leading-relaxed mb-6">
              Welcome to the central knowledge architecture for <strong>Supreme Villagio</strong> in Somatane, Pune (also commonly searched as <em>Supreme Villagio Somante</em>). 
              Spanning 16 pristine acres at a refreshing 616-meter altitude, the ecosystem unites architectural sophistication, 
              the grand 18,500 sq.ft. Club Villagio, transparent MahaRERA compliance, and seamless connectivity to Hinjewadi and Mumbai.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-stone/70">
              <span className="bg-white/5 px-3 py-1.5 rounded border border-white/10">📍 Somatane / Somante Phata, Pune</span>
              <span className="bg-white/5 px-3 py-1.5 rounded border border-white/10">📜 MahaRERA: P52100046867 / P52100055048</span>
              <span className="bg-white/5 px-3 py-1.5 rounded border border-white/10">🏡 4 & 5 BHK Luxury Villas</span>
              <span className="bg-white/5 px-3 py-1.5 rounded border border-white/10">🏊 18,500 Sq.Ft. Club Villagio</span>
            </div>
          </div>

          {/* 6 Core Pillars */}
          <div className="space-y-16 mb-20">
            {pillars.map((pillar, pIdx) => (
              <div key={pIdx} className="space-y-6">
                <h2 className="text-2xl font-heading text-gold flex items-center gap-3 border-l-2 border-gold pl-4">
                  {pillar.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pillar.items.map((item, iIdx) => (
                    <Link
                      key={iIdx}
                      href={item.href}
                      className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 group rounded-sm flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-heading text-cream group-hover:text-gold transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-stone/70 mb-6 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <span className="text-xs text-gold uppercase tracking-widest flex items-center gap-2 font-semibold">
                        Explore <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Permutations & Typo Knowledge Panel */}
          <div className="p-8 border border-gold/30 bg-gold/5 rounded-sm mb-16">
            <h2 className="text-2xl font-heading text-gold mb-4">
              Addressing Search Permutations: Somatane & Somante
            </h2>
            <p className="text-sm text-stone/80 leading-relaxed mb-4">
              Whether you are searching for <strong>Supreme Villagio Somatane</strong>, <strong>Supreme Villagio Somante</strong>, <strong>Villagio Somatane Ecosystem</strong>, 
              or <strong>Supreme Universal Villas Pune</strong>, all queries converge on this verified, authoritative portal. 
              The project is situated in Somatane (Pune PIN: 410506) along the Talegaon-Somatane growth vector, just 3 minutes from the Mumbai-Pune Expressway toll plaza 
              and 20 minutes from Hinjewadi IT Park Phase 1.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/supreme-villagio/price" className="bg-gold text-charcoal text-xs uppercase tracking-widest px-4 py-2 font-semibold hover:bg-white transition-colors">
                View Pricing Sheet
              </Link>
              <Link href="/supreme-villagio/floor-plans" className="border border-cream/30 text-cream text-xs uppercase tracking-widest px-4 py-2 font-semibold hover:bg-white/10 transition-colors">
                Download Floor Plans
              </Link>
              <Link href="/supreme-villagio-rera" className="border border-cream/30 text-cream text-xs uppercase tracking-widest px-4 py-2 font-semibold hover:bg-white/10 transition-colors">
                Verify MahaRERA Numbers
              </Link>
            </div>
          </div>

          {/* Footer Navigation Links */}
          <div className="border-t border-white/10 pt-12 flex flex-wrap gap-6 items-center justify-between">
            <Link href="/locations" className="text-sm text-stone hover:text-gold uppercase tracking-widest transition-colors">
              &larr; Back to Location Matrix
            </Link>
            <Link href="/" className="text-sm text-stone hover:text-gold uppercase tracking-widest transition-colors">
              Return to Homepage &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

