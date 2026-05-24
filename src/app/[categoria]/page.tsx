import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadcrumbNav } from "@/components/article/breadcrumb-nav";
import { ArticleCard } from "@/components/article/article-card";
import { NewsletterForm } from "@/components/home/newsletter-form";
import { TrendingList } from "@/components/home/trending-list";
import { getArticlesByCategory } from "@/features/articles";
import { CATEGORIES, getCategoryBySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  jsonLdScript,
} from "@/lib/jsonld";

interface PageProps {
  params: Promise<{ categoria: string }>;
  searchParams: Promise<{ tag?: string; p?: string }>;
}

export const generateStaticParams = async () =>
  CATEGORIES.map((c) => ({ categoria: c.slug }));

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { categoria } = await params;
  const cat = getCategoryBySlug(categoria);
  if (!cat) return {};
  return {
    title: `${cat.name} — Silicio`,
    description: cat.description,
    openGraph: { title: `${cat.name} — Silicio`, description: cat.description },
  };
};

const PAGE_SIZE = 12;

const CategoryPage = async ({ params, searchParams }: PageProps) => {
  const { categoria } = await params;
  const { tag, p } = await searchParams;

  const category = getCategoryBySlug(categoria);
  if (!category) notFound();

  const allArticles = await getArticlesByCategory(categoria);
  const filtered = tag ? allArticles.filter((a) => a.tags.includes(tag)) : allArticles;

  const page = Math.max(1, parseInt(p ?? "1", 10));
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const articles = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const trending = [...allArticles].sort((a, b) => b.views - a.views).slice(0, 4);

  // Solo mostrar tags que tienen al menos un artículo en esta categoría
  const activeTags = category.tags.filter((t) =>
    allArticles.some((a) => a.tags.includes(t))
  );

  const categoryUrl = `${siteConfig.url}/${categoria}`;
  const jsonLdBlocks = [
    buildCollectionPageJsonLd(category, categoryUrl),
    buildBreadcrumbJsonLd([
      { name: "Inicio", url: siteConfig.url },
      { name: category.name, url: categoryUrl },
    ]),
  ];

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(jsonLdBlocks)}
      />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <BreadcrumbNav crumbs={[{ label: category.name }]} />

          {/* Category header */}
          <div className="mt-6 mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              {category.tagline}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {category.name}
            </h1>
            <p className="mt-3 text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
              {category.description}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {filtered.length} artículo{filtered.length !== 1 ? "s" : ""}
              {tag && (
                <>
                  {" "}filtrado{filtered.length !== 1 ? "s" : ""} por{" "}
                  <span className="font-medium text-foreground">#{tag}</span>
                </>
              )}
            </p>
          </div>

          {/* Tag pills */}
          {activeTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              <Link
                href={`/${categoria}`}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
                  !tag
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                Todos
              </Link>
              {activeTags.map((t) => (
                <Link
                  key={t}
                  href={`/${categoria}?tag=${t}`}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
                    tag === t
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  #{t}
                </Link>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
            {/* Articles grid */}
            <div>
              {articles.length === 0 ? (
                <div className="py-20 text-center text-muted-foreground">
                  No hay artículos con este tag todavía.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                  {articles.map((article, i) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      variant="default"
                      priority={i < 4}
                    />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Paginación">
                  {page > 1 && (
                    <Link
                      href={`/${categoria}?${tag ? `tag=${tag}&` : ""}p=${page - 1}`}
                      className="px-4 py-2 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
                    >
                      ← Anterior
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <Link
                      key={n}
                      href={`/${categoria}?${tag ? `tag=${tag}&` : ""}p=${n}`}
                      className={cn(
                        "w-9 h-9 flex items-center justify-center rounded-lg text-sm border transition-colors",
                        n === page
                          ? "bg-primary text-primary-foreground border-primary font-semibold"
                          : "border-border hover:bg-accent"
                      )}
                      aria-current={n === page ? "page" : undefined}
                    >
                      {n}
                    </Link>
                  ))}
                  {page < totalPages && (
                    <Link
                      href={`/${categoria}?${tag ? `tag=${tag}&` : ""}p=${page + 1}`}
                      className="px-4 py-2 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
                    >
                      Siguiente →
                    </Link>
                  )}
                </nav>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <TrendingList articles={trending} />
              {/* TODO: reactivar suscripción cuando esté lista
              <NewsletterForm variant="card" />
              */}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
