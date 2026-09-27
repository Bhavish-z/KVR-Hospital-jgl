import React from 'react';
import { TESTIMONIALS, HOSPITAL_INFO, createWhatsAppUrl } from '../data/hospitalData';
import { Star, Quote, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Prominent 5.0 Rating Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Patient Stories & Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
              Trusted by Hundreds of Families in Jagtial
            </h2>
            <p className="text-base text-slate-600">
              Read how our orthopedic surgeons, Dr. Sirisha, and our nursing team support patients through critical recoveries and joyous milestones.
            </p>
          </div>

          {/* Prominent Google Rating Badge */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-2xl font-black text-slate-900 tabular-nums">5.0 / 5.0</p>
              <p className="text-xs text-slate-500">Based on 92 Google Patient Reviews</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-2.5 py-1 text-xs font-bold text-emerald-800 bg-emerald-50 rounded-md border border-emerald-200">
                100% Recommended
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>

                <Quote className="w-8 h-8 text-emerald-100 mb-2" />
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{review.name}</span>
                    {review.verified && (
                      <span title="Verified Patient Review" className="inline-flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {review.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Share / Ask on WhatsApp */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-3">
            Want to know more about doctor availability or patient facilities?
          </p>
          <a
            href={createWhatsAppUrl('Hello KVR Hospital, I would like to consult with a doctor.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600" />
            <span>Chat Directly with Hospital Desk</span>
          </a>
        </div>

      </div>
    </section>
  );
};
