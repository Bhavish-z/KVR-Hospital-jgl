import React from 'react';
import { HOSPITAL_INFO, createWhatsAppUrl } from '../data/hospitalData';
import { Phone, MessageCircle, AlertCircle, Clock, MapPin } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="relative z-20 py-12 bg-rose-600 text-white overflow-hidden shadow-xl">
      {/* Decorative accent pulse */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-rose-500 rounded-full blur-2xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          {/* Left Title & Status */}
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-rose-100">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>24/7 Trauma & Maternity Emergency Desk</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Emergency? We Are Open 24 Hours.
            </h2>
            
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              Immediate medical attention for road accidents, bone fractures, sudden acute pain, or urgent maternity labor care in Jagtial.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Call Button */}
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-rose-700 bg-white hover:bg-rose-50 rounded-2xl shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 fill-rose-600 text-rose-600" />
              <span>Call: +91 95050 51777</span>
            </a>

            {/* WhatsApp Now */}
            <a
              href={createWhatsAppUrl('EMERGENCY: I need immediate medical assistance / admission at KVR Hospital.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-slate-900/90 hover:bg-slate-900 border border-white/20 rounded-2xl shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-500 text-emerald-500" />
              <span>WhatsApp Now</span>
            </a>
          </div>

        </div>

        {/* Location & Quick Direction footer */}
        <div className="mt-8 pt-6 border-t border-rose-500/50 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-rose-100">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> Always Open (Day & Night)
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> 9-51, Gollapally Rd, Krishnanagar, Jagtial
          </span>
          <span className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" /> Dedicated Ambulance & Stretcher Bay
          </span>
        </div>

      </div>
    </section>
  );
};
