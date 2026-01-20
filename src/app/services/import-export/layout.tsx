import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Import & Export Trading Services Australia",
  description:
    "Comprehensive import and export trading services for Australian businesses. Expert support for international trade, customs clearance, supplier sourcing, and logistics coordination. Based in NSW.",
  keywords: [
    "import export services Australia",
    "international trade Australia",
    "import services Sydney",
    "export services NSW",
    "customs clearance",
    "international supplier sourcing",
    "trade logistics Australia",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/import-export/`,
  },
  openGraph: {
    title: "Import & Export Trading Services | Iron Gate Trading",
    description:
      "End-to-end import and export solutions for businesses trading internationally. Expert guidance for customs, compliance, and logistics.",
    url: `${BASE_URL}/services/import-export/`,
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Import & Export Trading Services",
  description: "Comprehensive import and export solutions for businesses trading internationally across diverse markets.",
  provider: {
    "@type": "Organization",
    name: "Iron Gate Trading Pty Ltd",
    url: BASE_URL,
  },
  serviceType: "Import Export Trading",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${BASE_URL}/services/import-export/`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${BASE_URL}/services/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Import & Export",
      item: `${BASE_URL}/services/import-export/`,
    },
  ],
};

export default function ImportExportLayout({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}
