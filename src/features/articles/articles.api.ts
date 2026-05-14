import type { Article } from '@/lib/types';
import { fetchJson } from '@/lib/http';
import type { ApiArticle, ApiPaginatedArticles } from './types';
import { toArticle, isPublic } from './mapper';

// ── helpers internos ───────────────────────────────────────────────────────

const byPublishedDesc = (a: Article, b: Article) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

// Trae todos los artículos publicados con un filtro opcional.
// Es la base de la mayoría de las funciones del feature.
async function fetchPublished(
  query: Record<string, string> = {}
): Promise<Article[]> {
  const data = await fetchJson<ApiPaginatedArticles>('/articles', {
    query: { status: 'PUBLISHED', pageSize: 100, ...query },
  });
  return data?.items.map(toArticle) ?? [];
}

// ── API pública del feature ────────────────────────────────────────────────

export async function getAllArticles(): Promise<Article[]> {
  return (await fetchPublished()).sort(byPublishedDesc);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const data = await fetchJson<{ article: ApiArticle }>(`/articles/slug/${slug}`);
  if (!data || !isPublic(data.article)) return undefined;
  return toArticle(data.article);
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  return (await fetchPublished({ category })).sort(byPublishedDesc);
}

export async function getArticlesByTag(tag: string): Promise<Article[]> {
  return (await fetchPublished({ tag })).sort(byPublishedDesc);
}

export async function getAllTags(): Promise<string[]> {
  const articles = await fetchPublished();
  const tags = new Set<string>();
  for (const a of articles) for (const t of a.tags) tags.add(t);
  return [...tags].sort();
}

export async function getFeaturedArticle(): Promise<Article | undefined> {
  const articles = await fetchPublished();
  return articles.find((a) => a.featured) ?? articles[0];
}

export async function getLatestArticles(count = 6): Promise<Article[]> {
  return (await getAllArticles()).slice(0, count);
}

export async function getTrendingArticles(count = 5): Promise<Article[]> {
  const articles = await fetchPublished();
  return [...articles].sort((a, b) => b.views - a.views).slice(0, count);
}

export async function getRelatedArticles(article: Article, count = 3): Promise<Article[]> {
  const articles = await getArticlesByCategory(article.category);
  return articles.filter((a) => a.id !== article.id).slice(0, count);
}
