'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import companyData from '@/data/company.json';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
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
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              About <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Your trusted partner in international trade, based in New South Wales, Australia. 
              We are committed to helping businesses succeed in the global marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-square bg-[var(--color-primary)] rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <rect x="10" y="25" width="10" height="65" fill="var(--color-secondary)" rx="2" />
                        <rect x="80" y="25" width="10" height="65" fill="var(--color-secondary)" rx="2" />
                        <rect x="10" y="15" width="80" height="15" fill="var(--color-secondary)" rx="2" />
                        <rect x="30" y="40" width="7" height="40" fill="var(--color-secondary-light)" rx="1" />
                        <rect x="46.5" y="40" width="7" height="40" fill="var(--color-secondary-light)" rx="1" />
                        <rect x="63" y="40" width="7" height="40" fill="var(--color-secondary-light)" rx="1" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[var(--color-secondary)]/30 rounded-3xl" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--color-secondary)]/10 rounded-full" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                {companyData.brand.name}
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                {companyData.brand.legalName} is an Australian trading company specialising in import, 
                export, and comprehensive trading services. Registered in {companyData.brand.state}, 
                we serve businesses across Australia and facilitate international trade connections.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Our expertise spans product sourcing, customs documentation, logistics coordination, 
                and strategic trade consulting. We work closely with our clients to understand their 
                unique requirements and deliver tailored solutions that drive success in the global marketplace.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                At {companyData.brand.name}, we believe in building long-term partnerships with our clients. 
                We take the time to understand your business, your challenges, and your goals. This allows 
                us to provide not just transactional support, but strategic guidance that helps you grow.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl border border-gray-100">
                  <p className="text-sm text-[var(--color-text-secondary)] mb-1">ACN</p>
                  <p className="font-semibold text-[var(--color-text-primary)]">{companyData.brand.acn}</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100">
                  <p className="text-sm text-[var(--color-text-secondary)] mb-1">ABN</p>
                  <p className="font-semibold text-[var(--color-text-primary)]">{companyData.brand.abn}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              What Drives Us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                  Our Mission
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  To empower Australian businesses to succeed in international trade by providing 
                  comprehensive, reliable, and expertly managed trading services. We aim to simplify 
                  the complexities of global commerce, enabling our clients to focus on what they do best 
                  while we handle the intricacies of import, export, and trade logistics.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                  Our Vision
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  To be the most trusted trading partner for businesses seeking to expand their global 
                  reach. We envision a future where Australian businesses of all sizes can access 
                  international markets with confidence, supported by expert guidance and seamless 
                  trading services that deliver consistent results.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We are guided by principles that ensure we deliver value to every client relationship.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We conduct all business with honesty, transparency, and ethical practices. Our word is our bond, and we stand behind every commitment we make to our clients.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Reliability',
                description: 'Dependable service delivery that our clients can count on, every time. We understand that your business depends on timely and accurate execution of trading activities.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Expertise',
                description: 'Deep knowledge of international trade practices and regulatory requirements. We continuously develop our capabilities to serve our clients better in a changing global environment.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: 'Partnership',
                description: 'We view every client relationship as a partnership for mutual success. Your goals become our goals, and we measure our success by the results we deliver for you.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center mx-auto mb-6 text-[var(--color-secondary)]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                What We Do
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                As a full-service trading company, we provide comprehensive support for businesses 
                engaged in international commerce. Our services cover the entire trading lifecycle, 
                from market research and sourcing to logistics and delivery.
              </p>
              <div className="space-y-4">
                {[
                  'Import & Export Trading Services',
                  'Product Sourcing & Procurement',
                  'Wholesale & Distribution',
                  'Customs & Trade Documentation Support',
                  'Logistics & Freight Coordination',
                  'Trade Consulting & Market Advisory',
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[var(--color-text-primary)] font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-secondary)] transition-colors group"
                >
                  Learn More About Our Services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Industry Focus', value: 'Multi-Sector' },
                  { label: 'Service Scope', value: 'End-to-End' },
                  { label: 'Geographic Reach', value: 'Global' },
                  { label: 'Approach', value: 'Partnership' },
                ].map((stat, index) => (
                  <div key={index} className="bg-[var(--color-primary)] rounded-2xl p-6 text-center">
                    <p className="text-2xl font-serif font-bold text-[var(--color-secondary)] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-[var(--color-text-muted)] text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Where We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Our Location
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                Based in New South Wales, Australia, we are strategically positioned to serve 
                businesses across the country and facilitate international trade connections. 
                Our location provides access to major ports, transport networks, and business hubs.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Registered Address</h4>
                      <p className="text-[var(--color-text-secondary)]">{companyData.addresses.registered.full}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Postal Address</h4>
                      <p className="text-[var(--color-text-secondary)]">{companyData.addresses.postal.full}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Email</h4>
                      <a
                        href={`mailto:${companyData.contact.email}`}
                        className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                      >
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full min-h-[500px] bg-[var(--color-primary)] rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 text-[var(--color-secondary)]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[var(--color-text-light)] mb-2">
                      New South Wales
                    </h3>
                    <p className="text-[var(--color-text-muted)] mb-6">
                      {companyData.brand.country}
                    </p>
                    <div className="pt-6 border-t border-[var(--color-primary-light)]">
                      <p className="text-sm text-[var(--color-text-muted)] mb-2">
                        {companyData.brand.legalName}
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        ACN: {companyData.brand.acn}
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        ABN: {companyData.brand.abn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-4">
              Contact us today to discuss how we can support your trading requirements.
            </p>
            <p className="text-[var(--color-text-muted)] mb-10">
              Whether you are new to international trade or looking to optimise existing operations, 
              our team is ready to help.
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
