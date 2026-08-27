import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /travel is intentionally not disallowed: crawlers must be able to
        // fetch it to see its noindex metadata (app/travel/layout.tsx).
        disallow: ["/wild"],
      },
    ],
    sitemap: "https://mikulsaravanan.com/sitemap.xml",
  };
}
