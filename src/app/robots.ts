import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
  sitemap: `${siteConfig.url}/sitemap.xml`,
});

export default robots;
