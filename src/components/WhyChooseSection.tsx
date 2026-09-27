import React from 'react';
import { WHY_CHOOSE_ITEMS, createWhatsAppUrl } from '../data/hospitalData';
import { Clock, Award, HeartHandshake, Sparkles, Baby, Siren, ShieldCheck, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Clock: Clock,
    Award: Award,
    HeartHandshake: HeartHandshake,
    Sparkles: Sparkles,
    Baby: Baby,
    Ambulance: Siren
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Patient-Centric Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Why Choose KVR Hospital?
          </h2>
          <p className="text-base text-slate-600">
            We hold ourselves to rigorous standards of medical precision, compassionate care, and rapid emergency responsiveness.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Standard of Care</span>
                  <span className="font-semibold text-emerald-600 group-hover:underline">KVR Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Have an urgent health question or emergency?</h4>
            <p className="text-sm text-emerald-100">
              Our clinical desk in Jagtial is staffed 24 hours a day to assist you immediately.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={createWhatsAppUrl('Hello KVR Hospital, I have an urgent medical query.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-950 bg-white hover:bg-emerald-50 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
