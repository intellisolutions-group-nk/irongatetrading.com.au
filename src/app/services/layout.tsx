import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Our Services - Import Export & Trading Solutions",
  description:
    "Comprehensive trading services including import/export, product sourcing, wholesale distribution, customs documentation, logistics & freight, and trade consulting. Tailored solutions for Australian businesses.",
  keywords: [
    "import export services",
    "product sourcing Australia",
    "wholesale distribution",
    "customs documentation services",
    "logistics freight coordination",
    "trade consulting",
    "trading services Australia",
    "supply chain solutions",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/`,
  },
  openGraph: {
    title: "Trading Services | Iron Gate Trading Australia",
    description:
      "Explore our comprehensive trading services: import/export, product sourcing, wholesale, customs documentation, logistics, and trade consulting.",
    url: `${BASE_URL}/services/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Services - Iron Gate Trading",
    description:
      "End-to-end trading solutions for Australian businesses. From sourcing to delivery, we handle every aspect of your trading requirements.",
  },
};

// JSON-LD for Services page with Service schema
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Iron Gate Trading Services",
  description: "Comprehensive trading services for Australian businesses",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Import & Export Trading Services",
      description: "Comprehensive import and export solutions for businesses trading internationally across diverse markets.",
      provider: {
        "@type": "Organization",
        name: "Iron Gate Trading Pty Ltd",
      },
      url: `${BASE_URL}/services/import-export/`,
    },
    {
      "@type": "Service",
      position: 2,
      name: "Product Sourcing & Procurement",
      description: "Strategic sourcing and procurement services to find the right products at competitive prices.",
      provider: {
        "@type": "Organization",
        name: "Iron Gate Trading Pty Ltd",
      },
      url: `${BASE_URL}/services/sourcing-procurement/`,
    },
    {
      "@type": "Service",
      position: 3,
      name: "Wholesale & Distribution",
      description: "Efficient wholesale and distribution networks to move your products to market effectively.",
      provider: {
        "@type": "Organization",
        name: "Iron Gate Trading Pty Ltd",
      },
      url: `${BASE_URL}/services/wholesale-distribution/`,
    },
    {
      "@type": "Service",
      position: 4,
      name: "Customs & Trade Documentation Support",
      description: "Expert assistance with customs clearance and trade documentation requirements.",
      provider: {
        "@type": "Organization",
        name: "Iron Gate Trading Pty Ltd",
      },
      url: `${BASE_URL}/services/customs-documentation/`,
    },
    {
      "@type": "Service",
      position: 5,
      name: "Logistics & Freight Coordination",
      description: "Coordinated logistics and freight solutions for reliable and timely delivery.",
      provider: {
        "@type": "Organization",
        name: "Iron Gate Trading Pty Ltd",
      },
      url: `${BASE_URL}/services/logistics-freight/`,
    },
    {
      "@type": "Service",
      position: 6,
      name: "Trade Consulting & Market Advisory",
      description: "Strategic consulting and market insights to guide your trading decisions.",
      provider: {
        "@type": "Organization",
        name: "Iron Gate Trading Pty Ltd",
      },
      url: `${BASE_URL}/services/trade-consulting/`,
    },
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      {children}
    </>
  );
}
