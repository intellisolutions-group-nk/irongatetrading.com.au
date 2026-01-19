'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceIcon from '@/components/ServiceIcon';
import companyData from '@/data/company.json';

export default function WholesaleDistributionPage() {
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
            <span className="text-[var(--color-secondary)]">Wholesale & Distribution</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary)]/20 flex items-center justify-center">
                <ServiceIcon icon="warehouse" className="w-8 h-8 text-[var(--color-secondary)]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Wholesale & <span className="text-gradient-gold">Distribution</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl">
              Efficient wholesale and distribution networks to move your products to market effectively and reach customers across Australia and beyond.
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
                Get Your Products to Market
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Effective distribution is essential for getting your products to market efficiently 
                  and cost-effectively. Whether you are a manufacturer looking to reach retailers, 
                  an importer seeking wholesale channels, or a business wanting to expand your market 
                  reach, distribution strategy is key to success.
                </p>
                <p>
                  Our wholesale and distribution services provide access to established networks 
                  across Australia and internationally. We help businesses of all sizes streamline 
                  their distribution operations, reduce costs, and improve delivery performance.
                </p>
                <p>
                  From warehousing and inventory management to order fulfilment and last-mile delivery 
                  coordination, we offer comprehensive solutions tailored to your specific requirements.
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
                    'Warehousing and inventory management',
                    'Order fulfilment and processing',
                    'Distribution network optimisation',
                    'Retail and wholesale channel development',
                    'Demand forecasting support',
                    'Returns and reverse logistics handling',
                    'Multi-channel distribution coordination',
                    'Delivery performance monitoring',
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

      {/* Distribution Services */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Distribution Services
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Comprehensive distribution solutions to support your business growth.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Wholesale Solutions',
                description: 'Connect with wholesale channels to distribute your products to retailers, resellers, and trade customers efficiently.',
                features: ['Wholesale network access', 'Bulk order management', 'Trade pricing strategies', 'Channel partner development'],
              },
              {
                title: 'Warehousing',
                description: 'Secure storage and inventory management services to keep your products safe and accessible when needed.',
                features: ['Secure storage facilities', 'Inventory tracking systems', 'Stock level management', 'Pick and pack services'],
              },
              {
                title: 'Order Fulfilment',
                description: 'End-to-end order processing from receipt to dispatch, ensuring accurate and timely deliveries to your customers.',
                features: ['Order processing', 'Quality checking', 'Packaging and labelling', 'Dispatch coordination'],
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

      {/* Distribution Channels */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Market Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Distribution Channels We Support
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Retail',
                description: 'Distribution to retail stores, supermarkets, and specialty outlets across Australia.',
              },
              {
                title: 'Wholesale',
                description: 'Bulk distribution to wholesalers and trade customers for resale.',
              },
              {
                title: 'E-Commerce',
                description: 'Fulfilment services for online retailers and e-commerce platforms.',
              },
              {
                title: 'B2B',
                description: 'Business-to-business distribution for commercial and industrial customers.',
              },
            ].map((channel, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 text-center">
                  <h3 className="text-lg font-serif font-bold text-[var(--color-text-primary)] mb-3">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {channel.description}
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
                Benefits of Our Distribution Services
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expanded Market Reach',
                    description: 'Access established distribution networks to reach customers you could not reach on your own.',
                  },
                  {
                    title: 'Reduced Operational Burden',
                    description: 'Outsource complex logistics and fulfilment operations, allowing you to focus on your core business.',
                  },
                  {
                    title: 'Scalable Solutions',
                    description: 'Flexible distribution services that scale with your business needs, from startup to enterprise level.',
                  },
                  {
                    title: 'Cost Efficiency',
                    description: 'Leverage shared infrastructure and optimised processes to reduce per-unit distribution costs.',
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
                <ServiceIcon icon="warehouse" className="w-20 h-20 text-[var(--color-secondary)]/40 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold text-[var(--color-text-light)] mb-4">
                  Ready to Distribute?
                </h3>
                <p className="text-[var(--color-text-muted)] mb-6">
                  Let us help you get your products to market efficiently.
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
              Explore our other trading services that complement wholesale and distribution.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Product Sourcing & Procurement', href: '/services/sourcing-procurement', icon: 'search' },
              { title: 'Logistics & Freight Coordination', href: '/services/logistics-freight', icon: 'truck' },
              { title: 'Import & Export Trading Services', href: '/services/import-export', icon: 'globe' },
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
              Ready to Expand Your Distribution?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-10">
              Contact us today to discuss how our wholesale and distribution services can help you reach more customers.
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
