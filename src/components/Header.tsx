'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const services = [
  { name: 'Import & Export Trading', href: '/services/import-export' },
  { name: 'Product Sourcing & Procurement', href: '/services/sourcing-procurement' },
  { name: 'Wholesale & Distribution', href: '/services/wholesale-distribution' },
  { name: 'Customs & Trade Documentation', href: '/services/customs-documentation' },
  { name: 'Logistics & Freight', href: '/services/logistics-freight' },
  { name: 'Trade Consulting & Advisory', href: '/services/trade-consulting' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Industries', href: '/industries' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const isServicePage = pathname.startsWith('/services');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-primary)]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Gate icon */}
                <rect x="4" y="10" width="4" height="26" fill="var(--color-secondary)" rx="1" />
                <rect x="32" y="10" width="4" height="26" fill="var(--color-secondary)" rx="1" />
                <rect x="4" y="6" width="32" height="6" fill="var(--color-secondary)" rx="1" />
                <rect x="12" y="16" width="3" height="16" fill="var(--color-secondary-light)" rx="0.5" />
                <rect x="18.5" y="16" width="3" height="16" fill="var(--color-secondary-light)" rx="0.5" />
                <rect x="25" y="16" width="3" height="16" fill="var(--color-secondary-light)" rx="0.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-[var(--color-text-light)] tracking-wide group-hover:text-[var(--color-secondary)] transition-colors">
                Iron Gate
              </span>
              <span className="text-xs text-[var(--color-secondary)] tracking-[0.2em] uppercase">
                Trading
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                        isServicePage
                          ? 'text-[var(--color-secondary)]'
                          : 'text-[var(--color-text-light)] hover:text-[var(--color-secondary)]'
                      }`}
                    >
                      {item.name}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {isServicePage && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--color-secondary)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-2">
                            <Link
                              href="/services"
                              className="flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--color-text-primary)] hover:bg-[var(--color-bg-cream)] transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-secondary)]/10 transition-colors">
                                <svg className="w-4 h-4 text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-semibold text-sm">All Services</span>
                                <p className="text-xs text-[var(--color-text-muted)]">View all our offerings</p>
                              </div>
                            </Link>
                          </div>
                          <div className="border-t border-gray-100" />
                          <div className="p-2">
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                                  pathname === service.href
                                    ? 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-cream)] hover:text-[var(--color-text-primary)]'
                                }`}
                              >
                                <span className="text-sm">{service.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--color-secondary)]'
                      : 'text-[var(--color-text-light)] hover:text-[var(--color-secondary)]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--color-secondary)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--color-primary)] border-t border-[var(--color-primary-light)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                
                if (item.hasDropdown) {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          isServicePage
                            ? 'bg-[var(--color-secondary)] text-[var(--color-primary-dark)]'
                            : 'text-[var(--color-text-light)] hover:bg-[var(--color-primary-light)]'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 ml-4 space-y-1"
                          >
                            <Link
                              href="/services"
                              className="block px-4 py-2 rounded-lg text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-light)] hover:bg-[var(--color-primary-light)] transition-colors"
                            >
                              All Services
                            </Link>
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                                  pathname === service.href
                                    ? 'text-[var(--color-secondary)] bg-[var(--color-primary-light)]'
                                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-light)] hover:bg-[var(--color-primary-light)]'
                                }`}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[var(--color-secondary)] text-[var(--color-primary-dark)]'
                        : 'text-[var(--color-text-light)] hover:bg-[var(--color-primary-light)]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
