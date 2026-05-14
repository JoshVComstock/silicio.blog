export type CategorySlug = "ia" | "ciencia" | "seguridad" | "tecnologia";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  tagline: string;
  tags: string[];
}

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: CategorySlug;
  tags: string[];
  series?: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  views: number;
  featuredImage: string;
  featuredImageAlt: string;
  featured?: boolean;
  faqs?: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SearchResult {
  article: Article;
  highlight: string;
}
