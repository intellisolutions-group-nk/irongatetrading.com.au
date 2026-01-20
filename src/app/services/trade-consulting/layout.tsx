import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Trade Consulting & Market Advisory Services Australia",
  description:
    "Strategic trade consulting and market advisory services for Australian businesses. Market research, competitive analysis, trade strategy development, and regulatory guidance.",
  keywords: [
    "trade consulting Australia",
    "market advisory services",
    "trade strategy",
    "market research Australia",
    "international trade consulting",
    "business development Australia",
    "trade advisory NSW",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/trade-consulting/`,
  },
  openGraph: {
    title: "Trade Consulting & Market Advisory | Iron Gate Trading",
    description:
      "Strategic insights and guidance for informed trading decisions. Market analysis, strategy development, and regulatory expertise.",
    url: `${BASE_URL}/services/trade-consulting/`,
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trade Consulting & Market Advisory",
  description: "Strategic consulting and market insights to guide your trading decisions.",
  provider: {
    "@type": "Organization",
    name: "Iron Gate Trading Pty Ltd",
    url: BASE_URL,
  },
  serviceType: "Trade Consulting",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${BASE_URL}/services/trade-consulting/`,
};

export default function TradeConsultingLayout({
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
