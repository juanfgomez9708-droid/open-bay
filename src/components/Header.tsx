'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { siteConfig } from '@/lib/site-config';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <nav
        className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label={`${siteConfig.businessName} home`}>
          <img src="/logo.svg" alt={siteConfig.businessName} className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-navy font-medium hover:text-navy-light transition-colors"
            aria-label={`Call ${siteConfig.phone}`}
          >
            {siteConfig.phone}
          </a>
          <a
            href="#booking"
            className="bg-fresh hover:bg-fresh-dark text-white font-semibold py-2.5 px-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-fresh focus:ring-offset-2"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile: phone icon + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="p-2 text-navy"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-navy focus:outline-none focus:ring-2 focus:ring-fresh rounded"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-navy font-medium py-2"
          >
            {siteConfig.phone}
          </a>
          <a
            href="#booking"
            onClick={() => closeMenu()}
            className="bg-fresh hover:bg-fresh-dark text-white font-semibold py-3 px-6 rounded-full text-center transition-colors focus:outline-none focus:ring-2 focus:ring-fresh focus:ring-offset-2"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
