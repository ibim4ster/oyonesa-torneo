
import React from 'react';

export const InfoSection: React.FC = () => {
  return (
    <section id="arena" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
              <img 
                src="./IMG_2874.jpg" 
                alt="Gradas Oion ARENA" 
                className="w-full h-auto object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Estadio+Oion+ARENA";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-1 h-emerald-500 rounded-full"></div>
                  <p className="text-emerald-400 font-bold text-xs tracking-[0.3em] uppercase">Sede Oficial</p>
                </div>
                <h3 className="text-white text-4xl font-sport tracking-widest">OION ARENA</h3>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="font-sport text-5xl md:text-6xl mb-8 leading-tight">
              UN ESCENARIO DE <br />
              <span className="text-emerald-400 text-4xl md:text-5xl uppercase">PRIMER NIVEL</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light">
              Ubicado en las instalaciones de la S.D. Oyonesa, el Oion ARENA ofrece una experiencia profesional para los jugadores y comodidad máxima para los aficionados con sus amplias gradas cubiertas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Grada Cubierta", desc: "Asientos ergonómicos con protección total contra la lluvia." },
                { title: "Césped Artificial", desc: "Superficie de alta tecnología para un bote de balón perfecto." },
                { title: "Vestuarios Pro", desc: "Instalaciones renovadas para una preparación de élite." },
                { title: "Acceso Adaptado", desc: "Instalaciones 100% accesibles para todos los públicos." }
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
