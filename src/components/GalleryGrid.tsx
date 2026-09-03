import React from 'react';

export const GalleryGrid: React.FC = () => {
  const photos = [
    {
      title: 'Lantern Walkway',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Aerial Resort Lake',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Zipline Adventure',
      image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Sunset Gazebo',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Luxury Villa Pool',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Sunrise Yoga',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Wedding Mandap',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <section id="gallery" className="bg-[#f7f4ed] pb-24 pt-8 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#cfa353] rotate-45" />
          </div>
          <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase block">
            @JOYCLUBRESORT
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#0a291c]">
            Moments That Stay With You
          </h2>
        </div>

        {/* 7 Image Square Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-[10px] font-semibold font-sans tracking-wide">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
