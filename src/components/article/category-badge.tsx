import Link from "next/link";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/categories";
import type { CategorySlug } from "@/lib/types";

interface CategoryBadgeProps {
  category: CategorySlug;
  subcategory?: string;
  className?: string;
  asLink?: boolean;
}

export const CategoryBadge = ({
  category,
  subcategory,
  className,
  asLink = true,
}: CategoryBadgeProps) => {
  const cat = CATEGORIES.find((c) => c.slug === category);
  const label = cat?.name ?? category;

  const badge = (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary",
        className
      )}
    >
      {label}
    </span>
  );

  if (!asLink) return badge;

  const href = subcategory ? `/${category}?sub=${subcategory}` : `/${category}`;

  return (
    <Link href={href} className="hover:opacity-80 transition-opacity">
      {badge}
    </Link>
  );
}
