import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// components
import Nav from "@/components/myUi/Nav";

// context
import { ThemeProvider } from "@/components/context/theme-provider"

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Azhar Lone|Portfolio",
  description: "portfolio website of developer Azhar lone",
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
        </ThemeProvider>
      </body>
    </html>
  );
}

