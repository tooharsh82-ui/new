import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SPECIALITY_ITEMS, createWhatsAppUrl } from '../data/content';

export const SpecialitiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Weddings' | 'Portraits' | 'Events'>('All');

  const filterTabs: Array<'All' | 'Weddings' | 'Portraits' | 'Events'> = [
    'All',
    'Weddings',
    'Portraits',
    'Events',
  ];

  const filteredItems = SPECIALITY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="specialities" className="py-24 sm:py-32 bg-white text-gray-900 relative overflow-hidden">
      {/* Background Watermark Typography */}
      <div
        aria-hidden="true"
        className="absolute right-4 top-1/3 pointer-events-none select-none text-[15vw] font-black uppercase text-gray-100/70 leading-none z-0 tracking-tight"
      >
        CRAFT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] text-[#7C3AED] uppercase">
                // 03 Our Specialities
              </span>
              <div className="h-px w-16 bg-purple-200" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950">
              Our Craft &{' '}
              <span className="font-serif italic font-normal text-[#7C3AED]">
                Specialities
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200/80 text-xs font-semibold text-[#7C3AED]">
            <Sparkles className="w-4 h-4 text-[#7C3AED]" />
            <span>Tailored Photography & Cinema in Arrah, Bihar</span>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {filterTabs.map((tab) => {
            const count =
              tab === 'All'
                ? SPECIALITY_ITEMS.length
                : SPECIALITY_ITEMS.filter((s) => s.category === tab).length;

            const isSelected = activeFilter === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                id={`specialities-filter-${tab.toLowerCase()}`}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#7C3AED] text-white shadow-[0_2px_10px_rgba(124,58,237,0.35)]'
                    : 'bg-gray-100/90 text-gray-600 hover:bg-gray-200/80'
                }`}
              >
                {tab} ({count})
              </button>
            );
          })}
        </div>

        {/* EXACTLY 7 Cards Grid (Filtered View) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`service-card-${item.id}`}
              className="p-7 rounded-3xl bg-white border border-gray-200/80 hover:border-purple-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header row: Number and Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-sm font-bold text-purple-600">
                    {item.number}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 text-[10px] font-bold tracking-widest text-[#7C3AED] uppercase">
                    <span className="w-1 h-1 rounded-full bg-[#7C3AED]" />
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3 group-hover:text-[#7C3AED] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Inquire via WhatsApp Link */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={createWhatsAppUrl(item.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-bold tracking-wider text-gray-700 group-hover:text-[#7C3AED] transition-colors"
                >
                  <span>Inquire via WhatsApp</span>
                  <span className="w-7 h-7 rounded-full bg-purple-50 group-hover:bg-[#7C3AED] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
