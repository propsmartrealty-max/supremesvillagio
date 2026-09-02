import React, { Suspense } from 'react';
import Link from 'next/link';
import { Search as SearchIcon, ArrowRight, Home, FileText, MapPin, Sparkles } from 'lucide-react';
import { PILLAR_POSTS } from '@/lib/blog-data';
import type { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Search Properties & Articles | Supreme Villagio',
  description: 'Search luxury villas, townhouses, micro-market pricing, and investment guides at Supreme Villagio, Somatane Pune.',
  robots: {
    index: false,
    follow: true,
  },
};

const SEARCHABLE_ITEMS = [
  // Typologies & Hubs
  {
    title: '4 BHK Luxury Twin Villas',
    category: 'Residences',
    desc: '2,600 – 2,900 sq.ft. carpet area with 3-side open landscaped private lawn and double-height living room.',
    href: '/supreme-villagio/4-bhk-villas',
    keywords: ['4 bhk', 'twin villa', 'bungalow', 'lawn', 'garden', 'residences']
  },
  {
    title: '5 BHK Grand Presidential Villas',
    category: 'Residences',
    desc: '3,400 – 3,900 sq.ft. bespoke hillside villas with private elevator provision and 3 covered car bays.',
    href: '/supreme-villagio/5-bhk-villas',
    keywords: ['5 bhk', 'presidential', 'luxury villa', 'elevator', 'lift', 'mansion']
  },
  {
    title: '4 BHK Luxury Townhouses',
    category: 'Residences',
    desc: '2,200 – 2,400 sq.ft. G+2 luxury gated community townhouses starting from ₹2.89 Cr*.',
    href: '/supreme-villagio/townhouses',
    keywords: ['townhouse', 'row house', 'gated', '4 bhk', 'price']
  },
  {
    title: 'Price & Cost Sheet Matrix',
    category: 'Pricing',
    desc: 'Detailed unit-wise starting pricing, 7% Maharashtra stamp duty breakdown, and payment milestones.',
    href: '/supreme-villagio/price',
    keywords: ['price', 'cost', 'rate', 'crore', 'payment', 'stamp duty', 'booking']
  },
  {
    title: 'EMI & Stamp Duty Calculator',
    category: 'Finance',
    desc: 'Interactive monthly repayment calculator with pre-approved banking partner interest rates.',
    href: '/supreme-villagio/emi-calculator',
    keywords: ['emi', 'calculator', 'loan', 'hdfc', 'sbi', 'icici', 'axis', 'interest', 'down payment']
  },
  {
    title: '18,500 Sq.Ft. Club Villagio Amenities',
    category: 'Lifestyle',
    desc: 'Grand clubhouse with Olympic-length swimming pool, squash & badminton courts, and wellness spine.',
    href: '/supreme-villagio/amenities',
    keywords: ['clubhouse', 'amenities', 'pool', 'gym', 'badminton', 'squash', 'yoga', 'club villagio']
  },
  {
    title: '16-Acre Master Site Layout',
    category: 'Masterplan',
    desc: 'Master-planned sanctuary by Site Concepts International, Singapore with 65% open green landscapes.',
    href: '/supreme-villagio/master-plan',
    keywords: ['master plan', 'layout', 'site plan', 'singapore', 'acres', 'landscape']
  },
  {
    title: 'Floor Plans & Blueprints Kit',
    category: 'Floor Plans',
    desc: 'High-resolution architectural blueprints and usable carpet area schedules for 4 & 5 BHK villas.',
    href: '/supreme-villagio/floor-plans',
    keywords: ['floor plan', 'blueprint', 'layout', 'cad', 'dimensions', 'carpet area']
  },
  {
    title: 'MahaRERA Certifications & Numbers',
    category: 'Legal',
    desc: 'Verified MahaRERA registration certificates: P52100046867, P52100049506, P52100055048.',
    href: '/supreme-villagio-rera',
    keywords: ['rera', 'maharera', 'registration', 'legal', 'compliance', 'oc', 'certificate']
  },
  {
    title: 'Construction & Handover Status',
    category: 'Updates',
    desc: 'Phase 1 & 2 OC received and delivered. Phase 3 active construction updates and possession timelines.',
    href: '/supreme-villagio/construction-status',
    keywords: ['construction', 'possession', 'status', 'handover', 'delivery', 'oc received']
  },
  {
    title: 'NRI Investment Desk & Guide',
    category: 'NRI Services',
    desc: 'FEMA compliance, NRE/NRO remittance protocols, and bespoke lock-and-leave luxury villa advisory.',
    href: '/supreme-villagio/nri-guide',
    keywords: ['nri', 'overseas', 'fema', 'remittance', 'dubai', 'usa', 'uk', 'investment']
  },
  {
    title: 'Somatane Real Estate Intelligence',
    category: 'Location',
    desc: 'Why Somatane microclimate and upcoming PMRDA Ring Road make it Pune’s top villa destination.',
    href: '/somatane-real-estate',
    keywords: ['somatane', 'pune', 'ring road', 'microclimate', 'location', 'appreciation']
  },
  {
    title: 'Villas Near Hinjewadi IT Park',
    category: 'Location',
    desc: 'Just 20 minutes from Hinjewadi Phase 1, 2, 3 via Mumbai-Pune Expressway.',
    href: '/hinjewadi-villas',
    keywords: ['hinjewadi', 'hinjawadi', 'it park', 'expressway', 'tech park', 'commute']
  },
  {
    title: 'Talegaon Luxury Real Estate',
    category: 'Location',
    desc: 'Talegaon MIDC corridor connectivity and premium residential estate appreciation.',
    href: '/talegaon-real-estate',
    keywords: ['talegaon', 'midc', 'industrial', 'growth corridor']
  }
];

