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
    ],
  };
}
