'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceIcon from '@/components/ServiceIcon';
import companyData from '@/data/company.json';

export default function TradeConsultingPage() {
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
            <span className="text-[var(--color-secondary)]">Trade Consulting</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary)]/20 flex items-center justify-center">
                <ServiceIcon icon="chart" className="w-8 h-8 text-[var(--color-secondary)]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Trade Consulting & <span className="text-gradient-gold">Market Advisory</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl">
              Strategic consulting and market insights to guide your trading decisions and help you identify new opportunities in international commerce.
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
                Strategic Guidance for Global Trade
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Making sound trading decisions requires deep market knowledge, strategic thinking, 
                  and access to relevant insights. Whether you are exploring new markets, assessing 
                  trading opportunities, or looking to optimise existing operations, expert guidance 
                  can make the difference between success and costly mistakes.
                </p>
                <p>
                  Our trade consulting and market advisory services provide you with the insights 
                  and guidance you need to navigate the complexities of international commerce. 
                  We bring extensive experience and analytical rigour to every engagement.
                </p>
                <p>
                  From market research and opportunity assessment to trade strategy development 
                  and risk management, we help you understand market dynamics, identify opportunities, 
                  and develop strategies for success.
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
                    'Market research and opportunity assessment',
                    'Competitive analysis and benchmarking',
                    'Trade strategy development',
                    'Regulatory and compliance guidance',
                    'Risk assessment and mitigation planning',
                    'Business development support',
                    'Market entry strategies',
                    'Trade optimisation consulting',
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

      {/* Consulting Services */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Consulting Services We Offer
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Comprehensive advisory services to support your trading objectives.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Market Research',
                description: 'In-depth research and analysis to help you understand market conditions, trends, and opportunities in your target markets.',
                features: ['Market size and growth analysis', 'Consumer behaviour insights', 'Regulatory environment assessment', 'Competitive landscape mapping'],
              },
              {
                title: 'Trade Strategy',
                description: 'Development of comprehensive trading strategies aligned with your business objectives and risk tolerance.',
                features: ['Market entry planning', 'Product-market fit analysis', 'Channel strategy development', 'Pricing and positioning guidance'],
              },
              {
                title: 'Risk Management',
                description: 'Identification and mitigation of risks associated with international trade operations.',
                features: ['Trade risk assessment', 'Currency risk guidance', 'Political risk analysis', 'Mitigation strategy development'],
              },
              {
                title: 'Compliance Advisory',
                description: 'Guidance on regulatory compliance requirements for international trade.',
                features: ['Trade regulation guidance', 'Sanctions screening advice', 'Documentation requirements', 'Best practice recommendations'],
              },
              {
                title: 'Supplier Development',
                description: 'Strategic advice on building and managing supplier relationships.',
                features: ['Supplier assessment criteria', 'Relationship management strategies', 'Performance benchmarking', 'Diversification planning'],
              },
              {
                title: 'Optimisation Consulting',
                description: 'Analysis and recommendations to improve the efficiency of your trading operations.',
                features: ['Process efficiency review', 'Cost reduction opportunities', 'Supply chain optimisation', 'Performance metrics development'],
              },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
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

      {/* How We Work */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              How We Work With You
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your business, objectives, challenges, and the specific questions you need answered.',
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Our team conducts thorough research and analysis using multiple data sources and our market expertise.',
              },
              {
                step: '03',
                title: 'Recommendations',
                description: 'We develop actionable recommendations and strategies based on our analysis and your business context.',
              },
              {
                step: '04',
                title: 'Support',
                description: 'We provide ongoing support to help you implement recommendations and adapt to changing conditions.',
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

      {/* Who We Help */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Who We Help
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Consulting for Every Stage
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We work with businesses at all stages of their international trade journey.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'New to Trade',
                description: 'Businesses looking to enter international markets for the first time. We help you understand the opportunities, requirements, and risks.',
              },
              {
                title: 'Growing Traders',
                description: 'Companies with existing trade operations looking to expand into new markets, products, or channels. We help you scale strategically.',
              },
              {
                title: 'Established Operations',
                description: 'Mature trading businesses seeking to optimise operations, reduce costs, or address specific challenges. We help you improve performance.',
              },
            ].map((audience, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                  <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {audience.description}
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
                Benefits of Our Consulting Services
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Informed Decision Making',
                    description: 'Make better trading decisions based on thorough research, analysis, and expert insights.',
                  },
                  {
                    title: 'Risk Awareness',
                    description: 'Understand and prepare for the risks associated with international trade before they impact your business.',
                  },
                  {
                    title: 'Market Opportunities',
                    description: 'Identify and evaluate opportunities that you might otherwise miss or fail to properly assess.',
                  },
                  {
                    title: 'Strategic Direction',
                    description: 'Develop clear strategies that align your trading activities with your overall business objectives.',
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
                <ServiceIcon icon="chart" className="w-20 h-20 text-[var(--color-secondary)]/40 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold text-[var(--color-text-light)] mb-4">
                  Need Strategic Guidance?
                </h3>
                <p className="text-[var(--color-text-muted)] mb-6">
                  Let us help you develop strategies for trading success.
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
              Explore our other trading services that complement consulting and advisory.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Import & Export Trading Services', href: '/services/import-export', icon: 'globe' },
              { title: 'Product Sourcing & Procurement', href: '/services/sourcing-procurement', icon: 'search' },
              { title: 'Customs & Trade Documentation', href: '/services/customs-documentation', icon: 'document' },
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
              Ready for Strategic Guidance?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-10">
              Contact us today to discuss how our trade consulting and market advisory services can help you achieve your trading objectives.
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
