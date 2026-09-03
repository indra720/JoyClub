import React from 'react';
import { Palmtree, TrendingUp, ShieldCheck, PieChart, Award, DollarSign, Coins } from 'lucide-react';

export const InvestmentPage: React.FC = () => {
  const revenueStreams = [
    {
      id: 1,
      title: '50 MARRIAGES AT OUR RESORTS',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80',
      calc: '50 Marriages × ₹50,00,000',
      revenue: '₹ 25 CR',
      badge: '(Minimum)',
    },
    {
      id: 2,
      title: 'NATURAL THERAPY & WELLNESS',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80',
      calc: '₹3,000 × 100,000 Guests',
      revenue: '₹ 3 CR',
      badge: 'Annual',
    },
    {
      id: 3,
      title: 'CORPORATE MEETINGS & EVENTS',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80',
      calc: 'Corporate Events & Meetings',
      revenue: '₹ 5 CR',
      badge: 'Annual',
    },
    {
      id: 4,
      title: 'NIGHT STAY PRE-PURCHASE',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=400&q=80',
      calc: 'Advance Booking & Pre-Purchase',
      revenue: '₹ 10 CR',
      badge: 'Pre-Purchase',
    },
  ];

  const yearlyProjections = [
    { year: 'YEAR 1', amount: '₹ 43 CR', growth: '(Minimum)' },
    { year: 'YEAR 2', amount: '₹ 51.6 CR', growth: '(+20%)' },
    { year: 'YEAR 3', amount: '₹ 61.92 CR', growth: '(+20%)' },
    { year: 'YEAR 4', amount: '₹ 74.30 CR', growth: '(+20%)' },
    { year: 'YEAR 5', amount: '₹ 89.16 CR', growth: '(+20%)' },
  ];

  const valuePillars = [
    { title: 'Multiple Revenue Streams', icon: <PieChart className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'Sustainable & Scalable Model', icon: <TrendingUp className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'High Demand Segments', icon: <Award className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'Long Term Growth & Stability', icon: <ShieldCheck className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'Premium Lifestyle Destination', icon: <Palmtree className="w-5 h-5 text-[#cfa353]" /> },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#071d13] min-h-screen text-white selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Dark Green Card Container */}
        <div className="bg-[#0a291c] rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border-2 border-[#cfa353]/40 space-y-8 relative overflow-hidden">
          
          {/* Top Header Row with Curved Pool Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-b border-white/10 pb-6">
            
            {/* Left Brand Shield & Title */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-center lg:items-start gap-4 text-center sm:text-left">
              <div className="w-16 h-20 rounded-2xl bg-[#0d3423] border-2 border-[#cfa353] flex flex-col items-center justify-center p-2 text-center shadow-lg shrink-0">
                <Palmtree className="w-6 h-6 text-[#cfa353]" />
                <span className="text-[8px] font-bold text-white tracking-widest uppercase mt-1">JOY GROUP</span>
                <span className="text-[6px] text-[#cfa353] tracking-widest uppercase">REAL ESTATE</span>
              </div>

              <div className="space-y-1">
                <span className="text-[#cfa353] text-xs font-serif font-bold tracking-[0.25em] uppercase block">
                  JOY HOSPITALITY & REAL ESTATE GROUP
                </span>
                <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-wider">
                  EARNING <span className="text-[#cfa353]">PLAN</span>
                </h1>
                <p className="text-xs text-amber-200 font-serif italic pt-1">
                  Multiple Streams. One Destination. Unlimited Growth.
                </p>
              </div>
            </div>

            {/* Right Curved Hero Photo */}
            <div className="lg:col-span-4 relative h-36 sm:h-40 rounded-3xl overflow-hidden shadow-2xl border border-[#cfa353]/30 group">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Resort Night Sunset"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-end p-4">
                <span className="text-[10px] font-serif italic text-[#cfa353]">Nature's Touch. Soul's Renewal.</span>
              </div>
            </div>

          </div>

          {/* Section Header: OUR REVENUE STREAMS Ribbon */}
          <div className="text-center">
            <div className="inline-block px-8 py-2 rounded-full bg-[#0d3423] border border-[#cfa353] shadow-lg">
              <span className="text-[#cfa353] font-serif font-bold text-sm tracking-widest uppercase">
                ❖ OUR REVENUE STREAMS ❖
              </span>
            </div>
          </div>

          {/* 4 Revenue Streams Grid (Dark Green Cards with Gold Badges & Serif Currency) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueStreams.map((stream) => (
              <div
                key={stream.id}
                className="bg-[#0d3423] text-white rounded-3xl border border-[#cfa353]/30 p-5 space-y-4 shadow-xl hover:border-[#cfa353] transition-all flex flex-col justify-between relative group"
              >
                <div className="space-y-3">
                  {/* Top Header with Gold Number Circle */}
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#cfa353] text-slate-950 font-bold font-serif text-sm flex items-center justify-center shadow-md shrink-0">
                      {stream.id}
                    </span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-white leading-tight">
                      {stream.title}
                    </h4>
                  </div>

                  {/* Card Image */}
                  <div className="h-32 rounded-2xl overflow-hidden border border-white/10 shadow-md">
                    <img
                      src={stream.image}
                      alt={stream.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <p className="text-xs text-gray-300 font-light text-center">{stream.calc}</p>
                </div>

                {/* Big Gold Currency Display */}
                <div className="pt-3 border-t border-white/10 text-center space-y-1">
                  <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#cfa353] tracking-wide">
                    {stream.revenue}
                  </p>
                  <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider block">
                    {stream.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Row: Projected Yearly Revenue Summary Box */}
          <div className="bg-[#071d13] p-6 sm:p-8 rounded-3xl border border-[#cfa353]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Gold Circle Badge */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0d3423] to-[#0a291c] border-2 border-[#cfa353] p-6 rounded-full text-center space-y-2 shadow-xl flex flex-col items-center justify-center w-48 h-48 mx-auto">
              <TrendingUp className="w-8 h-8 text-[#cfa353]" />
              <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">GROWTH THAT KEEPS GROWING</span>
              <h3 className="text-2xl font-serif font-bold text-[#cfa353]">Exceed Every Year 20%</h3>
              <span className="text-[8px] text-gray-400">More Revenue. More Growth.</span>
            </div>

            {/* Center Projected Summary Table */}
            <div className="lg:col-span-6 space-y-4 text-center">
              <div>
                <h4 className="text-sm font-serif font-bold text-[#cfa353] tracking-wider uppercase">
                  PROJECTED YEARLY REVENUE SUMMARY
                </h4>
                <p className="text-[10px] text-gray-400 italic">The earnings shown here are projected calculations</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {yearlyProjections.map((p, idx) => (
                  <div key={idx} className="bg-white/10 p-3 rounded-2xl border border-white/15 text-center space-y-1">
                    <span className="text-[10px] font-bold text-[#cfa353] block">{p.year}</span>
                    <p className="text-sm font-serif font-bold text-white">{p.amount}</p>
                    <span className="text-[9px] text-gray-300 block">{p.growth}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Gold Circle Badge */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0d3423] to-[#0a291c] border-2 border-[#cfa353] p-6 rounded-full text-center space-y-2 shadow-xl flex flex-col items-center justify-center w-48 h-48 mx-auto">
              <Coins className="w-8 h-8 text-[#cfa353]" />
              <h4 className="text-sm font-serif font-bold text-[#cfa353] uppercase leading-tight">
                BUILDING EXPERIENCES
              </h4>
              <h4 className="text-sm font-serif font-bold text-white uppercase leading-tight">
                CREATING WEALTH
              </h4>
            </div>

          </div>

          {/* Bottom Row: 5 Value Pillars & Cursive Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
            
            {/* 5 Value Pillar Icons */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              {valuePillars.map((v, idx) => (
                <div key={idx} className="bg-[#0d3423] p-3 rounded-2xl border border-white/10 space-y-1 text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#0a291c] flex items-center justify-center">
                    {v.icon}
                  </div>
                  <span className="text-[10px] font-serif font-bold text-gray-200 block leading-tight">{v.title}</span>
                </div>
              ))}
            </div>

            {/* Right Cursive Gold Quote */}
            <div className="lg:col-span-4 bg-[#071d13] p-4 rounded-2xl border border-[#cfa353]/30 text-center lg:text-right space-y-1">
              <p className="text-base font-serif italic text-[#cfa353]">
                "Invest in Experiences Today. Reap a Lifetime of Prosperity."
              </p>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest block">*Term & Condition Apply</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