// Add blog posts to searchable items
PILLAR_POSTS.forEach(post => {
  SEARCHABLE_ITEMS.push({
    title: post.title,
    category: 'Journal Article',
    desc: post.excerpt,
    href: `/blog/${post.slug}`,
    keywords: [...post.tags, 'article', 'blog', 'journal', 'guide']
  });
});

async function SearchContent({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const resolvedParams = await searchParams;
  const query = (resolvedParams.q || '').trim().toLowerCase();

  const results = query
    ? SEARCHABLE_ITEMS.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descMatch = item.desc.toLowerCase().includes(query);
        const keywordMatch = item.keywords.some(k => k.toLowerCase().includes(query) || query.includes(k.toLowerCase()));
        return titleMatch || descMatch || keywordMatch;
      })
    : SEARCHABLE_ITEMS.slice(0, 8);

  return (
    <div className="container mx-auto max-w-5xl px-6 md:px-12 pt-32 pb-24 min-h-screen">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-gold" />
        <span className="text-xs uppercase tracking-widest text-gold font-bold">
          Search Discovery Engine
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-heading text-cream mb-6">
        {query ? `Search Results for "${query}"` : 'Explore Supreme Villagio'}
      </h1>

      <form method="GET" action="/search" className="mb-12">
        <div className="relative flex items-center max-w-2xl">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search villas, floor plans, pricing, Ring Road, NRI guide..."
            className="w-full bg-white/5 border border-white/15 px-6 py-4 text-cream placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors text-base"
          />
          <button
            type="submit"
            className="absolute right-2 bg-gold text-charcoal px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-cream transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {query && (
        <p className="text-sm text-stone/80 mb-8 font-light">
          Found <span className="text-gold font-medium">{results.length}</span> matching destination{results.length === 1 ? '' : 's'}.
        </p>
      )}

      {results.length === 0 ? (
        <div className="bg-white/5 border border-white/10 p-12 text-center max-w-2xl">
          <SearchIcon className="w-12 h-12 text-stone/40 mx-auto mb-4" />
          <h3 className="text-xl font-heading text-cream mb-2">No direct matches found</h3>
          <p className="text-stone text-sm mb-6">
            Try searching for &quot;4 BHK&quot;, &quot;Price&quot;, &quot;Amenities&quot;, &quot;Master Plan&quot;, or browse our popular destinations below.
          </p>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:underline font-bold"
          >
            View All Locations &rarr;
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="p-6 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300 rounded-sm group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold mb-2 block">
                  {item.category}
                </span>
                <h2 className="text-xl font-heading text-cream group-hover:text-gold transition-colors mb-2">
                  {item.title}
                </h2>
                <p className="text-stone text-xs leading-relaxed font-light mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="text-xs uppercase tracking-widest text-cream group-hover:text-gold transition-colors flex items-center gap-2 font-medium">
                Explore Destination <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap gap-6 items-center justify-between text-xs text-stone">
        <Link href="/" className="hover:text-gold transition-colors flex items-center gap-1.5">
          <Home className="w-3.5 h-3.5" /> Homepage
        </Link>
        <Link href="/blog" className="hover:text-gold transition-colors flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5" /> Market Journal
        </Link>
        <Link href="/locations" className="hover:text-gold transition-colors flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> Location Matrix
        </Link>
      </div>
    </div>
  );
}

export default function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  return (
    <main className="min-h-screen bg-charcoal text-cream font-sans">
      <Suspense fallback={<div className="pt-32 text-center text-stone">Loading search...</div>}>
        <SearchContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
