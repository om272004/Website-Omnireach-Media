import React, { useState } from 'react';
import { Play, ArrowUpRight, Film, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_FILMS } from '../data/portfolioData';
import { AdCategory, PortfolioFilm } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface PortfolioSectionProps {
  onOpenBooking: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<AdCategory>('all');
  const [selectedFilm, setSelectedFilm] = useState<PortfolioFilm | null>(null);

  const filteredFilms = PORTFOLIO_FILMS.filter((film) => {
    if (activeFilter === 'all') return true;
    return film.category === activeFilter;
  });

  const FILTERS: { id: AdCategory; label: string }[] = [
    { id: 'all', label: 'All Ad Films' },
    { id: 'product_spot', label: 'Product Spots (Lumé, etc.)' },
    { id: 'commercial_film', label: 'Commercial Films (16:9)' },
    { id: 'vertical_reels', label: 'Lifestyle & Social Reels' },
    { id: 'local_business', label: 'Local Business Films' },
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <span>SELECTED COMMERCIAL PORTFOLIO</span>
              <span className="text-neutral-600">/</span>
              <span>UPTO 1080P MASTER OUTPUT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display text-balance">
              Commercial ad films crafted with narrative purpose.
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-neutral-400 max-w-md font-light leading-relaxed">
            <p>
              Delivered in <strong className="text-white font-medium">up to 1080p Full HD</strong> with <strong className="text-amber-400 font-medium">minimal to no AI artifacts</strong>. Produced entirely from high-resolution product photography for brands worldwide.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900/90 border border-white/10 rounded-xl overflow-x-auto mb-12 max-w-full">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === f.id
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Film Cards Grid - Optimal sizing where video looks crisp */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFilms.map((film) => (
            <article
              key={film.id}
              onClick={() => setSelectedFilm(film)}
              className="group relative flex flex-col rounded-2xl overflow-hidden cinema-border cinema-glass hover:border-amber-400/40 transition-all duration-300 cursor-pointer bg-neutral-950/70"
            >
              {/* Media Preview Box (Optimal Aspect Ratio Frame) */}
              <div
                className={`relative w-full h-60 overflow-hidden bg-gradient-to-br ${film.gradientTheme} flex items-center justify-center p-6`}
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
                
                {/* Play Trigger Center */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-13 h-13 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-amber-400 transition-all">
                    <Play className="w-5 h-5 text-amber-400 fill-amber-400 translate-x-0.5" />
                  </div>
                  <p className="text-xs font-mono text-neutral-300 mt-2.5 font-medium">
                    {film.categoryLabel}
                  </p>
                </div>

                {/* Aspect Ratio & 1080p Quality Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-mono bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-neutral-300 border border-white/10">
                  <span>{film.aspectRatio}</span>
                  <span className="text-neutral-500">·</span>
                  <span>{film.duration}</span>
                </div>

                <div className="absolute top-3 right-3 text-[10px] font-mono font-bold bg-neutral-900/90 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded">
                  Upto 1080p
                </div>

                {/* Hover Reveal Action */}
                <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-neutral-950 font-semibold text-xs shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Film & Treatment</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <span className="text-amber-400 font-semibold">{film.brand}</span>
                    <span aria-hidden="true">·</span>
                    <span>{film.origin}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-300 transition-colors leading-snug">
                    {film.title}
                  </h3>

                  <p className="text-xs text-neutral-300 mt-2 line-clamp-2 leading-relaxed font-light">
                    {film.tagline}
                  </p>
                </div>

                {/* Industry & Inspection trigger */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="text-neutral-400 truncate max-w-[190px]">
                    {film.industry}
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedFilm && (
        <CaseStudyModal
          film={selectedFilm}
          onClose={() => setSelectedFilm(null)}
          onOpenBooking={onOpenBooking}
        />
      )}
    </section>
  );
};
