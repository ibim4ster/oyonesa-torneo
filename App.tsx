
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { Downloads } from './components/Downloads';
import { Assistant } from './components/Assistant';

const Footer: React.FC = () => (
  <footer className="py-20 bg-slate-950 border-t border-slate-900">
    <div className="container mx-auto px-6 text-center">
      <div className="flex flex-col items-center mb-12">
        <img 
          src="./spash (1).png" 
          alt="Escudo SD Oyonesa" 
          className="w-24 h-24 object-contain mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/100?text=Logo";
          }}
        />
        <h2 className="font-sport text-3xl tracking-[0.2em] text-white uppercase">
          II Memorial <span className="text-emerald-400">Gonzalo Gómez</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500/30 mt-4 rounded-full"></div>
      </div>
      
      <p className="text-slate-500 text-sm mb-12 max-w-xl mx-auto leading-relaxed">
        Organizado con orgullo por la Sociedad Oyonesa Deportiva. <br />
        Homenajeando la memoria de Gonzalo Gómez a través de la pasión por el fútbol base.
      </p>
      
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12 text-slate-400">
        <a href="#" className="hover:text-emerald-400 transition-colors uppercase text-[10px] tracking-[0.3em] font-black">Contacto</a>
        <a href="#" className="hover:text-emerald-400 transition-colors uppercase text-[10px] tracking-[0.3em] font-black">Localización</a>
        <a href="#" className="hover:text-emerald-400 transition-colors uppercase text-[10px] tracking-[0.3em] font-black">Transparencia</a>
      </div>
      
      <p className="text-slate-700 text-[9px] uppercase tracking-[0.4em] font-medium">
        &copy; 2024 S.D. Oyonesa. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

const Location: React.FC = () => (
  <section id="location" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-3xl border border-slate-700/50">
        <div className="grid md:grid-cols-3">
          <div className="p-12 md:p-16 md:col-span-1 flex flex-col justify-center">
            <h2 className="font-sport text-5xl mb-8 leading-none">¿DÓNDE <br /><span className="text-emerald-400 uppercase">ESTAMOS?</span></h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-emerald-500 font-black mb-2 uppercase text-[10px] tracking-[0.3em]">Instalaciones</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">Oion ARENA / Campo de El Espinar<br />C. de la Dehesa, s/n, 01320 Oyón-Oion, Álava</p>
              </div>
              <div>
                <h4 className="text-emerald-500 font-black mb-2 uppercase text-[10px] tracking-[0.3em]">Secretaría</h4>
                <p className="text-slate-300 text-sm font-medium">secretaria@oyonesa.com</p>
              </div>
              <div className="pt-4">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Oion+Arena+Football+Field" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black px-10 py-5 rounded-2xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 uppercase text-xs tracking-widest"
                >
                  Ruta en Mapa
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 min-h-[500px] relative bg-slate-700">
            <div className="absolute inset-0 grayscale-[0.3] flex items-center justify-center">
               <img src="./IMG_2874.jpg" className="w-full h-full object-cover opacity-40 blur-[2px]" alt="Mapa conceptual" />
               <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-transparent to-transparent"></div>
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-emerald-500/20 rounded-full animate-ping absolute opacity-40"></div>
                  <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center relative shadow-3xl shadow-emerald-500/50 rotate-3">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  </div>
                  <p className="mt-6 text-white font-sport text-2xl tracking-widest bg-slate-900/80 backdrop-blur-md px-6 py-2 rounded-xl border border-white/10">OION ARENA</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <InfoSection />
      <Downloads />
      <Location />
      <Footer />
      <Assistant />
    </div>
  );
};

export default App;
