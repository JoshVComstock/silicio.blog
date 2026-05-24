import type { Article } from '@/lib/types';
import type { ApiArticle } from './types';

// Adapta el shape del server al tipo de dominio que consume la UI.
// La UI nunca debería tocar ApiArticle directamente.
export function toArticle(a: ApiArticle): Article {
  return {
    id: a.id,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    body: a.body,
    category: a.category,
    tags: a.tags,
    series: a.series ?? undefined,
    author: { name: a.authorName ?? 'Redacción' },
    publishedAt: a.publishedAt ?? a.createdAt,
    updatedAt: a.updatedAt,
    readingTime: a.readingTime,
    views: a.views,
    featuredImage: a.featuredImage,
    featuredImageAlt: a.featuredImageAlt,
    featured: a.featured,
    articleType: a.articleType,
    faqs: a.faqs ?? undefined,
    sources: a.sources ?? undefined,
  };
}

export function isPublic(a: ApiArticle): boolean {
  return a.status === 'PUBLISHED' || a.status === 'SCHEDULED';
}
