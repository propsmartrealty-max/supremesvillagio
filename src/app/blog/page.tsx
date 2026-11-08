/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { PILLAR_POSTS } from '@/lib/blog-data';
import Image from "next/image";

export const metadata = {
  title: "Supreme Villagio Journal | Real Estate Market Trends & Villa Living Insights",
  description: "Read the latest market insights, investment analyses, and lifestyle guides for luxury villas and twin bungalows in Somatane, Pune.",
  alternates: {
    canonical: "https://www.supremesvillagio.com/blog",
  },
  openGraph: {
    title: "Supreme Villagio Journal | Pune Real Estate Insights",
    description: "Read the latest market insights, investment analyses, and lifestyle guides for luxury villas in Pune.",
    url: "https://www.supremesvillagio.com/blog",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.supremesvillagio.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Journal",
      "item": "https://www.supremesvillagio.com/blog"
    }
  ]
};

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">Real Estate Journal</h1>
      <p className="text-forest/70 mb-12 max-w-3xl">Expert insights, investment guides, and market trends for the Pune luxury real estate sector.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PILLAR_POSTS.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg mb-6">
              <img 
                src={post.image} 
                alt={post.title} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-gold mb-3">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-cream/30"></span>
              <span>{post.author}</span>
            </div>
            <h2 className="text-2xl font-heading text-forest mb-4 group-hover:text-gold transition-colors">{post.title}</h2>
            <p className="text-forest/70 leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
}
