import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Hello Studio Manju Sri, I am visiting your portfolio website and would like to inquire about booking photography coverage.'
  );

  return (
    <aside
      aria-label="Contact Studio on WhatsApp"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#130722]/90 hover:bg-[#1f0a38] border border-purple-500/40 text-white text-xs font-bold tracking-wider uppercase shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_35px_rgba(124,58,237,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-105"
      >
        {/* Glowing Pulsing Status Indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7C3AED]" />
        </span>

        <MessageCircle className="w-4 h-4 text-purple-300 group-hover:text-purple-200 transition-colors" />
        <span className="text-white drop-shadow">WHATSAPP STUDIO</span>
      </a>
    </aside>
  );
};
