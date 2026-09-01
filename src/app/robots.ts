import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.supremesvillagio.com';

  return {
    rules: [
      {
        userAgent: ['Googlebot', 'Bingbot', 'Applebot', 'YandexBot', 'Baiduspider', 'DuckDuckBot'],
        allow: '/',
        crawlDelay: 2, // Ensure continuous aggressive crawling without DDoS'ing the Edge Network
      },
      {
        userAgent: [
          'AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'PetalBot', 'YandexImages',
          'MegaIndex.ru', 'BLEXBot', 'BuiltBotTough', 'DataForSeoBot'
        ],
        disallow: '/', // Block toxic SEO scrapers to conserve compute strictly for HNI buyers & Search Engines
      },
      {
        userAgent: [
          'GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic-ai', 'Claude-Web',
          'PerplexityBot', 'Applebot', 'Amazonbot'
        ],
        allow: '/', // Allow modern Generative AI & Answer Engines to index and cite authoritative content in AI Search
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/*?*', '/api/'], // Block spider traps and internal backend compute endpoints
        crawlDelay: 5,
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-core.xml`
    ],
    host: baseUrl,
  };
}
