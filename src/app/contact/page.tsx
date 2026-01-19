'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AnimatedSection from '@/components/AnimatedSection';
import companyData from '@/data/company.json';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

const schema: yup.ObjectSchema<FormData> = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  phone: yup.string().optional(),
  company: yup.string().optional(),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
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
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Get in touch with our team to discuss your trading requirements. 
              We are here to help you navigate international trade with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[var(--color-bg-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
                    Contact Information
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    We welcome enquiries about our import, export, and trading services. 
                    Fill out the form or contact us directly using the information below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Email</h4>
                      <a
                        href={`mailto:${companyData.contact.email}`}
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] transition-colors"
                      >
                        {companyData.contact.email}
                      </a>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">
                        We aim to respond within 1-2 business days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Registered Address</h4>
                      <p className="text-[var(--color-text-secondary)]">
                        {companyData.addresses.registered.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Postal Address</h4>
                      <p className="text-[var(--color-text-secondary)]">
                        {companyData.addresses.postal.full}
                      </p>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="p-6 bg-white rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">What to Expect</h4>
                  <ul className="space-y-3">
                    {[
                      'Prompt response to your enquiry',
                      'Initial consultation to understand your needs',
                      'Tailored proposal for your requirements',
                      'Clear communication throughout the process',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--color-text-secondary)] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-2">
                  Send Us a Message
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Please provide as much detail as possible about your requirements so we can respond with relevant information.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-400' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-400' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        {...register('company')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      {...register('subject')}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? 'border-red-400' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all bg-white`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Import & Export Trading Services">Import & Export Trading Services</option>
                      <option value="Product Sourcing & Procurement">Product Sourcing & Procurement</option>
                      <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                      <option value="Customs & Trade Documentation">Customs & Trade Documentation</option>
                      <option value="Logistics & Freight">Logistics & Freight</option>
                      <option value="Trade Consulting">Trade Consulting</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message')}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-400' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all resize-none`}
                      placeholder="Tell us about your requirements. Include details such as the type of products, target markets, volumes, and any specific challenges you are facing."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <p className="text-sm text-[var(--color-text-muted)]">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-4 bg-[var(--color-primary)] text-[var(--color-text-light)] font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-secondary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Here are answers to some common questions about our services and how we work.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                question: 'What types of businesses do you work with?',
                answer: 'We work with businesses of all sizes, from small enterprises looking to start importing or exporting to large corporations seeking to optimise their international trade operations. Our services are tailored to meet the specific needs of each client.',
              },
              {
                question: 'How do I get started with your services?',
                answer: 'Simply contact us through this form or email us directly. We will arrange an initial consultation to understand your requirements, after which we will provide a tailored proposal for your consideration.',
              },
              {
                question: 'What information should I provide in my enquiry?',
                answer: 'The more detail you can provide, the better we can assist you. Helpful information includes the type of products you are trading, target markets, estimated volumes, and any specific challenges or requirements you have.',
              },
              {
                question: 'How quickly can you respond to enquiries?',
                answer: 'We aim to respond to all enquiries within 1-2 business days. For urgent matters, please indicate this in your message and we will prioritise your request.',
              },
              {
                question: 'Do you handle all aspects of international trade?',
                answer: 'Yes, we provide end-to-end trading services including sourcing, procurement, customs documentation, logistics coordination, and trade consulting. You can engage us for individual services or comprehensive trade management.',
              },
              {
                question: 'What industries do you serve?',
                answer: 'We serve a wide range of industries including consumer goods, manufacturing, food and beverage, retail, construction, healthcare, and many others. Our trading expertise is adaptable to various sectors.',
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact CTA */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-light)] mb-6">
              Prefer to Email Directly?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-8">
              If you prefer, you can reach us directly at our email address. We look forward to hearing from you.
            </p>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-secondary-light)] transition-all hover:shadow-lg group"
            >
              <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {companyData.contact.email}
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-3">
                Message Sent
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Thank you for contacting {companyData.brand.name}. We have received your message and will respond within 1-2 business days.
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-text-light)] font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
