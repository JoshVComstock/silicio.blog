"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "silicio_cookie_consent";

type Consent = "granted" | "denied";

const subscribe = (cb: () => void) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};

const getSnapshot = () => localStorage.getItem(STORAGE_KEY);
const getServerSnapshot = () => null;

const updateConsent = (value: Consent) => {
  const win = window as unknown as { gtag?: (...args: unknown[]) => void };
  win.gtag?.("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
};

export const CookieConsent = () => {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);

  // Si ya hay decisión guardada, propaga a gtag y oculta el banner
  if (stored) {
    if (typeof window !== "undefined") updateConsent(stored as Consent);
    return null;
  }
  if (dismissed) return null;

  const decide = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    updateConsent(value);
    setDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          Usamos cookies propias y de terceros para analizar el tráfico y mostrar
          publicidad personalizada. Puedes aceptar todo, rechazar o leer más en
          nuestra{" "}
          <Link href="/cookies" className="underline hover:text-primary">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="ghost" size="sm" onClick={() => decide("denied")}>
            Rechazar
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground"
            onClick={() => decide("granted")}
          >
            Aceptar todo
          </Button>
          <button
            onClick={() => decide("denied")}
            aria-label="Cerrar"
            className="text-muted-foreground hover:text-foreground p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
