import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Box, Sparkles, Check, X, Globe, ArrowRight, Zap } from 'lucide-react';

interface ThreeWayComparisonProps {
  onOpenBooking: () => void;
  onOpenFreeSample: () => void;
}

export const ThreeWayComparison: React.FC<ThreeWayComparisonProps> = ({ onOpenBooking, onOpenFreeSample }) => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-neutral-950/90 border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <span>HOW IT WORKS</span>
            <span className="text-neutral-600">/</span>
            <span>SIDE-BY-SIDE COST & TIME COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display text-balance">
            Why brands choose AI ad films over legacy shoots.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-light">
            Traditional live-action shoots and 3D CGI require massive budgets, physical equipment, and weeks of delay. We use AI commercial video production to turn simple product photos into broadcast-quality ads at a fraction of the cost.
          </p>
        </motion.div>

        {/* 3-Column Comparative Cards with Staggered whileInView */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Column 1: Traditional Camera Shoot */}
          <motion.div 
            className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                <Camera className="w-4 h-4 text-neutral-500" />
                <span>Physical Live-Action Shoot</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-200 font-display mb-3">
                Traditional Production
              </h3>
              
              {/* Cost Difference Callout */}
              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/5 mb-5 text-xs">
                <span className="text-neutral-400 font-mono uppercase block mb-1">Cost Impact:</span>
                <span className="text-red-400 font-semibold">₹3,00,000 – ₹10,00,000+</span>
                <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed font-light">
                  Studio rental fees, 15+ person crew day rates, equipment trucks, talent casting, permits, and catering.
                </p>
              </div>

              <ul className="space-y-3 text-xs text-neutral-400 border-t border-white/10 pt-4 font-light">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Input:</strong> Physical products shipped to set; risk of transit damage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Timeline:</strong> 4 to 6 weeks from pre-production to master color</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Visual Quality:</strong> Cinema camera look, but restricted to physical sets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Revisions:</strong> Costly reshoots requiring crew re-booking</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-neutral-500 font-mono">
              High barrier to entry for early or scaling brands.
            </div>
          </motion.div>

          {/* Column 2: 3D CGI Animation Studio */}
          <motion.div 
            className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                <Box className="w-4 h-4 text-neutral-500" />
                <span>3D CGI Animation Studio</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-200 font-display mb-3">
                3D CAD Rendering
              </h3>

              {/* Cost Difference Callout */}
              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/5 mb-5 text-xs">
                <span className="text-neutral-400 font-mono uppercase block mb-1">Cost Impact:</span>
                <span className="text-amber-400/90 font-semibold">₹1,50,000 – ₹4,00,000</span>
                <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed font-light">
                  Specialized 3D generalist hourly rates, CAD modeling, polygon texturing, and heavy GPU render farms.
                </p>
              </div>

              <ul className="space-y-3 text-xs text-neutral-400 border-t border-white/10 pt-4 font-light">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Input:</strong> Requires engineering CAD files or 3D geometry rebuild</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Timeline:</strong> 3 to 5 weeks for modeling, lighting, and rendering</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Visual Quality:</strong> Clean surfaces, but often clinical and sterile</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-200 font-normal">Revisions:</strong> Long render farm queues for minor timing edits</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-neutral-500 font-mono">
              Great for industrial mechanics, rigid for fast marketing.
            </div>
          </motion.div>

          {/* Column 3: OmniReach AI Commercial Production */}
          <motion.div 
            className="p-6 sm:p-8 rounded-2xl bg-neutral-900/90 cinema-border flex flex-col justify-between relative shadow-2xl shadow-amber-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Badge */}
            <div className="absolute top-4 right-4 text-[10px] font-mono font-bold bg-amber-400 text-neutral-950 px-2.5 py-1 rounded">
              OPTIMAL EFFICIENCY
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>AI Commercial Production</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                OmniReach AI Video
              </h3>

              {/* Cost Difference Advantage */}
              <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 mb-5 text-xs">
                <span className="text-amber-400 font-mono uppercase block mb-1">Pricing:</span>
                <span className="text-white font-bold text-base">From ₹10,000 / $120</span>
                <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed font-light">
                  Single ad film starts at approx. ₹10,000 ($120). Monthly retainers with multiple deliverables start from ₹25,000 ($300). Zero equipment rentals or crew bloat.
                </p>
              </div>

              <ul className="space-y-3 text-xs text-neutral-200 border-t border-white/10 pt-4 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-normal">Input:</strong> <strong className="text-amber-300">Only product photos needed</strong>. Zero shipping!</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-normal">Timeline:</strong> <strong className="text-emerald-400">48 to 72 hours</strong> from photos to master</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-normal">Visual Quality:</strong> Up to 1080p Full HD with <strong className="text-amber-300">minimal to no AI artifacts</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-normal">Revisions:</strong> Rapid variations in lighting, angle, and aspect ratio</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5">
              <button
                type="button"
                onClick={onOpenFreeSample}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-neutral-950" />
                <span>Get a Free 5-Second Sample</span>
              </button>
              
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 rounded-lg border border-white/10 transition-colors cursor-pointer"
              >
                <span>Order Video (₹10k) or Retainer (From ₹25k)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Global Workflow Banner */}
        <motion.div 
          className="mt-12 p-6 rounded-2xl bg-neutral-900/60 cinema-border flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                Available worldwide, remote production.
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-light">
                No matter where your brand is located, you never need to deal with international shipping or customs. Simply take high-resolution product photos on any smartphone and send them digitally.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenFreeSample}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10 rounded-lg whitespace-nowrap transition-colors cursor-pointer"
          >
            Try Free Sample
          </button>
        </motion.div>

      </div>
    </section>
  );
};
