import React from 'react';
import { ArrowUp, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigate: (page: 'home' | 'faq' | 'about' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigate }) => {
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
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group text-left"
            >
              <span className="font-display tracking-tight text-white group-hover:text-amber-400 transition-colors">
                OmniReach
              </span>
              <span className="font-display font-light text-neutral-400">Media</span>
            </button>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-light">
              AI commercial ad film production turning product photos into broadcast-ready ads in up to 1080p Full HD in 48 hours.
            </p>
            <div className="text-neutral-400 text-[11px] font-mono space-y-1.5 pt-2">
              <p className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Available worldwide, remote production</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>contact@omnireach.media</span>
              </p>
            </div>
          </div>

          {/* Company & Exploration Links (Only in Footer) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Information & Resources
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('faq');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Sample Concept Films
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing (From ₹10k)
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('privacy');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Action */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Contact & Order
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Ready to turn product photos into commercial ad films? Order single ads from approx. ₹10,000 or monthly retainers from ₹25,000. 100% async communication — zero sales calls.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Contact / Order (From ₹10k)</span>
            </button>
          </div>

        </div>

        {/* Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} OmniReach Media. All commercial creative rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                onNavigate('privacy');
                scrollToTop();
              }}
              className="hover:text-neutral-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                onNavigate('faq');
                scrollToTop();
              }}
              className="hover:text-neutral-400 transition-colors"
            >
              FAQ
            </button>
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
