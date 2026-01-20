import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Customs & Trade Documentation Services Australia",
  description:
    "Expert customs clearance and trade documentation services for Australian businesses. Customs declarations, tariff classification, origin certification, import/export licences, and compliance advisory.",
  keywords: [
    "customs documentation Australia",
    "customs clearance services",
    "trade documentation",
    "tariff classification",
    "import licence Australia",
    "export documentation",
    "customs compliance NSW",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/customs-documentation/`,
  },
  openGraph: {
    title: "Customs & Trade Documentation | Iron Gate Trading",
    description:
      "Navigate complex customs regulations with expert documentation support. Accurate, compliant, and efficient processing.",
    url: `${BASE_URL}/services/customs-documentation/`,
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Customs & Trade Documentation Support",
  description: "Expert assistance with customs clearance and trade documentation requirements.",
  provider: {
    "@type": "Organization",
    name: "Iron Gate Trading Pty Ltd",
    url: BASE_URL,
  },
  serviceType: "Customs Documentation",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${BASE_URL}/services/customs-documentation/`,
};

export default function CustomsDocumentationLayout({
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
