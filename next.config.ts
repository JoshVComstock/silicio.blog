import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formatos modernos: Vercel sirve AVIF/WebP automáticamente al navegador
    // que los soporte, con fallback a JPEG/PNG para el resto.
    formats: ["image/avif", "image/webp"],

    // Cache de 1 año para imágenes optimizadas. Vercel respeta este header
    // y sirve desde CDN edge sin re-optimizar.
    minimumCacheTTL: 31536000,

    // Por seguridad: no procesar SVGs (pueden contener JS embebido).
    // Si necesitas SVGs remotos, sírvelos como <img> directo, no <Image>.
    dangerouslyAllowSVG: false,

    // Breakpoints que Next.js usa para generar el srcset responsive.
    // Estos cubren desde móvil pequeño hasta 4K.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Hosts permitidos para <Image src="https://..."/>.
    // Si en el futuro añades otro CDN/storage, añade aquí su hostname.
    remotePatterns: [
      // Unsplash — los artículos seed apuntan aquí
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },

      // Vercel Blob Storage — opción nativa para subir imágenes desde el admin
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },

      // Cloudinary — alternativa muy común para gestión de medios
      { protocol: "https", hostname: "res.cloudinary.com" },

      // AWS S3 / R2 / DigitalOcean Spaces (patrón amplio, cubre la mayoría)
      { protocol: "https", hostname: "*.s3.amazonaws.com" },
      { protocol: "https", hostname: "*.s3.*.amazonaws.com" },
      { protocol: "https", hostname: "*.r2.cloudflarestorage.com" },

      // Avatares — GitHub, Gravatar
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "www.gravatar.com" },
      { protocol: "https", hostname: "secure.gravatar.com" },
    ],
  },

  // Headers de seguridad recomendados por Vercel para producción
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
