import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://azhar-lone-portfolio.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://azhar-lone-portfolio.vercel.app/projects',
      lastModified: new Date(),
    },
   
  ]
}