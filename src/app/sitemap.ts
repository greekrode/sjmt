import { MetadataRoute } from "next";
import { gtrProductData, gtProductData, gitiProductData } from "./data";
import { newsData } from "./news/newsData";

const generateProductUrls = (
  domain: string,
  productData: any[],
  path: string
) =>
  productData.map((product) => ({
    url: `https://${domain}/products/${path}/${product.id}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  const domains = ["suryajayamuliatama.com", "sjmt.co.id"];
  const staticUrls = [
    { path: "", priority: 1 },
    { path: "about", priority: 0.8 },
    { path: "news", priority: 0.7 },
    { path: "contact", priority: 0.5 },
  ];

  const productData = [
    { data: gtrProductData, path: "gtr" },
    { data: gtProductData, path: "gt" },
    { data: gitiProductData, path: "giti" },
  ];

  const sitemapEntries = domains.flatMap((domain) => [
    ...staticUrls.map(({ path, priority }) => ({
      url: `https://${domain}/${path}`,
      lastModified: new Date(),
      priority,
    })),
    ...productData.flatMap(({ data, path }) =>
      generateProductUrls(domain, data, path)
    ),
    ...newsData.map((news) => ({
      url: `https://${domain}/news/${news.slug}`,
      lastModified: new Date(),
      priority: 0.6,
    })),
  ]);

  return sitemapEntries;
}
