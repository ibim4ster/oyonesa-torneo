
import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

export const Downloads: React.FC = () => {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (url: string, filename: string) => {
    setDownloading(filename);
    try {
      // Método robusto: Descargar el archivo como blob para forzar la descarga del PDF "sí o sí"
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error al acceder al archivo');
      
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      
      // Limpieza
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error en la descarga:', error);
      // Fallback: abrir en nueva pestaña si el blob falla
      window.open(url, '_blank');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <section id="downloads" className="py-24 bg-slate-950 relative overflow-hidden">
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
          Haz clic en el botón de tu categoría para obtener el PDF actualizado con los cruces, horarios y reglamento del torneo.
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
              
              <button 
                onClick={() => handleDownload(cat.pdfUrl, `${cat.year}.pdf`)}
                disabled={downloading === `${cat.year}.pdf`}
                className="w-full py-4 bg-emerald-500/10 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn border border-emerald-500/20 disabled:opacity-50"
              >
                {downloading === `${cat.year}.pdf` ? 'DESCARGANDO...' : 'DESCARGAR'}
                <svg className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
