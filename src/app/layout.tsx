import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://openbay.com"),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords:
    "garage cleanout, Bergen County, NJ, junk removal, garage cleaning, Hackensack, Paramus, Ridgewood, Teaneck, Fair Lawn",
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: "https://openbay.com",
    siteName: siteConfig.businessName,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.businessName,
  description: siteConfig.seo.description,
  url: "https://openbay.com",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: `$${siteConfig.pricing.standard}+`,
  areaServed: {
    "@type": "State",
    name: "New Jersey",
    containsPlace: siteConfig.towns.map((town) => ({
      "@type": "City",
      name: town,
    })),
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "NJ",
    addressLocality: "Bergen County",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Garage Cleanout Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: siteConfig.pricing.standardLabel,
          description:
            "Full single-car or lightly full garage cleanout including hauling and disposal",
        },
        price: String(siteConfig.pricing.standard),
        priceCurrency: "USD",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
