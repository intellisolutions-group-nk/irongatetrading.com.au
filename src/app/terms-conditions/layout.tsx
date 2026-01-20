import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Iron Gate Trading Pty Ltd. Read about the terms governing the use of our website and trading services.",
  keywords: [
    "terms and conditions",
    "Iron Gate Trading terms",
    "terms of service",
    "website terms",
  ],
  alternates: {
    canonical: `${BASE_URL}/terms-conditions/`,
  },
  openGraph: {
    title: "Terms & Conditions | Iron Gate Trading",
    description:
      "Terms and conditions governing the use of Iron Gate Trading services and website.",
    url: `${BASE_URL}/terms-conditions/`,
    type: "website",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
