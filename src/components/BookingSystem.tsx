import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Video,
  Check,
  ShieldCheck,
  Globe
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
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [deliverableType, setDeliverableType] = useState('Commercial Ad Film (1080p 16:9)');
  const [brandName, setBrandName] = useState('');
  const [website, setWebsite] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budgetBracket, setBudgetBracket] = useState('₹25,000 – ₹50,000 / $300 – $600');
  const [selectedDate, setSelectedDate] = useState('2026-10-07');
  const [selectedTime, setSelectedTime] = useState('03:00 PM IST');
  const [notes, setNotes] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(null);

  if (!isOpen) return null;

  const AVAILABLE_DATES = [
    { date: '2026-10-07', day: 'Wednesday', label: 'Oct 7' },
    { date: '2026-10-08', day: 'Thursday', label: 'Oct 8' },
    { date: '2026-10-09', day: 'Friday', label: 'Oct 9' },
    { date: '2026-10-12', day: 'Monday', label: 'Oct 12' },
  ];

  const TIME_SLOTS = [
    '11:00 AM IST (Asia / Europe)',
    '02:30 PM IST (Global)',
    '04:30 PM IST (UK / Middle East)',
    '06:30 PM IST (US East Friendly)',
    '08:00 PM IST (US / Canada Friendly)',
  ];

  const DELIVERABLE_OPTIONS = [
    {
      title: 'Commercial Ad Film (1080p 16:9)',
      desc: 'Cinematic commercial film with intentional art direction, sound design, and minimal to no AI artifacts.',
    },
    {
      title: 'Vertical Social Reels (1080p 9:16)',
      desc: 'High-impact mobile video ads crafted natively for Instagram Reels, TikTok, and YouTube Shorts.',
    },
    {
      title: 'Sensory Product Commercial Spot',
      desc: 'Macro lens simulation, fluid caustics, and crisp product highlights created purely from product photos.',
    },
    {
      title: 'Local Business & Brand Film',
      desc: 'Polished mini-documentary ad for restaurants, clinics, luxury retail, and hospitality.',
    },
  ];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    audioSynth.playChime(700);

    const submission: BookingSubmission = {
      id: `OM-${Math.floor(100000 + Math.random() * 900000)}`,
      deliverableType,
      brandName: brandName || 'Brand Partner',
      website: website || 'Direct Referral',
      contactName: contactName || 'Founder / Marketer',
      email,
      phone,
      budgetBracket,
      scheduledDate: selectedDate,
      scheduledTime: selectedTime,
      notes,
      createdAt: new Date().toISOString(),
    };

    setConfirmedBooking(submission);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-neutral-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-neutral-900/60">
          <div>
            <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
              CREATIVE DISCOVERY CALL · WORLDWIDE
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              {step === 4 ? 'Session Confirmed' : 'Schedule a 20-Min Creative Call'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Tabs */}
        {step < 4 && (
          <div className="grid grid-cols-3 border-b border-white/10 text-xs font-mono">
            <div
              className={`p-2.5 text-center transition-colors ${
                step >= 1 ? 'bg-amber-400/10 text-amber-400 font-bold border-b-2 border-amber-400' : 'text-neutral-500'
              }`}
            >
              1. Format
            </div>
            <div
              className={`p-2.5 text-center transition-colors ${
                step >= 2 ? 'bg-amber-400/10 text-amber-400 font-bold border-b-2 border-amber-400' : 'text-neutral-500'
              }`}
            >
              2. Brand & Budget
            </div>
            <div
              className={`p-2.5 text-center transition-colors ${
                step >= 3 ? 'bg-amber-400/10 text-amber-400 font-bold border-b-2 border-amber-400' : 'text-neutral-500'
              }`}
            >
              3. Time Slot
            </div>
          </div>
        )}

        <div className="p-6">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase text-neutral-400">
                Choose the ad format you wish to produce:
              </p>
              <div className="grid grid-cols-1 gap-3">
                {DELIVERABLE_OPTIONS.map((opt) => (
                  <div
                    key={opt.title}
                    onClick={() => {
                      setDeliverableType(opt.title);
                      audioSynth.playScrubTick(320);
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      deliverableType === opt.title
                        ? 'bg-amber-400/10 border-amber-400 text-white shadow-md'
                        : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white font-display">{opt.title}</span>
                      <span className="text-[11px] font-mono text-amber-400">1080p Full HD</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{opt.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Brand / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lumé Skincare"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Website or Social Handle
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. instagram.com/lumeskin"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ananya@brand.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Budget Bracket Check (No fixed pricing quotes, checked by tier) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Contact Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Estimated Budget Bracket
                  </label>
                  <select
                    value={budgetBracket}
                    onChange={(e) => setBudgetBracket(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-hidden focus:border-amber-400"
                  >
                    <option value="Under ₹25,000 / $300">Under ₹25,000 / $300</option>
                    <option value="₹25,000 – ₹50,000 / $300 – $600">₹25,000 – ₹50,000 / $300 – $600</option>
                    <option value="₹50,000 – ₹1,00,000 / $600 – $1,200">₹50,000 – ₹1,00,000 / $600 – $1,200</option>
                    <option value="₹1,00,000+ / $1,200+ (Multi-Ad Campaign)">₹1,00,000+ / $1,200+ (Multi-Ad Campaign)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                  Brief Note / Narrative Vision
                </label>
                <textarea
                  rows={2}
                  placeholder="Share a short note on what you want to achieve..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!brandName || !email) {
                      alert('Please provide your brand name and email address.');
                      return;
                    }
                    setStep(3);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95"
                >
                  <span>Select Time Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleCompleteBooking} className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                  Choose Discovery Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {AVAILABLE_DATES.map((d) => (
                    <button
                      type="button"
                      key={d.date}
                      onClick={() => {
                        setSelectedDate(d.date);
                        audioSynth.playScrubTick(360);
                      }}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedDate === d.date
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400 shadow-md'
                          : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-white/20'
                      }`}
                    >
                      <p className="text-xs font-bold">{d.label}</p>
                      <p className="text-[10px] opacity-75">{d.day}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                  Choose Time Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => {
                        setSelectedTime(t);
                        audioSynth.playScrubTick(400);
                      }}
                      className={`p-2.5 rounded-lg border text-xs font-mono text-left px-3 transition-all ${
                        selectedTime === t
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400 shadow-md'
                          : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-white/20'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-white/10 text-xs text-neutral-300 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono">
                  <Video className="w-4 h-4" />
                  <span>Google Meet Video Discovery Call</span>
                </div>
                <p className="text-neutral-400 text-[11px] font-light">
                  A 20-minute visual discovery call with an OmniReach Senior Creative Producer to review your product line and creative references.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-500/20 transition-all active:scale-95"
                >
                  <Check className="w-4 h-4" />
                  <span>Confirm Creative Call</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4 */}
          {step === 4 && confirmedBooking && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  INVITATION SENT
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Creative Session Scheduled
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Booking Reference: <span className="font-mono text-white">{confirmedBooking.id}</span>
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-neutral-900 border border-white/10 text-left text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Date:</span>
                  <span className="text-white font-bold">{confirmedBooking.scheduledDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Time:</span>
                  <span className="text-amber-400 font-bold">{confirmedBooking.scheduledTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Brand:</span>
                  <span className="text-white font-bold">{confirmedBooking.brandName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Budget Bracket:</span>
                  <span className="text-white font-bold">{confirmedBooking.budgetBracket}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Format:</span>
                  <span className="text-white font-bold">{confirmedBooking.deliverableType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Calendar Link:</span>
                  <span className="text-emerald-400">Dispatched to {confirmedBooking.email}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all"
              >
                <span>Return to Works</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
