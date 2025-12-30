
import React from 'react';

export const InfoSection: React.FC = () => {
  return (
    <section id="arena" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-3xl transition-all group-hover:bg-emerald-500/30"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
              <img 
                src="./IMG_2874.jpg" 
                alt="Instalaciones Oion ARENA" 
                className="w-full h-[500px] object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-4xl font-sport tracking-widest leading-none">OION ARENA</h3>
                    <p className="text-emerald-400 font-bold text-[10px] tracking-[0.3em] uppercase">Sede Oficial del Torneo</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-medium">
                  Instalaciones renovadas para ofrecer el mejor espectáculo de fútbol base en la Rioja Alavesa.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 order-1 lg:order-2">
            <h2 className="font-sport text-5xl md:text-6xl mb-8 leading-tight">
              UN ESCENARIO DE <br />
              <span className="text-emerald-400 text-4xl md:text-5xl uppercase">PRIMER NIVEL</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light">
              El Oion ARENA (Campo de El Espinar) no es solo un campo de fútbol; es el corazón de nuestra pasión. Ofrecemos una experiencia profesional para los jugadores y comodidad máxima para los aficionados.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Grada Cubierta", desc: "Asientos con protección total para disfrutar del juego sin importar el clima." },
                { title: "Césped de Última Gen", desc: "Superficie de alta tecnología certificada para prevenir lesiones." },
                { title: "Vestuarios Élite", desc: "Instalaciones renovadas, amplias y totalmente equipadas." },
                { title: "Zona de Cafetería", desc: "Espacio de restauración para recargar energías entre partidos." }
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
