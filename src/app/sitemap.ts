import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString(); // Ensure ISO format
const siteUrl=  "https://azhar-lone-portfolio.vercel.app"
  return [
    {
      url: process.env.SITE_URL || siteUrl,
      lastModified: currentDate,
    },
    {
      url: process.env.SITE_URL || siteUrl,
      lastModified: currentDate,
    },
  ];
}
