import React from 'react';
import { HOSPITAL_INFO, createWhatsAppUrl } from '../data/hospitalData';
import { Phone, MessageCircle, MapPin, Clock, Heart, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 sm:pb-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & About */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-heading font-extrabold text-sm">
                KVR
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">
                {HOSPITAL_INFO.name}
              </span>
            </div>

            <p className="text-emerald-400 text-sm font-medium">
              {HOSPITAL_INFO.teluguName}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing dedicated orthopedic trauma care and safe motherhood maternity services in Jagtial. Committed to clinical excellence, hygienic environments, and compassionate healing.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400">
                <Heart className="w-3.5 h-3.5 text-teal-400 fill-teal-400/20" /> LGBTQ+ Friendly
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400">
                ⭐ 5.0 (92 Reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About KVR Hospital
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-emerald-400 transition-colors">
                  Orthopedics Department
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-emerald-400 transition-colors">
                  Maternity & Delivery Care
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-emerald-400 transition-colors">
                  Our Specialist Doctors
                </a>
              </li>
              <li>
                <a href="#care-journey" className="hover:text-emerald-400 transition-colors">
                  Patient Care Journeys
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
                  Patient Reviews (5.0 Rating)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact & Emergency
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span className="text-slate-300 leading-snug">
                  {HOSPITAL_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-semibold">
                  Open 24 Hours · Emergency & Trauma Ready
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="text-white hover:text-emerald-400 font-bold transition-colors"
                >
                  +91 95050 51777
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  WhatsApp Booking Desk (+91 95050 51777)
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <p className="text-xs font-semibold text-slate-400 mb-2">Connect With Us</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KVR Hospital Facebook"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KVR Hospital Instagram"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KVR Hospital YouTube"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} KVR Hospital Orthopedics & Maternity, Jagtial. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>9-51, Gollapally Rd, Krishnanagar, Jagtial, Telangana 505327</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
