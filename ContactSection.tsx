import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Navigation, Send, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, SPECIALITY_ITEMS, createWhatsAppUrl } from '../data/content';
import { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    occasion: 'Wedding Photography',
    name: '',
    date: '',
    note: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      `Hello Studio Manju Sri, I would like to book / inquire for a photo session:`,
      `• Occasion: ${formData.occasion}`,
      formData.name ? `• Name: ${formData.name}` : null,
      formData.date ? `• Tentative Date: ${formData.date}` : null,
      formData.note ? `• Details/Note: ${formData.note}` : null,
    ].filter(Boolean);

    const message = parts.join('\n');
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#130722] via-[#1d0833] to-[#2c0b4d] text-white relative overflow-hidden"
    >
      {/* Watermark Word */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 bottom-10 -translate-x-1/2 pointer-events-none select-none text-[18vw] font-black uppercase text-purple-600/[0.04] leading-none z-0 tracking-widest whitespace-nowrap"
      >
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Main Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase">
              // 04 Get In Touch
            </span>
            <div className="h-px w-16 bg-purple-500/30" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Let's Create <br />
            <span className="font-serif italic font-normal text-purple-300">
              Something Memorable.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-purple-200/80 mt-4 leading-relaxed">
            Have a special moment coming up? We would love to help turn it into a memory you will always cherish.
            Reach us directly via phone, WhatsApp, or plan your session below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Studio Line, Operating Hours & Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Phone & Instant WhatsApp CTA Card */}
            <div
              id="contact-studio-line-card"
              className="p-7 sm:p-8 rounded-3xl bg-white/[0.05] border border-purple-500/30 backdrop-blur-md shadow-xl"
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-bold tracking-widest uppercase text-purple-300">
                  Direct Studio Line & WhatsApp
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-[11px] font-semibold text-purple-200 border border-purple-400/20">
                  Quick Response
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white my-3">
                {BUSINESS_INFO.phone}
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-5">
                <a
                  href={createWhatsAppUrl("Hello Studio Manju Sri, I would like to speak directly with your team about booking a shoot.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-semibold tracking-wider transition-all shadow-md shadow-purple-900/40"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>CHAT ON WHATSAPP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  id="contact-call-button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-purple-400/30 text-white text-xs font-semibold tracking-wider transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-300" />
                  <span>CALL DIRECTLY</span>
                </a>
              </div>
            </div>

            {/* Quick Info Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-purple-500/20">
                <div className="flex items-center gap-2 text-purple-300 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider uppercase">Studio Hours</span>
                </div>
                <p className="text-sm font-medium text-white">{BUSINESS_INFO.hours}</p>
                <p className="text-xs text-purple-200/60 mt-0.5">Open 7 days a week</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-purple-500/20">
                <div className="flex items-center gap-2 text-purple-300 mb-1">
                  <Navigation className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider uppercase">Location Coverage</span>
                </div>
                <p className="text-sm font-medium text-white">{BUSINESS_INFO.coverage}</p>
                <p className="text-xs text-purple-200/60 mt-0.5">Studio & Destination Events</p>
              </div>
            </div>

            {/* Shoot Inquiry Form */}
            <div
              id="contact-inquiry-form-card"
              className="p-7 sm:p-8 rounded-3xl bg-white/[0.04] border border-purple-500/20 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                <span className="text-xs font-bold tracking-widest text-purple-300 uppercase">
                  Instant Shoot Inquiry
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Plan Your Session
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="occasion-select" className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-2">
                    Select Occasion
                  </label>
                  <select
                    id="occasion-select"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-700/50 text-white text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                  >
                    {SPECIALITY_ITEMS.map((item) => (
                      <option key={item.id} value={item.title} className="bg-[#130722] text-white">
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-2">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="inquiry-name"
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-700/50 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-date" className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-2">
                      Tentative Date
                    </label>
                    <input
                      type="text"
                      id="inquiry-date"
                      placeholder="e.g. November 2026"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-700/50 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-note" className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-2">
                    Short Note or Questions
                  </label>
                  <textarea
                    id="inquiry-note"
                    rows={3}
                    placeholder="e.g. Looking for 2-day wedding & candid coverage in Arrah"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-purple-700/50 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                  />
                </div>

                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-950/60 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND INQUIRY VIA WHATSAPP</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: "Find Us" Card & Google Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Find Us Address Card */}
            <div
              id="contact-address-card"
              className="p-7 rounded-3xl bg-white/[0.04] border border-purple-500/25 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest text-purple-300 uppercase">
                  // Studio Location
                </span>
                <span className="text-xs font-mono text-purple-200/70 bg-purple-900/50 px-2.5 py-1 rounded-md">
                  Plus Code: {BUSINESS_INFO.plusCode}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Find <span className="font-serif italic font-normal text-purple-300">Us</span>
              </h3>

              <div className="space-y-3 mt-4 text-sm text-purple-100/90">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">{BUSINESS_INFO.name}</strong>
                    <span>{BUSINESS_INFO.address}</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-purple-200/70">
                  <span className="font-semibold text-purple-300">Landmark:</span> Near Sapna Cinema, Shivganj
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-purple-800/40">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="google-maps-directions-link"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-purple-300 hover:text-white transition-colors"
                >
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Frame */}
            <div
              id="google-maps-embed-container"
              className="rounded-3xl overflow-hidden border border-purple-500/25 shadow-2xl h-[320px] bg-purple-950/40 relative"
            >
              <iframe
                title="Studio Manju Sri Location Map in Shivganj Arrah Bihar"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.05] grayscale-[20%]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
