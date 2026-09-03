import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AdventureSection: React.FC = () => {
  const activities = [
    {
      title: 'Zipline',
      image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'ATV Ride',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Rope Course',
      image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Kayaking',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Camping',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="adventure" className="bg-[#0d3423] py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#cfa353] rotate-45" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white">
            Adventure Experiences
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light">
            From treetop ziplines to lakeside camps — adrenaline for every age group,
            guided by certified instructors.
          </p>
        </div>

        {/* Activity Cards Grid: 2 cols on mobile, 3 cols on md, 6 cols on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {activities.map((item, idx) => (
            <div
              key={idx}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#cfa353] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

          {/* 6th Card: Gold Highlight "20+ Activities" */}
          <div className="h-72 sm:h-80 rounded-2xl bg-[#cfa353] p-6 text-[#0d3423] flex flex-col justify-between items-center text-center shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="my-auto space-y-2">
              <span className="text-5xl sm:text-6xl font-serif font-bold leading-none block">
                20+
              </span>
              <span className="text-lg sm:text-xl font-serif font-semibold block">
                Activities
              </span>
            </div>

            <a
              href="#all-activities"
              className="w-full py-3 rounded-full bg-[#0d3423] hover:bg-[#071a12] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>EXPLORE ALL</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#cfa353]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
