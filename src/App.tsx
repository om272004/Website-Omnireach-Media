/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustIndicatorsBar } from './components/TrustIndicatorsBar';
import { PortfolioSection } from './components/PortfolioSection';
import { ThreeWayComparison } from './components/ThreeWayComparison';
import { ServicesBento } from './components/ServicesBento';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { BookingSystem } from './components/BookingSystem';
import { FreeSampleModal } from './components/FreeSampleModal';

import { FAQPage } from './pages/FAQPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

type PageRoute = 'home' | 'faq' | 'about' | 'privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [freeSampleOpen, setFreeSampleOpen] = useState(false);

  // Sync with browser hash routing on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#faq') {
        setCurrentPage('faq');
      } else if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#privacy') {
        setCurrentPage('privacy');
      } else {
        // Any other hash, empty string, '#', or section links belong to home
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, targetId?: string) => {
    setCurrentPage(page);
    try {
      if (page === 'home') {
        if (window.location.hash) {
          history.pushState(null, '', window.location.pathname + window.location.search);
        }
      } else {
        window.location.hash = page;
      }
    } catch {
      // Fallback
    }

    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleOpenFreeSample = () => {
    setFreeSampleOpen(true);
  };

  const handleExplorePortfolio = () => {
    handleNavigate('home', 'portfolio');
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenFreeSample={handleOpenFreeSample}
        onNavigateHome={() => handleNavigate('home')}
        onNavigateSection={(sectionId) => handleNavigate('home', sectionId)}
      />

      {/* Conditional Page Views */}
      {currentPage === 'faq' && (
        <FAQPage
          onBackToHome={() => handleNavigate('home')}
          onOpenBooking={handleOpenBooking}
          onOpenFreeSample={handleOpenFreeSample}
        />
      )}

      {currentPage === 'about' && (
        <AboutPage
          onBackToHome={() => handleNavigate('home')}
          onOpenBooking={handleOpenBooking}
          onOpenFreeSample={handleOpenFreeSample}
        />
      )}

      {currentPage === 'privacy' && (
        <PrivacyPolicyPage
          onBackToHome={() => handleNavigate('home')}
        />
      )}

      {currentPage === 'home' && (
        <main className="flex-1">
          {/* 1. Hero with Direct Headline and Real Video Preview */}
          <HeroSection
            onOpenFreeSample={handleOpenFreeSample}
            onExplorePortfolio={handleExplorePortfolio}
          />

          {/* 1b. Trust Indicators Bar: Worldwide Remote Delivery · 48h Turnaround · 1080p Full HD */}
          <TrustIndicatorsBar />

          {/* 2. Three Concept Films (Real Video Proof immediately) */}
          <PortfolioSection
            onOpenBooking={handleOpenBooking}
            onOpenFreeSample={handleOpenFreeSample}
          />

          {/* 3. How It Works (Side-by-side cost & turnaround comparison) */}
          <ThreeWayComparison
            onOpenBooking={handleOpenBooking}
            onOpenFreeSample={handleOpenFreeSample}
          />

          {/* 4. Simple Transparent Pricing (From ₹10k single · From ₹25k retainers) */}
          <ServicesBento
            onOpenBooking={handleOpenBooking}
            onOpenFreeSample={handleOpenFreeSample}
          />

          {/* 5. Direct Project Inquiry & Brief Form */}
          <InquirySection onOpenBooking={handleOpenBooking} />
        </main>
      )}

      {/* Studio Footer (Holds links to FAQ, About Us, Privacy Policy) */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onNavigate={handleNavigate}
      />

      {/* Low-Friction 1-Photo Free Sample Modal */}
      <FreeSampleModal
        isOpen={freeSampleOpen}
        onClose={() => setFreeSampleOpen(false)}
      />

      {/* Discovery Booking Modal */}
      <BookingSystem
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
