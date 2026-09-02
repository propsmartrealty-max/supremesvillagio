import { remark } from 'remark';
import html from 'remark-html';
import { PILLAR_POSTS, getAllPosts as getPostsFromData, getPostBySlug as getPostFromData, BlogPost } from './blog-data';

export type { BlogPost };

export function getPostSlugs(): string[] {
  return PILLAR_POSTS.map(post => `${post.slug}.md`);
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, '');
  const post = getPostFromData(realSlug);
  if (post) {
    return post;
  }
  return {
    slug: realSlug,
    title: realSlug.replace(/-/g, ' '),
    date: new Date().toISOString().split('T')[0],
    author: 'Supreme Universal Research',
    excerpt: '',
    description: '',
    image: 'https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg',
    tags: [],
    content: '',
  };
}

export function getAllPosts(): BlogPost[] {
  return getPostsFromData();
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

