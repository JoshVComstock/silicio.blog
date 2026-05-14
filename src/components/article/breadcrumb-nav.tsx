import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  crumbs: Crumb[];
}

export const BreadcrumbNav = ({ crumbs }: BreadcrumbNavProps) => {
  return (
    <nav aria-label="Ruta de navegación">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="flex items-center hover:text-primary transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Inicio</span>
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-primary transition-colors truncate max-w-[200px]">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium truncate max-w-[200px]">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
