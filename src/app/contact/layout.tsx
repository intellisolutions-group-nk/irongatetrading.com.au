import { Metadata } from "next";

const BASE_URL = "https://irongatetrading.com.au";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch for Trading Services",
  description:
    "Contact Iron Gate Trading for import, export, and trading services. Reach us at info@irongatetrading.com.au. Based in Mays Hill, NSW, Australia. Get a free consultation today.",
  keywords: [
    "contact Iron Gate Trading",
    "trading services enquiry",
    "import export consultation",
    "info@irongatetrading.com.au",
    "trading company contact",
    "NSW trading services",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact/`,
  },
  openGraph: {
    title: "Contact Iron Gate Trading | Import Export Services Australia",
    description:
      "Get in touch with Iron Gate Trading for all your import, export, and trading needs. Based in NSW, serving businesses across Australia.",
    url: `${BASE_URL}/contact/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Iron Gate Trading",
    description:
      "Reach out to discuss your import, export, and trading requirements. We respond within 1-2 business days.",
  },
};

// JSON-LD for Contact page
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Iron Gate Trading",
  description: "Get in touch with Iron Gate Trading for import, export, and trading services.",
  url: `${BASE_URL}/contact/`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Iron Gate Trading Pty Ltd",
    email: "info@irongatetrading.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 15, 2 Patricia Street",
      addressLocality: "Mays Hill",
      addressRegion: "NSW",
      postalCode: "2145",
      addressCountry: "AU",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of businesses do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with businesses of all sizes, from small enterprises looking to start importing or exporting to large corporations seeking to optimise their international trade operations. Our services are tailored to meet the specific needs of each client.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with your services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply contact us through our form or email us directly. We will arrange an initial consultation to understand your requirements, after which we will provide a tailored proposal for your consideration.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you respond to enquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We aim to respond to all enquiries within 1-2 business days. For urgent matters, please indicate this in your message and we will prioritise your request.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle all aspects of international trade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide end-to-end trading services including sourcing, procurement, customs documentation, logistics coordination, and trade consulting. You can engage us for individual services or comprehensive trade management.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve a wide range of industries including consumer goods, manufacturing, food and beverage, retail, construction, healthcare, and many others. Our trading expertise is adaptable to various sectors.",
      },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
