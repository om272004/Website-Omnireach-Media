import React, { useState } from 'react';
import { ArrowRight, Play, Film, Sparkles, Globe, ShieldCheck } from 'lucide-react';
import { TRUSTED_CLIENTS } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExplorePortfolio }) => {
  const [activeRatio, setActiveRatio] = useState<'16:9' | '9:16'>('16:9');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle warm atmospheric light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Worldwide Remote Production Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-amber-400 mb-6">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>Worldwide Creative Production · Only Product Photos Needed</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance mb-6 font-display">
              Commercial ad films crafted with <span className="text-amber-400 font-serif italic font-normal">cinematic intention</span>.
            </h1>

            {/* Sub-headline: Clear, authentic copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 font-light">
              OmniReach Media produces commercial ad films, D2C brand films, and sensory product spots for brands anywhere in the world. You never need to ship physical products—just provide high-resolution photos, and we deliver broadcast-ready ad films in <strong className="text-white font-medium">up to 1080p Full HD</strong> with <strong className="text-amber-400 font-medium">minimal to no AI artifacts</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={onOpenBooking}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-500/15 transition-all active:scale-95"
              >
                <span>Schedule Creative Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePortfolio}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-neutral-900/80 hover:bg-neutral-800 border border-white/15 rounded-lg transition-all"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Standards Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <p className="text-lg sm:text-xl font-bold font-mono text-white">Upto 1080p</p>
                <p className="text-xs text-neutral-400 mt-0.5">Full HD Master Delivery</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-mono text-white">Minimal Artifacts</p>
                <p className="text-xs text-neutral-400 mt-0.5">Clean Human & Fluid Physics</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-mono text-white">Worldwide</p>
                <p className="text-xs text-neutral-400 mt-0.5">Only Product Photos Needed</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame (Optimal Dimensions, No Fullscreen) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Format Selector */}
            <div className="w-full max-w-md flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                PREVIEW MONITOR
              </span>
              <div className="flex items-center gap-1 bg-neutral-900 border border-white/10 rounded-md p-0.5 text-xs font-mono">
                <button
                  onClick={() => setActiveRatio('16:9')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeRatio === '16:9'
                      ? 'bg-amber-400 text-neutral-950 font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  16:9 Cinema
                </button>
                <button
                  onClick={() => setActiveRatio('9:16')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeRatio === '9:16'
                      ? 'bg-amber-400 text-neutral-950 font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  9:16 Vertical
                </button>
              </div>
            </div>

            {/* Monitor Box in Controlled Aesthetic Dimension */}
            <div
              className={`relative mx-auto rounded-2xl overflow-hidden cinema-border cinema-glass transition-all duration-500 shadow-2xl ${
                activeRatio === '9:16' ? 'w-[260px] h-[440px]' : 'w-full max-w-md h-[270px]'
              }`}
            >
              {/* Simulated Scene Graphic */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-neutral-950 to-neutral-950 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.35),transparent_70%)] animate-pulse" />
                
                {/* Visual Art Direction Composition */}
                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center mb-3 shadow-xl">
                    <Play className="w-5 h-5 text-amber-400 fill-amber-400 translate-x-0.5" />
                  </div>
                  <span className="text-xs font-mono text-amber-300 font-semibold tracking-wider">
                    LUMÉ BOTANICAL SERUM
                  </span>
                  <p className="text-sm font-bold text-white font-display mt-0.5">
                    Light, In Its Purest Form
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 max-w-[200px] font-light">
                    Micro droplet caustics · 1080p Full HD
                  </p>
                </div>

                {/* Film Overlay Markers */}
                <div className="absolute top-2.5 left-2.5 text-[10px] font-mono bg-black/70 px-2 py-0.5 rounded text-neutral-300 flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>REC · 1080p 60FPS</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-neutral-300">
                  <span>ZERO ARTIFACTS</span>
                  <span className="text-amber-400">REC.709 MASTER</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Selected Client Names Strip */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 text-center mb-6">
            Commercial ad films produced for modern brands worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75">
            {TRUSTED_CLIENTS.map((client) => (
              <span
                key={client}
                className="text-sm md:text-base font-semibold tracking-wider text-neutral-300 hover:text-white transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
