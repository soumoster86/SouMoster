import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CookieBanner } from "@/components/shared/CookieBanner";
import { Providers } from "@/components/shared/Providers";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { generateOrganizationSchema, generateSEO } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = generateSEO();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Google Analytics placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} /> */}
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}