'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import industriesData from '@/data/industries.json';
import companyData from '@/data/company.json';

const industryIcons: Record<string, React.ReactNode> = {
  'consumer-goods': (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  'manufacturing': (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  'food-beverage': (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  'retail': (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'construction': (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
    </svg>
  ),
  'healthcare': (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

// Larger icons for detail sections
const industryIconsLarge: Record<string, React.ReactNode> = {
  'consumer-goods': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  'manufacturing': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  'food-beverage': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  'retail': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'construction': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
    </svg>
  ),
  'healthcare': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="industries-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#industries-grid)" />
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
              Sectors We Support
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Industries <span className="text-gradient-gold">We Serve</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Our trading expertise spans across diverse sectors, providing tailored solutions 
              for businesses in various industries. We understand that each industry has unique 
              requirements, and we adapt our services accordingly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Quick Nav */}
      <section className="py-12 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {industriesData.industries.map((industry, index) => (
              <AnimatedSection key={industry.id} delay={index * 0.05}>
                <a
                  href={`#${industry.id}`}
                  className="group h-full flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[var(--color-secondary)]/30 text-center min-h-[140px]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-3 text-[var(--color-primary)] group-hover:bg-[var(--color-secondary)]/10 group-hover:text-[var(--color-secondary)] transition-colors">
                    {industryIcons[industry.id]}
                  </div>
                  <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                    {industry.title}
                  </p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industriesData.industries.map((industry, index) => (
              <AnimatedSection key={industry.id} delay={0.1} className="scroll-mt-24" id={industry.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                        {industryIconsLarge[industry.id]}
                      </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {industry.longDescription}
                    </p>
                    
                    {/* Services for this industry */}
                    <div className="bg-white rounded-xl p-6 border border-gray-100 mb-6">
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">How We Support This Sector</h4>
                      <ul className="space-y-3">
                        {industry.services.map((service, sIndex) => (
                          <li key={sIndex} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[var(--color-text-secondary)]">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-secondary)] transition-colors group"
                    >
                      Discuss Your Requirements
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className="aspect-[4/3] bg-[var(--color-primary)] rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 text-[var(--color-secondary)]/50">
                              {industryIconsLarge[industry.id]}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-[var(--color-text-light)] mb-2">
                              {industry.title}
                            </h3>
                            <p className="text-[var(--color-text-muted)] text-sm max-w-xs mx-auto">
                              {industry.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-20 h-20 border-4 border-[var(--color-secondary)]/30 rounded-2xl`} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We understand that each industry has unique requirements. Our team brings sector-specific 
              knowledge to deliver optimal trading solutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regulatory Compliance',
                description: 'Navigate industry-specific regulations and documentation requirements with expert guidance. We stay current with the latest regulatory changes affecting each sector we serve.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Supply Chain Solutions',
                description: 'Optimised logistics and distribution networks tailored to your industry\'s supply chain needs. From just-in-time manufacturing to seasonal retail, we adapt to your requirements.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Market Intelligence',
                description: 'Access to sector-specific market insights and strategic advisory for informed trading decisions. We help you understand trends, opportunities, and challenges in your industry.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center mx-auto mb-6 text-[var(--color-secondary)]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-center">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sectors */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Not Limited to These Sectors
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              While we have deep experience in the industries listed above, our trading capabilities 
              extend to many other sectors. If your industry is not listed, please get in touch to 
              discuss how we can support your specific requirements.
            </p>
          </AnimatedSection>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                  Our Capabilities Apply Across
                </h3>
                <ul className="space-y-3">
                  {[
                    'Technology and Electronics',
                    'Textiles and Apparel',
                    'Automotive and Parts',
                    'Agriculture and Farming',
                    'Mining and Resources',
                    'Energy and Utilities',
                  ].map((sector, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-text-secondary)]">{sector}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                  What We Bring to Every Sector
                </h3>
                <ul className="space-y-3">
                  {[
                    'Global sourcing capabilities',
                    'Customs and compliance expertise',
                    'Logistics and freight coordination',
                    'Quality assurance processes',
                    'Market research and advisory',
                    'Long-term partnership approach',
                  ].map((capability, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-text-secondary)]">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Partner with Us for Your Industry
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-4">
              Contact us to discuss how our trading services can support your specific industry requirements.
            </p>
            <p className="text-[var(--color-text-muted)] mb-10">
              Our team is ready to understand your business and develop solutions that deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-secondary-light)] transition-all hover:shadow-lg group"
              >
                Get in Touch
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
