import { SEO_KEYWORD_MATRIX } from '@/lib/seo-data';
import Link from 'next/link';
import LandingPageTemplate from '@/components/layout/LandingPageTemplate';
import { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return SEO_KEYWORD_MATRIX.locations.map(loc => ({ location: loc }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locReadable = resolvedParams.location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `Luxury Villas in ${locReadable} | Supreme Villagio`,
    description: `Explore all premium luxury properties, twin bungalows, and 5 BHK villas targeted for the ${locReadable} real estate market.`,
  };
}

export default async function LocationSubSitemapPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const location = resolvedParams.location;
  const locReadable = location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const canonicalCategories = [
    { name: `4 BHK Luxury Twin Villas near ${locReadable}`, href: "/supreme-villagio/4-bhk-villas", desc: "Private gardens, double-height living, 2800 sq.ft." },
    { name: `5 BHK Presidential Hillside Villas near ${locReadable}`, href: "/supreme-villagio/5-bhk-villas", desc: "Private elevator, 3 car bays, panoramic hills view." },
    { name: `4 BHK Premium Townhouses near ${locReadable}`, href: "/supreme-villagio/townhouses", desc: "G+2 horizontal living, private terrace, 2200 sq.ft." },
    { name: `Supreme Villagio Pricing & Cost Sheet`, href: "/supreme-villagio/price", desc: "All-inclusive breakdown, payment schedules, and taxes." },
    { name: `16-Acre Master Plan & Club Villagio`, href: "/supreme-villagio/master-plan", desc: "18,500 sq.ft. clubhouse and landscape architecture." },
    { name: `Verified MahaRERA Certificates & OC Status`, href: "/supreme-villagio-rera", desc: "Phase 1 & 2 delivered, Phase 3 active construction." },
    { name: `Location Connectivity from ${locReadable}`, href: "/supreme-villagio/location", desc: "Drive time to Somatane via Expressway / NH-48." },
    { name: `Luxury Villas in Pune Real Estate Guide`, href: "/luxury-villas-pune", desc: "Comparison and market analysis for Pune luxury buyers." },
  ];

  return (
    <>
      <div className="bg-charcoal pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <Link href="/locations" className="text-gold hover:text-white text-sm mb-8 inline-block">&larr; Back to All Locations</Link>
          <h1 className="text-3xl md:text-5xl font-heading text-cream mb-6">Supreme Villagio for Buyers in {locReadable}</h1>
          <p className="text-stone/80 mb-12 max-w-2xl">
            Explore our curated luxury residences and connectivity advantages for buyers exploring horizontal villa living from {locReadable}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canonicalCategories.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="p-6 bg-white/5 border border-white/10 hover:border-gold/50 rounded-sm transition-all group"
              >
                <h3 className="text-cream group-hover:text-gold font-heading text-lg mb-2 transition-colors">
                  {item.name}
                </h3>
                <p className="text-stone/70 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <LandingPageTemplate />
    </>
  );
}
