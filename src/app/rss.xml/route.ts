import { getAllArticles } from "@/features/articles";
import { CATEGORIES } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";

export const GET = async () => {
  const base = siteConfig.url;
  const all = await getAllArticles();
  const articles = all.slice(0, 50);

  const items = articles
    .map((a) => {
      const catName = CATEGORIES.find((c) => c.slug === a.category)?.name ?? a.category;
      return `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${base}/${a.category}/${a.slug}</link>
      <guid isPermaLink="true">${base}/${a.category}/${a.slug}</guid>
      <description><![CDATA[${a.excerpt}]]></description>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <category>${catName}</category>
      <author>${siteConfig.contact.email} (${a.author.name})</author>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${base}</link>
    <description>${siteConfig.description}</description>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${base}/logo.png</url>
      <title>${siteConfig.name}</title>
      <link>${base}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
