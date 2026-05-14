import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/article/article-card";
import type { Article } from "@/lib/types";
import type { Category } from "@/lib/types";

interface CategorySectionProps {
  category: Category;
  articles: Article[];
}

export const CategorySection = ({ category, articles }: CategorySectionProps) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold">{category.name}</h2>
          <p className="text-sm text-muted-foreground mt-0.5 hidden sm:block">
            {category.description.split(".")[0]}.
          </p>
        </div>
        <Link
          href={`/${category.slug}`}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline shrink-0"
        >
          Ver todo
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="divide-y divide-border">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} variant="horizontal" />
        ))}
      </div>
    </section>
  );
}
