import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight, Menu, X, Zap } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenFreeSample: () => void;
  onNavigateHome?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
  onOpenFreeSample, 
  onNavigateHome,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const muted = audioSynth.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2 group"
          >
            <span className="font-display tracking-tight text-white group-hover:text-amber-400 transition-colors">
              OmniReach
            </span>
            <span className="font-display font-light text-neutral-400">
              Media
            </span>
          </a>

          {/* Navigation Links (Matches Tight Page Flow) */}
          <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-neutral-300">
            <a
              href="#portfolio"
              onClick={(e) => {
                if (onNavigateSection) {
                  e.preventDefault();
                  onNavigateSection('portfolio');
                }
              }}
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-500/60 cursor-pointer"
            >
              Demo Films
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                if (onNavigateSection) {
                  e.preventDefault();
                  onNavigateSection('how-it-works');
                }
              }}
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-500/60 cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                if (onNavigateSection) {
                  e.preventDefault();
                  onNavigateSection('pricing');
                }
              }}
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-500/60 cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#inquiry"
              onClick={(e) => {
                if (onNavigateSection) {
                  e.preventDefault();
                  onNavigateSection('inquiry');
                }
              }}
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-500/60 cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Actions: Low-Friction First Step & Audio */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleSound}
              type="button"
              title={isMuted ? 'Unmute Ambient Audio' : 'Mute Ambient Audio'}
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 bg-neutral-900/60 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              )}
            </button>

            {/* Free Sample Low-Friction First Step */}
            <button
              onClick={onOpenFreeSample}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-amber-300 hover:text-white bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 rounded-lg transition-colors"
            >
              <Zap className="w-3 h-3 fill-amber-400" />
              <span>Free 5s Sample</span>
            </button>

            {/* Primary Action CTA */}
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all whitespace-nowrap active:scale-95"
            >
              <span>Order Film (From ₹10k)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 bg-neutral-950/95 border border-white/10 rounded-2xl space-y-4">
            <nav className="flex flex-col space-y-3 text-sm">
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (onNavigateSection) onNavigateSection('portfolio');
                }}
                className="text-neutral-300 hover:text-white cursor-pointer"
              >
                Demo Films
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (onNavigateSection) onNavigateSection('how-it-works');
                }}
                className="text-neutral-300 hover:text-white cursor-pointer"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (onNavigateSection) onNavigateSection('pricing');
                }}
                className="text-neutral-300 hover:text-white cursor-pointer"
              >
                Pricing (From ₹10k)
              </a>
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (onNavigateSection) onNavigateSection('inquiry');
                }}
                className="text-neutral-300 hover:text-white cursor-pointer"
              >
                Contact
              </a>
            </nav>
            <div className="pt-3 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreeSample();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-medium"
              >
                <Zap className="w-3.5 h-3.5 fill-amber-400" />
                <span>Get a Free 5-Second Sample</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-400 text-neutral-950 text-xs font-semibold"
              >
                <span>Order Film in 48h (From ₹10k)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
