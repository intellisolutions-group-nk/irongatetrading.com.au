import type { Metadata, Viewport } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const BASE_URL = "https://irongatetrading.com.au";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2634",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Iron Gate Trading | Import & Export Trading Services Australia",
    template: "%s | Iron Gate Trading",
  },
  description:
    "Iron Gate Trading provides comprehensive import, export, and trading services across Australia. Expert product sourcing, customs documentation, logistics coordination, and trade consulting based in NSW.",
  keywords: [
    "import export Australia",
    "trading services Australia",
    "product sourcing Sydney",
    "customs documentation NSW",
    "logistics freight Australia",
    "wholesale distribution",
    "trade consulting",
    "international trade Australia",
    "import export company",
    "Australian trading company",
    "global trade solutions",
    "supply chain Australia",
  ],
  authors: [{ name: "Iron Gate Trading Pty Ltd" }],
  creator: "Iron Gate Trading Pty Ltd",
  publisher: "Iron Gate Trading Pty Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: BASE_URL,
    siteName: "Iron Gate Trading",
    title: "Iron Gate Trading | Import & Export Trading Services Australia",
    description:
      "Your trusted partner for import, export, and trading services across Australia and international markets. Based in NSW, serving businesses globally.",
    images: [
      {
        url: `${BASE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Iron Gate Trading - Import & Export Trading Services",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Gate Trading | Import & Export Trading Services",
    description:
      "Comprehensive import, export, and trading services across Australia. Expert product sourcing, customs documentation, and logistics coordination.",
    images: [`${BASE_URL}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "business",
};

// JSON-LD Structured Data for Organization and LocalBusiness
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Iron Gate Trading Pty Ltd",
  alternateName: "Iron Gate Trading",
  url: "https://irongatetrading.com.au",
  logo: "https://irongatetrading.com.au/favicon.svg",
  description:
    "Comprehensive import, export, and trading services across Australia. Expert product sourcing, customs documentation, logistics coordination, and trade consulting.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 15, 2 Patricia Street",
    addressLocality: "Mays Hill",
    addressRegion: "NSW",
    postalCode: "2145",
    addressCountry: "AU",
  },
  email: "info@irongatetrading.com.au",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://irongatetrading.com.au/#localbusiness",
  name: "Iron Gate Trading Pty Ltd",
  image: "https://irongatetrading.com.au/favicon.svg",
  url: "https://irongatetrading.com.au",
  email: "info@irongatetrading.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 15, 2 Patricia Street",
    addressLocality: "Mays Hill",
    addressRegion: "NSW",
    postalCode: "2145",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.8167,
    longitude: 150.9667,
  },
  priceRange: "$$",
  areaServed: ["Australia", "International"],
  serviceArea: {
    "@type": "Country",
    name: "Australia",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Iron Gate Trading",
  url: "https://irongatetrading.com.au",
  description:
    "Iron Gate Trading provides comprehensive import, export, and trading services across Australia.",
  publisher: {
    "@type": "Organization",
    name: "Iron Gate Trading Pty Ltd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${dmSans.variable} ${libreBaskerville.variable}`}>
      <head>
        <link rel="canonical" href="https://irongatetrading.com.au" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Mays Hill" />
        <meta name="geo.position" content="-33.8167;150.9667" />
        <meta name="ICBM" content="-33.8167, 150.9667" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
