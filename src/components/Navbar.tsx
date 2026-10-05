import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight, Menu, X } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
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
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2 group"
          >
            <span className="font-display tracking-tight text-white group-hover:text-amber-400 transition-colors">
              OmniReach
            </span>
            <span className="font-display font-light text-neutral-400">
              Media
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-neutral-300">
            <a
              href="#portfolio"
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-500/60"
            >
              Selected Works
            </a>
            <a
              href="#cinema-reel"
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-500/60"
            >
              The Reel
            </a>
            <a
              href="#services"
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-500/60"
            >
              Production Services
            </a>
            <a
              href="#inquiry"
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-500/60"
            >
              Start Project
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Audio Atmosphere Toggle */}
            <button
              onClick={handleToggleSound}
              type="button"
              title={isMuted ? 'Unmute Ambient Sound' : 'Mute Ambient Sound'}
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 bg-neutral-900/60 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              )}
            </button>

            {/* Primary Action CTA */}
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all whitespace-nowrap active:scale-95"
            >
              <span>Schedule Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-neutral-900/95 border border-white/10 backdrop-blur-xl flex flex-col gap-3 text-sm">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-amber-400 py-1"
            >
              Selected Works
            </a>
            <a
              href="#cinema-reel"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-amber-400 py-1"
            >
              The Reel
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-amber-400 py-1"
            >
              Production Services
            </a>
            <a
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-amber-400 py-1"
            >
              Start Project
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
