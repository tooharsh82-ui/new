import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-24 sm:py-28 bg-[#18082c] text-white relative overflow-hidden border-t border-purple-900/30"
    >
      {/* Subtle Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[16vw] font-black uppercase text-purple-600/[0.03] leading-none z-0 tracking-widest whitespace-nowrap"
      >
        REVIEWS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header and Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase">
                // 05 What Clients Say
              </span>
              <div className="h-px w-16 bg-purple-500/30" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Words From{' '}
              <span className="font-serif italic font-normal text-purple-300">
                Our Cherished Clients
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-purple-500/20 text-xs text-purple-200">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </span>
            <span className="font-bold text-white">5.0 Star Rating</span>
            <span className="text-purple-300/70">• 31 Reviews in Arrah</span>
          </div>
        </div>

        {/* 3 Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.id}
              id={`testimonial-card-${idx + 1}`}
              className="p-8 rounded-3xl bg-white/[0.03] border border-purple-500/20 hover:border-purple-400/40 backdrop-blur-sm shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-purple-400/30" />
                </div>

                {/* Highlight Tag */}
                <span className="text-[11px] font-bold tracking-widest text-purple-300 uppercase block mb-3">
                  {review.highlight}
                </span>

                {/* Main Quote */}
                <p className="text-base sm:text-lg font-serif italic text-purple-100/95 leading-relaxed mb-6">
                  “{review.quote}”
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-purple-900/60 border border-purple-500/30 text-purple-200 font-bold text-xs flex items-center justify-center">
                    {review.author.charAt(0)}
                  </span>
                  <div>
                    <strong className="block text-sm font-semibold text-white">
                      {review.author}
                    </strong>
                    <span className="text-[11px] text-purple-300/70">Client Review • Arrah</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
