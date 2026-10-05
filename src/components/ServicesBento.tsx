import React from 'react';
import { ArrowRight, Film, CheckCircle2, Tv, Sparkles, Languages } from 'lucide-react';
import { AGENCY_SERVICES } from '../data/portfolioData';

interface ServicesBentoProps {
  onOpenBooking: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <span>PRODUCTION CAPABILITIES</span>
            <span className="text-neutral-600">/</span>
            <span>END-TO-END AD SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display text-balance">
            Complete commercial ad production in 1080p Full HD.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-light">
            From top-tier 16:9 brand commercials to high-velocity vertical reels for Meta and YouTube, we handle creative direction, cinematography, voiceover casting, and master post-production.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENCY_SERVICES.map((svc, idx) => (
            <div
              key={svc.id}
              className={`p-6 sm:p-8 rounded-2xl cinema-border cinema-glass flex flex-col justify-between group hover:border-amber-400/40 transition-all duration-300 ${
                idx === 0 || idx === 3 ? 'bg-gradient-to-br from-neutral-900/90 to-neutral-950' : 'bg-neutral-900/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                  <span className="text-amber-400 font-bold">0{idx + 1}.</span>
                  <span className="text-neutral-400">1080p Full HD</span>
                </div>

                <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                  {svc.title}
                </h3>

                <p className="text-sm text-neutral-300 mt-3 leading-relaxed font-light">
                  {svc.desc}
                </p>

                {/* Formats inline list */}
                <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-neutral-400">
                  {svc.formats.map((fmt, fIdx) => (
                    <React.Fragment key={fmt}>
                      <span>{fmt}</span>
                      {fIdx < svc.formats.length - 1 && <span aria-hidden="true" className="text-neutral-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Specs & Booking CTA */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  {svc.specs}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-amber-400 transition-colors"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
