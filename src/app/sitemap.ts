import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
const siteUrl=  "https://azhar-lone-portfolio.vercel.app"
  return [
    {
      url: process.env.SITE_URL || siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || siteUrl}/projects`,
      lastModified: new Date(),
    },
  ];
}
