/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhotoToFilmTransformation } from './components/PhotoToFilmTransformation';
import { PortfolioSection } from './components/PortfolioSection';
import { ScrollReelExperience } from './components/ScrollReelExperience';
import { ThreeWayComparison } from './components/ThreeWayComparison';
import { ServicesBento } from './components/ServicesBento';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { BookingSystem } from './components/BookingSystem';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleExplorePortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* Editorial Hero Section */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onExplorePortfolio={handleExplorePortfolio}
        />

        {/* Scroll Animation: Photo to Film Service Transformation */}
        <PhotoToFilmTransformation onOpenBooking={handleOpenBooking} />

        {/* Selected Ad Films Portfolio Showcase (Centerpiece) */}
        <PortfolioSection onOpenBooking={handleOpenBooking} />

        {/* Interactive Film Production Storyboard Reel */}
        <ScrollReelExperience onOpenBooking={handleOpenBooking} />

        {/* Comprehensive 3-Way Methodology Comparison (Traditional vs 3D CGI vs OmniReach) */}
        <ThreeWayComparison onOpenBooking={handleOpenBooking} />

        {/* Commercial Production Services (1080p Master Delivery) */}
        <ServicesBento onOpenBooking={handleOpenBooking} />

        {/* Project Inquiry & Brief Submission */}
        <InquirySection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Studio Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Discovery Booking Modal */}
      <BookingSystem
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
