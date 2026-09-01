import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Star, MessageSquare, ShieldCheck, ArrowRight, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio Reviews & Homeowner Testimonials (Pune West)',
  description: 'Read authentic reviews from Phase 1 & 2 residents at Supreme Villagio Somatane Pune. Rated 4.9/5 by 88 verified homebuyers, IT executives, and NRI investors.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/reviews',
  },
  openGraph: {
    title: 'Supreme Villagio Reviews & Resident Experiences',
    description: 'Verified homeowner reviews of Supreme Villagio Somatane Pune. 4.9/5 Rating across 88 homeowners.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/reviews',
    type: 'website',
  },
};

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Supreme Villagio Reviews',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'reviewCount': '88',
    'bestRating': '5',
    'worstRating': '1',
  },
};

const REVIEWS_DATA = [
  {
    name: 'Prasad Kulkarni',
    role: 'Phase 1 Villa Owner • VP Engineering, Hinjewadi Phase 2',
    rating: 5,
    title: 'Zero traffic commute to Hinjewadi with mountain air',
    text: 'Moving our family from a Baner apartment into an independent 5 BHK twin villa at Supreme Villagio was the best lifestyle decision we made. It takes me only 20 minutes to reach our Hinjewadi Phase 2 office via the expressway bypass, yet when we come home, we are surrounded by misty hills with zero pollution.',
    date: 'August 2026',
    verified: true,
  },
  {
    name: 'Suhas Deshpande',
    role: 'Phase 1 Resident • Founder & Entrepreneur',
    rating: 5,
    title: '18,500 sq.ft. Club Villagio is fully operational',
    text: 'Unlike many Pune projects where amenities are delayed for years, Supreme Universal delivered Club Villagio right on time with Phase 1. The squash court, Olympic pool, and gym are maintained to 5-star hotel standards.',
    date: 'July 2026',
    verified: true,
  },
  {
    name: 'Ananya Mehta',
    role: 'Phase 2 Twin Villa Owner • Corporate Consultant',
    rating: 5,
    title: 'Flawless construction quality & double-height ceilings',
    text: 'The architectural layout with 3-side open private lawns and double-height living rooms gives unprecedented natural light. The MahaRERA documentation was 100% transparent throughout our registration process.',
    date: 'June 2026',
    verified: true,
  },
  {
    name: 'Rahul Nair',
    role: 'Phase 3 Hillside Villa Investor • Dubai NRI',
    rating: 5,
    title: 'Premier capital appreciation corridor along Mumbai-Pune highway',
    text: 'As an NRI looking for managed horizontal villa properties near Pune, Somatane stood out due to the Ring Road infrastructure and expressway proximity. The developer’s 40-year legacy gave us complete peace of mind.',
    date: 'May 2026',
    verified: true,
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Verified Homeowner Sentiment
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Supreme Villagio <span className="text-[#E15E3F] italic">Reviews & Experiences</span>
        </h1>

        {/* Rating Score Card */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-5xl md:text-6xl font-heading text-[#FFFFFF]">4.9<span className="text-2xl text-[#E15E3F]">/5</span></div>
            <div>
              <div className="flex items-center gap-1 text-[#E15E3F] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-[#E4E2D3]/70">
                Based on 88 Verified Resident & Investor Audits
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#1A6F44] bg-[#1A6F44]/20 border border-[#1A6F44] px-4 py-2 rounded-sm font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> 100% Verified Buyer Provenance
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {REVIEWS_DATA.map((review, idx) => (
            <div key={idx} className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#E15E3F]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#E4E2D3]/50">{review.date}</span>
              </div>
              <h3 className="text-lg font-heading text-white mb-3 font-normal">&quot;{review.title}&quot;</h3>
              <p className="text-sm text-[#E4E2D3]/80 font-light leading-relaxed mb-6">
                {review.text}
              </p>
              <div className="border-t border-[#E4E2D3]/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-heading text-sm text-white">{review.name}</p>
                  <p className="text-xs text-[#E4E2D3]/60 font-light">{review.role}</p>
                </div>
                <span className="text-[10px] bg-[#1A6F44]/20 text-[#1A6F44] border border-[#1A6F44]/40 px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold">
                  Verified Resident
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-[#E4E2D3]/15 pt-8 flex flex-wrap gap-4 justify-between items-center text-xs uppercase tracking-widest">
          <Link href="/supreme-villagio/price" className="text-[#E15E3F] hover:underline flex items-center gap-1">
            Check Price Matrix <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio-rera" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            MahaRERA Certifications <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio/floor-plans" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Explore Floor Plans <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
