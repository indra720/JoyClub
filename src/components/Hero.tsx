import React from 'react';
import { ArrowRight } from 'lucide-react';
import hero1Img from '../assets/hero1.png';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:h-[calc(100vh-3.5rem)] flex flex-col justify-between pt-24 pb-20 sm:pt-26 sm:pb-24 lg:pt-26 lg:pb-24 overflow-hidden bg-[#071a12]"
    >
      
      {/* Background Image using src/assets/hero1.png */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero1Img}
          alt="Joy Club Resort Background"
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.05]"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a12]/90 via-[#071a12]/50 to-transparent" />
        {/* Bottom smooth fade to section background color #f7f4ed */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#f7f4ed] via-[#f7f4ed]/50 to-transparent" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          
          {/* Gold Subtitle Tag */}
          <div className="inline-block">
            <span className="text-[#cfa353] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase font-sans">
              WELCOME TO JOY CLUB RESORT
            </span>
          </div>

          {/* Luxury Serif Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-medium text-white tracking-tight leading-[1.08]">
            Experience <br />
            Nature. <br />
            <span className="text-[#cfa353]">Embrace Luxury.</span>
          </h1>

          {/* Subtext Paragraph */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl font-sans leading-relaxed font-light">
            A world-class adventure resort in Rajasthan where luxury, nature and
            unforgettable experiences come together.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#book"
              className="px-8 py-3.5 rounded-xl bg-[#cfa353] hover:bg-[#b88e40] text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              BOOK NOW
            </a>
            <a
              href="#explore"
              className="px-8 py-3.5 rounded-xl border border-white/30 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 group"
            >
              <span>EXPLORE RESORT</span>
              <ArrowRight className="w-4 h-4 text-[#cfa353] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Banner Subtitle (Safely un-obscured above cards overlap) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 mb-16 sm:mb-20 lg:mb-20">
        <p className="text-[#cfa353] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold drop-shadow-md">
          RELAX. REFRESH. RECONNECT.
        </p>
      </div>

    </section>
  );
};
