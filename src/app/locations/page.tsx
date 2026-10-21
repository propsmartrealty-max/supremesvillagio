import React from 'react';
import Link from 'next/link';
import { SEO_KEYWORD_MATRIX } from '@/lib/seo-data';

export const metadata = {
  title: "Supreme Villagio | All Locations & Topologies",
  description: "Browse all available luxury villas and premium bungalows by Supreme Universal across Pune's top real estate micro-markets.",
};

export default function LocationsSitemap() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">Property Locations & Configurations</h1>
      <p className="text-forest/70 mb-12 max-w-3xl">Explore our vast portfolio of premium luxury real estate across Pune. Select a category below to find the perfect home in the perfect micro-market.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Core Typologies & Hubs */}
        <div>
          <h2 className="text-gold font-bold uppercase tracking-wider mb-6 pb-2 border-b border-cream/30">By Typology &amp; Details</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/supreme-villagio/4-bhk-villas" className="text-forest hover:text-gold transition-colors block">
                4 BHK Luxury Twin Villas
              </Link>
            </li>
            <li>
              <Link href="/supreme-villagio/5-bhk-villas" className="text-forest hover:text-gold transition-colors block">
                5 BHK Presidential Hillside Villas
              </Link>
            </li>
            <li>
              <Link href="/supreme-villagio/townhouses" className="text-forest hover:text-gold transition-colors block">
                4 BHK G+2 Luxury Townhouses
              </Link>
            </li>
            <li>
              <Link href="/supreme-villagio/residences" className="text-forest hover:text-gold transition-colors block">
                All Villa Typologies &amp; Blueprints
              </Link>
            </li>
            <li>
              <Link href="/supreme-villagio/amenities" className="text-forest hover:text-gold transition-colors block">
                Club Villagio &amp; Amenities
              </Link>
            </li>
            <li>
              <Link href="/supreme-villagio/master-plan" className="text-forest hover:text-gold transition-colors block">
                16-Acre Master Layout Plan
              </Link>
            </li>
            <li>
              <Link href="/supreme-villagio/price" className="text-forest hover:text-gold transition-colors block">
                Pricing &amp; Cost Sheet Breakdown
              </Link>
            </li>
            <li>
              <Link href="/supreme-villagio-rera" className="text-forest hover:text-gold transition-colors block">
                MahaRERA Registration &amp; Approvals
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Locations */}
        <div>
          <h2 className="text-gold font-bold uppercase tracking-wider mb-6 pb-2 border-b border-cream/30">By Micro-Market (Pune)</h2>
          <ul className="space-y-4">
            {SEO_KEYWORD_MATRIX.locations.map(loc => (
              <li key={loc}>
                <Link href={`/locations/${loc}`} className="text-forest hover:text-gold transition-colors block">
                  Villas &amp; Homes for {loc.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Micro-market Analysis */}
        <div>
          <h2 className="text-gold font-bold uppercase tracking-wider mb-6 pb-2 border-b border-cream/30">Regional Real Estate Guides</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/somatane-real-estate" className="text-forest hover:text-gold transition-colors block">
                Somatane Real Estate Market Guide
              </Link>
            </li>
            <li>
              <Link href="/talegaon-real-estate" className="text-forest hover:text-gold transition-colors block">
                Talegaon Real Estate &amp; Industrial Corridor
              </Link>
            </li>
            <li>
              <Link href="/luxury-villas-pune" className="text-forest hover:text-gold transition-colors block">
                Luxury Villas in Pune Market Analysis
              </Link>
            </li>
            <li>
              <Link href="/somatane-vs-hinjewadi" className="text-forest hover:text-gold transition-colors block">
                Somatane vs Hinjewadi Comparison
              </Link>
            </li>
            <li>
              <Link href="/somatane-vs-talegaon" className="text-forest hover:text-gold transition-colors block">
                Somatane vs Talegaon Comparison
              </Link>
            </li>
            <li>
              <Link href="/villas-vs-apartments-pune" className="text-forest hover:text-gold transition-colors block">
                Villas vs Apartments in Pune
              </Link>
            </li>
            <li>
              <Link href="/supreme-villagio-vs-paranjape-forest-trails" className="text-forest hover:text-gold transition-colors block">
                Supreme Villagio vs Forest Trails
              </Link>
            </li>
            <li>
              <Link href="/supreme-villagio/nri-guide" className="text-forest hover:text-gold transition-colors block">
                NRI Investment &amp; Repatriation Guide
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
