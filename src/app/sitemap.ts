import type { MetadataRoute } from "next";
import { getAllArticles, getAllTags } from "@/features/articles";
import { CATEGORIES } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const base = siteConfig.url;
  const [articles, tags] = await Promise.all([getAllArticles(), getAllTags()]);

  const articleUrls: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/${a.category}/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const tagUrls: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${base}/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/aviso-legal`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    ...categoryUrls,
    ...tagUrls,
    ...articleUrls,
  ];
};

export default sitemap;
