'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceIcon from '@/components/ServiceIcon';
import companyData from '@/data/company.json';

export default function ImportExportPage() {
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
            <span className="text-[var(--color-secondary)]">Import & Export</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary)]/20 flex items-center justify-center">
                <ServiceIcon icon="globe" className="w-8 h-8 text-[var(--color-secondary)]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Import & Export <span className="text-gradient-gold">Trading Services</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl">
              Comprehensive import and export solutions for businesses trading internationally. 
              We help you navigate global markets with confidence and efficiency.
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
                Your Partner in International Trade
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  International trade opens doors to new markets, suppliers, and growth opportunities. 
                  However, navigating the complexities of cross-border commerce requires expertise, 
                  established networks, and meticulous attention to detail.
                </p>
                <p>
                  Our import and export trading services provide end-to-end support for businesses 
                  engaged in international commerce. Whether you are importing raw materials for 
                  manufacturing, exporting finished goods to new markets, or managing complex supply 
                  chains across multiple countries, we deliver the expertise and support you need.
                </p>
                <p>
                  We work with businesses of all sizes, from companies taking their first steps into 
                  international trade to established enterprises looking to optimise their global operations.
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
                    'International supplier and buyer identification',
                    'Trade negotiation and contract management',
                    'Multi-modal shipping coordination',
                    'Risk assessment and mitigation strategies',
                    'Market entry planning and execution',
                    'Ongoing trade relationship management',
                    'Regulatory compliance guidance',
                    'Currency and payment facilitation',
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

      {/* What We Offer */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              How We Support Your Trade
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Our comprehensive approach covers every aspect of international trading to ensure seamless transactions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Import Services',
                description: 'We help you source products from international suppliers, manage customs clearance, and coordinate logistics to ensure your goods arrive safely and on time.',
                features: ['Supplier identification and vetting', 'Import documentation', 'Customs clearance coordination', 'Quality inspection arrangements'],
              },
              {
                title: 'Export Services',
                description: 'Expand your market reach by exporting your products internationally. We handle the complexities of export compliance, documentation, and logistics.',
                features: ['Market research and entry planning', 'Export documentation preparation', 'Shipping and freight coordination', 'Buyer relationship management'],
              },
              {
                title: 'Trade Facilitation',
                description: 'Beyond simple transactions, we provide ongoing support to optimise your trading operations and build sustainable international business relationships.',
                features: ['Trade finance guidance', 'Risk management strategies', 'Compliance monitoring', 'Performance optimisation'],
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              How We Work Together
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Understanding',
                description: 'We begin by understanding your trading objectives, product requirements, target markets, and any specific challenges you face.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Our team develops a comprehensive trade plan covering sourcing, logistics, documentation, compliance, and risk management.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We manage all aspects of the trade transaction, from supplier negotiations to customs clearance and delivery coordination.',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing monitoring and support ensures successful delivery and provides insights for future trade optimisation.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-serif font-bold text-[var(--color-secondary)]/20 mb-4">
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

      {/* Benefits */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Benefits of Working with {companyData.brand.name}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Reduced Complexity',
                    description: 'We handle the intricate details of international trade, allowing you to focus on your core business operations.',
                  },
                  {
                    title: 'Risk Mitigation',
                    description: 'Our expertise helps identify and manage risks associated with cross-border transactions, protecting your interests.',
                  },
                  {
                    title: 'Cost Efficiency',
                    description: 'Leverage our networks and negotiating power to achieve competitive pricing on products and logistics.',
                  },
                  {
                    title: 'Compliance Assurance',
                    description: 'Stay compliant with Australian import/export regulations and international trade requirements.',
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
                <ServiceIcon icon="globe" className="w-20 h-20 text-[var(--color-secondary)]/40 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold text-[var(--color-text-light)] mb-4">
                  Ready to Trade Globally?
                </h3>
                <p className="text-[var(--color-text-muted)] mb-6">
                  Let us help you navigate international markets with confidence.
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
              Explore our other trading services that complement import and export operations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Customs & Trade Documentation', href: '/services/customs-documentation', icon: 'document' },
              { title: 'Logistics & Freight Coordination', href: '/services/logistics-freight', icon: 'truck' },
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
              Start Your Import/Export Journey
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-10">
              Contact us today to discuss how our import and export trading services can help your business succeed in international markets.
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
