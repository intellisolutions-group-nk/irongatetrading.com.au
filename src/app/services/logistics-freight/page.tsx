'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceIcon from '@/components/ServiceIcon';
import companyData from '@/data/company.json';

export default function LogisticsFreightPage() {
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
            <span className="text-[var(--color-secondary)]">Logistics & Freight</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary)]/20 flex items-center justify-center">
                <ServiceIcon icon="truck" className="w-8 h-8 text-[var(--color-secondary)]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Logistics & Freight <span className="text-gradient-gold">Coordination</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl">
              Coordinated logistics and freight solutions for reliable and timely delivery of your goods, no matter where in the world they need to go.
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
                Move Your Goods with Confidence
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Reliable logistics and freight services are the backbone of successful international 
                  trade. Getting your goods from origin to destination safely, efficiently, and on time 
                  is critical to your business success and customer satisfaction.
                </p>
                <p>
                  Our logistics coordination services take the complexity out of moving goods. Whether 
                  you are shipping a single container or managing complex multi-modal supply chains, 
                  we handle all aspects of the transportation process.
                </p>
                <p>
                  We work with a network of trusted carriers and logistics providers to offer 
                  competitive rates, reliable service, and full visibility throughout the shipping journey.
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
                    'Sea, air, and land freight coordination',
                    'Container and cargo booking management',
                    'Freight rate negotiation and optimisation',
                    'Shipment tracking and visibility',
                    'Insurance coordination and claims handling',
                    'Specialised cargo handling arrangements',
                    'Multi-modal transport solutions',
                    'Last-mile delivery coordination',
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

      {/* Transport Modes */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Transport Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Multi-Modal Freight Options
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We coordinate freight across all major transport modes to find the optimal solution for your needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sea Freight',
                description: 'Cost-effective shipping for large volumes and non-urgent cargo. Full container load (FCL) and less than container load (LCL) options available.',
                features: ['Full container loads (FCL)', 'Less than container loads (LCL)', 'Break-bulk and project cargo', 'Refrigerated containers'],
              },
              {
                title: 'Air Freight',
                description: 'Fast and reliable transport for time-sensitive and high-value cargo. Ideal for urgent shipments and perishable goods.',
                features: ['Express and standard services', 'Dangerous goods handling', 'Temperature-controlled options', 'Charter services available'],
              },
              {
                title: 'Land Transport',
                description: 'Domestic and cross-border road and rail freight for efficient movement of goods within regions.',
                features: ['Road freight coordination', 'Rail freight options', 'Intermodal connections', 'Last-mile delivery'],
              },
            ].map((mode, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    {mode.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {mode.description}
                  </p>
                  <ul className="space-y-2">
                    {mode.features.map((feature, fIndex) => (
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

      {/* Our Process */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Our Logistics Process
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Planning',
                description: 'We analyse your shipping requirements to determine the optimal transport mode, route, and timing.',
              },
              {
                step: '02',
                title: 'Booking',
                description: 'Secure capacity with carriers, negotiate rates, and confirm all shipping arrangements.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Coordinate pickup, loading, and transport with full documentation support.',
              },
              {
                step: '04',
                title: 'Tracking',
                description: 'Monitor shipment progress and provide updates through to final delivery confirmation.',
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

      {/* Additional Services */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Value-Added Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Beyond Basic Freight
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Cargo Insurance', description: 'Protect your goods with comprehensive cargo insurance coverage.' },
              { title: 'Dangerous Goods', description: 'Specialised handling for hazardous materials and dangerous goods.' },
              { title: 'Project Logistics', description: 'Complex logistics solutions for large-scale projects and oversized cargo.' },
              { title: 'Temperature Control', description: 'Cold chain logistics for perishables and temperature-sensitive products.' },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 text-center">
                  <h3 className="text-lg font-serif font-bold text-[var(--color-text-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Benefits of Our Logistics Services
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Reliable Delivery',
                    description: 'Count on consistent, on-time delivery through our network of trusted carriers and logistics partners.',
                  },
                  {
                    title: 'Cost Optimisation',
                    description: 'Benefit from our freight rate negotiating power and route optimisation expertise to reduce shipping costs.',
                  },
                  {
                    title: 'Full Visibility',
                    description: 'Track your shipments throughout the journey with regular updates and milestone notifications.',
                  },
                  {
                    title: 'Expert Support',
                    description: 'Access our logistics expertise for complex shipping challenges and problem resolution.',
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
                <ServiceIcon icon="truck" className="w-20 h-20 text-[var(--color-secondary)]/40 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold text-[var(--color-text-light)] mb-4">
                  Need Freight Solutions?
                </h3>
                <p className="text-[var(--color-text-muted)] mb-6">
                  Let us coordinate your logistics for reliable, cost-effective delivery.
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
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Related Services
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Explore our other trading services that complement logistics and freight.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Import & Export Trading Services', href: '/services/import-export', icon: 'globe' },
              { title: 'Customs & Trade Documentation', href: '/services/customs-documentation', icon: 'document' },
              { title: 'Wholesale & Distribution', href: '/services/wholesale-distribution', icon: 'warehouse' },
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
              Ready to Ship?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-10">
              Contact us today to discuss how our logistics and freight coordination services can support your shipping needs.
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
