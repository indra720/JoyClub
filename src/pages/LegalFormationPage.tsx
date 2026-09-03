import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const LegalFormationPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-[#f7f4ed] min-h-screen text-slate-900 selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Card Wrapper */}
        <div className="bg-white rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border border-amber-900/10 space-y-8">
          
          {/* Header Banner */}
          <div className="bg-[#0a291c] text-white rounded-2xl p-6 border border-[#cfa353]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#cfa353] bg-[#0d3423] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#cfa353]" />
              </div>
              <div>
                <span className="text-[10px] text-[#cfa353] tracking-[0.25em] font-semibold uppercase block">
                  JOY HOSPITALITY & REAL ESTATE GROUP
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
                  JOY LEGAL <span className="text-[#cfa353]">FORMATION</span>
                </h1>
                <p className="text-xs text-gray-300 font-light mt-0.5">
                  A Premium Investment. A Secure Future. Built on Trust.
                </p>
              </div>
            </div>

            <div className="px-5 py-2.5 rounded-full bg-[#cfa353] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md">
              Secure Returns Tomorrow
            </div>
          </div>

          {/* 3 Numbered Investment & Agreement Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            <div className="lg:col-span-4 bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-4 shadow-md flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-full bg-[#0a291c] text-[#cfa353] font-bold text-sm flex items-center justify-center">1</span>
                <h3 className="text-lg font-serif font-bold text-[#0a291c]">Membership Payment Split</h3>
                <p className="text-xs text-gray-700 leading-relaxed font-light">
                  Rs. 2,20,000/- through Cheque/RTGS/NEFT/UPI to company(ies): <br />
                  <strong className="text-[#0a291c] font-semibold">Rs. 40,000/-</strong> transfer in Joy Resorts for obtaining 8 Years' Membership Facility at the Resort.
                </p>
              </div>
              <p className="text-[11px] text-gray-500 italic pt-3 border-t border-gray-200">
                GST applicable on the invoices at the time of using services at the rates in force would be payable additionally by members.
              </p>
            </div>

            <div className="lg:col-span-4 bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-4 shadow-md flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-full bg-[#0a291c] text-[#cfa353] font-bold text-xs flex items-center justify-center">2</span>
                <h3 className="text-lg font-serif font-bold text-[#0a291c]">CCD Debentures Transfer</h3>
                <p className="text-xs text-gray-700 leading-relaxed font-light">
                  <strong className="text-[#0a291c] font-semibold">Rs. 1,80,000/-</strong> transfer to Company towards applying for CCD (Compulsorily Convertible Debentures into Equity Shares) in the company.
                </p>
              </div>
              <div className="p-3 bg-[#0a291c] text-[#cfa353] rounded-xl text-center font-bold text-xs">
                Equity Shareholding Protection
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-4 shadow-md flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-full bg-[#0a291c] text-[#cfa353] font-bold text-xs flex items-center justify-center">3</span>
                <h3 className="text-lg font-serif font-bold text-[#0a291c]">3 Executed Legal Agreements</h3>
                <div className="space-y-2 text-xs text-gray-700 pt-2">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#cfa353] shrink-0" /><span>8 Year Resort Facility Agreement</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#cfa353] shrink-0" /><span>CCD Shareholding Agreement</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#cfa353] shrink-0" /><span>Buyback, Rental & Shareholding Agreement</span></div>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 italic pt-3 border-t border-gray-200">
                Executed during investment process for 100% legal protection.
              </p>
            </div>

          </div>

          {/* Section 4: Timeline Box (WHEN AND WHAT YOU GET) */}
          <div className="bg-[#0a291c] text-white p-6 sm:p-8 rounded-3xl border border-[#cfa353]/30 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-serif font-bold text-[#cfa353]">4 / WHEN AND WHAT YOU GET TIMELINE</h3>
              <span className="text-xs text-gray-300">8-Year Guaranteed Return Terms</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-[#cfa353] font-bold block">EVERY YEAR</span>
                <p className="text-gray-200">Interest on CCDs yielding a return of 12% p.a. at commencement of each year (Till 48 Months).</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-[#cfa353] font-bold block">AFTER 48 MONTHS</span>
                <p className="text-gray-200">Rs. 2,20,000/- towards purchase / redemption of corresponding amount of CCDs.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-[#cfa353] font-bold block">AT YEARS 5, 6, 7</span>
                <p className="text-gray-200">Rs. 55,000/- annual dividend fund per year for corresponding CCDs.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-[#cfa353] font-bold block">AT 8TH YEAR</span>
                <p className="text-gray-200">Rs. 55,000/- final dividend; completing full Rs. 4,40,000/- payout obligation.</p>
              </div>
            </div>
          </div>

          {/* Footer Tagline */}
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-center text-xs font-serif italic text-slate-800">
            "Your Journey to Financial Freedom Begins Here."
          </div>

        </div>

      </div>
    </div>
  );
};
