import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Calendar, 
  MapPin, 
  Download, 
  Compass, 
  FileText, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import SeoSiloLinks from '@/components/layout/SeoSiloLinks';
import { PROGRAMMATIC_TOPICS, getTopicBySlug } from '@/lib/programmatic-villagio';

export const dynamicParams = false;

export function generateStaticParams() {
  return PROGRAMMATIC_TOPICS.map((topic) => ({
    topic: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const topicData = getTopicBySlug(resolvedParams.topic);

  if (!topicData) {
    return {
      title: 'Supreme Villagio Somatane | Official Portal',
      description: 'Official portal for Supreme Villagio Somatane luxury villas and townhouses.',
    };
  }

  const url = `https://www.supremesvillagio.com/supreme-villagio-somatane/${topicData.slug}`;

  return {
    title: topicData.metaTitle,
    description: topicData.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: topicData.metaTitle,
      description: topicData.metaDescription,
      url,
      type: 'article',
      siteName: 'Supreme Villagio Somatane Official Portal',
      images: [
        {
          url: 'https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg',
          width: 1200,
          height: 630,
          alt: `${topicData.h1} - Supreme Villagio Somatane`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: topicData.metaTitle,
      description: topicData.metaDescription,
      images: ['https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg'],
    },
    keywords: [
      topicData.query,
      'Supreme Villagio Somatane',
      'Supreme Villagio Pune',
      'Supreme Villagio Price',
      'Luxury Villas Somatane',
      '4 BHK Twin Villas Somatane',
      '5 BHK Presidential Villas Pune',
    ],
  };
}

export default async function ProgrammaticTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const resolvedParams = await params;
  const topicData = getTopicBySlug(resolvedParams.topic);

  if (!topicData) {
    notFound();
  }

  const otherTopics = PROGRAMMATIC_TOPICS.filter((t) => t.slug !== topicData.slug);

  // Structured Data: FAQPage + RealEstateListing + BreadcrumbList
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: topicData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const realEstateSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    '@id': `https://www.supremesvillagio.com/supreme-villagio-somatane/${topicData.slug}#listing`,
    name: topicData.h1,
    description: topicData.summary,
    url: `https://www.supremesvillagio.com/supreme-villagio-somatane/${topicData.slug}`,
    offers: {
      '@type': 'Offer',
      price: '28900000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
    },
    category: 'Gated Villa & Townhouse Estate',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 1, Somatane Phata, Old Mumbai-Pune Highway',
      addressLocality: 'Somatane, Talegaon Dabhade',
      addressRegion: 'Maharashtra',
      postalCode: '410506',
      addressCountry: 'IN',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.supremesvillagio.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Supreme Villagio Somatane',
        item: 'https://www.supremesvillagio.com/supreme-villagio-somatane',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: topicData.badge,
        item: `https://www.supremesvillagio.com/supreme-villagio-somatane/${topicData.slug}`,
      },
    ],
  };

  return (
    <article className="min-h-screen bg-charcoal text-cream pt-28 pb-16 font-sans">
      {/* Microdata JSON-LD injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Header */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-stone">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-stone/60" />
          <Link href="/supreme-villagio-somatane" className="hover:text-gold transition-colors">
            Supreme Villagio Somatane
          </Link>
          <ChevronRight className="w-3 h-3 text-stone/60" />
          <span className="text-gold font-medium truncate max-w-xs">{topicData.badge}</span>
        </nav>
      </div>

      {/* Main Hero Header */}
      <header className="container mx-auto px-6 md:px-12 max-w-6xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-wider uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          {topicData.badge}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-light tracking-tight text-white mb-6 leading-tight">
          {topicData.h1}
        </h1>
        <p className="text-lg md:text-xl text-stone max-w-3xl leading-relaxed mb-8">
          {topicData.summary}
        </p>

        {/* Highlight Metric Card & Action Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-xl mb-8">
          <div className="sm:border-r border-white/10 sm:pr-4">
            <span className="text-xs uppercase tracking-wider text-stone block mb-1">
              {topicData.highlightMetric.label}
            </span>
            <span className="text-2xl md:text-3xl font-heading text-gold font-semibold">
              {topicData.highlightMetric.value}
            </span>
          </div>
          <div className="sm:border-r border-white/10 sm:pr-4">
            <span className="text-xs uppercase tracking-wider text-stone block mb-1">
              RERA Status
            </span>
            <span className="text-xl md:text-2xl font-heading text-white font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Phase 1 &amp; 2 OC Received
            </span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-stone block mb-1">
              Direct Sales Helpline
            </span>
            <a
              href="tel:+917744009295"
              className="text-xl md:text-2xl font-heading text-gold font-medium hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              +91 7744009295
            </a>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="tel:+917744009295"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-charcoal font-medium rounded-lg hover:bg-gold-light transition-colors text-sm shadow-lg shadow-gold/20"
          >
            <Phone className="w-4 h-4" />
            Call Sales Office Directly
          </a>
          <a
            href="https://wa.me/917744009295?text=Hello%20Supreme%20Villagio%20Desk%2C%20I%20am%20inquiring%20about%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600/90 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors text-sm"
          >
            WhatsApp Pricing &amp; PDF
          </a>
          <Link
            href={topicData.canonicalTarget}
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-cream font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm"
          >
            Visit Detailed Hub
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Key Highlights Section */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl mb-14">
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-heading text-white mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-gold" />
            Verified Facts &amp; Key Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topicData.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-stone text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Summary Reference Table */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl mb-14">
        <h2 className="text-xl sm:text-2xl font-heading text-white mb-6">
          Supreme Villagio Somatane Master Factsheet
        </h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left border-collapse text-sm">
            <tbody className="divide-y divide-white/5">
              <tr className="bg-white/[0.02]">
                <th className="py-3.5 px-5 font-semibold text-stone w-1/3">Project Name</th>
                <td className="py-3.5 px-5 text-white">Supreme Villagio Somatane</td>
              </tr>
              <tr>
                <th className="py-3.5 px-5 font-semibold text-stone">Developer Legacy</th>
                <td className="py-3.5 px-5 text-white">Supreme Universal (40+ Years of Luxury Real Estate)</td>
              </tr>
              <tr className="bg-white/[0.02]">
                <th className="py-3.5 px-5 font-semibold text-stone">Location &amp; Landmark</th>
                <td className="py-3.5 px-5 text-white">Somatane Phata, Old Mumbai-Pune Highway, Pune 410506</td>
              </tr>
              <tr>
                <th className="py-3.5 px-5 font-semibold text-stone">Master Plan &amp; Scale</th>
                <td className="py-3.5 px-5 text-white">16 Sprawling Acres • Boutique Low-Rise Horizontal Gated Community</td>
              </tr>
              <tr className="bg-white/[0.02]">
                <th className="py-3.5 px-5 font-semibold text-stone">Master Architect</th>
                <td className="py-3.5 px-5 text-white">Site Concepts International (Singapore)</td>
              </tr>
              <tr>
                <th className="py-3.5 px-5 font-semibold text-stone">Typologies &amp; Carpet Areas</th>
                <td className="py-3.5 px-5 text-white">4 BHK Townhouses (2,200 sq.ft.) • 4 BHK Twin Villas (2,800 sq.ft.) • 5 BHK Presidential (3,900 sq.ft.)</td>
              </tr>
              <tr className="bg-white/[0.02]">
                <th className="py-3.5 px-5 font-semibold text-stone">Pricing Range</th>
                <td className="py-3.5 px-5 text-gold font-medium">Starting from ₹2.89 Cr* up to ₹4.85 Cr* (0% Brokerage)</td>
              </tr>
              <tr>
                <th className="py-3.5 px-5 font-semibold text-stone">MahaRERA Numbers</th>
                <td className="py-3.5 px-5 text-white font-mono text-xs">Phase 1: P52100046867 • Phase 2: P52100049506 • Phase 3: P52100055048</td>
              </tr>
              <tr className="bg-white/[0.02]">
                <th className="py-3.5 px-5 font-semibold text-stone">Club Villagio Amenities</th>
                <td className="py-3.5 px-5 text-white">18,500 Sq.Ft. Fully Functional Clubhouse • Temperature-Regulated Pool • Squash • Gym</td>
              </tr>
              <tr>
                <th className="py-3.5 px-5 font-semibold text-stone">Possession Status</th>
                <td className="py-3.5 px-5 text-emerald-400 font-medium">Phase 1 &amp; 2 Ready with OC (88+ Families Residing) • Phase 3 Under Construction (Dec 2028)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl mb-14">
        <h2 className="text-xl sm:text-2xl font-heading text-white mb-6">
          Frequently Asked Questions: {topicData.query}
        </h2>
        <div className="space-y-4">
          {topicData.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors"
            >
              <h3 className="text-base sm:text-lg font-heading text-white mb-2 font-medium">
                {faq.q}
              </h3>
              <p className="text-stone text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cluster Navigation: Related Programmatic Topics */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl mb-14">
        <div className="border-t border-white/10 pt-10">
          <h2 className="text-xl font-heading text-white mb-6">
            Explore Other Topics for Supreme Villagio Somatane
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherTopics.slice(0, 9).map((other) => (
              <Link
                key={other.slug}
                href={`/supreme-villagio-somatane/${other.slug}`}
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all"
              >
                <span className="text-xs text-gold font-medium block mb-1">
                  {other.badge}
                </span>
                <span className="text-sm font-medium text-white group-hover:text-gold transition-colors block line-clamp-1">
                  {other.query}
                </span>
                <span className="text-xs text-stone mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read details <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Silo Links Footer Module */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <SeoSiloLinks />
      </div>
    </article>
  );
}
