import React, { useState } from 'react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { MessageCircle, Calendar, User, Phone, FileText, CheckCircle2, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export const WhatsAppBookingSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('Orthopedics');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Quick symptom/reason presets
  const presets = [
    { label: 'Knee Joint Pain', dept: 'Orthopedics', text: 'Consultation regarding severe knee joint pain and mobility.' },
    { label: 'Pregnancy Checkup', dept: 'Maternity', text: 'Prenatal scan and regular pregnancy health checkup with Dr. Sirisha.' },
    { label: 'Bone Fracture Care', dept: 'Orthopedics', text: 'Accident trauma and bone fracture examination.' },
    { label: 'Delivery Booking', dept: 'Maternity', text: 'Information regarding normal/cesarean delivery packages and admission.' },
    { label: 'General Physician', dept: 'General Consultation', text: 'General health consultation with on-duty physician.' }
  ];

  const handlePresetClick = (preset: typeof presets[0]) => {
    setDepartment(preset.dept);
    setMessage(preset.text);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('Please enter your phone number.');
      return;
    }

    setErrorMessage('');

    // Format the WhatsApp message exactly as requested
    const formattedText = 
`Hello KVR Hospital,

I would like to book an appointment.

Name: ${name.trim()}
Phone: ${phone.trim()}
Department: ${department}
Preferred Date: ${preferredDate ? preferredDate : 'Earliest Available'}
Message: ${message.trim() ? message.trim() : 'Consultation and doctor appointment.'}`;

    const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.whatsappRaw}?text=${encodeURIComponent(formattedText)}`;
    
    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book-appointment" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fast & Direct · Zero Queue Hassle</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Book Your Appointment in Seconds
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            No complicated portal logins or waiting for email confirmation. Your booking request goes directly to our hospital coordination desk on WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Quick Presets */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Quick Appointment Reasons:
            </p>
            <div className="flex flex-wrap gap-2">
              {presets.map((preset, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handlePresetClick(preset)}
                  className="px-3 py-1.5 text-xs rounded-lg bg-slate-800 hover:bg-emerald-950 hover:text-emerald-300 border border-slate-700 hover:border-emerald-600/50 text-slate-300 transition-colors"
                >
                  + {preset.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleBooking} className="space-y-5">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Phone Number (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Department Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Select Department
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                >
                  <option value="Orthopedics">Orthopedics (Bone & Joint Care)</option>
                  <option value="Maternity">Maternity (Pregnancy & Delivery)</option>
                  <option value="General Consultation">General Consultation / Physician</option>
                  <option value="Emergency Trauma">Emergency / Trauma</option>
                </select>
              </div>

              {/* Preferred Date Picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Preferred Appointment Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Message / Symptoms Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Symptoms / Notes (Optional)
              </label>
              <div className="relative">
                <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your health issue or preferred doctor (e.g. Consultation regarding knee pain with Dr. Venkata Ramana or pregnancy care with Dr. Sirisha)..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Book on WhatsApp</span>
              </button>
            </div>

            {/* Guarantee / Subtext */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Direct response on your WhatsApp app</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Confirmation within ~15 minutes</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                <span>Patient privacy guaranteed</span>
              </span>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
};
