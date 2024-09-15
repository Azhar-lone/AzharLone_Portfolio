import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// components
import Nav from "@/components/myUi/Nav";
import Footer from "@/components/myUi/Footer";

// context
import { ThemeProvider } from "@/components/context/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://azhar-lone-portfolio.vercel.app/'),
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
    { name: "Azhar Lone", url: "https://azhar-lone-portfolio.vercel.app/" },
  ],
  publisher: "vercel",
  openGraph: {
    images: "/og-image.png",
  },
  twitter: {
    title: {
      default: "Azhar Lone|Portfolio",
      template: "%s | Azhar Lone",
    },
    description: "portfolio website of developer Azhar lone",
    card: "summary_large_image",
    creator: "Azhar Lone",
    site: "https://azhar-lone-portfolio.vercel.app/",
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
