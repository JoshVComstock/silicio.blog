import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArticleCard } from "@/components/article/article-card";
import { CategorySection } from "@/components/home/category-section";
import { TrendingList } from "@/components/home/trending-list";
import { NewsletterForm } from "@/components/home/newsletter-form";
import {
  getFeaturedArticle,
  getLatestArticles,
  getArticlesByCategory,
  getTrendingArticles,
} from "@/features/articles";
import { CATEGORIES } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Silicio — Inteligencia Artificial, Ciencia y Tecnología",
  description:
    "Silicio es tu medio de referencia en español sobre inteligencia artificial, ciencia, ciberseguridad y tecnología. Análisis diario sin ruido.",
  openGraph: {
    title: "Silicio — Inteligencia Artificial, Ciencia y Tecnología",
    description:
      "Tu medio en español sobre IA, ciencia, ciberseguridad y tecnología.",
    type: "website",
  },
};

const HomePage = async () => {
  const [featured, latest, trending, categoriesWithArticles, topTech] = await Promise.all([
    getFeaturedArticle(),
    getLatestArticles(6),
    getTrendingArticles(5),
    Promise.all(
      CATEGORIES.map(async (cat) => ({
        category: cat,
        articles: (await getArticlesByCategory(cat.slug)).slice(0, 3),
      }))
    ),
    getArticlesByCategory("tecnologia"),
  ]);

  const topTechArticles = [...topTech].sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero: featured article */}
        {featured && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-10">
            <ArticleCard article={featured} variant="featured" priority />
          </section>
        )}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Latest news grid */}
          <section className="pb-12">
            <h2 className="text-2xl font-bold mb-6">Últimas noticias</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latest.map((article, i) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="default"
                  priority={i < 3}
                />
              ))}
            </div>
          </section>

          <Separator className="mb-12" />

          {/* TODO: reactivar suscripción cuando esté lista
          <section className="mb-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 px-6 py-10 sm:px-12 sm:py-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Newsletter semanal
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Las 3 mejores noticias tech de la semana
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6 text-sm sm:text-base">
              Cada viernes en tu inbox: los avances en IA, hardware y tecnología que realmente
              importan. Sin relleno.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              +12.000 suscriptores · Sin spam · Cancela cuando quieras
            </p>
          </section>
          */}

          {/* Category sections + Trending sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-16">
            <div className="lg:col-span-2 space-y-12">
              {categoriesWithArticles.map(({ category, articles }) => (
                <CategorySection
                  key={category.slug}
                  category={category}
                  articles={articles}
                />
              ))}
            </div>

            <aside className="space-y-8">
              <TrendingList articles={trending} />

              <Separator />

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Destacados en Tecnología
                </h3>
                <div className="space-y-4">
                  {topTechArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} variant="compact" />
                  ))}
                </div>
              </div>

              {/* TODO: reactivar suscripción cuando esté lista
              <Separator />
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

export default HomePage;
