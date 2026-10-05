import React from 'react';
import { Camera, Box, Sparkles, Check, X, Globe, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

interface ThreeWayComparisonProps {
  onOpenBooking: () => void;
}

export const ThreeWayComparison: React.FC<ThreeWayComparisonProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950/90 border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <span>SIDE-BY-SIDE METHODOLOGY & COST DIFFERENCE</span>
            <span className="text-neutral-600">/</span>
            <span>PRODUCTION EFFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display text-balance">
            Compare Traditional Shoots vs. 3D CGI vs. OmniReach AI.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-light">
            Traditional live-action shoots and heavy 3D CGI require massive budgets, physical equipment, and weeks of delay. OmniReach AI delivers commercial-grade video advertising from simple photos at an accessible fraction of the cost.
          </p>
        </div>

        {/* 3-Column Comparative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Column 1: Traditional Camera Shoot */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                <Camera className="w-4 h-4 text-neutral-500" />
                <span>Physical Live-Action Shoot</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-200 font-display mb-3">
                Traditional Production
              </h3>
              
              {/* Cost Difference Callout */}
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/5 mb-5 text-xs">
                <span className="text-neutral-400 font-mono uppercase block mb-1">Cost Impact:</span>
                <span className="text-red-400 font-semibold">High Capital Overhead</span>
                <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed font-light">
                  Studio rental fees, 15+ person crew day rates, camera equipment trucks, talent casting, permits, and travel.
                </p>
              </div>

              <ul className="space-y-3 text-xs text-neutral-300 border-t border-white/5 pt-4 font-light">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Input:</strong> Must ship physical product inventory</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Timeline:</strong> 4 to 6 weeks delay</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Revisions:</strong> Costly reshoots requiring crew re-booking</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Logistics:</strong> Bound by location permits and weather</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-500">
              HEAVY EXPENSE · RIGID TIMELINE
            </div>
          </div>

          {/* Column 2: Traditional 3D CGI Animation */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                <Box className="w-4 h-4 text-cyan-500" />
                <span>Heavy 3D CGI / CAD Rigging</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-200 font-display mb-3">
                Traditional 3D CGI
              </h3>

              {/* Cost Difference Callout */}
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/5 mb-5 text-xs">
                <span className="text-neutral-400 font-mono uppercase block mb-1">Cost Impact:</span>
                <span className="text-red-400 font-semibold">Specialized 3D Artist Rates</span>
                <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed font-light">
                  Manual CAD polygon modeling, texture UV unwrap, shader lighting setups, and expensive cloud GPU render farms.
                </p>
              </div>

              <ul className="space-y-3 text-xs text-neutral-300 border-t border-white/5 pt-4 font-light">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Input:</strong> Requires complex CAD / 3D model files</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Timeline:</strong> 3 to 5 weeks modeling & rendering</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Aesthetic:</strong> Can look stiff, plasticky, and artificial</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Revisions:</strong> Re-baking lighting and texture maps is slow</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-500">
              HIGH TECHNICAL EXPENSE · SLOW RENDERING
            </div>
          </div>

          {/* Column 3: OmniReach AI Commercial Production */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/90 cinema-border flex flex-col justify-between relative shadow-2xl shadow-amber-500/10">
            {/* Top Badge */}
            <div className="absolute top-4 right-4 text-[10px] font-mono font-bold bg-amber-400 text-neutral-950 px-2.5 py-1 rounded">
              OPTIMAL EFFICIENCY
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>OmniReach AI Studio</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                AI Commercial Production
              </h3>

              {/* Cost Difference Advantage */}
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 mb-5 text-xs">
                <span className="text-amber-400 font-mono uppercase block mb-1">Cost Advantage:</span>
                <span className="text-white font-bold">Fractions of Traditional Cost</span>
                <p className="text-[11px] text-neutral-300 mt-0.5 leading-relaxed font-light">
                  Fits comfortably into flexible budgets (starting under ₹25k / $300) with zero equipment rentals, studio fees, or crew overhead.
                </p>
              </div>

              <ul className="space-y-3 text-xs text-neutral-200 border-t border-white/10 pt-4 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-normal">Input:</strong> <strong className="text-amber-300">Only product photos needed</strong>. Zero physical shipping!</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-normal">Timeline:</strong> <strong className="text-emerald-400">48 to 72 hours</strong> concept to master</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-normal">Visual Quality:</strong> 1080p Full HD with <strong className="text-amber-300">minimal to no AI artifacts</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-normal">Revisions:</strong> Rapid angle, lighting, and narrative variations</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95"
              >
                <span>Produce Your Brand Film</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Global Workflow Banner (No physical office/studio mentions) */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/60 cinema-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                100% Remote Global Production — Collaborating with Brands Worldwide
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-light">
                No matter where your brand is located, you never need to deal with international shipping or customs. Simply send us high-resolution product photos taken on any smartphone or camera, and our creative team handles the entire film production.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10 rounded-lg whitespace-nowrap transition-colors"
          >
            Check Production Slot
          </button>
        </div>

      </div>
    </section>
  );
};
