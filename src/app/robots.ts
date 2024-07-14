import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: [
      "https://sjmt.co.id/sitemap.xml",
      "https://suryajayamuliatama.com/sitemap.xml",
      "https://suryajayamuliatama.com/sitemap.xml",
      "https://www.suryajayamuliatama.com/sitemap.xml",
      "http://suryajayamuliatama.com/sitemap.xml",
      "http://www.suryajayamuliatama.com/sitemap.xml",
      "https://sjmt.co.id/sitemap.xml",
    ],
  };
}
