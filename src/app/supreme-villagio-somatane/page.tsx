import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Home,
  FileText,
  DollarSign,
  Compass
} from 'lucide-react';
import SeoSiloLinks from '@/components/layout/SeoSiloLinks';
import { PROGRAMMATIC_TOPICS } from '@/lib/programmatic-villagio';

export const metadata: Metadata = {
  title: 'Supreme Villagio Somatane | Official Master Directory & Buyer Portal 2026',
  description: 'Verified portal for Supreme Villagio Somatane. 16-acre luxury horizontal villa estate. Explore 2026 Price List, 4 & 5 BHK Floor Plans, Phase 1 & 2 Ready OC, MahaRERA certificates & Club Villagio.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio-somatane',
  },
  openGraph: {
    title: 'Supreme Villagio Somatane | Master Buyer Portal & Official Topics 2026',
    description: 'Complete research portal for Supreme Villagio Somatane luxury villas and townhouses. Starting ₹2.89 Cr* with ready OC.',
    url: 'https://www.supremesvillagio.com/supreme-villagio-somatane',
    type: 'website',
    images: [
      {
        url: 'https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg',
        width: 1200,
        height: 630,
        alt: 'Supreme Villagio Somatane Master Portal',
      },
    ],
  },
  keywords: [
    'Supreme Villagio Somatane',
    'Supreme Villagio Somatane Pune',
    'Supreme Villagio Somatane Price',
    'Supreme Villagio Somatane Floor Plans',
    'Supreme Villagio Somatane RERA',
    'Luxury Villas Somatane Pune',
  ],
};

const hubSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.supremesvillagio.com/supreme-villagio-somatane#collection',
  name: 'Supreme Villagio Somatane Master Directory & Buyer Portal',
  description: 'Complete programmatic topic cluster and buyer guidance directory for Supreme Villagio Somatane.',
  url: 'https://www.supremesvillagio.com/supreme-villagio-somatane',
  publisher: {
    '@type': 'RealEstateAgent',
    name: 'Supreme Universal Official Desk',
    telephone: '+917744009295',
    url: 'https://www.supremesvillagio.com/',
  },
  about: {
    '@type': 'Place',
    name: 'Supreme Villagio Somatane',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 1, Somatane Phata, Old Mumbai-Pune Highway',
      addressLocality: 'Somatane, Talegaon Dabhade',
      addressRegion: 'Maharashtra',
      postalCode: '410506',
      addressCountry: 'IN',
    },
  },
};

export default function SupremeVillagioSomataneHubPage() {
  return (
    <div className="min-h-screen bg-charcoal text-cream pt-28 pb-16 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />

      {/* Breadcrumb Header */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-stone">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-stone/60" />
          <span className="text-gold font-medium">Supreme Villagio Somatane</span>
        </nav>
      </div>

      {/* Main Header */}
      <header className="container mx-auto px-6 md:px-12 max-w-6xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-wider uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          Official Somatane Topic Cluster
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-light tracking-tight text-white mb-6 leading-tight">
          Supreme Villagio Somatane: The Complete Guide &amp; Master Directory
        </h1>
        <p className="text-lg md:text-xl text-stone max-w-3xl leading-relaxed mb-8">
          Welcome to the authoritative knowledge repository for Supreme Villagio Somatane. Access verified architectural floor plans, 2026 pricing sheets, MahaRERA registrations, Club Villagio amenities, and developer sales office contacts.
        </p>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-xl mb-8">
          <div>
            <span className="text-xs uppercase tracking-wider text-stone block mb-1">Estate Area</span>
            <span className="text-2xl font-heading text-gold font-semibold">16 Acres</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-stone block mb-1">Starting Price</span>
            <span className="text-2xl font-heading text-white font-semibold">₹2.89 Cr*</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-stone block mb-1">Status</span>
            <span className="text-xl md:text-2xl font-heading text-emerald-400 font-semibold">Phase 1 &amp; 2 OC</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-stone block mb-1">Homeowners</span>
            <span className="text-2xl font-heading text-gold font-semibold">88+ Residing</span>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+917744009295"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-charcoal font-medium rounded-lg hover:bg-gold-light transition-colors text-sm shadow-lg shadow-gold/20"
          >
            <Phone className="w-4 h-4" />
            +91 7744009295 (Sales Desk)
          </a>
          <a
            href="https://wa.me/917744009295?text=Hello%20Supreme%20Villagio%20Desk%2C%20please%20share%20all%20information%20for%20Somatane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600/90 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors text-sm"
          >
            WhatsApp Official Desk
          </a>
        </div>
      </header>

      {/* Programmatic Topics Grid */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl mb-16">
        <h2 className="text-2xl sm:text-3xl font-heading text-white mb-2">
          Specialized Somatane Topic Portals
        </h2>
        <p className="text-stone text-sm mb-8">
          Click any topic below to view deep-dive analysis, verified specifications, FAQs, and official documents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMMATIC_TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              href={`/supreme-villagio-somatane/${topic.slug}`}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-gold/40 hover:bg-white/[0.04] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold">
                    {topic.badge}
                  </span>
                  <span className="text-xs text-stone/80 font-mono">
                    {topic.highlightMetric.value}
                  </span>
                </div>
                <h3 className="text-lg font-heading text-white group-hover:text-gold transition-colors mb-2 font-medium">
                  {topic.query}
                </h3>
                <p className="text-stone text-xs leading-relaxed line-clamp-3 mb-4">
                  {topic.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gold">
                <span className="font-medium group-hover:underline">Explore Portal</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Masterplan & Architecture Snapshot */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl mb-16">
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-heading text-white mb-4">
              Why Supreme Villagio Somatane Is West Pune&apos;s #1 Villa Landmark
            </h2>
            <p className="text-stone text-sm leading-relaxed mb-6">
              Unlike dense apartment complexes in Hinjewadi or Wakad, Supreme Villagio Somatane was conceived as an authentic horizontal estate. With master planning by Singapore&apos;s Site Concepts, the property balances generous plot footprints, expansive 3-side open lawns, and a low carbon footprint at an elevation of 616 meters above sea level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-stone">Direct land ownership footprint with undivided land rights.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-stone">Ready Occupation Certificate (OC) with zero GST liability.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-stone">18,500 sq.ft. operational Club Villagio with heated pools and courts.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-stone">20 minutes to Hinjewadi IT Park and 75 minutes to Mumbai via Atal Setu.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Silo Links */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <SeoSiloLinks />
      </div>
    </div>
  );
}
