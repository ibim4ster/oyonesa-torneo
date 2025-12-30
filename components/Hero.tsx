
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Local Reference to IMG_2874 */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-10000 hover:scale-110" 
        style={{ backgroundImage: `url('./IMG_2874.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mt-12">
        <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Sociedad Oyonesa Deportiva</span>
        </div>
        
        <h1 className="font-sport text-7xl md:text-9xl mb-6 leading-none tracking-tight">
          <span className="text-white">II MEMORIAL</span> <br />
          <span className="text-emerald-400">GONZALO GÓMEZ</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-lg">
          Vuelve el gran torneo de fútbol base al Oion ARENA. Pasión, respeto y competición en el corazón de Álava.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="#downloads" className="px-10 py-5 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-500/30 flex items-center justify-center gap-3">
            REGLAMENTO Y HORARIOS
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </a>
          <a href="#arena" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center">
            VER EL OION ARENA
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
};
