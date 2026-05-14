import type { Metadata, Viewport } from "next";
import { Inter, Lora, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { GoogleAdsense } from "@/components/analytics/google-adsense";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Inteligencia Artificial, Ciencia y Tecnología`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legal.owner }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.social.twitter,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(siteConfig.googleVerification && {
    verification: { google: siteConfig.googleVerification },
  }),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
  <html
    lang="es"
    suppressHydrationWarning
    className={`${inter.variable} ${lora.variable} ${geistMono.variable}`}
  >
    <head>
      <GoogleAnalytics />
      <GoogleAdsense />
    </head>
    <body className="min-h-screen flex flex-col bg-background text-foreground">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <CookieConsent />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
