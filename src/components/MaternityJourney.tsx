import React, { useState } from 'react';
import { MATERNITY_JOURNEY_STEPS, createWhatsAppUrl } from '../data/hospitalData';
import { Baby, Calendar, Heart, Shield, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const MaternityJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="care-journey" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <Baby className="w-4 h-4 text-blue-600" />
            <span>Nurturing Mother & Child</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            The Safe Motherhood Journey
          </h2>
          <p className="text-base text-slate-600">
            From the initial positive test through postpartum newborn development, our team guides you through every milestone.
          </p>
        </div>

        {/* Step Indicator Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {MATERNITY_JOURNEY_STEPS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeStep === idx
                  ? 'bg-blue-50/70 border-blue-500 shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-xs font-bold ${activeStep === idx ? 'text-blue-700' : 'text-slate-400'}`}>
                  Step {item.step}
                </span>
                <span className="text-xs text-slate-500">{item.period}</span>
              </div>
              <p className={`text-sm font-bold ${activeStep === idx ? 'text-slate-900' : 'text-slate-700'} truncate`}>
                {item.title}
              </p>
            </button>
          ))}
        </div>

        {/* Active Step Content Spotlight */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
                <Calendar className="w-4 h-4" />
                <span>Phase Timeline: {MATERNITY_JOURNEY_STEPS[activeStep].period}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {MATERNITY_JOURNEY_STEPS[activeStep].title}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                {MATERNITY_JOURNEY_STEPS[activeStep].description}
              </p>

              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                <Heart className="w-5 h-5 text-rose-500 shrink-0" />
                <p className="text-xs text-slate-700">
                  <strong className="font-semibold text-slate-900">Clinical Focus: </strong>
                  {MATERNITY_JOURNEY_STEPS[activeStep].focus}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={createWhatsAppUrl(`Hello KVR Hospital, I would like to enquire about ${MATERNITY_JOURNEY_STEPS[activeStep].title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consult Dr. Sirisha on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <img
                  src="/src/assets/images/kvr_maternity_department_1790487481738.jpg"
                  alt="Maternity care suite at KVR Hospital"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1 text-blue-700 font-semibold">
                    <Shield className="w-4 h-4 text-blue-600" /> Sterile Delivery Theaters
                  </span>
                  <span>Jagtial, Telangana</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
