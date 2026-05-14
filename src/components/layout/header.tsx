"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/categories";
import LogoDark from "@/assets/LogoDark.png";
import LogoWhite from "@/assets/LogoWhite.png";

export const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Silicio - Inicio">
            <Image
              src={LogoDark}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 dark:hidden"
              priority
            />
            <Image
              src={LogoWhite}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 hidden dark:block"
              priority
            />
            <span className="text-lg font-bold tracking-tight">Silicio</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Categorías principales">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-accent",
                  pathname.startsWith(`/${cat.slug}`)
                    ? "text-primary bg-accent"
                    : "text-muted-foreground"
                )}
              >
                {cat.shortName}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/buscar"
              aria-label="Buscar"
              className={cn(
                "hidden sm:flex items-center justify-center h-9 w-9 rounded-md transition-colors hover:bg-accent",
                pathname === "/buscar" ? "text-primary bg-accent" : "text-muted-foreground"
              )}
            >
              <Search className="h-4 w-4" />
            </Link>

            <ThemeToggle />

            <Link
              href="/newsletter"
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              )}
            >
              Suscribirse
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Menú móvil">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={cn(
                  "px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                  pathname.startsWith(`/${cat.slug}`)
                    ? "text-primary bg-accent"
                    : "text-foreground hover:bg-accent"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/buscar"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-accent"
              onClick={() => setMobileOpen(false)}
            >
              <Search className="h-4 w-4" />
              Buscar
            </Link>
            <div className="pt-2 border-t border-border mt-2">
              <Link
                href="/newsletter"
                className={cn(
                  buttonVariants(),
                  "w-full justify-center bg-primary text-primary-foreground font-semibold"
                )}
                onClick={() => setMobileOpen(false)}
              >
                Suscribirse al newsletter
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
