import React from 'react';
import { DOCTORS, createWhatsAppUrl } from '../data/hospitalData';
import { Stethoscope, Calendar, Award, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const DoctorsSection: React.FC = () => {
  return (
    <section id="doctors" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            <Stethoscope className="w-4 h-4 text-emerald-600" />
            <span>Senior Medical Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Meet Our Specialist Doctors
          </h2>
          <p className="text-base text-slate-600">
            Dedicated specialists with proven clinical records, focused on giving every patient personalized attention and clear explanations.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-semibold text-emerald-300">
                      {doc.experience}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-slate-200">{doc.role}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="text-xs text-slate-500 font-medium">
                    <span>{doc.qualification}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>

                  {/* Specialties List */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Clinical Focus
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-700"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-800 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{doc.availableDays}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <a
                  href={createWhatsAppUrl(doc.whatsappPreFill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-all hover:shadow active:scale-98 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consult on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Doctor Trust Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Our doctors take adequate time with each patient to ensure comprehensive diagnosis and stress-free guidance.</span>
        </div>

      </div>
    </section>
  );
};
