import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Palmtree, User, UserPlus } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'RESORT KEYS', path: '/resort-keys' },
    { name: 'ADVENTURE', path: '/adventure' },
    { name: 'WELLNESS', path: '/wellness' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'EARNING PLAN', path: '/investment' },
    { name: 'MEMBER PLAN', path: '/member-plan' },
    { name: 'BENEFITS', path: '/investor-benefits' },
    { name: 'LEGAL', path: '/legal-formation' },
    { name: 'LOCATION', path: '/location' },
    { name: 'THANK YOU', path: '/thank-you' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Fixed Luxury Dark Green Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a291c] border-b border-[#cfa353]/20 py-3.5 sm:py-4 shadow-xl">
        <div className="max-w-[1640px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-full border-2 border-[#cfa353] bg-[#0d3423] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Palmtree className="w-5 h-5 text-[#cfa353]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-lg leading-none tracking-wider group-hover:text-[#cfa353] transition-colors">
                  JOY CLUB
                </span>
                <span className="text-[8px] text-[#cfa353] tracking-[0.25em] font-semibold uppercase mt-0.5">
                  ADVENTURE RESORT
                </span>
              </div>
            </Link>

            {/* Desktop NavLinks */}
            <nav className="hidden 2xl:flex items-center space-x-2.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[9.5px] font-semibold tracking-wider transition-colors ${
                      isActive
                        ? 'text-[#cfa353] border-b-2 border-[#cfa353] pb-1 font-bold'
                        : 'text-gray-300 hover:text-[#cfa353]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action Buttons: LOGIN & JOIN NOW */}
            <div className="hidden lg:flex items-center space-x-2.5 shrink-0">
              <Link
                to="/login"
                className="px-4 py-1.5 rounded-full border border-[#cfa353] text-[#cfa353] hover:bg-[#cfa353]/10 font-bold text-[11px] tracking-wider uppercase transition-all flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5" />
                <span>LOGIN</span>
              </Link>

              <Link
                to="/join"
                className="px-5 py-2 rounded-full bg-[#cfa353] hover:bg-[#b88e40] text-slate-950 font-bold text-[11px] tracking-wider uppercase transition-all shadow-md hover:scale-105 flex items-center gap-1.5"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>JOIN NOW</span>
              </Link>
            </div>

            {/* Mobile / Tablet Action & Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/login"
                className="px-3.5 py-1.5 rounded-full border border-[#cfa353] text-[#cfa353] font-bold text-[11px] tracking-wider uppercase"
              >
                LOGIN
              </Link>
              <Link
                to="/join"
                className="px-4 py-1.5 rounded-full bg-[#cfa353] text-slate-950 font-bold text-[11px] tracking-wider uppercase shadow-md"
              >
                JOIN
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-7 h-7 text-[#cfa353]" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-Over Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#0a291c] border-l border-[#cfa353]/30 z-50 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto max-h-screen transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#cfa353] bg-[#0d3423] flex items-center justify-center">
                <Palmtree className="w-4 h-4 text-[#cfa353]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-base leading-none tracking-wider">
                  JOY CLUB
                </span>
                <span className="text-[8px] text-[#cfa353] tracking-[0.2em] font-semibold uppercase mt-0.5">
                  RESORT
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-[#cfa353]" />
            </button>
          </div>

          {/* Drawer NavLinks */}
          <nav className="mt-4 flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xs sm:text-sm font-semibold tracking-widest py-2 px-3.5 rounded-xl transition-all ${
                    isActive
                      ? 'text-[#cfa353] bg-white/10 border-l-4 border-[#cfa353]'
                      : 'text-gray-200 hover:text-[#cfa353] hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Drawer Action Buttons */}
        <div className="pt-4 border-t border-white/10 space-y-2">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="w-full py-2.5 rounded-full border border-[#cfa353] text-[#cfa353] text-xs font-bold tracking-widest text-center block uppercase hover:bg-[#cfa353]/10 transition-colors"
          >
            LOGIN TO DASHBOARD
          </Link>
          <Link
            to="/join"
            onClick={() => setIsOpen(false)}
            className="w-full py-2.5 rounded-full bg-[#cfa353] text-slate-950 text-xs font-bold tracking-widest text-center block uppercase hover:bg-[#b88e40] transition-colors shadow-lg"
          >
            JOIN JOYCLUB NOW
          </Link>
        </div>
      </div>
    </>
  );
};
