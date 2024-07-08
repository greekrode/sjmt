import { MetadataRoute } from "next";
import { gtrProductData, gtProductData, gitiProductData } from "./data";

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
  ]);

  return sitemapEntries;
}
