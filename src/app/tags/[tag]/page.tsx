import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hash } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadcrumbNav } from "@/components/article/breadcrumb-nav";
import { ArticleCard } from "@/components/article/article-card";
import { NewsletterForm } from "@/components/home/newsletter-form";
import { TrendingList } from "@/components/home/trending-list";
import { getAllTags, getArticlesByTag, getTrendingArticles } from "@/features/articles";

interface PageProps {
  params: Promise<{ tag: string }>;
}

export const generateStaticParams = async () => {
  const tags = await getAllTags();
  return tags.map((tag) => ({ tag }));
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { tag } = await params;
  return {
    title: `#${tag} — Silicio`,
    description: `Todos los artículos de Silicio etiquetados con #${tag}.`,
    openGraph: {
      title: `#${tag} — Silicio`,
      description: `Artículos sobre ${tag} en Silicio.`,
    },
  };
};

const TagPage = async ({ params }: PageProps) => {
  const { tag } = await params;
  const [articles, trending] = await Promise.all([
    getArticlesByTag(tag),
    getTrendingArticles(5),
  ]);

  if (articles.length === 0) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <BreadcrumbNav crumbs={[{ label: "Tags", href: "/tags" }, { label: `#${tag}` }]} />

          {/* Tag header */}
          <div className="mt-6 mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <Hash className="h-3.5 w-3.5" />
              Etiqueta
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              #{tag}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {articles.length} artículo{articles.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
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

export default TagPage;
