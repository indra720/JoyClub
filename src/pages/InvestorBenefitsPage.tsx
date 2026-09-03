import React from 'react';
import { Palmtree, Gift, ShieldCheck, Check } from 'lucide-react';

export const InvestorBenefitsPage: React.FC = () => {
  const memberTiers = [
    { tier: '01', investment: '₹2.20 LAKH', stay: '2 Nights Stay w/ Breakfast', games: '10 Complimentary Game Activities', extra: '-' },
    { tier: '02', investment: '₹4.40 LAKH', stay: '4 Nights Stay w/ Breakfast', games: '10 Complimentary Game Activities', extra: '1 Complimentary Dinner' },
    { tier: '03', investment: '₹6.60 LAKH', stay: '10 Nights Stay w/ Breakfast', games: '10 Complimentary Game Activities', extra: '4 Complimentary Dinners' },
    { tier: '04', investment: '₹11.00 LAKH', stay: '14 Nights Stay w/ Breakfast', games: '10 Complimentary Game Activities', extra: '6 Dinners + 2 Natural Therapy Courses + Birthday Cake' },
    { tier: '05', investment: '₹22.00 LAKH', stay: '24 Nights Stay w/ Breakfast', games: '10 Complimentary Game Activities', extra: '10 Dinners + 6 Therapy Sessions + Birthday Music/Cake/Decor' },
    { tier: '06', investment: '₹44.00 LAKH', stay: '24 Nights Stay w/ Breakfast', games: '10 Complimentary Game Activities', extra: 'One-Day Use of 100-Room Property + Free Marriage Garden Venue + 10 Dinners + 10 Therapy Sessions' },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#f7f4ed] min-h-screen text-slate-900 selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Card Wrapper */}
        <div className="bg-white rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border border-amber-900/10 space-y-8">
          
          {/* Header Banner */}
          <div className="bg-[#0a291c] text-white rounded-2xl p-6 border border-[#cfa353]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#cfa353] bg-[#0d3423] flex items-center justify-center shrink-0">
                <Gift className="w-6 h-6 text-[#cfa353]" />
              </div>
              <div>
                <span className="text-[10px] text-[#cfa353] tracking-[0.25em] font-semibold uppercase block">
                  JOY CLUB ADVENTURE RESORT
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
                  INVESTOR MEMBER <span className="text-[#cfa353]">BENEFITS</span>
                </h1>
                <p className="text-xs text-gray-300 font-light mt-0.5">
                  Exclusive Annual Benefits (Valid for 8 Consecutive Years)
                </p>
              </div>
            </div>

            <div className="px-5 py-2.5 rounded-full bg-[#cfa353] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md">
              Valid for 8 Years
            </div>
          </div>

          {/* Matrix Comparison Table */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 className="text-xl font-serif font-bold text-[#0a291c]">Tiered Investor Benefits Matrix</h3>
              <span className="text-xs text-gray-500 font-light">Annual Benefits Summary</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0a291c] text-[#cfa353] font-serif uppercase tracking-wider text-[11px]">
                    <th className="p-4 rounded-l-xl">Tier</th>
                    <th className="p-4">Investment Amount</th>
                    <th className="p-4">Complimentary Stay</th>
                    <th className="p-4">Game Activities</th>
                    <th className="p-4 rounded-r-xl">Special Bonus Perks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {memberTiers.map((m, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                      <td className="p-4 font-bold text-[#cfa353]">{m.tier}</td>
                      <td className="p-4 font-sans font-bold text-slate-900 text-sm">{m.investment}</td>
                      <td className="p-4 text-slate-700">{m.stay}</td>
                      <td className="p-4 text-slate-700">{m.games}</td>
                      <td className="p-4 text-slate-700 font-medium">{m.extra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Note Box */}
          <div className="bg-[#0a291c] text-white p-6 rounded-2xl border border-[#cfa353]/30 flex items-start gap-4 shadow-lg">
            <ShieldCheck className="w-8 h-8 text-[#cfa353] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-serif font-bold text-[#cfa353]">IMPORTANT NOTE & TERMS</h4>
              <p className="text-xs text-gray-200 font-light leading-relaxed">
                All facilities and benefits mentioned above are provided once every year and remain valid for 8 consecutive years from the date of joining, subject to the company's applicable terms and conditions.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
