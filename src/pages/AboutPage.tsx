import React from 'react';
import { ArrowLeft, Sparkles, Globe, ShieldCheck, Mail, ArrowRight, Zap, Film } from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
  onOpenFreeSample: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome, onOpenBooking, onOpenFreeSample }) => {
  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>← Back to Home</span>
          </button>

          <button
            type="button"
            onClick={onOpenFreeSample}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 rounded-lg transition-colors cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-400" />
            <span>Try Free 5s Sample</span>
          </button>
        </div>

        {/* Page Hero Header */}
        <div className="py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ABOUT OMNIREACH MEDIA</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display text-balance">
            We make broadcast-quality commercial ad films fast and accessible.
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed font-light max-w-2xl">
            For decades, producing a high-production commercial required ₹5 to ₹10 lakh budgets, a 15-person crew, studio rentals, and 6 weeks of waiting. OmniReach Media replaces that overhead with an AI-driven production pipeline and human creative direction.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-14">
          <div className="p-6 rounded-2xl bg-neutral-900/60 cinema-border">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-4">
              <Film className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Commercial Intent
            </h3>
            <p className="text-xs text-neutral-300 mt-2 leading-relaxed font-light">
              We do not generate random clips. Every ad film has a clear psychological hook, camera blocking, pacing, lighting, and sound mix engineered to convert.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 cinema-border">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Human Craft + AI Speed
            </h3>
            <p className="text-xs text-neutral-300 mt-2 leading-relaxed font-light">
              AI generates complex fluids, lighting streaks, and camera moves; our human directors guide color timing, typography, and audio to ensure minimal to no AI artifacts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 cinema-border">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              100% Remote Global Delivery
            </h3>
            <p className="text-xs text-neutral-300 mt-2 leading-relaxed font-light">
              Brands worldwide can launch premium video ads without shipping physical products overseas. Send photos digitally; receive 1080p master films in 48 hours.
            </p>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="p-8 rounded-2xl bg-neutral-900/40 cinema-border space-y-6 mb-16 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            The Philosophy Behind Our Pricing
          </h2>
          <p>
            When we spoke to direct-to-consumer founders, brand managers, and local businesses, the feedback was consistent: traditional video production is prohibitively expensive, slow, and risky for testing new marketing angles.
          </p>
          <p>
            By anchoring our pricing starting as low as <strong className="text-white font-medium">₹10,000 / $120</strong> for individual ad films, and offering monthly retainers from <strong className="text-amber-400 font-medium">₹25,000 / $300</strong> with multiple deliverables, we enable growing brands to test creative angles every week rather than once a year.
          </p>
        </div>

        {/* Bottom Contact / CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-neutral-900 to-amber-950/40 cinema-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Ready to collaborate?
            </h3>
            <p className="text-xs text-neutral-400 mt-1 font-light">
              Send your brief or questions to <strong className="text-white">contact@omnireach.media</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onBackToHome}
              className="px-4 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-white/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              ← Back to Home
            </button>
            <button
              type="button"
              onClick={onOpenFreeSample}
              className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all whitespace-nowrap cursor-pointer"
            >
              Get Free 5s Sample
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-white/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              Order Film (From ₹10k)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
