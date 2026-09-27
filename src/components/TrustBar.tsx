import React from 'react';
import { Star, Clock, UserCheck, HeartHandshake, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Star,
      primary: '⭐ 5.0 Rating',
      secondary: '92 Google Reviews',
      accent: 'text-amber-500 bg-amber-50 border-amber-200'
    },
    {
      icon: Clock,
      primary: 'Open 24 Hours',
      secondary: 'Continuous Emergency Care',
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      icon: UserCheck,
      primary: 'Experienced Doctors',
      secondary: 'Specialist Surgeons & Obstetricians',
      accent: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      icon: HeartHandshake,
      primary: 'Caring Nursing Staff',
      secondary: 'Empathetic Bedside Support',
      accent: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    {
      icon: ShieldCheck,
      primary: 'LGBTQ+ Friendly',
      secondary: 'Inclusive & Dignified Care',
      accent: 'text-teal-700 bg-teal-50 border-teal-200'
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-4 sm:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${index > 0 ? 'sm:pl-4 lg:pl-6' : ''}`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">{item.primary}</p>
                  <p className="text-xs text-slate-500 truncate">{item.secondary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
