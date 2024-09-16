/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce strict mode for better error catching and debugging
  reactStrictMode: true,

  // Use SWC compiler's minification for better performance
  swcMinify: true,

  // Custom headers for SEO and security optimizations
  async headers() {
    return [
      {
        source: "/(.*)", // Applies to all routes
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow", // Helps Google and other search engines crawl
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'none'; connect-src 'self'; img-src 'self'; style-src 'self';", // Basic security policy
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Security to prevent MIME type sniffing
          },
        ],
      },
    ];
  },

  // Base path configuration (use this if deploying to a subdirectory, otherwise leave it blank)
  basePath: "",

  // Optimize images and static assets (optional)
  images: {
    formats: ["image/avif", "image/webp"], // Optimize images with modern formats
  },

  // Additional configurations (e.g., environment variables)
  env: {
    SITE_URL: "https://azhar-lone-portfolio.vercel.app", // Your site's URL for dynamic use (e.g., in sitemap)
  },
};

export default nextConfig;
