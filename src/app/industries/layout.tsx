import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Industries We Serve - Sector-Specific Trading Solutions",
  description:
    "Iron Gate Trading provides tailored trading solutions for consumer goods, manufacturing, food & beverage, retail, construction, healthcare, and more. Industry-specific expertise for Australian businesses.",
  keywords: [
    "industry trading solutions",
    "consumer goods import export",
    "manufacturing trading services",
    "food beverage import Australia",
    "retail trading solutions",
    "construction materials import",
    "healthcare products trading",
  ],
  alternates: {
    canonical: `${BASE_URL}/industries/`,
  },
  openGraph: {
    title: "Industries We Serve | Iron Gate Trading Australia",
    description:
      "Sector-specific trading expertise for consumer goods, manufacturing, food & beverage, retail, construction, healthcare, and more.",
    url: `${BASE_URL}/industries/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve - Iron Gate Trading",
    description:
      "Tailored trading solutions for diverse industries. Our expertise spans consumer goods, manufacturing, F&B, retail, construction, and healthcare.",
  },
};

// JSON-LD for Industries page
const industriesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industries Served by Iron Gate Trading",
  description: "Sector-specific trading solutions for Australian businesses",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Consumer Goods",
      description: "Trading services for consumer goods industry including sourcing, distribution, and logistics.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Manufacturing & Industrial",
      description: "Import and export solutions for manufacturing and industrial sectors.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Food & Beverage",
      description: "Specialised trading services for food and beverage industry with compliance expertise.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Retail & E-Commerce",
      description: "Trading and distribution solutions for retail and e-commerce businesses.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Construction & Building",
      description: "Import and sourcing services for construction and building materials.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Healthcare & Medical",
      description: "Trading services for healthcare and medical products with regulatory compliance.",
    },
  ],
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(industriesSchema),
        }}
      />
      {children}
    </>
  );
}
