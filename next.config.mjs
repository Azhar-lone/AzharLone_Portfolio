/** @type {import('next').NextConfig} */
const nextConfig = {
 
  // Use SWC compiler's minification for better performance
  swcMinify: true,
  
  // Optimize images and static assets (optional)
  images: {
    formats: ["image/avif", "image/webp"], // Optimize images with modern formats
  },

  // Additional configurations (e.g., environment variables)
  env: {
    SITE_URL: "https://azhar-lone-portfolio.vercel.app", 
  },
};

export default nextConfig;
