/**
 * Tipado global de Google Analytics 4 (gtag.js).
 * Se carga automáticamente porque está en src/types/ incluido por tsconfig.
 */

type GtagConsentParams = {
  ad_storage?: "granted" | "denied";
  ad_user_data?: "granted" | "denied";
  ad_personalization?: "granted" | "denied";
  analytics_storage?: "granted" | "denied";
  wait_for_update?: number;
};

type GtagEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
};

interface Gtag {
  (command: "js", date: Date): void;
  (command: "config", measurementId: string, params?: Record<string, unknown>): void;
  (command: "event", eventName: string, params?: GtagEventParams): void;
  (command: "consent", action: "default" | "update", params: GtagConsentParams): void;
  (command: "set", params: Record<string, unknown>): void;
}

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export {};
