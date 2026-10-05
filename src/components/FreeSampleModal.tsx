import React, { useState } from 'react';
import { X, Upload, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Mail, Zap } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface FreeSampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeSampleModal: React.FC<FreeSampleModalProps> = ({ isOpen, onClose }) => {
  const [brandName, setBrandName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [productPhoto, setProductPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [productUrl, setProductUrl] = useState('');
  const [desiredVibe, setDesiredVibe] = useState('Clean & Premium');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProductPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
      audioSynth.playChime(540);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName.trim() || !contactInfo.trim()) return;
    setIsSubmitted(true);
    audioSynth.playChime(660);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-neutral-900/60">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-amber-400" />
            <span>Zero Friction · Free Sample</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Send 1 product photo. Get a free 5-second sample.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 leading-relaxed font-light">
                  See how your product looks in commercial motion before committing to a full film. No call required, no credit card. Delivered within 24 hours.
                </p>
              </div>

              {/* Photo Upload Area */}
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1.5 uppercase font-medium">
                  01. Upload Product Photo (or paste website link)
                </label>
                
                {photoPreview ? (
                  <div className="relative rounded-xl border border-amber-400/40 p-3 bg-neutral-900 flex items-center gap-3">
                    <img
                      src={photoPreview}
                      alt="Uploaded preview"
                      className="w-14 h-14 object-cover rounded-lg border border-white/10"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-white font-medium truncate">
                        {productPhoto?.name || 'Uploaded photo'}
                      </p>
                      <p className="text-[11px] text-amber-400 font-mono">Ready for AI synthesis</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setProductPhoto(null);
                        setPhotoPreview(null);
                      }}
                      className="text-xs text-neutral-400 hover:text-red-400 px-2 py-1"
                    >
                      Change
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="border-2 border-dashed border-white/20 hover:border-amber-400/60 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-white/5 group">
                      <Upload className="w-6 h-6 text-neutral-400 group-hover:text-amber-400 mb-1.5 transition-colors" />
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white">
                        Click to select 1 photo from phone or computer
                      </span>
                      <span className="text-[10px] text-neutral-400 mt-0.5">
                        JPEG, PNG, WebP up to 25MB · Any plain background is fine
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>

                    <div className="relative">
                      <input
                        type="url"
                        value={productUrl}
                        onChange={(e) => setProductUrl(e.target.value)}
                        placeholder="Or paste your product page URL / Instagram post"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-hidden focus:border-amber-400"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Brand & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1 uppercase font-medium">
                    02. Brand or Product Name
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Lumé Skincare / VoltX"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1 uppercase font-medium">
                    03. Email or WhatsApp for Delivery
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="you@brand.com or +91..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-hidden focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Style Selector */}
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1.5 uppercase font-medium">
                  04. Preferred Ad Tone
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Clean & Minimal', 'Luxury & Moody', 'High-Energy'].map((vibe) => (
                    <button
                      key={vibe}
                      type="button"
                      onClick={() => setDesiredVibe(vibe)}
                      className={`px-2.5 py-2 text-xs rounded-lg border font-mono transition-all text-center ${
                        desiredVibe === vibe
                          ? 'border-amber-400 bg-amber-400/10 text-amber-300 font-bold'
                          : 'border-white/10 bg-neutral-900 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {vibe}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-500/15 transition-all active:scale-95"
              >
                <span>Generate My Free 5-Second Sample</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Free · No sales calls · Sent directly to your inbox/chat</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Photo Received!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed font-light">
                Our creative team has queued <strong className="text-white">{brandName}</strong> for AI scene generation. Your free 5-second sample will arrive at <strong className="text-amber-400">{contactInfo}</strong> within 24 hours.
              </p>
              <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 font-mono">
                Questions? Email us directly at <span className="text-white">contact@omnireach.media</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
