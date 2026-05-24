import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadcrumbNav } from "@/components/article/breadcrumb-nav";
import { CategoryBadge } from "@/components/article/category-badge";
import { AuthorMeta } from "@/components/article/author-meta";
import { ShareButtons } from "@/components/article/share-buttons";
import { TableOfContents } from "@/components/article/table-of-contents";
import { SourcesList } from "@/components/article/sources-list";
import { ArticleCard } from "@/components/article/article-card";
import { NewsletterForm } from "@/components/home/newsletter-form";
import { ArticleBody } from "./article-body";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/features/articles";
import { getCategoryBySlug } from "@/lib/categories";
import { extractHeadings, formatDate } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildNewsArticleJsonLd,
  jsonLdScript,
} from "@/lib/jsonld";

interface PageProps {
  params: Promise<{ categoria: string; slug: string }>;
}

export const generateStaticParams = async () => {
  const articles = await getAllArticles();
  return articles.map((a) => ({ categoria: a.category, slug: a.slug }));
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { categoria, slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || article.category !== categoria) return {};

  const url = `${siteConfig.url}/${article.category}/${article.slug}`;
  // Description: usar el excerpt, truncado a ~155 chars (límite de Google SERP)
  const description =
    article.excerpt.length > 155
      ? article.excerpt.slice(0, 152).trimEnd() + "…"
      : article.excerpt;

  return {
    title: article.title,
    description,
    alternates: { canonical: url },
    keywords: article.tags,
    authors: [{ name: article.author.name, url: `${siteConfig.url}/sobre` }],
    openGraph: {
      title: article.title,
      description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      section: categoria,
      tags: article.tags,
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.featuredImageAlt,
        },
      ],
      locale: "es_ES",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [article.featuredImage],
      creator: siteConfig.social.twitter,
    },
  };
};

const ArticlePage = async ({ params }: PageProps) => {
  const { categoria, slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || article.category !== categoria) notFound();

  const category = getCategoryBySlug(categoria);
  const related = await getRelatedArticles(article);
  const headings = extractHeadings(article.body);

  // Construye 3 bloques JSON-LD: NewsArticle + Breadcrumb + FAQ (si hay)
  const articleUrl = `${siteConfig.url}/${article.category}/${article.slug}`;
  const jsonLdBlocks: unknown[] = [
    buildNewsArticleJsonLd(article),
    buildBreadcrumbJsonLd([
      { name: "Inicio", url: siteConfig.url },
      { name: category?.name ?? categoria, url: `${siteConfig.url}/${categoria}` },
      { name: article.title, url: articleUrl },
    ]),
  ];
  if (article.faqs && article.faqs.length > 0) {
    jsonLdBlocks.push(buildFaqJsonLd(article.faqs));
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(jsonLdBlocks)}
      />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <BreadcrumbNav
            crumbs={[
              { label: category?.name ?? categoria, href: `/${categoria}` },
              { label: article.title },
            ]}
          />

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Main column */}
            <article className="min-w-0">
              {/* Category + series badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <CategoryBadge category={article.category} />
                {article.series && (
                  <Link
                    href={`/series/${encodeURIComponent(article.series)}`}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                  >
                    <Sparkles className="h-3 w-3" />
                    {article.series}
                  </Link>
                )}
              </div>

              {/* Title */}
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight">
                {article.title}
              </h1>

              {/* Author meta */}
              <div className="mt-5">
                <AuthorMeta article={article} />
              </div>

              {/* Share buttons */}
              <div className="mt-5">
                <ShareButtons
                  url={`/${article.category}/${article.slug}`}
                  title={article.title}
                />
              </div>

              <Separator className="my-7" />

              {/* Featured image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </div>

              {/* TL;DR */}
              <div className="mb-8 rounded-xl border border-primary/30 bg-primary/5 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  En resumen
                </p>
                <p className="text-base leading-relaxed">{article.excerpt}</p>
              </div>

              {/* TOC — solo mobile (desktop va en el aside derecho) */}
              <div className="lg:hidden">
                <TableOfContents headings={headings} variant="mobile" />
              </div>

              {/* Article body */}
              <ArticleBody body={article.body} />

              {/* Fuentes consultadas (si el agente IA citó alguna) */}
              {article.sources && article.sources.length > 0 && (
                <SourcesList sources={article.sources} />
              )}

              {/* Tags */}
              {article.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Etiquetas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${tag}`}
                        className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground font-medium transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Separator className="my-8" />

              {/* FAQ */}
              {article.faqs && article.faqs.length > 0 && (
                <section className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Preguntas frecuentes</h2>
                  <dl className="space-y-4">
                    {article.faqs.map((faq, i) => (
                      <div key={i} className="rounded-lg border border-border p-4">
                        <dt className="font-semibold mb-2">{faq.question}</dt>
                        <dd className="text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              {/* Updated at */}
              {article.updatedAt !== article.publishedAt && (
                <p className="text-xs text-muted-foreground mb-8">
                  Última actualización: {formatDate(article.updatedAt)}
                </p>
              )}

              {/* TODO: reactivar suscripción cuando esté lista
              <div className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 px-5 py-6 mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Newsletter
                </p>
                <h3 className="font-bold text-lg mb-1">¿Te ha gustado este artículo?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recibe los mejores artículos de Silicio cada semana en tu inbox.
                </p>
                <NewsletterForm />
              </div>
              */}

              {/* Comments placeholder */}
              <div className="rounded-xl border border-dashed border-border p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Los comentarios estarán disponibles próximamente (Disqus).
                </p>
              </div>
            </article>

            {/* Sidebar TOC — solo desktop */}
            <aside className="hidden lg:block">
              <TableOfContents headings={headings} variant="desktop" />
            </aside>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t border-border">
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {related.map((a) => (
                  <ArticleCard key={a.id} article={a} variant="default" />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;
