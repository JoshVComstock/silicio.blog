import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

// Carga GA4 con `strategy="afterInteractive"` para no bloquear el render.
// Por defecto envía consent=denied: el banner de cookies actualizará a
// 'granted' si el usuario acepta. Esto es lo que Google llama Consent Mode v2,
// requerido en la UE.
export const GoogleAnalytics = () => {
  if (!siteConfig.ga) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', '${siteConfig.ga}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
};
