import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const PortfolioSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenPhoto = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  return (
    <section id="works" className="py-24 sm:py-32 bg-stone-50 text-gray-900 relative overflow-hidden border-t border-gray-200/60">
      {/* Giant Faded Watermark Typography */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[16vw] font-black uppercase text-gray-200/40 leading-none z-0 tracking-widest whitespace-nowrap font-sans"
      >
        ARCHIVE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] text-[#7C3AED] uppercase">
                // 02 Selected Works
              </span>
              <div className="h-px w-16 bg-purple-200" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950">
              Selected <span className="font-serif italic font-normal text-[#7C3AED]">Moments</span>
            </h2>
          </div>

          <div className="max-w-md text-sm text-gray-600 space-y-1">
            <p>
              A curated glimpse of royal brides, sacred rituals, and candid celebration across Arrah and Bihar.
            </p>
            <p className="text-xs font-medium text-[#7C3AED] flex items-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              Click any photograph to view high-resolution editorial details
            </p>
          </div>
        </div>

        {/* EXACTLY 2 Curated Works in a Balanced Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenPhoto(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenPhoto(item);
                }
              }}
              aria-label={`Open photograph: ${item.title}`}
              className="group relative rounded-3xl overflow-hidden bg-gray-900 cursor-pointer shadow-md hover:shadow-2xl hover:shadow-purple-950/20 transition-all duration-500 border border-gray-200/80 select-none"
            >
              {/* Aspect Ratio Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Corner Category Badge Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold tracking-wider text-white border border-white/20 uppercase shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    {item.number} • {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Zoom Icon Trigger */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-2 rounded-full bg-white/85 backdrop-blur-md text-gray-900 inline-flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Center Click to Expand Prompt */}
                <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 text-white text-xs font-semibold tracking-wider uppercase border border-white/20 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-purple-300" />
                    <span>View Photograph</span>
                  </span>
                </div>

                {/* Bottom Gradient Overlay with Title and Category */}
                <div className="absolute inset-x-0 bottom-0 pt-24 pb-6 px-6 bg-gradient-to-t from-[#130722]/95 via-[#130722]/60 to-transparent flex flex-col justify-end text-white pointer-events-none">
                  <span className="text-[11px] font-bold tracking-widest text-purple-300 uppercase mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-1 opacity-85">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Curated 2-Plate Archive • High-Resolution Film Lab Calibration
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        item={selectedItem}
        items={PORTFOLIO_ITEMS}
        onClose={() => setIsLightboxOpen(false)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
};
