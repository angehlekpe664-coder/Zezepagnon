import React from 'react';
import { Award, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const MapaInfoCard = () => {
  return (
    <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#0F172A] via-[#0F62FE] to-[#003899] text-white shadow-2xl border border-blue-400/30 backdrop-blur-xl overflow-hidden my-8">
      {/* Background glowing shapes */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* MAPA Logo Display */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4 bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md">
          <img 
            src="/img/logo.jpeg" 
            alt="MAPA Atlanta-USA Logo" 
            className="w-36 h-36 object-contain rounded-2xl bg-white p-3 shadow-xl border-4 border-white/80" 
          />
          <div>
            <span className="text-lg font-black font-heading tracking-wide text-white block">
              MAPA ATLANTA-USA
            </span>
            <span className="text-xs font-bold text-[#FBBF24] tracking-widest uppercase block mt-0.5">
              Maison d'Action pour la Pharmacopée Africaine
            </span>
          </div>
        </div>

        {/* MAPA Presentation & Mission Description */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-extrabold text-[#FBBF24] uppercase tracking-widest bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full">
              ORGANISATION INTERNATIONALE CERTIFIÉE
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-black text-white leading-tight">
            Qu'est-ce que MAPA (Atlanta-USA) ?
          </h2>

          <p className="text-sm md:text-base text-blue-50 leading-relaxed font-sans font-medium">
            <strong>MAPA (Maison d'Action pour la Pharmacopée Africaine)</strong> est l'institution internationale basée à Atlanta (USA), co-fondée et portée par le <strong className="text-white font-bold underline underline-offset-4 decoration-[#FBBF24]">S.E. Professeur Alain TAGRO</strong>. Elle est dédiée à la recherche scientifique, au développement et à l'homologation des thérapies naturelles d'immunothérapie issues de la biodiversité africaine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start space-x-2.5 bg-white/10 p-3 rounded-xl border border-white/10">
              <CheckCircle2 size={18} className="text-[#FBBF24] shrink-0 mt-0.5" />
              <span className="text-xs text-blue-100 font-semibold">Certification & Contrôle Qualité International</span>
            </div>
            <div className="flex items-start space-x-2.5 bg-white/10 p-3 rounded-xl border border-white/10">
              <CheckCircle2 size={18} className="text-[#FBBF24] shrink-0 mt-0.5" />
              <span className="text-xs text-blue-100 font-semibold">Distribution Exclusive par Stockistes Agréés</span>
            </div>
            <div className="flex items-start space-x-2.5 bg-white/10 p-3 rounded-xl border border-white/10">
              <CheckCircle2 size={18} className="text-[#FBBF24] shrink-0 mt-0.5" />
              <span className="text-xs text-blue-100 font-semibold">Partenariat Médical Bénin (Calavi / Cotonou)</span>
            </div>
            <div className="flex items-start space-x-2.5 bg-white/10 p-3 rounded-xl border border-white/10">
              <CheckCircle2 size={18} className="text-[#FBBF24] shrink-0 mt-0.5" />
              <span className="text-xs text-blue-100 font-semibold">Garantie 100% Ingrédients Bio-Purifiés</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
