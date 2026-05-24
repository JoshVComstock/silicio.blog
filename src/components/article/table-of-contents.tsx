"use client";

import { useState, useEffect } from "react";
import { ChevronDown, List } from "lucide-react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TocListProps {
  headings: Heading[];
  activeId: string;
  onLinkClick?: () => void;
}

const TocList = ({ headings, activeId, onLinkClick }: TocListProps) => (
  <ol className="space-y-1.5">
    {headings.map((h) => (
      <li key={h.id} className={cn(h.level === 3 && "ml-3")}>
        <a
          href={`#${h.id}`}
          onClick={onLinkClick}
          className={cn(
            "block text-sm leading-snug transition-colors hover:text-primary",
            activeId === h.id
              ? "text-primary font-semibold"
              : "text-muted-foreground"
          )}
        >
          {h.text}
        </a>
      </li>
    ))}
  </ol>
);

interface TableOfContentsProps {
  headings: Heading[];
  /**
   * - "desktop": solo la versión sticky para sidebar (oculta en mobile)
   * - "mobile":  solo la versión desplegable (oculta en desktop)
   * - undefined (default): ambas con responsive automático (NO usar dos veces)
   */
  variant?: "desktop" | "mobile";
}

export const TableOfContents = ({ headings, variant }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const showDesktop = variant === undefined || variant === "desktop";
  const showMobile = variant === undefined || variant === "mobile";

  return (
    <>
      {/* Desktop: sticky sidebar */}
      {showDesktop && (
        <nav
          aria-label="Tabla de contenidos"
          className={cn(
            "sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto",
            // Si NO se especifica variant, ocultamos en mobile con responsive
            variant === undefined && "hidden lg:block"
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
            <List className="h-3.5 w-3.5" />
            Contenido
          </p>
          <TocList headings={headings} activeId={activeId} />
        </nav>
      )}

      {/* Mobile: collapsible */}
      {showMobile && (
        <div
          className={cn(
            "mb-6 rounded-lg border border-border bg-muted/40",
            variant === undefined && "lg:hidden"
          )}
        >
          <button
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
          >
            <span className="flex items-center gap-2">
              <List className="h-4 w-4 text-muted-foreground" />
              Tabla de contenidos
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                mobileOpen && "rotate-180"
              )}
            />
          </button>
          {mobileOpen && (
            <div className="px-4 pb-4">
              <TocList
                headings={headings}
                activeId={activeId}
                onLinkClick={() => setMobileOpen(false)}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
