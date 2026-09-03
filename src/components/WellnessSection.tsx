import React from 'react';
import { Sparkles, Sun, Heart, Leaf, ArrowRight } from 'lucide-react';

export const WellnessSection: React.FC = () => {
  const wellnessServices = [
    { name: 'Spa', icon: <Sparkles className="w-4 h-4 text-[#cfa353]" /> },
    { name: 'Yoga', icon: <Sun className="w-4 h-4 text-[#cfa353]" /> },
    { name: 'Meditation', icon: <Heart className="w-4 h-4 text-[#cfa353]" /> },
    { name: 'Ayurveda', icon: <Leaf className="w-4 h-4 text-[#cfa353]" /> },
  ];

  return (
    <section id="wellness" className="bg-[#f7f4ed] py-20 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80"
                alt="Sunrise Yoga and Naturopathy Wellness"
                className="w-full h-96 sm:h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Center Column Content */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#cfa353] rotate-45" />
              <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase">
                NATURAL THERAPY & WELLNESS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#0a291c] leading-tight">
              Heal in Nature. <br /> Live Better.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              Our holistic wellness programs blend ancient naturopathy with modern therapeutic care.
              Guided detox plans, sunrise yoga, mindful breathing and organic farm-to-table meals
              help you reset completely — body, mind and spirit.
            </p>

            <div className="pt-2">
              <a
                href="#explore-wellness"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0d3423] hover:bg-[#071a12] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>EXPLORE WELLNESS</span>
                <ArrowRight className="w-4 h-4 text-[#cfa353]" />
              </a>
            </div>
          </div>

          {/* Right Column Services Card */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-amber-900/10 divide-y divide-gray-100 overflow-hidden">
              {wellnessServices.map((service, idx) => (
                <div
                  key={idx}
                  className="p-5 flex items-center gap-4 hover:bg-[#fcfaf5] transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#fbf5e8] flex items-center justify-center shrink-0 group-hover:bg-[#cfa353] transition-colors">
                    {React.cloneElement(service.icon, {
                      className: 'w-4 h-4 text-[#cfa353] group-hover:text-white transition-colors',
                    })}
                  </div>
                  <span className="font-serif font-semibold text-base text-slate-800 group-hover:text-[#0d3423] transition-colors">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
