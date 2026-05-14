// Configuración global del sitio leída de variables de entorno.
// Si una página/componente necesita la URL pública, el nombre del sitio o
// datos legales — los obtiene de aquí, NUNCA hardcodeados.

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Silicio",
  description:
    "Tu medio en español sobre inteligencia artificial, ciencia, ciberseguridad y tecnología. Análisis diario sin ruido.",

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@example.com",
  },

  legal: {
    owner: process.env.NEXT_PUBLIC_LEGAL_OWNER ?? "Silicio",
    address: process.env.NEXT_PUBLIC_LEGAL_ADDRESS ?? "",
    taxId: process.env.NEXT_PUBLIC_LEGAL_TAX_ID ?? "",
  },

  social: {
    twitter: "@silicio_tech",
    twitterUrl: "https://twitter.com/silicio_tech",
    linkedin: "https://linkedin.com/company/silicio-tech",
    github: "https://github.com/silicio-tech",
  },

  // IDs de servicios externos. Vacíos = desactivado.
  ga: process.env.NEXT_PUBLIC_GA_ID ?? "",
  adsense: process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
} as const;
