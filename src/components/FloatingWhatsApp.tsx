import React, { useState, useEffect } from 'react';
import { createWhatsAppUrl } from '../data/hospitalData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-dismiss tooltip after 10 seconds or allow user to dismiss
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold px-3 py-2 rounded-xl shadow-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Need help? Chat with KVR Care Desk</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={createWhatsAppUrl('Hello KVR Hospital, I would like to book an appointment.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with KVR Hospital"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl shadow-emerald-950/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Animated pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-40" />

        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
