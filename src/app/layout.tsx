import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Iron Gate Trading | Import & Export Trading Services",
    template: "%s | Iron Gate Trading",
  },
  description:
    "Iron Gate Trading provides comprehensive import, export, and trading services across Australia. Expert product sourcing, customs documentation, logistics coordination, and trade consulting.",
  keywords: [
    "import export Australia",
    "trading services",
    "product sourcing",
    "customs documentation",
    "logistics freight",
    "wholesale distribution",
    "trade consulting",
  ],
  authors: [{ name: "Iron Gate Trading Pty Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://irongatetrading.com.au",
    siteName: "Iron Gate Trading",
    title: "Iron Gate Trading | Import & Export Trading Services",
    description:
      "Your trusted partner for import, export, and trading services across Australia and international markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${dmSans.variable} ${libreBaskerville.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
