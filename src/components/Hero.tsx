import React from 'react';
import { HOSPITAL_INFO, createWhatsAppUrl } from '../data/hospitalData';
import { MessageCircle, Phone, Clock, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 bg-slate-900 overflow-hidden">
      {/* Background Hospital Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/kvr_hospital_exterior_1790487457098.jpg"
          alt="KVR Hospital Exterior Building in Jagtial"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
        />
        {/* Subtle subtle gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtle Location & Availability Info */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-emerald-400 font-medium mb-4"
          >
            <span className="flex items-center gap-1.5 text-emerald-300">
              <MapPin className="w-4 h-4 text-emerald-400" /> Krishnanagar, Jagtial
            </span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5 text-white/90">
              <Clock className="w-4 h-4 text-emerald-400" /> Open 24 Hours Emergency
            </span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="text-amber-300 font-semibold flex items-center gap-1">
              ⭐ 5.0 (92 Reviews)
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-tight mb-4 text-balance"
          >
            Trusted Orthopedic & Maternity Care in Jagtial
          </motion.h1>

          {/* Bilingual Subtle Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-emerald-300/90 font-medium mb-4"
          >
            KVR హాస్పిటల్ ఒర్తోపెడిక్స్ & మెటర్నిటీ — జగిత్యాల
          </motion.p>

          {/* Subheadline Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 pt-2 pb-4 border-y border-white/10"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-emerald-300" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">24/7 Emergency Care</p>
                <p className="text-slate-300 text-xs">Immediate trauma & delivery support</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-blue-300" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Safe Motherhood</p>
                <p className="text-slate-300 text-xs">Painless normal & C-section care</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-teal-300" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Expert Orthopedic</p>
                <p className="text-slate-300 text-xs">Fracture fixation & joint surgery</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
          >
            <a
              href={createWhatsAppUrl('Hello KVR Hospital, I would like to book an appointment.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/40 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Book on WhatsApp</span>
            </a>

            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-white/20 rounded-xl backdrop-blur-sm transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Call Now: +91 95050 51777</span>
            </a>
          </motion.div>

          {/* Quick Assurance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Instant WhatsApp Response
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>No Long Waiting Queue</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>LGBTQ+ Friendly & Welcoming</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
