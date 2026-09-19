import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../types';
import { createWhatsAppUrl } from '../data/content';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onSelect,
}) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : 0;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]);
    }
  }, [currentIndex, items, onSelect]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]);
    }
  }, [currentIndex, items, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div
      id="portfolio-lightbox"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between z-20" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-purple-600/80 text-white text-xs font-semibold tracking-wider uppercase">
            {item.categoryLabel}
          </span>
          <span className="text-gray-400 text-xs tracking-widest font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          id="lightbox-close-btn"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          id="lightbox-prev-btn"
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-purple-900/70 border border-white/20 text-white transition-all hover:scale-110"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Photograph */}
        <div className="max-w-5xl max-h-[75vh] w-full flex items-center justify-center">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          id="lightbox-next-btn"
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-purple-900/70 border border-white/20 text-white transition-all hover:scale-110"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Bar: Title, Description, WhatsApp Direct Inquiry */}
      <div
        className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h4 className="text-white text-lg sm:text-xl font-bold tracking-tight">
            {item.title}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm mt-0.5 line-clamp-1">
            {item.description}
          </p>
        </div>

        <a
          href={createWhatsAppUrl(`Hello Studio Manju Sri, I love this photograph "${item.title}" (${item.categoryLabel}) from your portfolio and would like to inquire about similar shoot coverage.`)}
          target="_blank"
          rel="noopener noreferrer"
          id="lightbox-whatsapp-inquire"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-semibold tracking-wider transition-colors shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>INQUIRE ABOUT THIS STYLE</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
