/**
 * Helpers para generar bloques JSON-LD (Schema.org).
 * Cada función devuelve un objeto que se serializa con JSON.stringify y se
 * inyecta en un <script type="application/ld+json"> dentro de cada página.
 *
 * Google usa estos datos estructurados para:
 *  - Mostrar Rich Snippets (estrellas, fechas, breadcrumbs en SERPs)
 *  - Aparecer en carouseles "Top stories" y Google News
 *  - Generar previews enriquecidas en Discover
 */

import { siteConfig } from "./site-config";
import type { Article, Category } from "./types";

const PUBLISHER = {
  "@type": "Organization" as const,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject" as const,
    url: `${siteConfig.url}/icon`,
    width: 64,
    height: 64,
  },
  sameAs: [
    siteConfig.social.twitterUrl,
    siteConfig.social.linkedin,
    siteConfig.social.github,
  ].filter(Boolean),
};

const CATEGORY_NAME: Record<string, string> = {
  ia: "Inteligencia Artificial",
  ciencia: "Ciencia y Avances",
  seguridad: "Ciberseguridad",
  tecnologia: "Tecnología y Sociedad",
};

/**
 * NewsArticle (mejor que Article para medios): habilita aparición en
 * Top Stories, Discover y Google News cuando se aprueba el sitio en GNPC.
 */
export const buildNewsArticleJsonLd = (article: Article) => {
  const url = `${siteConfig.url}/${article.category}/${article.slug}`;
  const wordCount = article.body.split(/\s+/).length;

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.title.slice(0, 110), // límite de Google
    description: article.excerpt,
    image: [article.featuredImage],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      url: `${siteConfig.url}/sobre`,
    },
    publisher: PUBLISHER,
    articleSection: CATEGORY_NAME[article.category] ?? article.category,
    keywords: article.tags.join(", "),
    wordCount,
    inLanguage: "es",
    isAccessibleForFree: true,
  };
};

/**
 * FAQPage: si el artículo tiene FAQs, Google puede mostrarlas EXPANDIDAS
 * en el resultado de búsqueda (mucho más espacio visual = más CTR).
 */
export const buildFaqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

/**
 * BreadcrumbList: Google muestra "silicio.blog › IA › Llama 4..." en el SERP
 * en vez de la URL pelada. Mejora drásticamente el CTR.
 */
export const buildBreadcrumbJsonLd = (
  crumbs: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
});

/**
 * WebSite + SearchAction: habilita el "sitelinks searchbox" — Google
 * puede mostrar un buscador de tu sitio EMBEBIDO en el resultado.
 */
export const buildWebSiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "es",
  publisher: PUBLISHER,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/buscar?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

/**
 * Organization standalone (para la home), refuerza E-E-A-T (Expertise,
 * Experience, Authoritativeness, Trustworthiness) que Google premia.
 */
export const buildOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  ...PUBLISHER,
  description: siteConfig.description,
  email: siteConfig.contact.email,
});

/**
 * CollectionPage para listas (categoría, tag) — ayuda a Google a entender
 * que esa URL agrupa contenido relacionado, no es contenido propio.
 */
export const buildCollectionPageJsonLd = (
  category: Category,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: category.name,
  description: category.description,
  url,
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: siteConfig.url, name: siteConfig.name },
  about: category.name,
});

/**
 * Helper para inyectar uno o varios bloques en el HTML.
 * Usa el patrón con dangerouslySetInnerHTML porque <script> en JSX se sanitiza.
 */
export const jsonLdScript = (data: unknown | unknown[]): { __html: string } => {
  const payload = Array.isArray(data) ? data : [data];
  return { __html: payload.map((d) => JSON.stringify(d)).join("\n") };
};
