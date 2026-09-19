import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, ArrowRight, ArrowUpRight, Award, Maximize2, X } from 'lucide-react';
import { BUSINESS_INFO, HERO_FEATURED_IMAGE, createWhatsAppUrl } from '../data/content';

export const Hero: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-b from-[#0e0419] via-[#160627] to-[#250942] text-white pt-28 pb-16 overflow-hidden flex flex-col justify-between"
    >
      {/* Oversized Faded Watermark Typography */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[18vw] font-black uppercase text-purple-600/[0.04] tracking-widest whitespace-nowrap z-0 font-sans"
      >
        PHOTO
      </div>

      {/* Subtle Side Vertical Eyebrow Text (as seen in Screenshot 330) */}
      <div
        aria-hidden="true"
        className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[11px] font-medium tracking-[0.3em] text-purple-400/40 uppercase z-10 select-none items-center gap-3"
      >
        <span>PHOTOGRAPHY</span>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
        <span>ARRAH, BIHAR</span>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7 xl:pr-6">
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/50 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-purple-200 uppercase">
                Photography Studio • Arrah, Bihar
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08]">
              <span>Capturing stories </span>
              <br />
              <span className="font-serif italic font-normal text-purple-300 drop-shadow-[0_2px_15px_rgba(192,132,252,0.3)]">
                that last a lifetime
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-purple-100/80 max-w-2xl font-normal leading-relaxed">
              Thoughtful photography turning genuine celebrations into timeless heirloom cinema. 
              Based near <span className="text-white font-medium">Sapna Cinema, Shivganj, Arrah, Bihar</span>, 
              and trusted by families across the city for extraordinary photo quality and unscripted emotional depth.
            </p>

            {/* Trust Badge Card */}
            <div
              id="hero-trust-badge"
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-purple-500/20 backdrop-blur-sm max-w-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-purple-900/60 border border-purple-700/50 flex items-center justify-center text-purple-300 shadow-inner shrink-0">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold tracking-wide text-white">5.0 Star Rating</span>
                    <div className="flex text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-purple-200/70 mt-0.5">
                    Based on 31 Verified Reviews from Arrah & Bhojpur
                  </p>
                </div>
              </div>

              <div className="hidden sm:block text-right border-l border-purple-800/40 pl-4 shrink-0">
                <span className="inline-block px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 text-[11px] font-semibold tracking-wider uppercase">
                  Top Rated Studio
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={createWhatsAppUrl("Hello Studio Manju Sri, I would like to check booking availability for an upcoming photo session.")}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold tracking-wider transition-all shadow-[0_4px_25px_rgba(124,58,237,0.45)] hover:shadow-[0_4px_30px_rgba(124,58,237,0.7)] hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>CHAT ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#works"
                id="hero-cta-works"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-purple-400/30 text-white text-sm font-medium tracking-wider transition-all hover:border-purple-400/60 hover:-translate-y-0.5"
              >
                <span>VIEW OUR WORK</span>
                <ArrowRight className="w-4 h-4 text-purple-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Featured Editorial Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle Ambient Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-tr from-purple-600/30 to-violet-900/10 rounded-[2rem] blur-2xl -z-10"
              />

              {/* Photo Frame with Interactive Expand Trigger */}
              <div
                id="hero-featured-photo-card"
                role="button"
                tabIndex={0}
                onClick={() => setIsLightboxOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsLightboxOpen(true);
                  }
                }}
                aria-label="Click to open featured photograph in full view"
                className="relative rounded-3xl overflow-hidden border border-purple-500/30 hover:border-purple-400 shadow-2xl shadow-purple-950/60 aspect-[4/5] group cursor-pointer transition-all duration-300 hover:shadow-[0_15px_40px_rgba(124,58,237,0.3)] select-none"
              >
                <img
                  src={HERO_FEATURED_IMAGE}
                  alt="Studio Manju Sri Featured Editorial Photography in Arrah"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Interactive Center Hover Pill Indicator */}
                <div className="absolute inset-0 bg-purple-950/30 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center pointer-events-none z-10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/75 text-white text-xs font-bold tracking-widest uppercase border border-white/20 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-3.5 h-3.5 text-purple-300" />
                    <span>Click to Expand</span>
                  </span>
                </div>

                {/* Film Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#130722]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Corner Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold tracking-widest text-purple-200 border border-white/15 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-ping" />
                    Signature Edit
                  </span>
                </div>

                {/* Top Right Expand Icon Button */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="p-2 rounded-full bg-black/60 group-hover:bg-[#7C3AED] backdrop-blur-md text-white/80 group-hover:text-white transition-all inline-flex items-center justify-center border border-white/15 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10 pointer-events-none">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-purple-300 uppercase block mb-1">
                      Studio Manju Sri • Arrah
                    </span>
                    <p className="text-base font-serif italic text-white">
                      Cherishing the timeless celebrations
                    </p>
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    2026 ARCHIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Metric Strip & Ruler Ticks (matches Screenshot 331) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-purple-900/40 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div>
            <span className="text-[11px] tracking-widest uppercase font-semibold text-purple-400 block mb-1">
              STORIES
            </span>
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              500+ <span className="text-xs font-normal text-purple-200">Documented</span>
            </p>
          </div>

          <div>
            <span className="text-[11px] tracking-widest uppercase font-semibold text-purple-400 block mb-1">
              STUDIO LOCATION
            </span>
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Shivganj <span className="text-xs font-normal text-purple-200">Arrah, Bihar</span>
            </p>
          </div>

          <div>
            <span className="text-[11px] tracking-widest uppercase font-semibold text-purple-400 block mb-1">
              CLIENT RATING
            </span>
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              5.0 ★ <span className="text-xs font-normal text-purple-200">31 Reviews</span>
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center md:justify-end">
            <a
              href="#works"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-purple-500/20 text-xs font-semibold tracking-wider text-purple-200 transition-colors"
            >
              <span>EXPLORE ARCHIVE</span>
              <ArrowDownRight className="w-3.5 h-3.5 text-purple-400" />
            </a>
          </div>
        </div>

        {/* Optical Camera Calibration Ruler Ticks */}
        <div aria-hidden="true" className="w-full flex justify-between gap-1 overflow-hidden opacity-25 mt-6 select-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className={`w-px bg-purple-300 ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`}
            />
          ))}
        </div>
      </div>

      {/* Interactive In-Page Fullscreen Photo Lightbox Modal */}
      {isLightboxOpen && (
        <div
          id="hero-featured-photo-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between z-20" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#7C3AED] text-white text-xs font-bold tracking-wider uppercase shadow-md">
                Signature Portrait
              </span>
              <span className="text-gray-400 text-xs tracking-widest font-mono hidden sm:inline-block">
                STUDIO MANJU SRI • ARRAH, BIHAR
              </span>
            </div>

            <button
              onClick={() => setIsLightboxOpen(false)}
              id="hero-photo-modal-close"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Photo Viewport */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-5xl max-h-[76vh] w-full flex items-center justify-center p-2">
              <img
                src={HERO_FEATURED_IMAGE}
                alt="Studio Manju Sri Featured Editorial Photography in Arrah"
                referrerPolicy="no-referrer"
                className="max-h-[76vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>

          {/* Bottom Bar: Caption & Direct WhatsApp Consultation */}
          <div
            className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                Featured Editorial Portrait
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                Precision calibrated color and authentic emotion by Studio Manju Sri, Arrah
              </p>
            </div>

            <a
              href={createWhatsAppUrl(
                'Hello Studio Manju Sri, I am admiring your featured portrait on the website and would like to inquire about booking similar photography coverage.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-photo-modal-whatsapp"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-purple-950/60 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>INQUIRE ABOUT THIS STYLE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

function ArrowDownRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17 7 17 17 7 17" />
    </svg>
  );
}
