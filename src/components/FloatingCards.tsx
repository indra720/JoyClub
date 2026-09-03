import React from 'react';
import { Bed, Leaf, Mountain, HeartHandshake, ArrowRight } from 'lucide-react';

export const FloatingCards: React.FC = () => {
  const cards = [
    {
      icon: <Bed className="w-6 h-6 text-[#cfa353]" />,
      title: 'Luxury Stay',
      description: 'Elegant villas, premium rooms and world-class comfort.',
      href: '#stay',
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#cfa353]" />,
      title: 'Natural Therapy',
      description: "Rejuvenate your body and mind with nature's healing touch.",
      href: '#wellness',
    },
    {
      icon: <Mountain className="w-6 h-6 text-[#cfa353]" />,
      title: 'Adventure Park',
      description: 'Thrilling activities and adventures for all age groups.',
      href: '#adventure',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#cfa353]" />,
      title: 'Destination Weddings',
      description: 'Beautiful venues for your dream wedding celebrations.',
      href: '#weddings',
    },
  ];

  return (
    <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 lg:-mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.16)] border border-[#cfa353]/20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative z-10"
          >
            <div>
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-[#fbf5e8] flex items-center justify-center mb-5 group-hover:bg-[#cfa353] transition-colors border border-[#cfa353]/20">
                {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, {
                  className: 'w-6 h-6 text-[#cfa353] group-hover:text-white transition-colors',
                })}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2 group-hover:text-[#0d3423] transition-colors">
                {card.title}
              </h3>

              {/* Subtext */}
              <p className="text-gray-500 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                {card.description}
              </p>
            </div>

            {/* Link */}
            <a
              href={card.href}
              className="inline-flex items-center gap-2 text-[11px] font-bold text-[#cfa353] tracking-widest uppercase hover:text-[#0d3423] transition-colors"
            >
              <span>DISCOVER MORE</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
