import React, { useState } from 'react';
import { GALLERY_ITEMS, createWhatsAppUrl } from '../data/hospitalData';
import { Camera, X, MessageCircle, ZoomIn } from 'lucide-react';

export const HospitalGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            <Camera className="w-4 h-4 text-emerald-600" />
            <span>Infrastructure & Facility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Hospital Tour & Facilities
          </h2>
          <p className="text-base text-slate-600">
            A hygienic, well-ventilated, patient-friendly environment equipped with modern surgical suites and peaceful recovery wards.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer shadow-2xs hover:shadow-lg transition-all"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-between p-4 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="self-end p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <ZoomIn className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-2xs font-bold uppercase tracking-wider text-emerald-300">
                    {item.tag}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white transition-colors"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] w-full flex items-center justify-center bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {selectedImage.tag}
                  </span>
                  <h3 className="text-lg font-bold">{selectedImage.title}</h3>
                  <p className="text-xs text-slate-400">{selectedImage.subtitle}</p>
                </div>

                <a
                  href={createWhatsAppUrl(`Hello KVR Hospital, I am interested in visiting / admission for ${selectedImage.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
