import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, ShieldCheck, Clock, Zap, MessageSquare } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

export const AuditContactSection: React.FC = () => {
  // Audit Generator State
  const [auditBrand, setAuditBrand] = useState('');
  const [auditVertical, setAuditVertical] = useState('D2C Skincare & Beauty');
  const [auditChallenge, setAuditChallenge] = useState('High CAC & Creative Fatigue on Meta');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    hook1: string;
    hook2: string;
    hook3: string;
    strategy: string;
    estimatedCacDrop: string;
  } | null>(null);

  // Inquiry Form State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryBrand, setInquiryBrand] = useState('');
  const [inquiryBudget, setInquiryBudget] = useState('₹1,50,000 - ₹5,00,000 / month');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditBrand) return;

    audioSynth.playChime(500);
    setIsAuditing(true);

    setTimeout(() => {
      setIsAuditing(false);
      audioSynth.playChime(700);
      setAuditResult({
        hook1: `"Why 84% of ${auditVertical.split(' ')[0]} buyers in India return their carts within 60 seconds."`,
        hook2: `"The ₹45,000 luxury secret that ${auditBrand} is delivering at 1/5th the price point."`,
        hook3: `"If you struggle with ${auditChallenge.toLowerCase()}, stop running static image ads today."`,
        strategy: `Deploy 6-second dynamic ASMR liquid macro hooks + multi-language Tier 2 vernacular cuts in Hindi and Tamil to break past creative fatigue.`,
        estimatedCacDrop: '42% - 58%',
      });
    }, 1200);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioSynth.playChime(600);
    setInquirySubmitted(true);
  };

  return (
    <section id="audit-form" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>2-Hour Guaranteed Response SLA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display text-balance">
            Automated creative audit & direct inquiry channel.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4">
            Test your brand URL through our rapid audit simulator or submit an inquiry directly to our creative team in Bangalore & Mumbai.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Free Instant AI Creative Audit Generator */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 cinema-border">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h3 className="text-lg font-bold text-white font-display">
                Instant AI Creative Diagnostic
              </h3>
            </div>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Enter your brand name and core performance hurdle to generate 3 custom high-retention viral hook angles instantly.
            </p>

            <form onSubmit={handleRunAudit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                  Brand Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bare Anatomy, Ather, Sleepy Owl..."
                  value={auditBrand}
                  onChange={(e) => setAuditBrand(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                  Product Category
                </label>
                <select
                  value={auditVertical}
                  onChange={(e) => setAuditVertical(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                >
                  <option value="D2C Skincare & Beauty">D2C Skincare & Beauty</option>
                  <option value="F&B & Specialty Coffee">F&B & Specialty Coffee</option>
                  <option value="Consumer Electronics & Audio">Consumer Electronics & Audio</option>
                  <option value="Electric Mobility & Automotive">Electric Mobility & Automotive</option>
                  <option value="Ethnic Wear & Luxury Fashion">Ethnic Wear & Luxury Fashion</option>
                  <option value="Health, Fitness & Supplements">Health, Fitness & Supplements</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                  Primary Ad Challenge
                </label>
                <select
                  value={auditChallenge}
                  onChange={(e) => setAuditChallenge(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                >
                  <option value="High CAC & Creative Fatigue on Meta">High CAC & Creative Fatigue on Meta</option>
                  <option value="Low Click-Through Rate (<1.2% CTR)">Low Click-Through Rate (&lt;1.2% CTR)</option>
                  <option value="No regional language traction in Tier 2/3">No regional language traction in Tier 2/3</option>
                  <option value="Need 30+ video iterations monthly">Need 30+ video iterations monthly</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isAuditing}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95 disabled:opacity-50"
              >
                {isAuditing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Ad Auction & Creative Angles...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Generate Instant Creative Audit</span>
                  </>
                )}
              </button>
            </form>

            {/* Audit Output Box */}
            {auditResult && (
              <div className="mt-6 p-4 rounded-xl bg-neutral-950/80 border border-amber-500/30 text-xs space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="font-mono text-amber-400 font-bold">
                    DIAGNOSTIC REPORT: {auditBrand.toUpperCase()}
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">
                    EST. CAC DROP: {auditResult.estimatedCacDrop}
                  </span>
                </div>

                <div>
                  <p className="font-mono text-neutral-400 text-[10px] uppercase mb-1">
                    03 TAILORED 3-SECOND RETENTION HOOKS:
                  </p>
                  <ul className="space-y-1.5 text-neutral-200">
                    <li className="p-2 rounded bg-neutral-900 border border-white/5 font-medium">
                      1. {auditResult.hook1}
                    </li>
                    <li className="p-2 rounded bg-neutral-900 border border-white/5 font-medium">
                      2. {auditResult.hook2}
                    </li>
                    <li className="p-2 rounded bg-neutral-900 border border-white/5 font-medium">
                      3. {auditResult.hook3}
                    </li>
                  </ul>
                </div>

                <div className="pt-1 text-[11px] text-neutral-400">
                  <span className="text-white font-semibold">Recommended Sprint: </span>
                  {auditResult.strategy}
                </div>
              </div>
            )}
          </div>

          {/* Right: Direct Automated Inquiry Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-neutral-900/90 cinema-border">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <h3 className="text-lg font-bold text-white font-display">
                Automated Inquiry & Brief Submission
              </h3>
            </div>
            <p className="text-xs text-neutral-400 mb-6">
              Share your project brief. You will receive an automated WhatsApp confirmation & custom creative deck within 2 business hours.
            </p>

            {inquirySubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white font-display">
                  Inquiry Dispatched to Creative Lead
                </h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{inquiryName}</span>. Our Bangalore creative desk has received your brief for <span className="text-amber-400 font-semibold">{inquiryBrand}</span> and will reach out via WhatsApp & Email shortly.
                </p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="text-xs font-mono text-amber-400 underline underline-offset-4 hover:text-amber-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@brand.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      WhatsApp Phone (+91) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99880 12345"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Brand / Product Website *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. getmybrand.in"
                      value={inquiryBrand}
                      onChange={(e) => setInquiryBrand(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Estimated Monthly Creative Budget
                  </label>
                  <select
                    value={inquiryBudget}
                    onChange={(e) => setInquiryBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                  >
                    <option value="₹75,000 - ₹1,50,000 (Test Sprint)">₹75,000 - ₹1,50,000 (Test Sprint)</option>
                    <option value="₹1,50,000 - ₹5,00,000 / month">₹1,50,000 - ₹5,00,000 / month</option>
                    <option value="₹5,00,000 - ₹15,00,000 / month">₹5,00,000 - ₹15,00,000 / month</option>
                    <option value="₹15,00,000+ / month (Enterprise Retainer)">₹15,00,000+ / month (Enterprise Retainer)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Creative Deliverables Needed & Timeline
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what ads you want to produce (e.g. 5x UGC Reels for Instagram, 1x 8K festive commercial film, quick-commerce video banners)..."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-xl shadow-amber-500/20 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Automated Inquiry (Guaranteed &lt;2h Response)</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
