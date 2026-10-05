import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Pause, RotateCcw, Volume2, VolumeX, Globe, Sparkles, Zap } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface HeroSectionProps {
  onOpenFreeSample: () => void;
  onExplorePortfolio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenFreeSample, onExplorePortfolio }) => {
  const [activeRatio, setActiveRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(14);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    audioSynth.playScrubTick(320);

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
        }
      });
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
    audioSynth.playScrubTick(360);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    audioSynth.playScrubTick(280);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      if (video.duration) setDuration(video.duration);
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Warm ambient studio backlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Direct High-Converting Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Value Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-amber-400 mb-6">
              <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>AI Commercial Ad Production · Available Worldwide</span>
            </div>

            {/* Direct High-Converting Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance mb-6 font-display">
              Send us product photos. Get a finished ad film in 48 hours.
            </h1>

            {/* Clear Authentic Value Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 font-light">
              Skip 5-week shoot delays and ₹5-lakh studio invoices. We turn static product photos into broadcast-ready commercial ad films using AI video production with human creative direction. Delivered in <strong className="text-white font-medium">up to 1080p Full HD</strong> with <strong className="text-amber-400 font-medium">minimal to no AI artifacts</strong>. Pricing starts as low as <strong className="text-white font-medium">₹10,000 / $120</strong> for a single video, and from <strong className="text-white font-medium">₹25,000 / $300</strong> for retainers with multiple deliverables.
            </p>

            {/* Action Buttons: Low friction first step */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenFreeSample}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-500/15 transition-all active:scale-95"
              >
                <span>Get a Free 5-Second Sample</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePortfolio}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-white/15 rounded-lg transition-all"
              >
                <span>Watch Demo Work</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Value Highlights Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <p className="text-lg sm:text-xl font-bold font-mono text-white">From ₹10k</p>
                <p className="text-xs text-neutral-400 mt-0.5">Single Video Ad</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-mono text-white">From ₹25k</p>
                <p className="text-xs text-neutral-400 mt-0.5">Retainers (Multi-Asset)</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-mono text-white">48–72h</p>
                <p className="text-xs text-neutral-400 mt-0.5">Fast Turnaround</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Video Monitor */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Format Selector */}
            <div className="w-full max-w-md flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>DEMO VIDEO PREVIEW</span>
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
              onClick={togglePlay}
              className={`relative mx-auto rounded-2xl overflow-hidden cinema-border cinema-glass transition-all duration-500 shadow-2xl cursor-pointer group ${
                activeRatio === '9:16' ? 'w-[260px] h-[440px]' : 'w-full max-w-md h-[270px]'
              }`}
            >
              {/* Native Video Element from public/videos/lume-serum.mp4 */}
              <video
                ref={videoRef}
                src="/videos/lume-serum.mp4"
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
              />

              {/* Poster / Play Overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center transition-all duration-300">
                  <div className="flex flex-col items-center text-center p-6">
                    <button
                      type="button"
                      aria-label="Play video"
                      className="w-16 h-16 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 active:scale-95"
                    >
                      <Play className="w-6 h-6 fill-neutral-950 translate-x-0.5" />
                    </button>
                    <span className="text-xs font-mono text-amber-300 font-semibold tracking-wider">
                      SAMPLE CONCEPT FILM
                    </span>
                    <p className="text-sm font-bold text-white font-display mt-0.5">
                      Lumé Skincare · Click to Play
                    </p>
                    <p className="text-xs text-neutral-300 mt-1 max-w-[220px] font-light">
                      Synthesized from product photos · Up to 1080p
                    </p>
                  </div>
                </div>
              )}

              {/* Film Overlay Markers */}
              <div className="absolute top-2.5 left-2.5 text-[10px] font-mono bg-black/75 px-2 py-0.5 rounded text-neutral-300 flex items-center gap-1.5 border border-white/10 pointer-events-none">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-red-500 animate-ping' : 'bg-amber-400'}`} />
                <span>{isPlaying ? 'PLAYING SAMPLE' : 'SAMPLE READY'}</span>
              </div>

              {/* Bottom In-Frame Player Bar */}
              <div 
                onClick={(e) => e.stopPropagation()} 
                className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-neutral-300 z-20"
              >
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={togglePlay}
                    className="text-amber-400 hover:text-white flex items-center gap-1 font-semibold transition-colors"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-amber-400" /> : <Play className="w-3.5 h-3.5 fill-amber-400" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    onClick={handleRestart}
                    className="text-neutral-400 hover:text-white transition-colors"
                    title="Replay from start"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>

                  <span className="text-[10px] text-neutral-400 tabular-nums">
                    {Math.floor(currentTime)}s / {Math.floor(duration)}s
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                  <span className="text-[10px] text-neutral-400 border-l border-white/10 pl-2">
                    UP TO 1080P
                  </span>
                </div>
              </div>

              {/* Scrubber line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800 z-20">
                <div
                  className="h-full bg-amber-400 transition-all duration-150"
                  style={{ width: `${Math.min(100, (currentTime / (duration || 1)) * 100)}%` }}
                />
              </div>

            </div>

          </div>

        </div>

        {/* Demo Work Callout Banner */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Sample concept films below — tap any card to watch the video</span>
          </div>
          <span className="text-neutral-500">Available worldwide, remote production</span>
        </div>

      </div>
    </section>
  );
};
