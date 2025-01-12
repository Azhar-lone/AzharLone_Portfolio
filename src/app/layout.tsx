import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// components
import Nav from "@/components/myUi/Nav";
import Footer from "@/components/myUi/Footer";
// context
import { ThemeProvider } from "@/hooks/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = "https://azhar-lone-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || siteUrl),
  title: {
    default: "Azhar Lone|Portfolio",
    template: "%s | Azhar Lone",
  },
  description: "portfolio website of developer Azhar lone",
  keywords: [
    "Azhar",
    "Azhar Lone",
    "Azhar Lone developer",
    "Nextjs",
    "MERN Stack",
    "Azhar Developer",
    "azhar lone developer",
    "azhar lone portfolio",
  ],
  authors: [
    {
      name: "Azhar Lone",
      url: process.env.SITE_URL || siteUrl,
    },
  ],
  publisher: "Azhar Lone",
  openGraph: {
    images: "/og-image.jpg",
  },
  twitter: {
    title: {
      default: "Azhar Lone|Portfolio",
      template: "%s | Azhar Lone",
    },
    description: "portfolio website of developer Azhar lone",
    card: "summary_large_image",
    creator: "Azhar Lone",
    site: process.env.SITE_URL || siteUrl,
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

            <Nav />
            {children}
            <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}
