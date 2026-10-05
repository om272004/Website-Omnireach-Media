export type AdCategory = 
  | 'all'
  | 'commercial_film'
  | 'vertical_reels'
  | 'product_spot'
  | 'local_business';

export interface PortfolioFilm {
  id: string;
  brand: string;
  origin: string;
  industry: string;
  category: AdCategory;
  categoryLabel: string;
  title: string;
  tagline: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  resolution: 'Upto 1080p Full HD';
  frameRate: string;
  duration: string;
  platforms: string[];
  gradientTheme: string;
  accentColor: string;
  previewType: 'lume' | 'coffee' | 'eyewear' | 'scooter' | 'bistro' | 'silk';
  videoSrc?: string;
  directorTreatment: string;
  visualHook: string;
  cinematography: {
    lens: string;
    lighting: string;
    colorGrade: string;
    ratio: string;
  };
  soundDesign: {
    audioStyle: string;
    voiceover: string;
    foley: string;
  };
  qualityNotes: string;
}

export interface BookingSubmission {
  id: string;
  deliverableType: string;
  brandName: string;
  website: string;
  contactName: string;
  email: string;
  phone: string;
  budgetBracket: string;
  scheduledDate: string;
  scheduledTime: string;
  notes: string;
  createdAt: string;
}

export interface InquirySubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  brandName: string;
  projectType: string;
  budgetBracket: string;
  message: string;
  timeline: string;
  createdAt: string;
}
