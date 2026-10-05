import React from 'react';
import { ArrowUp, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="font-display tracking-tight text-white">OmniReach</span>
              <span className="font-display font-light text-neutral-400">Media</span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-light">
              Creative ad film and video advertising agency producing cinematic commercials, D2C brand films, and high-impact digital ads in 1080p Full HD for brands worldwide.
            </p>
            <div className="text-neutral-400 text-[11px] font-mono space-y-1.5 pt-2">
              <p className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Global Remote Production · Serving Brands Worldwide</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>directors@omnireachmedia.in</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Portfolio & Disciplines
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Commercial Ad Films
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Vertical Social Reels (9:16)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Sensory Product Spots
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  1080p Master Delivery
                </a>
              </li>
              <li>
                <a href="#cinema-reel" className="hover:text-white transition-colors">
                  The Production Reel
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Action */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Work with Us
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Book a 20-minute discovery call with our directors to discuss creative concepts, treatments, and delivery timelines for your brand.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all"
            >
              <span>Schedule Creative Call</span>
            </button>
          </div>

        </div>

        {/* Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} OmniReach Media LLP. All commercial creative rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Notice</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Production</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
