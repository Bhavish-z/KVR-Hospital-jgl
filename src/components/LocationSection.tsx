import React from 'react';
import { HOSPITAL_INFO, createWhatsAppUrl } from '../data/hospitalData';
import { MapPin, Navigation, Clock, Phone, MessageCircle, ExternalLink, CheckCircle2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Easy to Reach in Jagtial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Hospital Location & Directions
          </h2>
          <p className="text-base text-slate-600">
            Conveniently situated on Gollapally Road in Krishnanagar, easily accessible from Jagtial town center and surrounding rural mandals.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Main Facility
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {HOSPITAL_INFO.name}
                </h3>
                <p className="text-sm text-emerald-700 font-medium">
                  {HOSPITAL_INFO.teluguName}
                </p>
              </div>

              {/* Address details */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Address</p>
                  <p className="text-sm text-slate-800 font-medium mt-0.5 leading-relaxed">
                    {HOSPITAL_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Landmark: Krishnanagar Main Road, Jagtial</p>
                </div>
              </div>

              {/* Timing details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Operational Hours</p>
                  <p className="text-sm text-slate-800 font-bold mt-0.5">
                    Open 24 Hours · 365 Days
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Emergency, Labor Ward, and Trauma Care continuously active.</p>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" /> Phone:
                  </span>
                  <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="font-bold text-slate-900 hover:text-emerald-700">
                    {HOSPITAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp:
                  </span>
                  <span className="font-bold text-emerald-700">+91 95050 51777</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ample Parking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Wheelchair Ramp</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pharmacy On-Site</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Stretcher Lift</span>
                </div>
              </div>

            </div>

            {/* Direction Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
              </a>

              <a
                href={createWhatsAppUrl('Hello KVR Hospital, please share your hospital location pin on WhatsApp.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600" />
                <span>Get WhatsApp Pin</span>
              </a>
            </div>
          </div>

          {/* Right Map Placeholder & Interactive Visual */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Embedded interactive Google Map iframe */}
            <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[350px] bg-slate-100">
              <iframe
                title="KVR Hospital Location Map Jagtial"
                src="https://maps.google.com/maps?q=9-51,+Gollapally+Rd,+Krishnanagar,+Jagtial,+Telangana+505327&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.02]"
              />

              {/* Floating hospital pin badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-md flex items-center gap-3 max-w-xs pointer-events-none">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  KVR
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">KVR Hospital</p>
                  <p className="text-2xs text-slate-500">Gollapally Rd, Krishnanagar</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar on Map Card */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <span>Coordinates: 18.7960° N, 78.9130° E</span>
              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
