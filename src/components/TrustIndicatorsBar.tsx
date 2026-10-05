import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, Tv } from 'lucide-react';

export const TrustIndicatorsBar: React.FC = () => {
  return (
    <section className="relative z-20 border-y border-white/10 bg-neutral-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          
          {/* Indicator 1: Worldwide Remote Delivery */}
          <div className="flex items-start gap-4 pt-4 md:pt-0">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-400 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  Worldwide Remote Delivery
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-light">
                Only clear product photos needed. Zero physical product shipping or customs delays.
              </p>
            </div>
          </div>

          {/* Indicator 2: 48h Turnaround */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-8">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  48-Hour Turnaround
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-light">
                From photo submission to complete broadcast-ready ad film in 48–72 hours.
              </p>
            </div>
          </div>

          {/* Indicator 3: 1080p Full HD Master */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-8">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-400 flex items-center justify-center shrink-0">
              <Tv className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  1080p Full HD Master
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-light">
                Delivered in up to 1080p with minimal to no AI artifacts for clean, natural commercial motion.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
