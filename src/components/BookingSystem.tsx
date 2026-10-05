import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Check,
  ShieldCheck,
  Mail,
  Zap,
  Film
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { BookingSubmission } from '../types';

interface BookingSystemProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({ 
  isOpen, 
  onClose,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [deliverableType, setDeliverableType] = useState('Single Video Ad (15–30s · ₹10,000 / $120)');
  const [brandName, setBrandName] = useState('');
  const [website, setWebsite] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budgetBracket, setBudgetBracket] = useState('₹10,000 / $120 (Single Video Ad)');
  const [productPhotosLink, setProductPhotosLink] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const DELIVERABLE_OPTIONS = [
    {
      title: 'Single Video Ad (15–30s · ₹10,000 / $120)',
      desc: 'Single focused commercial ad film in 48–72h. Up to 1080p Full HD master, custom voiceover & sound design.',
    },
    {
      title: 'Starter Retainer (Multiple Deliverables · From ₹25,000 / $300)',
      desc: '1 Widescreen Commercial Ad Film (16:9) + 2 Vertical Reels (9:16) + 2 Visual Hook variations.',
    },
    {
      title: 'Growth Retainer (4+ Videos / Month · ₹45,000 / $550)',
      desc: 'Full monthly creative engine with multi-angle hooks, regional dubs, and priority 48-hour delivery.',
    },
    {
      title: 'Custom Multi-Ad Suite (₹1,00,000+ / $1,200+)',
      desc: 'Always-on creative production partnership for active D2C brands across multiple product lines.',
    },
  ];

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !email) return;
    audioSynth.playChime(640);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-neutral-900/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              <span>100% ASYNC · NO CALLS REQUIRED</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display mt-0.5">
              {submitted ? 'Order Brief Received' : 'Order Commercial Ad Film / Retainer'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!submitted ? (
            <div>
              {/* Stepper Progress */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs font-mono">
                <span className={step >= 1 ? 'text-amber-400 font-bold' : 'text-neutral-500'}>
                  01. Choose Package
                </span>
                <span className="text-neutral-600">→</span>
                <span className={step >= 2 ? 'text-amber-400 font-bold' : 'text-neutral-500'}>
                  02. Product Details
                </span>
                <span className="text-neutral-600">→</span>
                <span className={step >= 3 ? 'text-amber-400 font-bold' : 'text-neutral-500'}>
                  03. Review & Submit
                </span>
              </div>

              {/* STEP 1: Select Package */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-white">
                    Select Your Preferred Production Tier
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {DELIVERABLE_OPTIONS.map((opt) => (
                      <div
                        key={opt.title}
                        onClick={() => {
                          setDeliverableType(opt.title);
                          audioSynth.playScrubTick(320);
                        }}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                          deliverableType === opt.title
                            ? 'border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-500/5'
                            : 'border-white/10 bg-neutral-900/60 hover:border-white/25'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold text-white font-display">
                            {opt.title}
                          </span>
                          {deliverableType === opt.title && (
                            <span className="w-5 h-5 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center text-xs">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-300 mt-1 leading-relaxed font-light">
                          {opt.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Continue to Product Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Product & Contact Information */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-white">
                    Tell Us About Your Brand & Product
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                        Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lumé Skincare"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                        Email Address for Delivery *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@brand.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                        WhatsApp or Telegram (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="+91... / @handle"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                        Product Website / Instagram
                      </label>
                      <input
                        type="text"
                        placeholder="https://yourbrand.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Link to Product Photos (Drive, Dropbox, or Site URL)
                    </label>
                    <input
                      type="text"
                      placeholder="Paste link to Google Drive folder or product gallery"
                      value={productPhotosLink}
                      onChange={(e) => setProductPhotosLink(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Creative Objectives / Reference Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us what visual vibe, pacing, or mood you want..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!brandName || !email) {
                          alert('Please enter your brand name and email address.');
                          return;
                        }
                        setStep(3);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Review Summary</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Review & Submit */}
              {step === 3 && (
                <form onSubmit={handleCompleteOrder} className="space-y-4">
                  <h4 className="text-sm font-semibold text-white">
                    Confirm Project Brief Summary
                  </h4>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-white/10 space-y-2.5 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Selected Package:</span>
                      <span className="text-amber-400 font-bold">{deliverableType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Brand Name:</span>
                      <span className="text-white font-bold">{brandName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Delivery Email:</span>
                      <span className="text-white">{email}</span>
                    </div>
                    {phone && (
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Chat Contact:</span>
                        <span className="text-white">{phone}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t border-white/5 pt-2">
                      <span className="text-neutral-400">Delivery SLA:</span>
                      <span className="text-emerald-400">48–72 Hours</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-start gap-2.5 text-xs">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-neutral-300 leading-relaxed font-light">
                      <strong className="text-white font-medium">100% Async Digital Production:</strong> We do not conduct sales calls or Zoom meetings. You will receive your creative treatment, draft previews, and final master deliverables directly via email/chat.
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <Check className="w-4 h-4" />
                      <span>Submit Project Brief (No Calls Required)</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  BRIEF SUBMITTED · NO CALLS NEEDED
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Project Brief Received
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-md mx-auto font-light leading-relaxed">
                  Our creative team is reviewing your product details for <strong className="text-white">{brandName}</strong>. We will email your draft treatment and delivery timeline to <strong className="text-amber-400">{email}</strong> within a few hours.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                Direct questions? Email us anytime at <span className="text-white">contact@omnireach.media</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all cursor-pointer"
              >
                <span>Done</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
