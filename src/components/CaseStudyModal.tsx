import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  ArrowRight, 
  Film, 
  Camera, 
  Music, 
  Tv, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  RotateCcw
} from 'lucide-react';
import { PortfolioFilm } from '../types';
import { audioSynth } from '../utils/audioSynth';

interface CaseStudyModalProps {
  film: PortfolioFilm | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ film, onClose, onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(10);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSubtitle, setActiveSubtitle] = useState('');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtitles synchronized with video scenes
  useEffect(() => {
    if (!film) return;
    const t = currentTime;

    if (film.id === 'roast-and-co') {
      if (t < 2.5) setActiveSubtitle('Tired of bad office coffee?');
      else if (t < 5.5) setActiveSubtitle('Roast and Co delivers fresh beans to your door.');
      else if (t < 7.8) setActiveSubtitle('First bag free at roastandco.com');
      else setActiveSubtitle('Roast & Co. — Coffee worth waking up for.');
    } else if (film.id === 'lume-serum') {
      if (t < 3.0) setActiveSubtitle('Light, in its purest form.');
      else if (t < 6.0) setActiveSubtitle('Lightweight. Fast-Absorbing.');
      else if (t < 8.5) setActiveSubtitle('Visible Glow in 7 Days.');
      else if (t < 11.5) setActiveSubtitle('Dermatologist Tested. Clinically Proven.');
      else setActiveSubtitle('Lumé — Let Your Skin Speak.');
    } else if (film.id === 'solray-eyewear') {
      if (t < 2.0) setActiveSubtitle('Classic Gold Aviator Optics');
      else if (t < 4.0) setActiveSubtitle('Handcrafted Tortoise-Shell Frame');
      else if (t < 6.0) setActiveSubtitle('Iridescent Aerodynamic Sports Shield');
      else setActiveSubtitle('SolRay Eyewear — The All-Weather 4-Pack');
    } else {
      setActiveSubtitle(film.visualHook);
    }
  }, [currentTime, film]);

  // Video element playback event handlers
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
  }, [film?.videoSrc]);

  // Canvas visual simulation fallback for non-video entries
  useEffect(() => {
    if (!film || film.videoSrc) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let tick = 0;
    const simulatedDuration = 10;
    setDuration(simulatedDuration);

    const render = () => {
      tick++;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.fillStyle = '#08080A';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 50 + Math.sin(tick * 0.05) * 6, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(film.title, cx, cy + 70);

      if (isPlaying) {
        setCurrentTime((prev) => {
          const next = prev + 0.035;
          return next >= simulatedDuration ? 0 : next;
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [film, isPlaying]);

  const togglePlay = () => {
    if (film?.videoSrc && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
    audioSynth.playScrubTick(320);
  };

  if (!film) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-neutral-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-neutral-900/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <span>{film.brand}</span>
              <span className="text-neutral-500">·</span>
              <span>{film.origin}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
              {film.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Direct Video Preview Frame (Optimal aesthetic dimensions, NO FULLSCREEN OPTION) */}
          <div className="flex justify-center">
            <div
              className={`relative rounded-xl overflow-hidden cinema-border bg-neutral-950 shadow-2xl ${
                film.aspectRatio === '9:16'
                  ? 'w-[250px] sm:w-[270px] h-[400px] sm:h-[440px]'
                  : 'w-full max-w-lg h-[250px] sm:h-[290px]'
              }`}
            >
              {/* Direct Native Video Preview */}
              {film.videoSrc ? (
                <video
                  ref={videoRef}
                  src={film.videoSrc}
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />
              ) : (
                <canvas
                  ref={canvasRef}
                  width={film.aspectRatio === '9:16' ? 270 : 512}
                  height={film.aspectRatio === '9:16' ? 440 : 290}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Viewport markers */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono pointer-events-none z-10">
                <span className="px-2 py-0.5 rounded bg-black/75 border border-white/10 text-white font-semibold">
                  UPTO 1080P FULL HD
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-400 text-neutral-950 font-bold">
                  {film.aspectRatio}
                </span>
              </div>

              {/* Dynamic Captions & Subtitles Overlay */}
              {activeSubtitle && (
                <div className="absolute bottom-11 left-3 right-3 text-center pointer-events-none z-10">
                  <span className="inline-block px-3 py-1 rounded bg-black/85 backdrop-blur-md text-xs sm:text-sm font-semibold text-white font-display border border-white/10 shadow-lg">
                    {activeSubtitle}
                  </span>
                </div>
              )}

              {/* Custom In-Frame Player Bar (NO FULLSCREEN OPTION) */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono z-20">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="flex items-center gap-1.5 text-amber-400 font-semibold hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-amber-400" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.play();
                      }
                      setCurrentTime(0);
                      setIsPlaying(true);
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                    title="Replay from start"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-neutral-300 tabular-nums">
                    {Math.floor(currentTime)}s / {Math.floor(duration)}s
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.muted = !isMuted;
                      }
                      setIsMuted(!isMuted);
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                  <span className="text-[10px] text-neutral-300 font-medium border-l border-white/10 pl-2">
                    Minimal Artifacts
                  </span>
                </div>
              </div>

              {/* Bottom Scrubber line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800 z-20">
                <div
                  className="h-full bg-amber-400 transition-all duration-150"
                  style={{ width: `${Math.min(100, (currentTime / (duration || 1)) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quality Standard Claim (Upto 1080p and minimal to no AI artifacts) */}
          <div className="p-4 rounded-xl bg-neutral-900/80 border border-amber-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold text-white font-mono uppercase">
                Production Standard:
              </p>
              <p className="text-neutral-300 mt-1 leading-relaxed font-light">
                {film.qualityNotes} Final master films are delivered in <strong className="text-amber-400 font-medium">up to 1080p Full HD</strong> with <strong className="text-white font-medium">minimal to no AI artifacts</strong> for authentic consumer resonance.
              </p>
            </div>
          </div>

          {/* Director's Treatment & Visual Hook */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 space-y-3">
            <div>
              <p className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                01. Director's Creative Treatment
              </p>
              <p className="text-xs sm:text-sm text-neutral-200 mt-1 leading-relaxed font-light">
                {film.directorTreatment}
              </p>
            </div>
            <div className="pt-2 border-t border-white/5">
              <p className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider">
                02. The Opening Visual Hook
              </p>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed italic font-light">
                "{film.visualHook}"
              </p>
            </div>
          </div>

          {/* Technical Specs: Cinematography & Sound */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/10 space-y-2">
              <h4 className="font-mono text-neutral-300 font-bold uppercase flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span>Cinematography & Framing</span>
              </h4>
              <ul className="space-y-1.5 text-neutral-400 font-light">
                <li><span className="text-white font-normal">Lenses:</span> {film.cinematography.lens}</li>
                <li><span className="text-white font-normal">Lighting:</span> {film.cinematography.lighting}</li>
                <li><span className="text-white font-normal">Color Timing:</span> {film.cinematography.colorGrade}</li>
                <li><span className="text-white font-normal">Format:</span> {film.cinematography.ratio}</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/10 space-y-2">
              <h4 className="font-mono text-neutral-300 font-bold uppercase flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-amber-400" />
                <span>Sound Design & Audio Mix</span>
              </h4>
              <ul className="space-y-1.5 text-neutral-400 font-light">
                <li><span className="text-white font-normal">Score:</span> {film.soundDesign.audioStyle}</li>
                <li><span className="text-white font-normal">Voiceover:</span> {film.soundDesign.voiceover}</li>
                <li><span className="text-white font-normal">Foley:</span> {film.soundDesign.foley}</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-neutral-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400">
            Worldwide Delivery: <span className="text-white font-medium">Only send high-res product photos · Zero shipping needed</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95"
          >
            <span>Produce Similar Film</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
