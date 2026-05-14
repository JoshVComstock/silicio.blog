import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { getArticleUrl } from "@/lib/utils";
import type { Article } from "@/lib/types";

interface TrendingListProps {
  articles: Article[];
}

export const TrendingList = ({ articles }: TrendingListProps) => {
  return (
    <section>
      <h2 className="flex items-center gap-2 text-lg font-bold mb-5">
        <TrendingUp className="h-5 w-5 text-primary" />
        Más leídos esta semana
      </h2>
      <ol className="space-y-4">
        {articles.map((article, i) => (
          <li key={article.id} className="flex items-start gap-4">
            <span
              className="text-3xl font-black leading-none text-primary/20 select-none w-8 shrink-0 tabular-nums"
              aria-hidden
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <Link
                href={getArticleUrl(article)}
                className="font-semibold text-sm leading-snug line-clamp-2 hover:text-primary transition-colors"
              >
                {article.title}
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                {article.views.toLocaleString("es-ES")} vistas
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
