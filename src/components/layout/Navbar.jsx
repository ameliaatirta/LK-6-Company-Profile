import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../assets/Logo Tirta.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#183653]/90 backdrop-blur-md border-b border-white/10 text-[#F5F2EA] shadow-sm transition-all duration-300">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Brand Logo & Title (tanpa EST. 2011) */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="bg-[#F5F2EA] p-1.5 rounded-md flex items-center justify-center shadow-sm group-hover:bg-white transition">
            <img 
              src={logoImg} 
              alt="Logo TIRTA Group" 
              className="h-8 w-auto object-contain"
            />
          </div>
          <div>
            <span className="text-lg font-serif font-light tracking-[0.2em] block text-[#F5F2EA]">
              TIRTA GROUP
            </span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-8 text-xs font-light tracking-[0.2em] uppercase">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive 
                ? "text-[#F5F2EA] font-semibold border-b-2 border-[#F5F2EA] pb-1" 
                : "text-[#F5F2EA]/70 hover:text-[#F5F2EA] transition"
            }
          >
            HOME
          </NavLink>

          <NavLink 
            to="/about" 
            className={({isActive}) => 
              isActive 
                ? "text-[#F5F2EA] font-semibold border-b-2 border-[#F5F2EA] pb-1" 
                : "text-[#F5F2EA]/70 hover:text-[#F5F2EA] transition"
            }
          >
            ABOUT US
          </NavLink>

          <NavLink 
            to="/services" 
            className={({isActive}) => 
              isActive 
                ? "text-[#F5F2EA] font-semibold border-b-2 border-[#F5F2EA] pb-1" 
                : "text-[#F5F2EA]/70 hover:text-[#F5F2EA] transition"
            }
          >
            OUR BRANDS
          </NavLink>

          <NavLink 
            to="/portfolio" 
            className={({isActive}) => 
              isActive 
                ? "text-[#F5F2EA] font-semibold border-b-2 border-[#F5F2EA] pb-1" 
                : "text-[#F5F2EA]/70 hover:text-[#F5F2EA] transition"
            }
          >
            PORTFOLIO
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              isActive 
                ? "text-[#F5F2EA] font-semibold border-b-2 border-[#F5F2EA] pb-1" 
                : "text-[#F5F2EA]/70 hover:text-[#F5F2EA] transition"
            }
          >
            CONTACT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}