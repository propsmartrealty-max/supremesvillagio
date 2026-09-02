import Link from 'next/link';

export const metadata = {
  title: "Supreme Universal Pune | Premium Luxury Ecosystem Hub",
  description: "Explore the entire ecosystem of Supreme Universal premium luxury projects in Pune, including Supreme Villagio, Supreme Estia, Amadore, Adima, and more.",
};

export default function EcosystemHub() {
  const ecosystemKeywords = [
    { title: "Supreme Villagio Residences", desc: "16-Acre Low-Rise Gated Sanctuary in Somatane", href: "/supreme-villagio/residences" },
    { title: "4 BHK Luxury Twin Villas", desc: "3-Side Open Private Lawn & Double-Height Living", href: "/supreme-villagio/4-bhk-villas" },
    { title: "5 BHK Grand Presidential Villas", desc: "Hillside Luxury with Private Elevator Provision", href: "/supreme-villagio/5-bhk-villas" },
    { title: "4 BHK Luxury Townhouses", desc: "G+2 Gated Townhouse Living from ₹2.89 Cr*", href: "/supreme-villagio/townhouses" },
    { title: "18,500 Sq.Ft. Club Villagio", desc: "Olympic Pool, Wellness Spine & Banquet Halls", href: "/supreme-villagio/amenities" },
    { title: "16-Acre Master Site Layout", desc: "Master-planned by Site Concepts International, Singapore", href: "/supreme-villagio/master-plan" },
    { title: "Somatane Real Estate Hub", desc: "Microclimate, Ring Road & Capital Growth", href: "/somatane-real-estate" },
    { title: "Pune Luxury Villa Market", desc: "Comparative Market Analysis & ROI Horizons", href: "/luxury-villas-pune" },
    { title: "MahaRERA Certifications", desc: "Verified Statutory Project Registrations", href: "/supreme-villagio-rera" }
  ];

  return (
    <div className="min-h-screen bg-charcoal text-cream font-sans pt-32 pb-24 px-4 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-6xl font-heading text-gold mb-6">Supreme Universal Ecosystem</h1>
        <p className="text-lg text-stone/80 mb-12 max-w-3xl">
          Supreme Villagio is the flagship crown jewel of the Supreme Universal luxury real estate portfolio in Pune. 
          Explore our authoritative project dossiers, typology specifications, and regional investment guides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ecosystemKeywords.map((item, i) => (
            <Link 
              key={i} 
              href={item.href}
              className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 group rounded-sm"
            >
              <h2 className="text-xl font-heading text-cream group-hover:text-gold transition-colors mb-2">
                {item.title}
              </h2>
              <p className="text-xs text-stone/70 mb-4 font-light">
                {item.desc}
              </p>
              <span className="text-xs text-gold uppercase tracking-widest flex items-center gap-2 font-semibold">
                Explore <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>

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
  );
}

