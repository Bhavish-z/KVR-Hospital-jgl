import React, { useState } from 'react';
import { FAQS, createWhatsAppUrl } from '../data/hospitalData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base text-slate-600">
            Find quick answers about hospital timings, maternity delivery packages, orthopedic treatments, and WhatsApp appointment confirmations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-emerald-700 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <span className="p-1 rounded-full bg-white border border-slate-200 text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Chat directly with our reception and medical desk on WhatsApp.
            </p>
          </div>

          <a
            href={createWhatsAppUrl('Hello KVR Hospital, I have a question regarding your hospital services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
