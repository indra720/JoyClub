import React from 'react';

export const WeddingsCorporate: React.FC = () => {
  return (
    <section id="weddings" className="bg-[#f7f4ed] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Weddings Floating Card */}
          <div className="relative h-[400px] sm:h-[440px] rounded-[2.2rem] overflow-hidden shadow-2xl border border-amber-900/10 group flex flex-col justify-end p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
              alt="Weddings at Joy Club Resort"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase font-sans">
                WEDDINGS
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Celebrate Love In Nature.
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm font-sans font-light max-w-md pb-2 leading-relaxed">
                Magical venues for unforgettable wedding moments.
              </p>
              <div>
                <a
                  href="#explore-weddings"
                  className="inline-block px-8 py-3.5 rounded-full bg-[#cfa353] hover:bg-[#b88e40] text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:scale-105"
                >
                  EXPLORE WEDDINGS
                </a>
              </div>
            </div>
          </div>

          {/* Corporate Retreats Floating Card */}
          <div className="relative h-[400px] sm:h-[440px] rounded-[2.2rem] overflow-hidden shadow-2xl border border-amber-900/10 group flex flex-col justify-end p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1000&q=80"
              alt="Corporate Retreats at Joy Club Resort"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.55]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase font-sans">
                CORPORATE RETREATS
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Inspire. Connect. Achieve.
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm font-sans font-light max-w-md pb-2 leading-relaxed">
                Perfect destination for corporate events, meetings and team building.
              </p>
              <div>
                <a
                  href="#explore-corporate"
                  className="inline-block px-8 py-3.5 rounded-full bg-[#cfa353] hover:bg-[#b88e40] text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:scale-105"
                >
                  EXPLORE CORPORATE
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
