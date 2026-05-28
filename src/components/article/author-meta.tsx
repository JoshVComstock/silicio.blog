import { Clock, Eye, Calendar } from "lucide-react";
import { formatDate, timeAgo } from "@/lib/utils";
import type { Article } from "@/lib/types";

interface AuthorMetaProps {
  article: Article;
  showViews?: boolean;
  compact?: boolean;
}

export const AuthorMeta = ({ article, showViews = true, compact = false }: AuthorMetaProps) => {
  if (compact) {
    return (
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span>{article.author.name}</span>
        <span aria-hidden>·</span>
        <time dateTime={article.publishedAt}>{timeAgo(article.publishedAt)}</time>
        <span aria-hidden>·</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {article.readingTime} min
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{article.author.name}</span>
      <span className="flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" />
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
      </span>
      <span className="flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        {article.readingTime} min de lectura
      </span>
      {/* {showViews && (
        <span className="flex items-center gap-1.5">
          <Eye className="h-3.5 w-3.5" />
          {article.views.toLocaleString("es-ES")} vistas
        </span>
      )} */}
    </div>
  );
}
