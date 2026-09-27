import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { MaternityJourney } from './components/MaternityJourney';
import { OrthopedicRecovery } from './components/OrthopedicRecovery';
import { DoctorsSection } from './components/DoctorsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsAppBookingSection } from './components/WhatsAppBookingSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { HospitalGallery } from './components/HospitalGallery';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      {/* Sticky Glassmorphic Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Full-screen Hero Section */}
        <Hero />

        {/* 2. Trust Indicators Bar */}
        <TrustBar />

        {/* 3. About KVR Hospital with Bilingual Headings */}
        <AboutSection />

        {/* 4. Specialized Departments (Orthopedics & Maternity) */}
        <DepartmentsSection />

        {/* 5. Why Choose KVR Hospital (Icon Grid) */}
        <WhyChooseSection />

        {/* Premium Extra: Safe Motherhood Journey Timeline */}
        <MaternityJourney />

        {/* Premium Extra: Orthopedic Recovery Before/After Milestones */}
        <OrthopedicRecovery />

        {/* 7. Doctors Section (Dr. Sirisha & Orthopedic Specialist) */}
        <DoctorsSection />

        {/* 6. Patient Testimonials & 5.0 Rating */}
        <TestimonialsSection />

        {/* 8. WhatsApp Appointment Booking Section (Primary Conversion Area) */}
        <WhatsAppBookingSection />

        {/* 9. Emergency Contact Section (24/7 Red Banner) */}
        <EmergencyBanner />

        {/* Premium Extra: Hospital Gallery & Lightbox */}
        <HospitalGallery />

        {/* 10. Location Section with Interactive Map */}
        <LocationSection />

        {/* 11. FAQ Accordion Section */}
        <FAQSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Action Bar (<15% viewport height) */}
      <MobileStickyBar />
    </div>
  );
}
