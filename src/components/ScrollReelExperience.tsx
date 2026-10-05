import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Film, 
  Layers, 
  Sliders, 
  Volume2, 
  VolumeX, 
  ChevronRight,
  Eye,
  Camera,
  Music,
  Tv
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface ScrollReelExperienceProps {
  onOpenBooking: () => void;
}

export const ScrollReelExperience: React.FC<ScrollReelExperienceProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0); // seconds: 0 to 30
  const [activeStage, setActiveStage] = useState(0); // 0, 1, 2, 3
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isMuted, setIsMuted] = useState(true);

  const TOTAL_DURATION = 30.0;

  useEffect(() => {
    let stage = 0;
    if (scrollProgress >= 0.75) stage = 3;
    else if (scrollProgress >= 0.5) stage = 2;
    else if (scrollProgress >= 0.25) stage = 1;
    else stage = 0;
    setActiveStage(stage);
    setPlaybackTime(scrollProgress * TOTAL_DURATION);
  }, [scrollProgress]);

  // Track scroll inside the sticky viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isAutoPlaying) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      if (totalScrollable > 0) {
        const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
        setScrollProgress((prev) => {
          if (Math.abs(prev - rawProgress) > 0.01) {
            audioSynth.playScrubTick(200 + Math.floor(rawProgress * 350));
          }
          return rawProgress;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAutoPlaying]);

  // Auto-play loop
  useEffect(() => {
    let animId: number;
    if (isAutoPlaying) {
      const step = () => {
        setScrollProgress((prev) => {
          const next = prev + 0.0025;
          if (next >= 1) {
            setIsAutoPlaying(false);
            return 1;
          }
          return next;
        });
        animId = requestAnimationFrame(step);
      };
      animId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animId);
  }, [isAutoPlaying]);

  // Render the film playback canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let tick = 0;

    const render = () => {
      tick++;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // Base background
      ctx.fillStyle = '#08080A';
      ctx.fillRect(0, 0, w, h);

      const p = scrollProgress;

      if (p < 0.25) {
        // Chapter 1: Concept & Storyboard
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 1;
        // Storyboard rule of thirds grid
        ctx.beginPath();
        ctx.moveTo(w / 3, 0); ctx.lineTo(w / 3, h);
        ctx.moveTo((w * 2) / 3, 0); ctx.lineTo((w * 2) / 3, h);
        ctx.moveTo(0, h / 3); ctx.lineTo(w, h / 3);
        ctx.moveTo(0, (h * 2) / 3); ctx.lineTo(w, (h * 2) / 3);
        ctx.stroke();

        // Director viewfinder frame
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2;
        const pad = 24;
        const corner = 20;
        // Top-left
        ctx.beginPath();
        ctx.moveTo(pad, pad + corner); ctx.lineTo(pad, pad); ctx.lineTo(pad + corner, pad);
        ctx.stroke();
        // Top-right
        ctx.beginPath();
        ctx.moveTo(w - pad - corner, pad); ctx.lineTo(w - pad, pad); ctx.lineTo(w - pad, pad + corner);
        ctx.stroke();
        // Bottom-left
        ctx.beginPath();
        ctx.moveTo(pad, h - pad - corner); ctx.lineTo(pad, h - pad); ctx.lineTo(pad + corner, h - pad);
        ctx.stroke();
        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(w - pad - corner, h - pad); ctx.lineTo(w - pad, h - pad); ctx.lineTo(w - pad, h - pad - corner);
        ctx.stroke();

        // Center focal circle
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, 40 + Math.sin(tick * 0.05) * 4, 0, Math.PI * 2);
        ctx.stroke();

      } else if (p < 0.5) {
        // Chapter 2: Cinematography & Lighting
        const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 180);
        grad.addColorStop(0, 'rgba(245, 158, 11, 0.35)');
        grad.addColorStop(0.6, 'rgba(217, 119, 6, 0.15)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // Simulated camera lens aperture blades
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(tick * 0.015);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1.5;
        const blades = 6;
        for (let i = 0; i < blades; i++) {
          ctx.rotate((Math.PI * 2) / blades);
          ctx.beginPath();
          ctx.moveTo(25, -60);
          ctx.lineTo(60, 40);
          ctx.stroke();
        }
        ctx.restore();

        // Anamorphic horizontal lens flare streak
        const flareY = cy + Math.sin(tick * 0.03) * 10;
        const flareGrad = ctx.createLinearGradient(0, flareY, w, flareY);
        flareGrad.addColorStop(0, 'rgba(6, 182, 212, 0)');
        flareGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.7)');
        flareGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.fillStyle = flareGrad;
        ctx.fillRect(0, flareY - 1.5, w, 3);

      } else if (p < 0.75) {
        // Chapter 3: Sound Design & Foley Acoustic Waveforms
        const numWaves = 40;
        const barWidth = w / numWaves - 2;
        ctx.fillStyle = 'rgba(245, 158, 11, 0.75)';

        for (let i = 0; i < numWaves; i++) {
          const waveHeight = 8 + Math.abs(Math.sin(tick * 0.08 + i * 0.25)) * 60;
          ctx.fillRect(i * (barWidth + 2), cy - waveHeight / 2, barWidth, waveHeight);
        }

        // Stereo master spectrum lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, cy - 50); ctx.lineTo(w, cy - 50);
        ctx.moveTo(0, cy + 50); ctx.lineTo(w, cy + 50);
        ctx.stroke();

        ctx.fillStyle = '#A1A1AA';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('AUDIO MASTER: 48kHz / 24-BIT STEREO', cx, cy + 80);

      } else {
        // Chapter 4: Master Broadcast Film in 1080p
        const filmGrad = ctx.createLinearGradient(0, 0, w, h);
        filmGrad.addColorStop(0, '#1c1917');
        filmGrad.addColorStop(0.5, '#0c0a09');
        filmGrad.addColorStop(1, '#09090b');
        ctx.fillStyle = filmGrad;
        ctx.fillRect(0, 0, w, h);

        // Polished product cinema subject
        ctx.save();
        ctx.translate(cx, cy);

        // Glass bottle / product silhouette
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(-40, -75, 80, 150, 16);
        ctx.fill();
        ctx.stroke();

        // Dropper cap
        ctx.fillStyle = '#D97706';
        ctx.beginPath();
        ctx.roundRect(-16, -100, 32, 25, 4);
        ctx.fill();

        // Ambient caustics
        ctx.fillStyle = '#FDE68A';
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2 + tick * 0.02;
          const dist = 60 + Math.sin(tick * 0.05 + i) * 10;
          ctx.beginPath();
          ctx.arc(Math.cos(angle) * dist, Math.sin(angle) * dist, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        // Bottom status
        ctx.fillStyle = 'rgba(245, 158, 11, 0.9)';
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('1080p FULL HD MASTER · REC.709 GRADE', cx, h - 24);
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [scrollProgress]);

  const formatTimecode = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const frames = Math.floor((seconds % 1) * 24);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(mins)}:${pad(secs)}:${pad(frames)}`;
  };

  const CHAPTERS = [
    {
      num: '01',
      title: 'Narrative Treatment & Visual Script',
      role: 'Creative Direction',
      desc: 'Developing the narrative arc, visual tone, emotional resonance, and thumb-stopping opening frames tailored to your brand identity.',
      specs: 'Screenplay & Storyboard · Director Treatment Deck',
      icon: Film,
    },
    {
      num: '02',
      title: 'Cinematography & Framing',
      role: 'Camera & Composition',
      desc: 'Carefully blocking camera trajectories, macro lens choices, and natural chiaroscuro lighting to reveal the sensory beauty of your product.',
      specs: 'Anamorphic Lenses · 1080p Full HD Resolution',
      icon: Camera,
    },
    {
      num: '03',
      title: 'Original Sound Design & Acoustic Mix',
      role: 'Audio Post-Production',
      desc: 'Crafting bespoke musical score, tactile foley effects (glass clinks, carbonation, fabric rustle), and warm, conversational voiceovers.',
      specs: '48kHz / 24-Bit Stereo Master · Voiceover Casting',
      icon: Music,
    },
    {
      num: '04',
      title: 'Final Cut & REC.709 Color Timing',
      role: 'Master Delivery',
      desc: 'Finishing with filmic color timing, contrast grading, and precise exports optimized for both cinematic 16:9 widescreen and 9:16 mobile feeds.',
      specs: '1080p Full HD Master · 16:9 Cinema & 9:16 Vertical Cuts',
      icon: Tv,
    },
  ];

  return (
    <section
      id="cinema-reel"
      ref={containerRef}
      className="relative min-h-[280vh] bg-[#070709] border-t border-b border-white/10"
    >
      {/* Sticky Fullscreen Player Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 overflow-hidden z-20">
        
        {/* Top Header of the Player */}
        <div className="flex items-center justify-between z-30 pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              THE PRODUCTION REEL
            </span>
            <span className="text-neutral-500 text-xs hidden sm:inline">|</span>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              Scroll down to scrub through the film production workflow
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                const muted = audioSynth.toggleMute();
                setIsMuted(muted);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
              <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Audio On'}</span>
            </button>

            {/* Format Toggle */}
            <div className="flex items-center bg-neutral-900 border border-white/10 rounded p-0.5 text-xs font-mono">
              <button
                onClick={() => setAspectRatio('16:9')}
                className={`px-2.5 py-0.5 rounded transition-colors ${
                  aspectRatio === '16:9' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                16:9 Cinema
              </button>
              <button
                onClick={() => setAspectRatio('9:16')}
                className={`px-2.5 py-0.5 rounded transition-colors ${
                  aspectRatio === '9:16' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                9:16 Vertical
              </button>
            </div>
          </div>
        </div>

        {/* Center Main Dual-Pane Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full max-w-7xl mx-auto">
          
          {/* Left: The Monitor Canvas */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div
              className={`relative rounded-2xl overflow-hidden cinema-border shadow-2xl transition-all duration-500 bg-neutral-950 flex items-center justify-center ${
                aspectRatio === '16:9'
                  ? 'w-full max-w-xl h-[320px] sm:h-[380px]'
                  : 'w-[260px] sm:w-[290px] h-[440px] sm:h-[480px]'
              }`}
            >
              {/* HTML5 Canvas */}
              <canvas
                ref={canvasRef}
                width={aspectRatio === '16:9' ? 640 : 320}
                height={aspectRatio === '16:9' ? 380 : 480}
                className="w-full h-full object-cover"
              />

              {/* Viewport UI Overlays */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono pointer-events-none z-10">
                <div className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>CHAPTER 0{activeStage + 1}</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-amber-300 font-bold">
                  {formatTimecode(playbackTime)}
                </div>
              </div>

              {/* 1080p Spec Watermark in frame */}
              <div className="absolute bottom-3 right-3 text-[10px] font-mono bg-black/70 px-2 py-0.5 rounded text-neutral-400 border border-white/10 pointer-events-none">
                1080p FULL HD · 24 FPS
              </div>
            </div>
          </div>

          {/* Right: Chapter Narrative & Breakdown */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400">
              <Film className="w-3.5 h-3.5" />
              <span>PRODUCTION CHAPTER 0{activeStage + 1} OF 04</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight text-balance">
              {CHAPTERS[activeStage].title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {CHAPTERS[activeStage].desc}
            </p>

            <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-white/10 text-xs font-mono text-neutral-300">
              <span className="text-amber-400 font-bold block mb-1">SPECIFICATION:</span>
              <span>{CHAPTERS[activeStage].specs}</span>
            </div>

            {/* Chapter Jump Selector Buttons */}
            <div className="grid grid-cols-4 gap-2 pt-2">
              {CHAPTERS.map((ch, idx) => (
                <button
                  key={ch.num}
                  onClick={() => {
                    const targetProgress = (idx / 4) + 0.05;
                    setScrollProgress(targetProgress);
                    audioSynth.playChime(350 + idx * 80);
                  }}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    activeStage === idx
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-md'
                      : 'bg-neutral-900/60 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <p className="text-[10px] font-mono text-amber-400">{ch.num}</p>
                  <p className="text-xs font-semibold truncate mt-0.5">{ch.role}</p>
                </button>
              ))}
            </div>

            {/* Direct Call CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95"
              >
                <span>Discuss Your Ad Film Project</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Playback Control Scrub Bar */}
        <div className="w-full bg-neutral-900/90 border border-white/10 rounded-xl p-3 backdrop-blur-xl z-30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-8 h-8 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center justify-center font-bold transition-transform active:scale-90"
                title={isAutoPlaying ? 'Pause Playback' : 'Auto Play Simulation'}
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-neutral-950" />}
              </button>
              <button
                onClick={() => {
                  setScrollProgress(0);
                  setIsAutoPlaying(false);
                }}
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition-colors"
                title="Restart Reel"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <div className="text-xs font-mono">
                <span className="text-white font-bold tabular-nums">
                  {formatTimecode(playbackTime)}
                </span>
                <span className="text-neutral-500 mx-1">/</span>
                <span className="text-neutral-400 tabular-nums">00:00:30:00</span>
              </div>
            </div>

            {/* Scrubber slider */}
            <div className="relative flex-1 w-full mx-2 flex items-center">
              <input
                type="range"
                min="0"
                max="1"
                step="0.001"
                value={scrollProgress}
                onChange={(e) => {
                  setIsAutoPlaying(false);
                  const val = parseFloat(e.target.value);
                  setScrollProgress(val);
                  audioSynth.playScrubTick(200 + Math.floor(val * 350));
                }}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>DRAG TO SCRUB REEL</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
