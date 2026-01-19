'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceIcon from '@/components/ServiceIcon';
import servicesData from '@/data/services.json';
import companyData from '@/data/company.json';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-primary-dark)] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              What We Offer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Comprehensive trading solutions tailored to meet the diverse needs of businesses 
              engaged in international commerce. From sourcing to delivery, we provide end-to-end support 
              for your trading operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'import-export', title: 'Import & Export Trading Services', icon: 'globe', href: '/services/import-export' },
              { id: 'sourcing-procurement', title: 'Product Sourcing & Procurement', icon: 'search', href: '/services/sourcing-procurement' },
              { id: 'wholesale-distribution', title: 'Wholesale & Distribution', icon: 'warehouse', href: '/services/wholesale-distribution' },
              { id: 'customs-documentation', title: 'Customs & Trade Documentation', icon: 'document', href: '/services/customs-documentation' },
              { id: 'logistics-freight', title: 'Logistics & Freight Coordination', icon: 'truck', href: '/services/logistics-freight' },
              { id: 'trade-consulting', title: 'Trade Consulting & Market Advisory', icon: 'chart', href: '/services/trade-consulting' },
            ].map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <Link
                  href={service.href}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[var(--color-secondary)]/30"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-secondary)]/10 transition-colors">
                    <ServiceIcon icon={service.icon} className="w-6 h-6 text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">Learn more</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {servicesData.services.map((service, index) => (
              <AnimatedSection key={service.id} delay={0.1} className="scroll-mt-24" id={service.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                        <ServiceIcon icon={service.icon} className="w-8 h-8 text-[var(--color-primary)]" />
                      </div>
                      <span className="text-sm font-semibold text-[var(--color-secondary)] tracking-wider uppercase">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                      {service.title}
                    </h2>
                    <div className="space-y-4 text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                      {service.longDescription.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                    
                    {/* Features List */}
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">Key Capabilities</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[var(--color-text-secondary)] text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-[var(--color-text-light)] font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-all group"
                      >
                        Learn More
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-[var(--color-text-light)] transition-all"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative sticky top-24">
                      <div className="aspect-[4/3] bg-[var(--color-primary)] rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="text-center">
                            <ServiceIcon icon={service.icon} className="w-24 h-24 text-[var(--color-secondary)]/40 mx-auto mb-6" />
                            <h3 className="text-xl font-serif font-bold text-[var(--color-text-light)] mb-2">
                              {service.title}
                            </h3>
                            <p className="text-[var(--color-text-muted)] text-sm max-w-xs mx-auto">
                              {service.shortDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-24 h-24 border-4 border-[var(--color-secondary)]/30 rounded-2xl`} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              How We Deliver Results
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Our service delivery is built on a foundation of understanding, expertise, and commitment to your success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Understanding Your Needs',
                description: 'Every engagement begins with a thorough understanding of your business, objectives, and specific requirements. We take the time to learn about your operations, challenges, and goals.',
                icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Tailored Solutions',
                description: 'We develop customised approaches based on your unique situation. There is no one-size-fits-all in international trade, and our solutions reflect the specific needs of each client.',
                icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
              },
              {
                title: 'Ongoing Support',
                description: 'Our relationship does not end when a transaction is complete. We provide ongoing support, keep you informed of market developments, and look for ways to add value to your operations.',
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Need a Customised Solution?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-4">
              Our team can tailor our services to meet your specific trading requirements. 
              Whether you need a single service or a comprehensive trading solution, we are here to help.
            </p>
            <p className="text-[var(--color-text-muted)] mb-10">
              Contact us today to discuss how {companyData.brand.name} can support your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-secondary-light)] transition-all hover:shadow-lg group"
              >
                Contact Our Team
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`mailto:${companyData.contact.email}`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--color-text-light)]/30 text-[var(--color-text-light)] font-semibold rounded-lg hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all"
              >
                {companyData.contact.email}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
