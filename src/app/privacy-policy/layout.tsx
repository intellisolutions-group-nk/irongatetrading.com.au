import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Iron Gate Trading Pty Ltd. Learn how we collect, use, and protect your personal information when using our website and trading services.",
  keywords: [
    "privacy policy",
    "Iron Gate Trading privacy",
    "data protection",
    "personal information",
  ],
  alternates: {
    canonical: `${BASE_URL}/privacy-policy/`,
  },
  openGraph: {
    title: "Privacy Policy | Iron Gate Trading",
    description:
      "Our commitment to protecting your privacy. Read how Iron Gate Trading handles your personal information.",
    url: `${BASE_URL}/privacy-policy/`,
    type: "website",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
