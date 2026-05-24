import { ExternalLink, BookOpen } from "lucide-react";
import type { Source } from "@/lib/types";

interface SourcesListProps {
  sources: Source[];
}

/**
 * Lista de fuentes citadas por el agente IA (Google Search Grounding).
 * Aparece al final del artículo. Refuerza E-E-A-T y credibilidad.
 */
export const SourcesList = ({ sources }: SourcesListProps) => {
  if (!sources || sources.length === 0) return null;

  // Extrae el dominio de una URL para mostrarlo de forma compacta
  const hostname = (url: string): string => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  };

  return (
    <section
      aria-labelledby="sources-heading"
      className="mt-10 pt-6 border-t border-border"
    >
      <h2
        id="sources-heading"
        className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2"
      >
        <BookOpen className="h-3.5 w-3.5" />
        Fuentes consultadas
      </h2>

      <p className="text-xs text-muted-foreground mb-4">
        Este artículo fue elaborado con la asistencia de IA y se basa en las siguientes fuentes públicas:
      </p>

      <ul className="space-y-2">
        {sources.map((source, i) => (
          <li
            key={`${source.url}-${i}`}
            className="flex items-start gap-2.5 group"
          >
            <span className="text-xs text-muted-foreground font-mono mt-1 select-none">
              {String(i + 1).padStart(2, "0")}.
            </span>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-1 min-w-0 group-hover:bg-muted/40 rounded-md px-2 py-1.5 -mx-2 -my-1.5 transition-colors"
            >
              <p className="text-sm font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {source.title}
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <span className="truncate">{hostname(source.url)}</span>
                <ExternalLink className="h-3 w-3 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
