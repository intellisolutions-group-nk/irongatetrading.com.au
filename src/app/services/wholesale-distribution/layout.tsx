import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Wholesale & Distribution Services Australia",
  description:
    "Efficient wholesale and distribution services for Australian businesses. Warehousing, inventory management, order fulfilment, and distribution network optimisation across Australia.",
  keywords: [
    "wholesale distribution Australia",
    "distribution services",
    "warehousing Australia",
    "inventory management",
    "order fulfilment",
    "wholesale trading",
    "distribution network NSW",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/wholesale-distribution/`,
  },
  openGraph: {
    title: "Wholesale & Distribution Services | Iron Gate Trading",
    description:
      "Streamline your product distribution with efficient wholesale and distribution networks across Australia.",
    url: `${BASE_URL}/services/wholesale-distribution/`,
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wholesale & Distribution",
  description: "Efficient wholesale and distribution networks to move your products to market effectively.",
  provider: {
    "@type": "Organization",
    name: "Iron Gate Trading Pty Ltd",
    url: BASE_URL,
  },
  serviceType: "Wholesale Distribution",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${BASE_URL}/services/wholesale-distribution/`,
};

export default function WholesaleDistributionLayout({
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
