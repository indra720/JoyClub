import React from 'react';
import { Palmtree, Check, ShieldCheck, TrendingUp, DollarSign, Award, Diamond } from 'lucide-react';

export const MemberPlanPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-[#f7f4ed] min-h-screen text-slate-900 selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Card Wrapper */}
        <div className="bg-[#faf8f2] rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border-2 border-[#cfa353]/40 space-y-8 relative overflow-hidden">
          
          {/* Top Header Row with Diagonal Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-b border-amber-900/10 pb-6">
            
            {/* Left Shield & Title */}
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <div className="w-16 h-20 rounded-2xl bg-[#0a291c] border-2 border-[#cfa353] flex flex-col items-center justify-center p-2 text-center shadow-lg shrink-0">
                <Palmtree className="w-6 h-6 text-[#cfa353]" />
                <span className="text-[8px] font-bold text-white tracking-widest uppercase mt-1">JOY CLUB</span>
                <span className="text-[6px] text-[#cfa353] tracking-widest uppercase">RESORT</span>
              </div>

              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-wider">
                  <span className="text-[#0a291c]">MEMBER </span>
                  <span className="text-[#cfa353]">PLAN</span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-2 pt-1">
                  <div className="w-2 h-2 bg-[#cfa353] rotate-45" />
                  <span className="text-xs font-serif text-slate-700 font-semibold tracking-wider">
                    ₹2.20 LAKH INVESTMENT | 1 SHAREHOLDING IN VILLA | 8-YEAR RETURN PLAN
                  </span>
                  <div className="w-2 h-2 bg-[#cfa353] rotate-45" />
                </div>
              </div>
            </div>

            {/* Right Curved Pool Photo Card */}
            <div className="lg:col-span-4 relative h-36 sm:h-40 rounded-3xl overflow-hidden shadow-xl border border-amber-900/10 group">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Villa Sunset Pool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform filter brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-end p-4">
                <div className="bg-[#0a291c]/90 text-white p-3 rounded-2xl border border-[#cfa353]/40 text-center shadow-md">
                  <span className="text-[9px] text-gray-300 block font-light">Your Investment Today ➔</span>
                  <h4 className="text-xs font-serif font-bold text-[#cfa353]">Secure Returns Tomorrow</h4>
                </div>
              </div>
            </div>

          </div>

          {/* Row of 4 Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-amber-900/10 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a291c] text-[#cfa353] flex items-center justify-center shrink-0 shadow-md">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-slate-900">MULTIPLE REVENUE STREAMS</h4>
                <p className="text-[10px] text-gray-500 font-light">Consistent Income Opportunities</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-amber-900/10 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a291c] text-[#cfa353] flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-slate-900">SUSTAINABLE GROWTH</h4>
                <p className="text-[10px] text-gray-500 font-light">Built for Long-Term Value</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-amber-900/10 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a291c] text-[#cfa353] flex items-center justify-center shrink-0 shadow-md">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-slate-900">SECURE INVESTMENT</h4>
                <p className="text-[10px] text-gray-500 font-light">Safe, Transparent & Reliable</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-amber-900/10 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a291c] text-[#cfa353] flex items-center justify-center shrink-0 shadow-md">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-slate-900">DIVERSIFIED INCOME</h4>
                <p className="text-[10px] text-gray-500 font-light">Stronger Portfolio, Better Future</p>
              </div>
            </div>
          </div>

          {/* 3 Equal-Height Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Box 01: Dark Green Tab (01 MONTHLY RETURNS YEAR 1-4) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-amber-900/10 overflow-hidden shadow-lg flex flex-col justify-between">
              <div>
                <div className="bg-[#0a291c] text-white px-5 py-3 flex items-center justify-between">
                  <span className="text-[#cfa353] font-serif font-bold text-sm">01</span>
                  <h4 className="font-serif font-bold text-xs tracking-wider uppercase text-white">
                    MONTHLY RETURNS (YEAR 1–4) 🌿
                  </h4>
                </div>

                <div className="p-5 space-y-4">
                  <p className="text-xs font-semibold text-slate-800">
                    Every month: 1% return on ₹2.20 Lakh <br />
                    <span className="text-lg font-serif font-bold text-[#0a291c]">= ₹2,200</span>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-7 space-y-1.5 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#cfa353] shrink-0" /><span>Monthly income: ₹2,200</span></div>
                      <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#cfa353] shrink-0" /><span>Duration: 48 months (4 years)</span></div>
                      <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#cfa353] shrink-0" /><span>TDS deducted as applicable</span></div>
                    </div>
                    <div className="sm:col-span-5 h-28 rounded-xl overflow-hidden shadow-sm">
                      <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&q=80" alt="Resort Pathway" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50/60 border-t border-amber-900/10 text-[11px] text-slate-600 font-light leading-relaxed">
                After 48 months, you will have received the original amount of ₹2.20 Lakh back. Then the same holding equity will be transferred to the hospitality company.
              </div>
            </div>

            {/* Box 02: Gold Tab (02 25% DIVIDEND FUND YEAR 5-8) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-amber-900/10 overflow-hidden shadow-lg flex flex-col justify-between">
              <div>
                <div className="bg-[#cfa353] text-slate-950 px-5 py-3 flex items-center justify-between">
                  <span className="font-serif font-extrabold text-sm">02</span>
                  <h4 className="font-serif font-bold text-xs tracking-wider uppercase text-slate-950">
                    25% DIVIDEND FUND (YEAR 5–8) 🌿
                  </h4>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-700 font-light">
                    After 48 months, every year a <br />
                    <strong className="text-[#0a291c] font-bold">25% dividend fund</strong> will be given:
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-800 font-medium">
                    <div className="flex justify-between p-2 rounded-lg bg-gray-50 border border-gray-100"><span>5th Year</span><span className="font-serif font-bold text-[#0a291c]">₹55,000</span></div>
                    <div className="flex justify-between p-2 rounded-lg bg-gray-50 border border-gray-100"><span>6th Year</span><span className="font-serif font-bold text-[#0a291c]">₹55,000</span></div>
                    <div className="flex justify-between p-2 rounded-lg bg-gray-50 border border-gray-100"><span>7th Year</span><span className="font-serif font-bold text-[#0a291c]">₹55,000</span></div>
                    <div className="flex justify-between p-2 rounded-lg bg-gray-50 border border-gray-100"><span>8th Year</span><span className="font-serif font-bold text-[#0a291c]">₹55,000</span></div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50/60 border-t border-amber-900/10 text-center">
                <span className="px-4 py-1.5 rounded-full bg-white border border-[#cfa353] text-[#0a291c] font-bold text-xs shadow-sm inline-block">
                  Total Dividend (4 Years): ₹2,20,000
                </span>
              </div>
            </div>

            {/* Box 03: Dark Green Tab (03 HOSPITALITY ROOM NIGHT SALES) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-amber-900/10 overflow-hidden shadow-lg flex flex-col justify-between">
              <div>
                <div className="bg-[#0a291c] text-white px-5 py-3 flex items-center justify-between">
                  <span className="text-[#cfa353] font-serif font-bold text-sm">03</span>
                  <h4 className="font-serif font-bold text-xs tracking-wider uppercase text-white">
                    HOSPITALITY ROOM NIGHT SALES (OTA PORTAL) 🌿
                  </h4>
                </div>

                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-6 text-xs text-slate-700 font-light space-y-1">
                      <span className="text-base">🌐</span>
                      <p className="font-medium text-slate-900">Selling room nights through OTA Portals</p>
                    </div>
                    <div className="sm:col-span-6 h-28 rounded-xl overflow-hidden shadow-sm">
                      <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=400&q=80" alt="Luxury Suite" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50/60 border-t border-amber-900/10 flex items-center justify-around text-xs font-bold text-slate-800">
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm">Booking.com</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm">agoda</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm">make my trip</span>
              </div>
            </div>

          </div>

          {/* Bottom Dark Green Section: TOTAL RETURNS OVER 8 YEARS */}
          <div className="bg-[#0a291c] text-white rounded-3xl p-6 sm:p-8 border border-[#cfa353]/30 shadow-2xl space-y-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Left Diamond Emblem & Formula */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left flex-1">
                <div className="w-14 h-14 rounded-full border-2 border-[#cfa353] bg-[#0d3423] flex items-center justify-center shrink-0 shadow-lg">
                  <Diamond className="w-7 h-7 text-[#cfa353]" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[#cfa353] text-xs font-serif font-bold uppercase tracking-wider block">
                    TOTAL RETURNS OVER 8 YEARS
                  </span>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-bold">
                    <span className="px-3 py-2 bg-white text-slate-950 rounded-xl shadow-md">₹2,20,000 (Monthly Returns in 4 Years)</span>
                    <span className="text-[#cfa353] text-base">+</span>
                    <span className="px-3 py-2 bg-white text-slate-950 rounded-xl shadow-md">₹2,20,000 (Dividend in Years 5–8)</span>
                    <span className="text-[#cfa353] text-base">=</span>
                    <span className="px-4 py-2 bg-[#cfa353] text-slate-950 rounded-xl text-base font-serif font-bold shadow-lg">
                      ₹4,40,000 TOTAL RETURNS OVER 8 YEARS
                    </span>
                  </div>
                </div>
              </div>

              {/* Right 3 Metric Circles */}
              <div className="flex items-center gap-6 text-center border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 shrink-0">
                <div>
                  <span className="text-[10px] text-gray-300 uppercase block">INVESTMENT</span>
                  <span className="text-sm font-serif font-bold text-[#cfa353]">₹2.20 LAKH</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-300 uppercase block">RETURNS</span>
                  <span className="text-sm font-serif font-bold text-[#cfa353]">₹4.40 LAKH</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-300 uppercase block">DURATION</span>
                  <span className="text-sm font-serif font-bold text-white">8 YEARS</span>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Tagline Banner */}
          <div className="bg-[#0d3423] text-white rounded-2xl p-5 border border-[#cfa353]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
            <div className="text-xs font-serif font-bold text-[#cfa353] tracking-widest uppercase">
              INVEST TODAY, LIVE BETTER, EARN TOGETHER
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#cfa353]" /> Premium Experiences</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#cfa353]" /> Exclusive Lifestyle</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#cfa353]" /> Passive Income</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#cfa353]" /> Wealth Creation</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
