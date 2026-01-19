'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import companyData from '@/data/company.json';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="privacy-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#privacy-grid)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-primary-dark)] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Privacy <span className="text-gradient-gold">Policy</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[var(--color-bg-cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--color-text-secondary)] mb-8">
                  This Privacy Policy describes how {companyData.brand.legalName} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) 
                  collects, uses, and protects the personal information you provide when using our website 
                  and services.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Information We Collect
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-6">
                  <li>Contact information (name, email address, phone number, postal address)</li>
                  <li>Business information (company name, industry, trading requirements)</li>
                  <li>Communication records (enquiries, correspondence)</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-6">
                  <li>Respond to your enquiries and provide our services</li>
                  <li>Communicate with you about our products and services</li>
                  <li>Improve our website and service offerings</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraudulent or unauthorised activity</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Information Sharing
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as necessary to provide our services or as required by law. 
                  We may share information with service providers who assist us in operating our business, 
                  subject to confidentiality agreements.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Data Security
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  We implement appropriate technical and organisational measures to protect your personal 
                  information against unauthorised access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet or electronic storage is completely secure, 
                  and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Your Rights
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-6">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Cookies
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Our website may use cookies and similar technologies to enhance your browsing experience. 
                  You can control cookie settings through your browser preferences. Disabling cookies may 
                  affect the functionality of certain features on our website.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this 
                  page with an updated revision date. We encourage you to review this policy periodically 
                  to stay informed about how we protect your information.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Contact Us
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-2">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  <strong>Email:</strong>{' '}
                  <a 
                    href={`mailto:${companyData.contact.email}`}
                    className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {companyData.contact.email}
                  </a>
                </p>
                <p className="text-[var(--color-text-secondary)] mt-2">
                  <strong>Address:</strong> {companyData.addresses.registered.full}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
