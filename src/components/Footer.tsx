import Link from 'next/link';
import Image from 'next/image';
import companyData from '@/data/company.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-dark)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group mb-6">
              <Image
                src="/IronGateTrading.png"
                alt="Iron Gate Trading"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[var(--color-text-muted)] max-w-md leading-relaxed">
              Your trusted partner for import, export, and trading services across Australia and international markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--color-text-light)] font-serif font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[var(--color-text-light)] font-serif font-semibold text-lg mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors flex items-start gap-3"
                >
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{companyData.contact.email}</span>
                </a>
              </li>
              <li className="text-[var(--color-text-muted)] flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{companyData.addresses.registered.full}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-primary-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[var(--color-text-muted)] text-sm text-center md:text-left">
              <p>{companyData.brand.legalName}</p>
              <p>ACN: {companyData.brand.acn} | ABN: {companyData.brand.abn}</p>
              <p className="mt-1">&copy; {currentYear} {companyData.brand.name}. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
