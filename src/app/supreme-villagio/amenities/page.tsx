import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Dumbbell, Trees, Sparkles, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Club Villagio & 16-Acre Lifestyle Amenities | Supreme Villagio Somatane',
  description: 'Explore the 18,500 sq.ft. operational Club Villagio and 16-acre Singapore-designed landscape amenities at Supreme Villagio Somatane. Olympic pool, squash court, gym, and wellness trails.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/amenities',
  },
  openGraph: {
    title: 'Club Villagio & Lifestyle Amenities | Supreme Villagio',
    description: '18,500 sq.ft. operational clubhouse, Olympic pool, squash court, and Singapore-designed gardens.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/amenities',
    type: 'website',
  },
};

const amenitiesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  'name': 'Club Villagio at Supreme Villagio',
  'description': '18,500 sq. ft. ready lifestyle clubhouse with Olympic-length swimming pool, wellness gym, squash court, and banquet spaces.',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Somatane',
    'addressRegion': 'Pune, Maharashtra',
    'postalCode': '410506',
    'addressCountry': 'IN',
  },
};

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="amenities-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(amenitiesSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            18,500 Sq.Ft. Operational Clubhouse & Gardens
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-tight">
          Club Villagio & <span className="text-[#E15E3F] italic">Amenities</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-[#E4E2D3]/85 max-w-4xl mb-12 leading-relaxed">
          At Supreme Villagio, luxury is not an afterthought promised for the future—it is operational today. Club Villagio spans 18,500 sq.ft. of world-class leisure and sports infrastructure, seamlessly woven into 16 acres of lush master-planned landscapes by Site Concepts International, Singapore.
        </p>

        {/* Amenities Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-2xl font-heading mb-4 text-white">Sports & Fitness</h3>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Olympic-Length Swimming Pool</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Indoor Squash Court (Glass-back)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Badminton Arena with Wooden Flooring</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> State-of-the-Art Cardiovascular Gym</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Dedicated Yoga & Pilates Pavilion</li>
            </ul>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-2xl font-heading mb-4 text-white">Leisure & Social</h3>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Grand Banquet Hall & Party Lawn</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Multi-Cuisine Residents’ Cafe</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Heated Kids’ Splash Pool</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Billiards & Indoor Games Lounge</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Spa Treatment & Wellness Suites</li>
            </ul>
          </div>

          <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 rounded-sm">
            <h3 className="text-2xl font-heading mb-4 text-white">Nature & Landscape</h3>
            <ul className="space-y-3 text-sm text-[#E4E2D3]/80 font-light">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Central Sensory Wellness Spine</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Aromatic & Medicinal Herbal Gardens</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Acupressure Reflexology Walkway</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> Children’s Eco-Adventure Zone</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A6F44]" /> 100% Native Tree Reforestation</li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-[#E4E2D3]/15 pt-8 flex flex-wrap gap-4 justify-between items-center text-xs uppercase tracking-widest">
          <Link href="/supreme-villagio/master-plan" className="text-[#E15E3F] hover:underline flex items-center gap-1">
            Explore 16-Acre Master Plan <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio/price" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Pricing Matrix <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/supreme-villagio/construction-status" className="text-[#E4E2D3]/70 hover:text-white flex items-center gap-1">
            Live Handover Status <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
