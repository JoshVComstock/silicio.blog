/**
 * Capa fina sobre Google Analytics 4.
 *
 * Beneficios sobre llamar a window.gtag directamente:
 * - Tipado: el compilador te avisa si te equivocas en el nombre del evento
 * - Catálogo único: todos los eventos del sitio listados aquí
 * - SSR-safe: chequea window y la existencia de gtag (no rompe en server)
 * - Consent-aware: si el usuario no aceptó cookies, gtag respeta el consent mode v2
 */

/**
 * Catálogo central de eventos que disparamos en el sitio.
 * Si quieres añadir un evento nuevo: agrégalo aquí PRIMERO, luego úsalo.
 */
export const AnalyticsEvent = {
  // Newsletter
  NEWSLETTER_SUBSCRIBE: "newsletter_subscribe",
  NEWSLETTER_SUBSCRIBE_CLICK: "newsletter_subscribe_click",

  // Artículos
  ARTICLE_VIEW: "article_view",
  ARTICLE_SHARE: "article_share",
  ARTICLE_COPY_LINK: "article_copy_link",

  // Navegación
  CATEGORY_CLICK: "category_click",
  TAG_CLICK: "tag_click",
  SEARCH: "search",

  // Engagement
  SCROLL_DEPTH_75: "scroll_depth_75",
  OUTBOUND_LINK_CLICK: "outbound_link_click",
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];

interface TrackOptions {
  category?: string;
  label?: string;
  value?: number;
  /** Propiedades adicionales que GA4 acepta */
  [key: string]: unknown;
}

/**
 * Dispara un evento custom de GA4.
 *
 * @example
 *   track(AnalyticsEvent.NEWSLETTER_SUBSCRIBE, { label: 'footer_form' });
 *   track(AnalyticsEvent.ARTICLE_SHARE, { label: 'twitter', article_id: '123' });
 */
export const track = (event: AnalyticsEventName, options: TrackOptions = {}): void => {
  if (typeof window === "undefined" || !window.gtag) return;

  const { category, label, value, ...rest } = options;
  window.gtag("event", event, {
    ...(category && { event_category: category }),
    ...(label && { event_label: label }),
    ...(value !== undefined && { value }),
    ...rest,
  });
};

/**
 * Actualiza el consent de GA4 cuando el usuario interactúa con el banner.
 * Úsalo desde tu componente CookieConsent.
 *
 * @example
 *   updateConsent(true);   // usuario aceptó
 *   updateConsent(false);  // usuario rechazó
 */
export const updateConsent = (accepted: boolean): void => {
  if (typeof window === "undefined" || !window.gtag) return;

  const value = accepted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
};

/**
 * Registra una pageview manual (útil en SPAs donde la navegación
 * no recarga la página y GA4 no lo detecta automáticamente).
 */
export const trackPageView = (path: string, title?: string): void => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    ...(title && { page_title: title }),
  });
};
