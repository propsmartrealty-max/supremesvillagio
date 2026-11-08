/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { notFound } from 'next/navigation';
import { PILLAR_POSTS, getPostBySlug } from '@/lib/blog-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return PILLAR_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Supreme Villagio Journal`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.supremesvillagio.com/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.supremesvillagio.com/blog/${resolvedParams.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    }
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.supremesvillagio.com/blog/${resolvedParams.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.image],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://www.supremesvillagio.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Supreme Villagio",
      "url": "https://www.supremesvillagio.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.supremesvillagio.com/images/supreme-villagio-logo.svg"
      }
    }
  };

  const breadcrumbJsonLd = {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.supremesvillagio.com/blog/${resolvedParams.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto min-h-screen">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-gold mb-6">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-cream/30"></span>
          <span>{post.author}</span>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-forest mb-8 leading-tight">
          {post.title}
        </h1>
        
        <div className="relative h-64 md:h-[500px] w-full overflow-hidden rounded-xl mb-16 shadow-2xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="object-cover w-full h-full"
          />
        </div>

        <div 
          className="prose prose-lg max-w-none text-forest/80 prose-headings:font-heading prose-headings:text-forest prose-headings:font-normal prose-a:text-gold hover:prose-a:text-gold/80 prose-strong:text-forest"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## (.*?)<br\/>/g, '<h2>$1</h2>').replace(/### (.*?)<br\/>/g, '<h3>$1</h3>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }}
        />
      </article>
    </>
  );
}
