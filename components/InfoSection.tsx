
import React from 'react';

export const InfoSection: React.FC = () => {
  return (
    <section id="arena" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-3xl transition-all"></div>
            <div className="relative rounded-3xl p-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8">
                <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white text-5xl font-sport tracking-widest mb-4">OION ARENA</h3>
              <p className="text-emerald-400 font-bold text-sm tracking-[0.3em] uppercase mb-6">Sede Oficial del Torneo</p>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6"></div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Instalaciones deportivas de vanguardia situadas en Oyón-Oion, Álava.
              </p>
            </div>
          </div>

          <div className="relative z-10 order-1 lg:order-2">
            <h2 className="font-sport text-5xl md:text-6xl mb-8 leading-tight">
              UN ESCENARIO DE <br />
              <span className="text-emerald-400 text-4xl md:text-5xl uppercase">PRIMER NIVEL</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light">
              El Oion ARENA ofrece una experiencia profesional para los jugadores y comodidad máxima para los aficionados con sus amplias instalaciones.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Grada Cubierta", desc: "Asientos con protección total para disfrutar del juego." },
                { title: "Césped Artificial", desc: "Superficie de alta tecnología certificada." },
                { title: "Vestuarios Pro", desc: "Instalaciones renovadas y amplias." },
                { title: "Zona de Prensa", desc: "Espacios habilitados para la cobertura del evento." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all group">
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
