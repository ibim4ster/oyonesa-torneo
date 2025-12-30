
import React from 'react';
import { CATEGORIES } from '../constants';

export const Downloads: React.FC = () => {
  return (
    <section id="downloads" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-sport text-5xl mb-4 tracking-wide">RECURSOS Y <span className="text-emerald-400">DESCARGAS</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          Accede a toda la documentación oficial, reglamentos y horarios específicos para cada categoría. Mantente informado sobre las reglas del torneo.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.year} 
              className="group bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all hover:translate-y-[-8px] text-left relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${cat.color} opacity-10 rounded-bl-full`}></div>
              
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{cat.year}</h3>
              <p className="text-emerald-400 text-sm font-bold mb-4 uppercase tracking-wider">{cat.label}</p>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {cat.description}
              </p>
              
              <a 
                href={cat.pdfUrl}
                className="inline-flex items-center gap-2 text-white font-bold hover:text-emerald-400 transition-colors"
                download
              >
                DESCARGAR PDF
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
