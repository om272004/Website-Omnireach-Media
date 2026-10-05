import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap } from 'lucide-react';

interface ServicesBentoProps {
  onOpenBooking: () => void;
  onOpenFreeSample: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking, onOpenFreeSample }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with subtle fade-in and slide-up */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              <span>TRANSPARENT PRICING</span>
              <span className="text-neutral-600">/</span>
              <span>FROM ₹10K SINGLE · FROM ₹25K RETAINERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display text-balance">
              Pricing starts as low as ₹10K.
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-neutral-400 max-w-md font-light leading-relaxed">
            <p>
              Get started with an individual ad film for <strong className="text-white font-medium">approx. ₹10,000 ($120)</strong>, or scale with monthly retainers from <strong className="text-amber-400 font-medium">₹25,000 ($300)</strong> with multiple deliverables for your ad channels.
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards Grid with Staggered whileInView */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Single Video Ad (Starts as low as ₹10K) */}
          <motion.div 
            className="p-6 rounded-2xl bg-neutral-900/60 cinema-border flex flex-col justify-between group hover:border-amber-400/40 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-1">
                Single Video Ad
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="text-2xl sm:text-3xl font-bold text-white font-display">₹10,000</span>
                <span className="text-xs font-mono text-neutral-400">/ approx $120</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                Single focused 15–30s commercial ad film. Low-risk entry to test your hero product angle.
              </p>

              <ul className="space-y-2 text-xs text-neutral-300 border-t border-white/10 pt-4 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>1 Finished 15–30s ad film</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>48–72h fast delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Up to 1080p Full HD master</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>16:9 or 9:16 aspect ratio</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Custom voiceover & foley audio</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-6 w-full py-2.5 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              Order Single Video (₹10k)
            </button>
          </motion.div>

          {/* Card 2: Starter Retainer (Multiple Deliverables) */}
          <motion.div 
            className="p-6 rounded-2xl bg-neutral-900/90 cinema-border relative flex flex-col justify-between shadow-xl shadow-amber-500/5 border-amber-400/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute -top-3 right-4 bg-amber-400 text-neutral-950 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
              MULTIPLE DELIVERABLES
            </div>

            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-1">
                Starter Retainer
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="text-2xl sm:text-3xl font-bold text-white font-display">₹25,000</span>
                <span className="text-xs font-mono text-neutral-400">/ $300 / mo</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                Retainer with multiple deliverables. Ideal for brands running Meta and YouTube campaigns monthly.
              </p>

              <ul className="space-y-2 text-xs text-neutral-300 border-t border-white/10 pt-4 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span><strong className="text-white font-normal">Multiple Deliverables:</strong></span>
                </li>
                <li className="flex items-center gap-2 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>1 Master Commercial (16:9)</span>
                </li>
                <li className="flex items-center gap-2 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>2 Vertical Reels/Shorts (9:16)</span>
                </li>
                <li className="flex items-center gap-2 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>2 Visual hook variations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Commercial ads usage license</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-6 w-full py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-xs font-semibold text-neutral-950 transition-colors shadow-md cursor-pointer"
            >
              Start ₹25k Retainer
            </button>
          </motion.div>

          {/* Card 3: Growth Retainer (Multi-Campaign Suite) */}
          <motion.div 
            className="p-6 rounded-2xl bg-neutral-900/60 cinema-border flex flex-col justify-between group hover:border-amber-400/40 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-1">
                Growth Retainer
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="text-2xl sm:text-3xl font-bold text-white font-display">₹45,000</span>
                <span className="text-xs font-mono text-neutral-400">/ $550 / mo</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                Full-funnel creative suite with 4+ video deliverables per month and regional/vernacular dubs.
              </p>

              <ul className="space-y-2 text-xs text-neutral-300 border-t border-white/10 pt-4 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>4+ Video Deliverables / month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Multi-angle hooks for ad testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Hindi / Regional dub included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Priority 48-hour delivery SLA</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-6 w-full py-2.5 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              Start Growth Retainer
            </button>
          </motion.div>

          {/* Card 4: Free Sample First Step */}
          <motion.div 
            className="p-6 rounded-2xl bg-gradient-to-b from-amber-400/10 via-neutral-900/60 to-neutral-900/80 cinema-border border-amber-400/30 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-1">
                Zero Commitment
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="text-2xl sm:text-3xl font-bold text-white font-display">₹0 FREE</span>
                <span className="text-xs font-mono text-neutral-400">/ 5-Sec</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                Not ready to buy? Send 1 product photo. We’ll generate a 5-second video sample so you see the quality firsthand.
              </p>

              <ul className="space-y-2 text-xs text-neutral-300 border-t border-white/10 pt-4 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1 Photo input only</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Delivered in 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct link to your WhatsApp/email</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>No credit card required</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onOpenFreeSample}
              className="mt-6 w-full py-2.5 px-4 rounded-lg bg-neutral-100 hover:bg-white text-xs font-semibold text-neutral-950 transition-colors shadow-md cursor-pointer"
            >
              Get Free 5-Sec Sample
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
