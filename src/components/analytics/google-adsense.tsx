import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

// Carga el script global de AdSense una sola vez en <head>.
// Los slots individuales se montan con <AdSlot /> donde se necesiten.
export const GoogleAdsense = () => {
  if (!siteConfig.adsense) return null;
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsense}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
};

interface AdSlotProps {
  slot: string;             // ID del bloque de anuncio (lo asigna AdSense)
  format?: string;          // "auto" | "rectangle" | "horizontal" | "vertical"
  responsive?: boolean;
  className?: string;
}

// Bloque de anuncio individual. Úsalo donde quieras mostrar publicidad,
// siempre que el usuario haya consentido (handle del banner de cookies).
export const AdSlot = ({
  slot,
  format = "auto",
  responsive = true,
  className,
}: AdSlotProps) => {
  if (!siteConfig.adsense) return null;
  return (
    <ins
      className={`adsbygoogle block ${className ?? ""}`}
      style={{ display: "block" }}
      data-ad-client={siteConfig.adsense}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
};
