import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Logistics & Freight Coordination Services Australia",
  description:
    "Reliable logistics and freight coordination services for Australian businesses. Sea, air, and land freight, shipment tracking, insurance coordination, and specialised cargo handling.",
  keywords: [
    "logistics services Australia",
    "freight coordination",
    "sea freight Australia",
    "air freight services",
    "cargo shipping",
    "freight forwarding",
    "logistics NSW",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/logistics-freight/`,
  },
  openGraph: {
    title: "Logistics & Freight Coordination | Iron Gate Trading",
    description:
      "Efficient goods movement from point A to point B. Multi-modal freight solutions with full tracking and support.",
    url: `${BASE_URL}/services/logistics-freight/`,
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logistics & Freight Coordination",
  description: "Coordinated logistics and freight solutions for reliable and timely delivery.",
  provider: {
    "@type": "Organization",
    name: "Iron Gate Trading Pty Ltd",
    url: BASE_URL,
  },
  serviceType: "Logistics Freight",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${BASE_URL}/services/logistics-freight/`,
};

export default function LogisticsFreightLayout({
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
