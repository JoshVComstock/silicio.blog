import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";
import { cn, timeAgo, getArticleUrl } from "@/lib/utils";
import { CategoryBadge } from "./category-badge";
import type { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
  variant?: "featured" | "default" | "horizontal" | "compact";
  className?: string;
  priority?: boolean;
}

export const ArticleCard = ({
  article,
  variant = "default",
  className,
  priority = false,
}: ArticleCardProps) => {
  const url = getArticleUrl(article);

  // ── FEATURED: imagen izquierda, contenido derecha (sin overlay) ──────────
  if (variant === "featured") {
    return (
      <article
        className={cn(
          "group grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 rounded-2xl border border-border bg-card overflow-hidden",
          className
        )}
      >
        {/* Imagen */}
        <Link
          href={url}
          className="relative block lg:col-span-3 aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden"
        >
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 720px"
          />
          {article.series && (
            <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-background/90 text-foreground backdrop-blur shadow-sm">
              {article.series}
            </span>
          )}
        </Link>

        {/* Contenido */}
        <div className="lg:col-span-2 flex flex-col justify-center px-5 pb-6 lg:px-8 lg:py-10">
          <CategoryBadge category={article.category} />

          <Link href={url} className="group/title mt-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-[1.15] tracking-tight group-hover/title:text-primary transition-colors">
              {article.title}
            </h2>
          </Link>

          <p className="mt-4 text-base text-muted-foreground leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{article.author.name}</span>
            <span aria-hidden className="opacity-50">·</span>
            <time dateTime={article.publishedAt}>{timeAgo(article.publishedAt)}</time>
            <span aria-hidden className="opacity-50">·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingTime} min
            </span>
          </div>

          <Link
            href={url}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link"
          >
            Leer artículo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </article>
    );
  }

  // ── HORIZONTAL: lista compacta con imagen pequeña a la izq ───────────────
  if (variant === "horizontal") {
    return (
      <article
        className={cn(
          "group flex gap-4 py-4 border-b border-border last:border-0",
          className
        )}
      >
        <Link
          href={url}
          className="relative shrink-0 w-24 h-20 sm:w-32 sm:h-24 rounded-lg overflow-hidden"
        >
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="128px"
          />
        </Link>
        <div className="flex flex-col justify-between min-w-0 flex-1 py-0.5">
          <div>
            <CategoryBadge category={article.category} className="text-[10px]" />
            <Link href={url} className="group/title block mt-1.5">
              <h3 className="text-sm sm:text-base font-semibold leading-snug line-clamp-2 group-hover/title:text-primary transition-colors">
                {article.title}
              </h3>
            </Link>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
            <time dateTime={article.publishedAt}>{timeAgo(article.publishedAt)}</time>
            <span aria-hidden className="opacity-50">·</span>
            <span>{article.readingTime} min</span>
          </div>
        </div>
      </article>
    );
  }

  // ── COMPACT: para sidebars ───────────────────────────────────────────────
  if (variant === "compact") {
    return (
      <article className={cn("group flex items-start gap-3", className)}>
        <Link href={url} className="relative shrink-0 w-16 h-16 rounded-md overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            className="object-cover"
            sizes="64px"
          />
        </Link>
        <div className="min-w-0 flex-1">
          <Link href={url}>
            <h3 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
          </Link>
          <time className="text-xs text-muted-foreground mt-1 block" dateTime={article.publishedAt}>
            {timeAgo(article.publishedAt)}
          </time>
        </div>
      </article>
    );
  }

  // ── DEFAULT: card vertical con imagen arriba ─────────────────────────────
  return (
    <article className={cn("group flex flex-col", className)}>
      <Link href={url} className="relative block aspect-[16/10] rounded-lg overflow-hidden mb-4">
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
      </Link>
      <CategoryBadge category={article.category} />
      <Link href={url} className="mt-3 group/title">
        <h3 className="text-lg font-semibold leading-snug line-clamp-2 group-hover/title:text-primary transition-colors">
          {article.title}
        </h3>
      </Link>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {article.excerpt}
      </p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3 pt-3 border-t border-border/60">
        <span className="font-medium text-foreground/80">{article.author.name}</span>
        <span aria-hidden className="opacity-50">·</span>
        <time dateTime={article.publishedAt}>{timeAgo(article.publishedAt)}</time>
        <span aria-hidden className="opacity-50">·</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {article.readingTime} min
        </span>
      </div>
    </article>
  );
};
