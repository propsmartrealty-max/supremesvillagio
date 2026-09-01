import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, Navigation, Car, Train, Plane, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supreme Villagio Location, Distance Matrix & Connectivity | Somatane Pune',
  description: 'Verified driving times from Supreme Villagio Somatane to Hinjewadi IT Park (20m), Baner (25m), Talegaon (10m), Lonavala (30m), and Mumbai-Pune Expressway.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/location',
  },
  openGraph: {
    title: 'Supreme Villagio Location & Commute Matrix | Somatane Pune',
    description: 'Detailed connectivity guide for Supreme Villagio Somatane to Pune IT hubs, schools, hospitals, and Mumbai.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/location',
    type: 'website',
  },
};

const COMMUTE_HUBS = [
  {
    category: 'Key Employment Corridors',
    hubs: [
      { name: 'Hinjewadi IT Park (Phase 1, 2, 3)', time: '20–25 Mins', dist: '18 Km', route: 'Via Mumbai-Pune Expressway & NH-48' },
      { name: 'Talegaon MIDC / Industrial Hub', time: '10–12 Mins', dist: '8 Km', route: 'Direct State Highway' },
      { name: 'Chakan Industrial / Auto Hub', time: '25–30 Mins', dist: '24 Km', route: 'Via Talegaon-Chakan Corridor' },
      { name: 'Baner & Balewadi High Street', time: '25–30 Mins', dist: '25 Km', route: 'Direct Expressway Bypass' },
    ],
  },
  {
    category: 'Travel & Gateways',
    hubs: [
      { name: 'Mumbai–Pune Expressway Toll Plaza', time: '3 Mins', dist: '1.5 Km', route: 'Immediate Expressway Access' },
      { name: 'Lonavala Hill Station', time: '30 Mins', dist: '32 Km', route: 'Direct Mumbai-Pune Expressway' },
      { name: 'Navi Mumbai International Airport', time: '75–85 Mins', dist: '90 Km', route: 'Signal-free Expressway Drive' },
      { name: 'Pune Railway Station & Airport', time: '45–50 Mins', dist: '36 Km', route: 'Via Old Mumbai-Pune Highway' },
    ],
  },
  {
    category: 'Education & Healthcare',
    hubs: [
      { name: 'Symbiosis Skills & Professional University', time: '10 Mins', dist: '7 Km', route: 'Kiwale / Somatane' },
      { name: 'BK Birla Centre for Education', time: '15 Mins', dist: '11 Km', route: 'Shirgaon' },
      { name: 'Pawana Hospital & Multispeciality', time: '5 Mins', dist: '3 Km', route: 'Somatane Phata' },
      { name: 'Aditya Birla Memorial Hospital', time: '20 Mins', dist: '16 Km', route: 'Thergaon / Chinchwad' },
    ],
  },
];

const placeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  'name': 'Supreme Villagio Somatane',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Somatane Phata, Old Mumbai-Pune Highway',
    'addressLocality': 'Somatane, Pune',
    'addressRegion': 'Maharashtra',
    'postalCode': '410506',
    'addressCountry': 'IN',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 18.6936968,
    'longitude': 73.687351,
  },
};

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-[#E15E3F]" />
          <span className="text-xs uppercase tracking-widest text-[#E15E3F] font-bold">
            Location Intelligence & Connectivity
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light mb-6 leading-tight">
          Supreme Villagio <span className="italic text-[#E15E3F]">Location</span> & Commute Intelligence
        </h1>

        <p className="text-base md:text-lg text-[#E4E2D3]/80 font-light leading-relaxed mb-12 max-w-3xl">
          Situated at the exact gateway between Pune and Mumbai, Somatane provides a cooler 616-meter microclimate and clean mountain air while remaining seamlessly connected to Hinjewadi, Baner, and the Mumbai-Pune Expressway.
        </p>

        {/* Commute Matrix Hubs */}
        <div className="space-y-12 mb-16">
          {COMMUTE_HUBS.map((cat, idx) => (
            <div key={idx} className="bg-[#1C2C25] border border-[#E4E2D3]/15 rounded-sm p-8 md:p-10 shadow-2xl">
              <h2 className="text-xl md:text-2xl font-heading text-[#E15E3F] mb-6 flex items-center gap-2">
                <Navigation className="w-5 h-5" /> {cat.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.hubs.map((hub, hIdx) => (
                  <div key={hIdx} className="bg-[#23362E] p-6 border border-[#E4E2D3]/10 rounded-sm">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading text-lg text-white font-medium">{hub.name}</h3>
                      <span className="bg-[#E15E3F]/15 text-[#E15E3F] border border-[#E15E3F]/30 text-xs font-mono font-bold px-2.5 py-1 rounded">
                        {hub.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#E4E2D3]/70 font-light mb-2">
                      <span>Distance: {hub.dist}</span>
                    </div>
                    <p className="text-xs text-[#E4E2D3]/60 font-light">
                      Route: {hub.route}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Macro Location Advantages */}
        <div className="bg-[#1C2C25] border border-[#E4E2D3]/15 p-8 md:p-12 rounded-sm mb-16">
          <h3 className="text-2xl font-heading text-white mb-6">Why Somatane is Pune&apos;s Fastest-Growing Villa Destination</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-heading text-lg text-[#E15E3F] mb-2">616m Hill Altitude Climate</h4>
              <p className="text-[#E4E2D3]/80 font-light leading-relaxed">
                Somatane sits at the same geographical altitude as Lonavala, enjoying year-round breezes, cooler temperatures (2–4°C lower than city center), and zero smog.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-[#E15E3F] mb-2">Ring Road & Expressway Catalyst</h4>
              <p className="text-[#E4E2D3]/80 font-light leading-relaxed">
                The upcoming Pune Ring Road project directly connects Somatane to South Pune and the proposed Purandar Airport without entering municipal traffic bottlenecks.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-[#E15E3F] mb-2">High-Income IT & Auto Workforce</h4>
              <p className="text-[#E4E2D3]/80 font-light leading-relaxed">
                Positioned between Hinjewadi IT Park (400,000+ engineers) and Talegaon-Chakan Auto Corridor, creating consistent long-term villa demand.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-[#1C2C25] to-[#2F493E] p-8 md:p-12 border border-[#E15E3F]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading text-white mb-2">Schedule a Site Visit with Chauffeur Service</h3>
            <p className="text-sm text-[#E4E2D3]/80 font-light">Experience the seamless 25-minute drive from Baner or Hinjewadi firsthand.</p>
          </div>
          <Link
            href="/supreme-villagio/price"
            className="bg-gradient-to-r from-[#E15E3F] to-[#F07F63] text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Book Site Visit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
