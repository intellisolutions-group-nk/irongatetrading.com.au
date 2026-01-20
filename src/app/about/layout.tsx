import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "About Us - Australian Import Export Trading Company",
  description:
    "Learn about Iron Gate Trading Pty Ltd, a trusted Australian trading company based in NSW. We specialise in import, export, product sourcing, customs documentation, and logistics coordination.",
  keywords: [
    "about Iron Gate Trading",
    "Australian trading company",
    "import export company NSW",
    "trading services Australia",
    "Iron Gate Trading Pty Ltd",
    "ABN 65 693 214 274",
  ],
  alternates: {
    canonical: `${BASE_URL}/about/`,
  },
  openGraph: {
    title: "About Iron Gate Trading | Australian Import Export Company",
    description:
      "Iron Gate Trading Pty Ltd is your trusted partner for international trade. Based in NSW, we provide comprehensive import, export, and trading services across Australia.",
    url: `${BASE_URL}/about/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Iron Gate Trading",
    description:
      "Learn about Iron Gate Trading Pty Ltd, a trusted Australian trading company specialising in import, export, and trading services.",
  },
};

// JSON-LD for About page
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Iron Gate Trading",
  description: "Learn about Iron Gate Trading Pty Ltd, an Australian trading company specialising in import, export, and trading services.",
  url: `${BASE_URL}/about/`,
  mainEntity: {
    "@type": "Organization",
    name: "Iron Gate Trading Pty Ltd",
    alternateName: "Iron Gate Trading",
    description: "Comprehensive import, export, and trading services across Australia.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      {children}
    </>
  );
}
