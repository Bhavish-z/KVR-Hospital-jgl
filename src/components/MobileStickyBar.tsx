import React from 'react';
import { HOSPITAL_INFO, createWhatsAppUrl } from '../data/hospitalData';
import { Phone, MessageCircle } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        {/* Call Now Button */}
        <a
          href={`tel:${HOSPITAL_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-slate-900 active:bg-slate-800 text-white rounded-xl text-xs font-bold transition-transform active:scale-98"
        >
          <Phone className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={createWhatsAppUrl('Hello KVR Hospital, I would like to book an appointment.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600 active:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-900/20 transition-transform active:scale-98"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
