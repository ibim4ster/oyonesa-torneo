
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
        <h2 className="font-sport text-4xl tracking-[0.2em] text-white uppercase">
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
          <div className="p-12 md:p-16 md:col-span-1 flex flex-col justify-center bg-slate-800 relative z-10">
            <h2 className="font-sport text-5xl mb-8 leading-none text-white">¿DÓNDE <br /><span className="text-emerald-400 uppercase">ESTAMOS?</span></h2>
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
                  Cómo llegar
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 min-h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.332309710356!2d-2.4364440234139884!3d42.50853507117974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd45873994644465%3A0xc3f982855f464d26!2sOion%20Arena!5e0!3m2!1ses!2ses!4v1716123456789!5m2!1ses!2ses" 
              className="absolute inset-0 w-full h-full border-0 grayscale invert brightness-90 contrast-125"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Oion Arena"
            ></iframe>
            {/* Overlay sutil para integrar el mapa con el estilo oscuro */}
            <div className="absolute inset-0 pointer-events-none bg-emerald-500/5 mix-blend-overlay"></div>
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
