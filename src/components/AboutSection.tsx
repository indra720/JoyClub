import React from 'react';
import { Check, Palmtree } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    '20+ Adventure Activities',
    'World Class Amenities',
    'Eco Friendly Resort',
    'Award Winning Hospitality',
  ];

  return (
    <section className="bg-[#fbf9f4] pt-20 pb-24 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#cfa353] rotate-45" />
              <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase">
                ABOUT JOY CLUB
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#0a291c] leading-tight">
              Nature. Wellness. Adventure.
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              Nestled in the lap of the Aravalli Hills, Joy Club Adventure Resort is spread
              across lush greenery and serene landscapes, offering the perfect escape from
              the city. Our mission is to deliver exceptional value to both our guests and
              investors through quality, innovation and sustainable hospitality.
            </p>

            {/* Checklist Badges (2x2 grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Image Grid (2-Column Layout matching screenshot 2) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              
              {/* Left Photo: Tall Portrait Aerial View */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[360px] sm:h-[420px]">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
                    alt="Aerial View of Joy Club Resort Lake"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Circular Emblem Badge attached to right edge */}
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 hidden sm:block">
                  <div className="w-20 h-20 rounded-full border-4 border-white bg-[#0d3423] text-white flex flex-col items-center justify-center shadow-2xl">
                    <Palmtree className="w-8 h-8 text-[#cfa353]" />
                    <span className="text-[7px] font-bold tracking-widest text-[#cfa353] uppercase mt-0.5">
                      JOY CLUB
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Photos: 2 Stacked Landscape Cards */}
              <div className="space-y-4">
                {/* Top Image: Luxury Bedroom */}
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[175px] sm:h-[200px]">
                  <img
                    src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
                    alt="Interior of a premium resort room"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Image: Lantern Gazebo */}
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[175px] sm:h-[200px]">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
                    alt="Garden gazebo lit with lanterns at night"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
