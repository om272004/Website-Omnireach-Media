import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, Lock } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBackToHome: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBackToHome }) => {
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
        </div>

        {/* Page Header */}
        <div className="py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-amber-400 mb-4">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>DATA PROTECTION & CONFIDENTIALITY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
            Privacy Policy & Asset Confidentiality
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 font-mono">
            Last Updated: October 2026 · OmniReach Media
          </p>
        </div>

        {/* Legal & Asset Protection Sections */}
        <div className="space-y-8 pb-16 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 cinema-border space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-display">
              1. Information We Collect
            </h2>
            <p>
              When you submit a project brief or request a free sample, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
              <li>Your brand or company name.</li>
              <li>Your contact information (email address and/or phone/WhatsApp number).</li>
              <li>High-resolution product photography and brand asset files that you upload.</li>
              <li>Creative notes and advertising preferences you share with our team.</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 cinema-border space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-display">
              2. How We Use Your Product Photos & Assets
            </h2>
            <p>
              Product photographs, packaging images, and logos you share are used <strong className="text-white font-medium">strictly to produce your requested commercial ad films and video samples</strong>. We never license, sell, or distribute your proprietary brand imagery to third-party commercial databases.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 cinema-border space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-display">
              3. Commercial Ownership & IP Rights
            </h2>
            <p>
              You maintain complete ownership of your raw product photography and brand identity. Upon delivery of finished ad films and completion of payment, full commercial advertising rights to the delivered video files belong entirely to your brand.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 cinema-border space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-display">
              4. Asset Retention & Deletion
            </h2>
            <p>
              We retain project files during active production to support revision cycles and format adaptations. You may request immediate and permanent deletion of your raw product photos and working assets at any time by contacting us.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 cinema-border space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-display">
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              For any questions regarding confidentiality, non-disclosure agreements (NDAs), or asset deletion, please contact our team directly:
            </p>
            <p className="font-mono text-amber-400">
              Email: contact@omnireach.media
            </p>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-white/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Back to Home</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
