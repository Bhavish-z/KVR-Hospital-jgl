import React from 'react';
import { DEPARTMENTS, createWhatsAppUrl } from '../data/hospitalData';
import { Activity, Baby, CheckCircle2, MessageCircle, ChevronRight, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

export const DepartmentsSection: React.FC = () => {
  return (
    <section id="departments" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            <Stethoscope className="w-4 h-4 text-emerald-600" />
            <span>Center of Clinical Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Specialized Departments
          </h2>
          <p className="text-base text-slate-600">
            Dedicated infrastructure, advanced medical technology, and specialist surgeons delivering world-class care in Jagtial.
          </p>
        </div>

        {/* 2 Core Departments Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {DEPARTMENTS.map((dept, idx) => {
            const isOrtho = dept.id === 'orthopedics';
            const Icon = isOrtho ? Activity : Baby;
            const accentBg = isOrtho ? 'bg-emerald-50' : 'bg-blue-50';
            const accentBorder = isOrtho ? 'border-emerald-200' : 'border-blue-200';
            const accentText = isOrtho ? 'text-emerald-700' : 'text-blue-700';
            const btnBg = isOrtho ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-blue-600 hover:bg-blue-700';

            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Department Image Header */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                    
                    {/* Header Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-xs font-semibold text-emerald-300">
                          {dept.teluguName}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                          <Icon className="w-6 h-6 text-white" />
                          <span>{dept.name}</span>
                        </h3>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-sm text-xs text-white">
                        <span>24/7 Available</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {dept.longDesc}
                    </p>

                    {/* Services List */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Key Services & Treatments
                      </h4>
                      <ul className="space-y-2.5">
                        {dept.services.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${accentText}`} />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features Strip */}
                    <div className={`p-3 rounded-xl ${accentBg} border ${accentBorder} flex flex-wrap items-center gap-3 text-xs ${accentText} font-medium`}>
                      {dept.features.map((feat, fIdx) => (
                        <span key={fIdx} className="flex items-center gap-1">
                          <span>✓</span>
                          <span>{feat}</span>
                          {fIdx < dept.features.length - 1 && (
                            <span className="ml-2 text-slate-400" aria-hidden="true">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                  <a
                    href={createWhatsAppUrl(`Hello KVR Hospital, I would like to book a consultation for ${dept.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white ${btnBg} rounded-xl shadow-sm transition-all hover:shadow text-center`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Book via WhatsApp</span>
                  </a>

                  <a
                    href="#book-appointment"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <span>Custom Booking Form</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
