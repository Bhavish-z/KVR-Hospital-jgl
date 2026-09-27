import React from 'react';
import { HOSPITAL_INFO, STATS, createWhatsAppUrl } from '../data/hospitalData';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg bg-white">
              <img
                src="/src/assets/images/kvr_hospital_exterior_1790487457098.jpg"
                alt="KVR Hospital facility in Jagtial"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">KVR Hospital</h3>
                    <p className="text-xs text-slate-500">Krishnanagar, Gollapally Rd, Jagtial</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-amber-600">⭐ 5.0 Rating</span>
                    <p className="text-xs text-slate-400">92 Verified Reviews</p>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Open 24/7 Hours</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>LGBTQ+ Friendly</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Trauma Emergency</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Safe Deliveries</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-emerald-700 text-white p-4 rounded-xl shadow-lg items-center gap-3 max-w-xs">
              <Sparkles className="w-8 h-8 text-emerald-200 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Our Commitment</p>
                <p className="text-xs font-medium leading-relaxed">Dedicated to compassionate, high-quality healthcare for every family in Jagtial.</p>
              </div>
            </div>
          </div>

          {/* About Content & Bilingual Heading */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                <span>About Our Center</span>
                <span aria-hidden="true">·</span>
                <span>Jagtial, Telangana</span>
              </div>

              {/* Bilingual Headings */}
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                {HOSPITAL_INFO.name}
              </h2>
              <p className="text-lg sm:text-xl font-medium text-emerald-700">
                {HOSPITAL_INFO.teluguName}
              </p>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              KVR Hospital is a leading multidisciplinary healthcare institution situated in Krishnanagar, Jagtial. Designed around the principles of clinical excellence, strict sterility, and genuine human empathy, we provide comprehensive orthopedic surgical care alongside holistic maternity and newborn services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Orthopedic Excellence</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Expert trauma care, fracture plating, arthroscopy, and personalized physiotherapy designed to restore your full mobility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Safe Motherhood</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Led by experienced obstetricians, offering empathetic prenatal guidance, painless delivery, and compassionate postnatal care.
                </p>
              </div>
            </div>

            {/* Highlight points */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Modern, air-conditioned patient suites and ultra-clean surgical suites</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Attentive 24/7 nursing team and empathetic bedside support</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Family-focused treatment with complete cost transparency</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={createWhatsAppUrl('Hello KVR Hospital, I would like to know more about your hospital services and consult a doctor.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href="#departments"
                className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
              >
                Explore Departments →
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-4"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-700 mt-1">{stat.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
