'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceIcon from '@/components/ServiceIcon';
import companyData from '@/data/company.json';

export default function SourcingProcurementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="service-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service-grid)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-primary-dark)] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[var(--color-text-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--color-secondary)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--color-secondary)] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[var(--color-secondary)]">Sourcing & Procurement</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary)]/20 flex items-center justify-center">
                <ServiceIcon icon="search" className="w-8 h-8 text-[var(--color-secondary)]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Product Sourcing & <span className="text-gradient-gold">Procurement</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl">
              Strategic sourcing and procurement services to find the right products from reliable suppliers at competitive prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Service Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Find the Right Products from the Right Suppliers
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Finding reliable suppliers who can deliver quality products at competitive prices 
                  is one of the most critical challenges in international trade. Poor sourcing 
                  decisions can lead to quality issues, supply disruptions, and financial losses.
                </p>
                <p>
                  Our product sourcing and procurement services take the complexity out of this process. 
                  We leverage our extensive network of contacts and deep market knowledge to identify 
                  suppliers that meet your specific requirements for quality, price, and reliability.
                </p>
                <p>
                  From initial supplier identification through to ongoing relationship management, 
                  we provide comprehensive support to ensure your procurement operations run smoothly 
                  and deliver the results you need.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                  Key Capabilities
                </h3>
                <ul className="space-y-4">
                  {[
                    'Global supplier identification and vetting',
                    'Quality assurance and factory audits',
                    'Price negotiation and contract management',
                    'Sample coordination and product testing',
                    'Supplier relationship management',
                    'Alternative supplier development',
                    'Supplier performance monitoring',
                    'Cost reduction initiatives',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A systematic approach to finding and securing the best suppliers for your business.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Requirements Analysis',
                description: 'We work with you to define detailed product specifications, quality standards, volume requirements, and budget parameters.',
              },
              {
                step: '02',
                title: 'Supplier Identification',
                description: 'Using our extensive networks and market intelligence, we identify potential suppliers that match your criteria.',
              },
              {
                step: '03',
                title: 'Supplier Vetting',
                description: 'We conduct thorough due diligence including capability assessment, financial checks, and reference verification.',
              },
              {
                step: '04',
                title: 'Quality Audits',
                description: 'Factory visits and quality audits ensure suppliers can consistently meet your quality requirements.',
              },
              {
                step: '05',
                title: 'Negotiation',
                description: 'We negotiate pricing, payment terms, and contract conditions to secure the best possible deal.',
              },
              {
                step: '06',
                title: 'Ongoing Management',
                description: 'Continuous monitoring of supplier performance with regular reviews and improvement initiatives.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="text-4xl font-serif font-bold text-[var(--color-secondary)]/30 mb-4">
                    {item.step}
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

      {/* What We Source */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              What We Can Source
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Our sourcing capabilities span a wide range of product categories and industries.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="h-full bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                  Product Categories
                </h3>
                <ul className="space-y-3">
                  {[
                    'Consumer goods and electronics',
                    'Raw materials and commodities',
                    'Manufacturing components and parts',
                    'Industrial equipment and machinery',
                    'Food and beverage products',
                    'Textiles and apparel',
                    'Healthcare and medical supplies',
                    'Building materials and construction supplies',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="h-full bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                  Sourcing Regions
                </h3>
                <ul className="space-y-3">
                  {[
                    'Asia-Pacific manufacturing hubs',
                    'European specialty suppliers',
                    'North American producers',
                    'Emerging market opportunities',
                    'Australian domestic suppliers',
                    'Global commodity markets',
                    'Specialty and niche suppliers',
                    'Alternative source development',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Benefits of Our Sourcing Services
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Access to Quality Suppliers',
                    description: 'Tap into our network of vetted suppliers who have been assessed for quality, reliability, and financial stability.',
                  },
                  {
                    title: 'Cost Savings',
                    description: 'Benefit from our negotiating expertise and market knowledge to secure competitive pricing and favourable terms.',
                  },
                  {
                    title: 'Risk Reduction',
                    description: 'Thorough supplier vetting and ongoing monitoring reduces the risk of supply chain disruptions and quality issues.',
                  },
                  {
                    title: 'Time Efficiency',
                    description: 'Save time with our streamlined sourcing process that quickly identifies suitable suppliers for your needs.',
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-secondary)]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">{benefit.title}</h4>
                      <p className="text-[var(--color-text-secondary)]">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[var(--color-primary)] rounded-3xl p-8 text-center">
                <ServiceIcon icon="search" className="w-20 h-20 text-[var(--color-secondary)]/40 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold text-[var(--color-text-light)] mb-4">
                  Need to Source Products?
                </h3>
                <p className="text-[var(--color-text-muted)] mb-6">
                  Let us find the right suppliers for your business needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-secondary-light)] transition-all"
                >
                  Get Started
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Related Services
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Explore our other trading services that complement sourcing and procurement.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Import & Export Trading Services', href: '/services/import-export', icon: 'globe' },
              { title: 'Wholesale & Distribution', href: '/services/wholesale-distribution', icon: 'warehouse' },
              { title: 'Trade Consulting & Market Advisory', href: '/services/trade-consulting', icon: 'chart' },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link
                  href={service.href}
                  className="group flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-[var(--color-secondary)]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-secondary)]/10 transition-colors">
                    <ServiceIcon icon={service.icon} className="w-6 h-6 text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors" />
                  </div>
                  <span className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </span>
                  <svg className="w-5 h-5 ml-auto text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Ready to Optimise Your Sourcing?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-10">
              Contact us today to discuss how our sourcing and procurement services can help you find the right products at the right price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-secondary-light)] transition-all hover:shadow-lg group"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--color-text-light)]/30 text-[var(--color-text-light)] font-semibold rounded-lg hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all"
              >
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
