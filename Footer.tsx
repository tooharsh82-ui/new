import React from 'react';
import { ArrowUp, Phone, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WORKS', href: '#works' },
    { label: 'SPECIALITIES', href: '#specialities' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const specialityTags = ['WEDDINGS', 'PORTRAIT', 'EVENTS', 'CANDID'];

  return (
    <footer className="relative bg-[#0d0417] text-white pt-20 pb-12 overflow-hidden border-t border-purple-900/30">
      
      {/* Giant Faded Watermark in Background (matches Screenshot 338) */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[12vw] font-serif italic text-purple-600/[0.04] leading-none whitespace-nowrap z-0"
      >
        Studio Manju Sri
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-purple-900/30">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
              <span className="font-bold tracking-wider text-base uppercase">STUDIO MANJU SRI</span>
              <span className="text-purple-400 font-normal text-sm">PHOTOGRAPHY</span>
            </div>
            <p className="text-sm text-purple-200/70 leading-relaxed max-w-sm">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="pt-2">
              <a
                href={createWhatsAppUrl('Hello Studio Manju Sri, I would like to get in touch regarding your packages.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-700/40 text-xs font-semibold text-purple-200 hover:text-white hover:border-purple-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-purple-400" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block">
              Location
            </span>
            <div className="flex items-start gap-2.5 text-sm text-purple-200/80">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <span className="text-xs text-purple-300/50 block pl-6">
              Plus Code: {BUSINESS_INFO.plusCode}
            </span>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block">
              Contact
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-sm text-white hover:text-purple-300 font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-purple-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-xs text-purple-300/60 block">
              {BUSINESS_INFO.hours}
            </span>
          </div>

          {/* Specialities Tags */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase block">
              Specialities
            </span>
            <div className="flex flex-wrap gap-2">
              {specialityTags.map((tag) => (
                <a
                  key={tag}
                  href="#specialities"
                  className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-[11px] font-semibold text-purple-200 hover:text-white hover:border-purple-500 transition-colors tracking-wider"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Middle Nav Row */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-semibold tracking-widest text-purple-200/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-purple-500/20 text-xs font-semibold tracking-widest uppercase text-purple-200 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
          </button>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-6 border-t border-purple-900/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-300/50">
          <p>© 2026 Studio Manju Sri — All Rights Reserved — Arrah, Bihar</p>
          <p className="tracking-wider">PREMIUM EDITORIAL PHOTOGRAPHY</p>
        </div>

      </div>
    </footer>
  );
};
