import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import type { Article } from "./types";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatDate = (dateString: string): string =>
  format(new Date(dateString), "d 'de' MMMM, yyyy", { locale: es });

export const formatDateShort = (dateString: string): string =>
  format(new Date(dateString), "d MMM yyyy", { locale: es });

export const timeAgo = (dateString: string): string =>
  formatDistanceToNow(new Date(dateString), { locale: es, addSuffix: true });

export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

export const extractHeadings = (
  markdown: string
): { id: string; text: string; level: number }[] => {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = slugify(text);
    headings.push({ id, text, level });
  }

  return headings;
};

export const getRelatedArticles = (
  article: Article,
  allArticles: Article[],
  count = 3
): Article[] =>
  allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);

export const getArticleUrl = (article: Article): string =>
  `/${article.category}/${article.slug}`;
