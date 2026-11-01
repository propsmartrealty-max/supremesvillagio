import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.supremesvillagio.com';

  return {
    rules: [
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'GoogleOther', 'Bingbot', 'Applebot', 'YandexBot', 'Baiduspider', 'DuckDuckBot'],
        allow: '/',
      },
      {
        userAgent: [
          'AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'PetalBot', 'YandexImages',
          'MegaIndex.ru', 'BLEXBot', 'BuiltBotTough', 'DataForSeoBot'
        ],
        disallow: '/', // Block aggressive non-search scrapers
      },
      {
        userAgent: [
          'GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic-ai', 'Claude-Web',
          'PerplexityBot', 'Applebot', 'Amazonbot'
        ],
        allow: '/', // Allow AI Answer Engines to cite verified data
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-core.xml`,
      `${baseUrl}/sitemap-blog.xml`,
      `${baseUrl}/sitemap-media.xml`,
    ],
    host: baseUrl,
  };
}
