import React from 'react';
import { ArrowLeft, HelpCircle, ArrowRight, Zap, Mail, ShieldCheck } from 'lucide-react';

interface FAQPageProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
  onOpenFreeSample: () => void;
}

const FAQS = [
  {
    q: 'What do I need to provide to start a project?',
    a: 'You only need to supply clear, high-resolution photos of your product taken from multiple angles. Smartphone photos under decent room lighting work great. You do not need to ship physical product inventory or hire a photographer.',
  },
  {
    q: 'How fast is delivery?',
    a: 'Our standard turnaround is 48 to 72 hours from receiving your photos and creative preferences. For urgent campaigns, priority 24–48 hour delivery is available on request.',
  },
  {
    q: 'What are your prices and packages?',
    a: 'Pricing starts as low as approx. ₹10,000 ($120) for a single 15–30s commercial ad film. Monthly retainers with multiple deliverables (e.g. 1 Widescreen Master + 2 Vertical Reels + multiple hooks) start from ₹25,000 ($300).',
  },
  {
    q: 'Can I test the quality before paying anything?',
    a: 'Yes! We offer a free 5-second sample test. Send us 1 product photo, and we will generate a 5-second concept scene within 24 hours so you can evaluate the motion, physics, and lighting before committing.',
  },
  {
    q: 'What resolution and video formats do you deliver?',
    a: 'All master deliverables are rendered in up to 1080p Full HD. We deliver in standard 16:9 Widescreen (YouTube, Website, TV) and 9:16 Vertical (Instagram Reels, YouTube Shorts, TikTok), complete with color grading and master audio.',
  },
  {
    q: 'How do you handle audio, voiceovers, and music?',
    a: 'Every finished film includes custom sound design: tactile foley (liquid pours, packaging unboxing, mechanical clicks), atmospheric background music, and natural multilingual voiceover (English, Hindi, and regional languages).',
  },
  {
    q: 'What about AI artifacts and physical accuracy?',
    a: 'Our workflow pairs advanced AI video synthesis with experienced human creative direction. We selectively prompt, frame, and composite elements so that product packaging, geometry, fluid physics, and human interactions appear natural with minimal to no AI artifacts.',
  },
  {
    q: 'How do revisions work?',
    a: 'Because our pipeline is digital and remote, revisions are fast. If you want adjustments to camera pacing, lighting temperature, audio mix, or text overlays, turnaround on revisions is typically within 24 hours.',
  },
  {
    q: 'Do you work with international clients outside India?',
    a: 'Yes, absolutely. Our production model is 100% digital and remote. We collaborate with brands across the US, UK, Europe, UAE, Southeast Asia, and worldwide without any customs or shipping hurdles.',
  },
  {
    q: 'Do I have to get on a phone call or video meeting?',
    a: 'No, never. Our workflow is 100% async and text-based. We do not do sales calls or Zoom meetings. You share your photos and notes online, we communicate via email or chat, and you review video drafts on your own schedule.',
  },
  {
    q: 'Who owns the final video rights?',
    a: 'You do. Upon delivery and payment, full commercial broadcast and advertising rights belong entirely to your brand for use across paid ads, organic social, TV, and digital properties.',
  },
];

export const FAQPage: React.FC<FAQPageProps> = ({ onBackToHome, onOpenBooking, onOpenFreeSample }) => {
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

        {/* Page Header */}
        <div className="py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-amber-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
            Everything you need to know about our 48-hour ad production.
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-light max-w-2xl">
            Have questions about sending photos, turnaround times, pricing, or video quality? Find direct answers below, or get in touch with our team directly.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6 pb-16">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/60 cinema-border transition-all hover:border-amber-400/30"
            >
              <h3 className="text-base sm:text-lg font-bold text-white font-display flex items-start gap-3">
                <span className="text-amber-400 font-mono text-xs mt-1">0{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-3 pl-7 leading-relaxed font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-neutral-900 to-amber-950/40 cinema-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Still have a question?
            </h3>
            <p className="text-xs text-neutral-400 mt-1 font-light">
              Send us an email at <strong className="text-white">contact@omnireach.media</strong> or request your free 5-second sample.
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
