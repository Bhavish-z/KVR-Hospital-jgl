import React, { useState, useEffect } from 'react';
import { HOSPITAL_INFO, createWhatsAppUrl } from '../data/hospitalData';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Recovery Care', href: '#care-journey' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#location' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="KVR Hospital Homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <span className="font-heading font-extrabold text-lg tracking-wider">KVR</span>
            </div>
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
              KVR Hospital
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-emerald-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100/80 rounded-lg transition-colors whitespace-nowrap"
              title="Call KVR Hospital Emergency Desk"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{HOSPITAL_INFO.phone}</span>
            </a>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all hover:shadow active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-700 bg-emerald-50 rounded-lg"
              aria-label="WhatsApp Booking"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden pt-4 pb-5 border-t border-slate-200 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Open 24 Hours in Jagtial
              </span>
              <span>⭐ 5.0 Rating</span>
            </div>
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book on WhatsApp</span>
              </a>
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call +91 95050 51777</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
