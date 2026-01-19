'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import companyData from '@/data/company.json';

export default function TermsConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="terms-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#terms-grid)" />
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
              Terms & <span className="text-gradient-gold">Conditions</span>
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
                  These Terms and Conditions govern your use of the {companyData.brand.name} website and 
                  the services provided by {companyData.brand.legalName}. By accessing our website or 
                  using our services, you agree to be bound by these terms.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  By accessing and using this website, you accept and agree to be bound by these Terms and 
                  Conditions. If you do not agree to these terms, please do not use our website or services.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Services
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  {companyData.brand.legalName} provides import, export, and trading services as described 
                  on our website. The specific terms and conditions of individual services will be agreed 
                  upon in separate service agreements between us and our clients.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Use of Website
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  You agree to use this website only for lawful purposes and in a way that does not:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-6">
                  <li>Infringe the rights of any third party</li>
                  <li>Restrict or inhibit the use of this website by others</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Transmit harmful, threatening, or objectionable content</li>
                  <li>Attempt to gain unauthorised access to our systems</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  All content on this website, including text, graphics, logos, images, and software, is the 
                  property of {companyData.brand.legalName} or its licensors and is protected by copyright, 
                  trademark, and other intellectual property laws. You may not reproduce, distribute, modify, 
                  or create derivative works from any content without our prior written consent.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Disclaimer
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  The information provided on this website is for general informational purposes only. While 
                  we strive to keep the information accurate and up-to-date, we make no representations or 
                  warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                  suitability, or availability of the website or the information, products, services, or 
                  related graphics contained on the website.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  To the fullest extent permitted by law, {companyData.brand.legalName} shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, or any loss of 
                  profits or revenues, whether incurred directly or indirectly, or any loss of data, use, 
                  goodwill, or other intangible losses resulting from your use of our website or services.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Indemnification
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  You agree to indemnify, defend, and hold harmless {companyData.brand.legalName}, its 
                  directors, officers, employees, and agents from and against any claims, liabilities, 
                  damages, losses, and expenses arising out of or in any way connected with your use of 
                  our website or services, or your violation of these Terms and Conditions.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Third-Party Links
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Our website may contain links to external websites that are not operated by us. We have 
                  no control over the content and practices of these sites and cannot accept responsibility 
                  for their content or privacy policies.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Governing Law
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  These Terms and Conditions are governed by and construed in accordance with the laws of 
                  New South Wales, Australia. Any disputes arising from or relating to these terms shall be 
                  subject to the exclusive jurisdiction of the courts of New South Wales.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Changes to Terms
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be 
                  effective immediately upon posting on this website. Your continued use of the website 
                  following any changes constitutes your acceptance of the revised terms.
                </p>

                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                  Contact Information
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-2">
                  For any questions regarding these Terms and Conditions, please contact us:
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

                <div className="mt-10 pt-6 border-t border-gray-200">
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {companyData.brand.legalName}<br />
                    ACN: {companyData.brand.acn} | ABN: {companyData.brand.abn}<br />
                    {companyData.brand.country}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
