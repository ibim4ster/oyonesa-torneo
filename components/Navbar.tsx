
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="https://images.unsplash.com/photo-1599305090598-fe179d501227?w=100&h=100&fit=crop&q=80" 
            alt="Logo S.D. Oyonesa" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-0 invert"
          />
          <div className="flex flex-col">
            <span className="font-sport text-lg md:text-xl tracking-wider text-white leading-none">II MEMORIAL</span>
            <span className="font-sport text-xl md:text-2xl tracking-wider text-emerald-400 leading-none">GONZALO GÓMEZ</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-[10px] font-bold hover:text-emerald-400 transition-colors uppercase tracking-[0.2em] text-slate-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full text-xs font-black transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20 uppercase tracking-widest">
          Inscripción
        </button>
      </div>
    </nav>
  );
};
