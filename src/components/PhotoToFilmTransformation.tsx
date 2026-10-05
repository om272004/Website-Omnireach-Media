import React, { useRef, useState, useEffect } from 'react';
import { Camera, Sparkles, Wand2, Music, Film, ArrowRight, ShieldCheck, Layers, Play } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface PhotoToFilmTransformationProps {
  onOpenBooking: () => void;
}

export const PhotoToFilmTransformation: React.FC<PhotoToFilmTransformationProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;

      if (totalScrollable > 0) {
        const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
        setScrollProgress((prev) => {
          if (Math.abs(prev - rawProgress) > 0.02) {
            audioSynth.playScrubTick(260 + Math.floor(rawProgress * 200));
          }
          return rawProgress;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active phase based on scrollProgress
  const phase = scrollProgress < 0.33 ? 1 : scrollProgress < 0.66 ? 2 : 3;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[190vh] bg-gradient-to-b from-[#070709] via-neutral-950 to-[#070709] border-t border-b border-white/10"
    >
      {/* Sticky Transformation Viewport */}
      <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PRODUCTION PIPELINE IN ACTION</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display">
              Scroll to watch a static photo transform into a commercial ad film.
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-neutral-400">STAGE 0{phase} OF 03</span>
            <div className="w-24 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 transition-all duration-150"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Center Visual Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full">
          
          {/* Left: Interactive Canvas Transformation Frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-lg h-[260px] sm:h-[320px] rounded-2xl overflow-hidden cinema-border cinema-glass bg-neutral-950 shadow-2xl flex items-center justify-center p-6">
              
              {/* Background Glow shifting with progress */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: phase === 1 
                    ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 70%)'
                    : phase === 2
                    ? 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.25), transparent 70%)'
                    : 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.35), rgba(6,182,212,0.15), transparent 80%)'
                }}
              />

              {/* STAGE 1: Static Raw Photo */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                  phase === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="w-28 h-36 rounded-xl border-2 border-dashed border-white/30 flex flex-col items-center justify-center bg-white/5 p-3">
                  <Camera className="w-8 h-8 text-neutral-400 mb-2" />
                  <span className="text-[10px] font-mono text-neutral-300 text-center font-bold">
                    RAW PRODUCT PHOTO
                  </span>
                  <span className="text-[9px] font-mono text-neutral-500 text-center mt-1">
                    Smartphone or DSLR
                  </span>
                </div>
                <div className="mt-4 px-3 py-1 rounded bg-black/60 border border-white/10 text-[11px] font-mono text-neutral-300">
                  Step 1: Client supplies high-resolution photos
                </div>
              </div>

              {/* STAGE 2: Neural Art Direction & Lighting */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                  phase === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {/* Simulated 3D Tracking lines & caustics */}
                <div className="relative w-36 h-44 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl border border-amber-400/60 animate-pulse" />
                  
                  {/* Fluid liquid rings */}
                  <div className="w-20 h-20 rounded-full border border-amber-400/40 animate-ping absolute" />
                  
                  {/* Dropper silhouette */}
                  <div className="w-16 h-28 rounded-lg bg-amber-500/20 border border-amber-400 flex flex-col items-center justify-center backdrop-blur-xs">
                    <Wand2 className="w-6 h-6 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                  </div>
                </div>

                <div className="mt-4 px-3.5 py-1.5 rounded-lg bg-black/70 border border-amber-400/30 text-xs font-mono text-amber-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Cinematic lighting synthesis & fluid simulation</span>
                </div>
              </div>

              {/* STAGE 3: Final Commercial Ad Film (Upto 1080p) */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                  phase === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="relative w-44 h-36 rounded-xl overflow-hidden cinema-border bg-gradient-to-br from-amber-600/30 to-stone-950 flex flex-col items-center justify-center p-3 shadow-2xl">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-lg mb-2">
                    <Play className="w-5 h-5 fill-neutral-950 translate-x-0.5" />
                  </div>
                  <span className="text-xs font-bold text-white font-display">
                    Lumé Skincare Film
                  </span>
                  <span className="text-[10px] font-mono text-amber-300">
                    Upto 1080p Full HD
                  </span>
                </div>

                <div className="mt-4 px-3.5 py-1.5 rounded-lg bg-black/80 border border-emerald-500/40 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Minimal to no AI artifacts · 1080p Master</span>
                </div>
              </div>

              {/* Viewport markers */}
              <div className="absolute top-3 left-3 text-[10px] font-mono bg-black/70 px-2 py-0.5 rounded text-neutral-400 border border-white/10 pointer-events-none">
                AI PRODUCTION WORKFLOW
              </div>

              <div className="absolute top-3 right-3 text-[10px] font-mono font-bold bg-neutral-900 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded pointer-events-none">
                UPTO 1080p
              </div>
            </div>
          </div>

          {/* Right: Narrative Description for the active phase */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 text-left">
            {phase === 1 && (
              <div className="space-y-3">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  Phase 01 · High-Resolution Input
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  You only supply clear product photos.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  No need to ship inventory, book actors, or rent physical stages. Take high-resolution photos of your product from multiple angles on any smartphone or camera and send them to our team digitally.
                </p>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-white/10 text-xs font-mono text-neutral-400">
                  Zero customs shipping · 100% remote global handoff
                </div>
              </div>
            )}

            {phase === 2 && (
              <div className="space-y-3">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  Phase 02 · Art Direction & Neural Synthesis
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  We generate cinematic camera moves & fluid physics.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Our directors build custom 3D lighting, macro fluid dynamics, steam plumes, and natural human lifestyle interactions around your exact product geometry.
                </p>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-amber-400/20 text-xs font-mono text-amber-300">
                  Engineered with minimal to no AI artifacts
                </div>
              </div>
            )}

            {phase === 3 && (
              <div className="space-y-3">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                  Phase 03 · Master 1080p Delivery
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Complete commercial ad film ready in 48–72 hours.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Delivered in up to 1080p Full HD with synchronized sound design, tactile foley, broadcast voiceover, and multi-format cuts for YouTube (16:9) and Meta/TikTok (9:16).
                </p>
                <button
                  onClick={onOpenBooking}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95"
                >
                  <span>Start Your Brand Production</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Hint */}
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2 border-t border-white/10">
          <span>CONTINUE SCROLLING TO EXPLORE PORTFOLIO</span>
          <span className="text-amber-400">UPTO 1080p RESOLUTION</span>
        </div>

      </div>
    </section>
  );
};
