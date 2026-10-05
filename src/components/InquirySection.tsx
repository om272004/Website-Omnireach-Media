import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface InquirySectionProps {
  onOpenBooking: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ onOpenBooking }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [brandName, setBrandName] = useState('');
  const [projectType, setProjectType] = useState('Commercial Ad Film (Up to 1080p)');
  const [budgetBracket, setBudgetBracket] = useState('₹10,000 / $120 (Single Video Ad)');
  const [timeline, setTimeline] = useState('Immediate Sprint (< 2 Weeks)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioSynth.playChime(640);
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-24 lg:py-32 bg-neutral-950/80 border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with subtle fade-in and slide-up */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <span>START A PROJECT</span>
            <span className="text-neutral-600">/</span>
            <span>WORLDWIDE CLIENT INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display text-balance">
            Let's create your next commercial ad film.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-light">
            We work with brands worldwide. You only need to supply high-resolution photos of your product. Our creative directors will review your brief and respond with initial creative directions within 24 hours.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Studio Information & Quality Guarantee */}
          <motion.div 
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 cinema-border space-y-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                OmniReach Media Studio
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                Producing commercial ad films, D2C brand films, and high-impact social advertising content delivered in up to 1080p Full HD with minimal to no AI artifacts.
              </p>
            </div>

            {/* Quality Standard */}
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>AI Commercial Production Standard</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Finished in <strong className="text-white font-medium">up to 1080p Full HD</strong> with human creative direction, tuned for <strong className="text-amber-400 font-medium">minimal to no AI artifacts</strong>.
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Available worldwide, remote production</p>
                  <p className="text-neutral-400">Collaborating with brands anywhere in the world</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">100% Digital & Remote</p>
                  <p className="text-neutral-400">Zero physical product shipping · Direct online review cycles</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-neutral-300">contact@omnireach.media</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950/80 border border-white/10 space-y-2">
              <p className="text-xs font-semibold text-white">100% Async & Text-Based</p>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                No phone calls or Zoom meetings required. We communicate entirely via email and chat, review video drafts online, and deliver straight to your inbox.
              </p>
              <a
                href="mailto:contact@omnireach.media"
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email: contact@omnireach.media</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Brief Submission Form */}
          <motion.div 
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-neutral-900/90 cinema-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Project Brief Received
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <span className="text-white font-semibold">{fullName}</span>. Our creative direction team is reviewing your project details for <span className="text-amber-400 font-semibold">{brandName}</span>. We will get in touch shortly via email.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-amber-400 underline underline-offset-4 hover:text-amber-300 cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@brand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Brand / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lumé Skincare"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      WhatsApp / Chat (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="+91 98765 43210 / +1 555..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Budget Bracket Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={budgetBracket}
                      onChange={(e) => setBudgetBracket(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    >
                      <option value="₹10,000 / $120 (Single Video Ad)">₹10,000 / $120 (Single Video Ad)</option>
                      <option value="From ₹25,000 / $300 (Starter Retainer - Multiple Deliverables)">From ₹25,000 / $300 (Starter Retainer - Multiple Deliverables)</option>
                      <option value="₹45,000 – ₹75,000 / $550 – $900 (Growth Retainer)">₹45,000 – ₹75,000 / $550 – $900 (Growth Retainer)</option>
                      <option value="₹1,00,000+ / $1,200+ (Full Creative Suite)">₹1,00,000+ / $1,200+ (Full Creative Suite)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Target Production Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    >
                      <option value="Immediate Sprint (< 2 Weeks)">Immediate Sprint (&lt; 2 Weeks)</option>
                      <option value="Within 2–4 Weeks">Within 2–4 Weeks</option>
                      <option value="Next Quarter Planning">Next Quarter Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Creative Objectives & Product Overview
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your product, visual references you admire, and target platforms (Meta, YouTube, Website)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-500/15 transition-all active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Creative Brief (No Calls Required)</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
