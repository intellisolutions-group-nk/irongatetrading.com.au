import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Product Sourcing & Procurement Services Australia",
  description:
    "Strategic product sourcing and procurement services for Australian businesses. Global supplier identification, quality assurance, price negotiation, and supplier relationship management.",
  keywords: [
    "product sourcing Australia",
    "procurement services",
    "supplier sourcing",
    "global procurement",
    "supplier vetting",
    "factory audits Australia",
    "product procurement NSW",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/sourcing-procurement/`,
  },
  openGraph: {
    title: "Product Sourcing & Procurement | Iron Gate Trading",
    description:
      "Find the right products at competitive prices. Global supplier identification, quality assurance, and procurement management.",
    url: `${BASE_URL}/services/sourcing-procurement/`,
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Product Sourcing & Procurement",
  description: "Strategic sourcing and procurement services to find the right products at competitive prices.",
  provider: {
    "@type": "Organization",
    name: "Iron Gate Trading Pty Ltd",
    url: BASE_URL,
  },
  serviceType: "Product Sourcing",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${BASE_URL}/services/sourcing-procurement/`,
};

export default function SourcingProcurementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      {children}
    </>
  );
}
