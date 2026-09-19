import React from 'react';
import { Camera, Sparkles, Tag, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/content';

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'Unrivaled Photo Quality',
      subtitle: 'Client-Praised Clarity',
      description:
        'Client reviews specifically praise our exceptional photo quality, sharp optics, and calibrated natural color chemistry that stays vibrant over decades.',
    },
    {
      icon: Sparkles,
      title: 'Genuine Emotional Moments',
      subtitle: 'Unscripted Observation',
      description:
        'We specialize in capturing real, unforced emotions—the quiet tear during the vidai, spontaneous bursts of family laughter, and tender glances.',
    },
    {
      icon: Tag,
      title: 'Affordable Luxury Pricing',
      subtitle: 'Transparent & Accessible',
      description:
        'Reflecting genuine client satisfaction ("book it at the lowest price"), we deliver premium editorial standards without inflated agency markups.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-gray-900 relative overflow-hidden">
      {/* Background oversized faded typography */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none text-[15vw] font-black uppercase text-gray-100/60 leading-none z-0 tracking-tighter"
      >
        VISION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold tracking-[0.2em] text-[#7C3AED] uppercase">
            // 01 Our Story
          </span>
          <div className="h-px w-16 bg-purple-200" />
        </div>

        {/* Section Heading & Introductory Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-[1.15]">
              Preserving <br />
              <span className="font-serif italic font-normal text-[#7C3AED]">
                The Sacred & Genuine Moments
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At <strong className="font-semibold text-gray-900">{BUSINESS_INFO.name}</strong>, based near 
              <span className="text-gray-900"> Sapna Cinema, Shivganj, Arrah</span>, our craft is founded on quiet 
              observation rather than loud artificial staging. We believe the true spirit of any celebration lives in 
              the unscripted pauses—the mother’s blessing, the groom’s stolen smile, and the spirited jubilation of your loved ones.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Across Arrah and Bihar, clients specifically recommend our studio for our outstanding photo clarity, 
              patient and respectful demeanor during sacred traditions, and our commitment to making world-class photography 
              accessible to every household.
            </p>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl("Hello Studio Manju Sri, I would like to consult with you regarding an upcoming photography booking in Arrah.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#7C3AED] hover:text-[#5B21B6] uppercase border-b-2 border-[#7C3AED] pb-1 transition-colors group"
              >
                <span>CONSULT WITH OUR LEAD PHOTOGRAPHER</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pt-3">
            <div className="p-8 sm:p-10 rounded-3xl bg-purple-50/60 border border-purple-100/80 shadow-sm relative">
              <span className="text-xs font-bold tracking-widest uppercase text-purple-600 block mb-2">
                Philosophy of Craft
              </span>
              <blockquote className="text-lg sm:text-xl font-serif italic text-gray-800 leading-relaxed mb-6">
                “Memories should feel as vivid thirty years later as they felt in the exact split-second they occurred.”
              </blockquote>
              <div className="pt-4 border-t border-purple-200/60 flex items-center justify-between text-xs text-gray-600 font-medium">
                <span>Studio Manju Sri • Shivganj, Arrah</span>
                <span className="text-purple-700 font-semibold">EST. ARRAH, BIHAR</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Small Feature Cards (Photo Quality, Genuine Moments, Affordable Pricing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 sm:mt-20">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                id={`about-feature-${idx + 1}`}
                className="p-7 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] hover:border-purple-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center mb-5 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-purple-600 block mb-1">
                  {feature.subtitle}
                </span>
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
