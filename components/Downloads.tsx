
import React from 'react';
import { CATEGORIES } from '../constants';

export const Downloads: React.FC = () => {
  return (
    <section id="downloads" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
          <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">Documentación Oficial</span>
        </div>
        
        <h2 className="font-sport text-5xl md:text-6xl mb-6 tracking-wide text-white">
          DESCARGA LOS <span className="text-emerald-400">HORARIOS</span>
        </h2>
        
        <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
          Selecciona tu categoría para descargar el PDF.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.year} 
              className="group bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-2 text-left flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center shadow-2xl shadow-black/40 group-hover:scale-110 transition-transform duration-500`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-slate-600 font-bold text-[10px] tracking-widest mt-2 uppercase">PDF</span>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-1 tracking-tight">{cat.year}</h3>
              <p className="text-emerald-400 text-xs font-black mb-4 uppercase tracking-[0.2em]">{cat.label}</p>
              
              <p className="text-slate-400 text-sm mb-10 leading-relaxed flex-grow">
                {cat.description}
              </p>
              
              <a 
                href={cat.pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-500/10 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn border border-emerald-500/20"
              >
                DESCARGAR
                <svg className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 max-w-3xl mx-auto">
          <p className="text-slate-400 text-xs leading-relaxed">
            <strong className="text-blue-400 uppercase tracking-widest block mb-2">Ayuda para la descarga</strong>
            Asegúrate de que los archivos están en la raíz y se llaman exactamente:<br/>
            <code className="text-white bg-slate-800 px-2 py-1 rounded">2012-Memorial-Gonzalo-Gomez.pdf</code> (etc)<br/>
            Si el navegador sigue dando error, comprueba que el nombre no tenga espacios extra.
          </p>
        </div>
      </div>
    </section>
  );
};
