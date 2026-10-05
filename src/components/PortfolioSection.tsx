import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { PORTFOLIO_FILMS } from '../data/portfolioData';
import { PortfolioFilm } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { audioSynth } from '../utils/audioSynth';

interface PortfolioSectionProps {
  onOpenBooking: () => void;
  onOpenFreeSample: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBooking, onOpenFreeSample }) => {
  const [selectedFilm, setSelectedFilm] = useState<PortfolioFilm | null>(null);

  const handleOpenFilm = (film: PortfolioFilm) => {
    audioSynth.playChime(520);
    setSelectedFilm(film);
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative border-t border-white/10 bg-neutral-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with subtle fade-in and slide-up */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SAMPLE CONCEPT FILMS</span>
              <span className="text-neutral-600">/</span>
              <span>DEMO WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display text-balance">
              What AI commercial video actually looks like.
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-neutral-400 max-w-md font-light leading-relaxed">
            <p>
              These concept films were synthesized from static product photos using our AI production pipeline. Delivered in <strong className="text-white font-medium">up to 1080p Full HD</strong> with <strong className="text-amber-400 font-medium">minimal to no AI artifacts</strong>. Click any film to watch with audio.
            </p>
          </div>
        </motion.div>

        {/* 3 Featured Concept Films Grid with Staggered whileInView */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_FILMS.slice(0, 3).map((film, idx) => (
            <motion.div
              key={film.id}
              onClick={() => handleOpenFilm(film)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden cinema-border cinema-glass bg-neutral-950/90 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Media Preview Stage */}
              <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden flex items-center justify-center">
                {film.videoSrc ? (
                  <video
                    src={film.videoSrc}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${film.gradientTheme} flex items-center justify-center p-6`} />
                )}

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30 pointer-events-none" />

                {/* Concept Film Badge */}
                <div className="absolute top-3 left-3 text-[10px] font-mono font-bold bg-black/80 backdrop-blur-md text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded">
                  CONCEPT FILM
                </div>

                {/* Resolution Badge */}
                <div className="absolute top-3 right-3 text-[10px] font-mono font-bold bg-neutral-900/90 text-neutral-300 border border-white/10 px-2 py-0.5 rounded">
                  Up to 1080p
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 fill-neutral-950 translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-neutral-300">
                  {film.duration} · With Audio
                </div>
              </div>

              {/* Information Container */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1.5">
                    <span className="text-amber-400 font-semibold">{film.brand}</span>
                    <span className="text-[11px] text-neutral-500">{film.industry}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                    {film.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-light line-clamp-2">
                    {film.tagline}
                  </p>
                </div>

                {/* Card Bottom Row */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Watch Full Film</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-neutral-500">48h Delivery</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Sample Low-Friction Banner */}
        <motion.div 
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-amber-950/30 cinema-border flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              <span>Test with your own product</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-display">
              Want to see your product in an ad film? Get a free 5-second sample.
            </h4>
            <p className="text-xs text-neutral-400 font-light max-w-xl">
              Upload 1 photo. We’ll generate a 5-second concept scene within 24 hours so you can evaluate the motion, lighting, and texture quality before spending anything.
            </p>
          </div>

          <button
            onClick={onOpenFreeSample}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>Request Free Sample</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>

      {/* Case Study / Film Inspector Modal */}
      <CaseStudyModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
