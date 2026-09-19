import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WORKS', href: '#works' },
    { label: 'SPECIALITIES', href: '#specialities' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#130722]/90 backdrop-blur-md border-b border-purple-900/30 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="nav-brand-link"
          className="flex items-center gap-2.5 group text-white tracking-wide"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED] group-hover:scale-125 transition-transform" />
          <div className="flex items-center gap-1.5 font-bold tracking-wider text-sm sm:text-base uppercase">
            <span>STUDIO MANJU SRI</span>
            <span className="text-purple-400 font-normal text-xs sm:text-sm">PHOTOGRAPHY</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-widest">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className={`relative py-1 transition-colors ${
                  isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Pills */}
        <div className="hidden md:flex items-center gap-3">
          {/* Phone pill */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            id="nav-phone-btn"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-purple-200 transition-all"
            title="Call Studio Directly"
          >
            <Phone className="w-3.5 h-3.5 text-purple-400" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          {/* WhatsApp CTA pill */}
          <a
            href={createWhatsAppUrl('Hello Studio Manju Sri, I would like to inquire about your photography services.')}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-semibold tracking-wider transition-all shadow-[0_0_15px_rgba(124,58,237,0.4)] hover:shadow-[0_0_20px_rgba(124,58,237,0.7)]"
          >
            <span>WHATSAPP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-200 hover:text-white rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-[#130722] border-b border-purple-900/40 px-6 py-5 shadow-2xl space-y-4"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-gray-200 hover:text-purple-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-purple-900/30 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-purple-200"
            >
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={createWhatsAppUrl('Hello Studio Manju Sri, I would like to inquire about your photography services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#7C3AED] text-white text-xs font-semibold tracking-wider"
            >
              <span>CHAT ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
