import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const VillasSection: React.FC = () => {
  const rooms = [
    {
      title: 'Premium Room',
      description: 'Comfortable stay with garden view and modern amenities.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      amenities: ['Free WiFi', 'AC', 'Breakfast'],
    },
    {
      title: 'Luxury Villa',
      description: 'Private villa with pool, gazebos and exclusive services.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      amenities: ['Private Pool', 'Butler Service', 'Breakfast'],
    },
    {
      title: 'Executive Suite',
      description: 'Spacious suite with premium facilities and balcony.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      amenities: ['Free WiFi', 'Balcony', 'Mini Bar'],
    },
  ];

  return (
    <section id="stay" className="bg-[#fbf9f4] py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#cfa353] rotate-45" />
          </div>
          <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase block">
            STAY WITH US
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#0a291c]">
            Luxury Villas & Rooms
          </h2>
        </div>

        {/* 3 Room Cards Grid: 1 col on mobile, 2 cols on md, 3 cols on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-900/10 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div>
                {/* Image */}
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-serif font-semibold text-slate-900 group-hover:text-[#0d3423] transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-sans leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    {room.amenities.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#cfa353]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Rooms Button */}
        <div className="text-center mt-12">
          <a
            href="#all-rooms"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0d3423] hover:bg-[#071a12] text-white font-bold text-xs tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-[#cfa353]/30"
          >
            <span>VIEW ALL ROOMS</span>
            <ArrowRight className="w-4 h-4 text-[#cfa353]" />
          </a>
        </div>

      </div>
    </section>
  );
};
