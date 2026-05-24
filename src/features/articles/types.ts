import type { ArticleType, CategorySlug, FAQ, Source } from '@/lib/types';

// Shape exacto que devuelve el server Express para un artículo.
// Diferente al tipo `Article` de dominio (lib/types.ts) en estos puntos:
//   - authorName es string (vs author: { name } anidado)
//   - publishedAt puede ser null (artículos en DRAFT/SCHEDULED)
//   - incluye campos administrativos (status, deletedAt, etc.)
export interface ApiArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: CategorySlug;
  tags: string[];
  series: string | null;
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  articleType?: ArticleType;
  featured: boolean;
  featuredImage: string;
  featuredImageAlt: string;
  readingTime: number;
  views: number;
  faqs: FAQ[] | null;
  sources?: Source[] | null;
  publishedAt: string | null;
  scheduledAt: string | null;
  authorId: string;
  authorName: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ApiPaginatedArticles {
  items: ApiArticle[];
  total: number;
  page: number;
  pageSize: number;
}
