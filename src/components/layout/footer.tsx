import Link from "next/link";
import Image from "next/image";
import { Rss } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";
import LogoDark from "@/assets/logoTextWhite.png";
import LogoWhite from "@/assets/logoTextModeDark.png";

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const Footer = () => (
  <footer className="border-t border-border bg-background mt-auto">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <Image src={LogoDark} alt="" className="w-36 dark:hidden" />
            <Image src={LogoWhite} alt="" className="w-28 hidden dark:block" />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tu medio en español sobre IA, ciencia, ciberseguridad y tecnología. Análisis diario sin ruido.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://twitter.com/silicio_tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/company/silicio-tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            {/* <a
              href="https://github.com/silicio-tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a> */}
            <Link
              href="/rss.xml"
              aria-label="RSS Feed"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Rss className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Categorías</h3>
          <ul className="space-y-2">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/${cat.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Site */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Silicio</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre nosotros
              </Link>
            </li>
            {/* TODO: reactivar suscripción cuando esté lista
            <li>
              <Link href="/newsletter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Newsletter
              </Link>
            </li>
            */}
            <li>
              <Link href="/buscar" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Buscar
              </Link>
            </li>
            <li>
              <Link href="/rss.xml" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                RSS Feed
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de cookies
              </Link>
            </li>
            <li>
              <Link href="/aviso-legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Silicio. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted-foreground">
          Contenido generado con asistencia de IA y revisado por el equipo editorial
        </p>
      </div>
    </div>
  </footer>
);
