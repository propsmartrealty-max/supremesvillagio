import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Calendar, ShieldCheck, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import SeoSiloLinks from '@/components/layout/SeoSiloLinks';

export const metadata: Metadata = {
  title: 'Supreme Villagio Contact Number & Sales Office [Official +91 7744009295] | Supreme Villagio Official',
  description: 'Direct official contact desk for Supreme Villagio Somatane. Call +91 7744009295 or WhatsApp for 2026 cost sheet, private sample villa preview & site visit driving directions from Pune & Mumbai.',
  alternates: {
    canonical: 'https://www.supremesvillagio.com/supreme-villagio/contact',
  },
  openGraph: {
    title: 'Supreme Villagio Contact Number & Sales Office | Official Developer Desk',
    description: 'Direct official developer contact desk for Supreme Villagio Somatane, Pune. Call +91 7744009295 or book a private site visit.',
    url: 'https://www.supremesvillagio.com/supreme-villagio/contact',
    type: 'website',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.supremesvillagio.com/supreme-villagio/contact#webpage',
  name: 'Supreme Villagio Official Contact & Experience Centre',
  description: 'Direct developer contact desk, phone number, and sales gallery address for Supreme Villagio in Somatane, Pune.',
  url: 'https://www.supremesvillagio.com/supreme-villagio/contact',
  mainEntity: {
    '@type': 'RealEstateAgent',
    '@id': 'https://www.supremesvillagio.com/#realestateagent',
    name: 'Supreme Villagio Official Sales Office',
    telephone: '+917744009295',
    email: 'contact@supremesvillagio.com',
    url: 'https://www.supremesvillagio.com/',
    priceRange: '₹2.89 Cr - ₹5.50 Cr',
    image: 'https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Supreme Villagio Site, Sector 1, Somatane Phata, Old Mumbai-Pune Highway',
      addressLocality: 'Somatane, Talegaon Dabhade, Pune',
      addressRegion: 'Maharashtra',
      postalCode: '410506',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.693697',
      longitude: '73.687351',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:30',
        closes: '19:30',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <main className="min-h-screen bg-[#23362E] text-[#E4E2D3] pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          {/* Header Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/supreme-villagio" className="hover:underline">Supreme Villagio</Link>
            <span>/</span>
            <span className="text-white">Contact &amp; Sales Office</span>
          </div>

          <div className="mb-12 border-b border-white/10 pb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A880]/20 text-[#C5A880] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Direct Developer Desk • 0% Brokerage
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-light tracking-wide text-white mb-4">
              Supreme Villagio Contact &amp; Sales Gallery
            </h1>
            <p className="text-stone text-base md:text-lg max-w-3xl leading-relaxed">
              Connect directly with the authorized Supreme Universal project sales desk. Schedule an exclusive private walkthrough of our ready Phase 1 &amp; 2 sample villas and receive the complete 2026 cost sheet with payment milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#1C2C25] p-8 rounded-lg border border-white/10 space-y-6 shadow-xl">
                <h2 className="text-xl font-heading text-white font-medium border-b border-white/10 pb-4">
                  Official Communication Channels
                </h2>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C5A880]/10 rounded-lg text-[#C5A880] shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">Direct Developer Helpline</h3>
                    <a 
                      href="tel:+917744009295" 
                      className="text-lg md:text-xl font-bold text-white hover:text-[#C5A880] transition-colors block mt-1"
                    >
                      +91 7744009295
                    </a>
                    <p className="text-stone text-xs mt-1">Available 9:30 AM – 7:30 PM (All 7 Days)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#25D366]/10 rounded-lg text-[#25D366] shrink-0 mt-1">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-[#25D366] font-semibold">Instant WhatsApp Desk</h3>
                    <a 
                      href="https://wa.me/917744009295?text=Hello%20Supreme%20Villagio%20Team%2C%20I%20am%20interested%20in%20pricing%20and%20booking%20a%20site%20visit." 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-white hover:text-[#25D366] transition-colors block mt-1 underline underline-offset-4"
                    >
                      Chat on WhatsApp (+91 7744009295)
                    </a>
                    <p className="text-stone text-xs mt-1">Receive PDF Brochure, Cost Sheet &amp; Video Walkthrough instantly</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C5A880]/10 rounded-lg text-[#C5A880] shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">Site &amp; Sales Experience Centre</h3>
                    <p className="text-white text-sm font-medium mt-1 leading-relaxed">
                      Supreme Villagio Site, Sector 1, Somatane Phata, Old Mumbai-Pune Highway, Talegaon Dabhade, Pune 410506, Maharashtra, India.
                    </p>
                    <p className="text-stone text-xs mt-1">Just 3 Mins from Mumbai-Pune Expressway Toll</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C5A880]/10 rounded-lg text-[#C5A880] shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">Site Visit Hours</h3>
                    <p className="text-white text-sm font-medium mt-1">Monday – Sunday: 9:30 AM to 7:00 PM</p>
                    <p className="text-stone text-xs mt-1">Complimentary Hinjewadi chauffeur service available on prior booking</p>
                  </div>
                </div>
              </div>

              {/* RERA Badge Box */}
              <div className="bg-[#1C2C25] p-6 rounded-lg border border-white/10 text-xs text-stone space-y-2">
                <p className="text-white font-semibold uppercase tracking-wider text-[11px]">MahaRERA Registered Project</p>
                <p>Phase 1: <strong className="text-white">P52100046867</strong> (OC Received)</p>
                <p>Phase 2: <strong className="text-white">P52100049506</strong> (OC Received)</p>
                <p>Phase 3: <strong className="text-white">P52100055048</strong> (Possession Dec 2028)</p>
              </div>
            </div>

            {/* Quick Visit Form & Direct Action */}
            <div className="lg:col-span-7 bg-[#1C2C25] p-8 md:p-10 rounded-lg border border-white/10 shadow-xl">
              <h2 className="text-2xl font-heading font-light text-white mb-2">
                Book a Private VIP Site Visit
              </h2>
              <p className="text-stone text-sm mb-6 leading-relaxed">
                Experience the 18,500 sq.ft. operational Club Villagio and tour the actual furnished 4 &amp; 5 BHK villas. Please leave your details below:
              </p>

              <form 
                action="/api/contact" 
                method="POST" 
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#C5A880] font-medium mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#23362E] border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#C5A880] font-medium mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#23362E] border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#C5A880] font-medium mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="rahul@example.com"
                      className="w-full bg-[#23362E] border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="typology" className="block text-xs uppercase tracking-wider text-[#C5A880] font-medium mb-1.5">
                      Configuration Preference
                    </label>
                    <select
                      id="typology"
                      name="typology"
                      className="w-full bg-[#23362E] border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      <option value="4-bhk-townhouse">4 BHK Townhouse (₹2.89 Cr*)</option>
                      <option value="4-bhk-twin-villa">4 BHK Twin Villa (₹3.45 Cr*)</option>
                      <option value="5-bhk-presidential">5 BHK Presidential Villa (₹4.85 Cr*)</option>
                      <option value="undecided">Undecided / Exploring Options</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="visitDate" className="block text-xs uppercase tracking-wider text-[#C5A880] font-medium mb-1.5">
                      Preferred Visit Day
                    </label>
                    <select
                      id="visitDate"
                      name="visitDate"
                      className="w-full bg-[#23362E] border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      <option value="this-weekend">This Weekend (Saturday / Sunday)</option>
                      <option value="today">Today (Urgent)</option>
                      <option value="tomorrow">Tomorrow</option>
                      <option value="next-week">Next Week</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#C5A880] font-medium mb-1.5">
                    Any Specific Inquiries or Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Looking for ready OC possession / floor plans / loan information..."
                    className="w-full bg-[#23362E] border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C5A880] hover:bg-[#b0936c] text-[#17181a] font-semibold py-4 px-6 rounded transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" /> Confirm VIP Site Visit &amp; Send Cost Sheet
                </button>

                <p className="text-[11px] text-stone text-center">
                  Your contact privacy is 100% safeguarded. No broker spam guaranteed.
                </p>
              </form>
            </div>
          </div>

          {/* Commute Driving Times */}
          <div className="bg-[#1C2C25] p-8 rounded-lg border border-white/10 mb-16">
            <h2 className="text-xl font-heading text-white font-medium mb-6">
              How to Reach Supreme Villagio Somatane
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="border border-white/10 p-5 rounded bg-[#23362E]">
                <h3 className="text-white font-semibold mb-2">From Hinjewadi IT Park</h3>
                <p className="text-stone text-xs leading-relaxed">
                  Take the Mumbai-Pune Expressway bypass or NH-48. Effortless 20-minute signal-free reverse commute straight to Somatane Phata.
                </p>
                <span className="inline-block mt-3 text-xs text-[#C5A880] font-semibold">Drive Time: ~20 Mins (18 km)</span>
              </div>

              <div className="border border-white/10 p-5 rounded bg-[#23362E]">
                <h3 className="text-white font-semibold mb-2">From Mumbai via Atal Setu (MTHL)</h3>
                <p className="text-stone text-xs leading-relaxed">
                  Drive via Atal Setu (MTHL) to the Mumbai-Pune Expressway. Exit at the Somatane Phata toll gate.
                </p>
                <span className="inline-block mt-3 text-xs text-[#C5A880] font-semibold">Drive Time: ~75 Mins Signal-Free</span>
              </div>

              <div className="border border-white/10 p-5 rounded bg-[#23362E]">
                <h3 className="text-white font-semibold mb-2">From PCMC / Talegaon MIDC</h3>
                <p className="text-stone text-xs leading-relaxed">
                  Direct connection via Old Mumbai-Pune Highway / NH-48. Located right at the gateway of Pune West.
                </p>
                <span className="inline-block mt-3 text-xs text-[#C5A880] font-semibold">Drive Time: ~10 Mins (8 km)</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SeoSiloLinks />
    </>
  );
}
