import React from 'react';
import { Award, CheckCircle2, Globe, GraduationCap, Sparkles } from 'lucide-react';

export const DrTagroProfileCard = () => {
  return (
    <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F62FE] text-white shadow-2xl border border-blue-400/30 backdrop-blur-xl overflow-hidden my-8">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Photo S.E. Pr. Alain TAGRO (dr.jpeg) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
          <div className="relative group">
            {/* Animated Halo ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0F62FE] via-[#10B981] to-[#FBBF24] rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            
            <img 
              src="/img/dr.jpeg" 
              alt="Son Excellence le Professeur Alain TAGRO" 
              className="relative w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/90" 
            />

            <span className="absolute bottom-3 left-3 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 text-[#FBBF24] text-[11px] font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
              <Award size={14} />
              S.E. PR. ALAIN TAGRO (USA)
            </span>
          </div>
        </div>

        {/* Credentials & Bio Details */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold text-[#FBBF24] uppercase tracking-widest bg-amber-500/20 border border-amber-500/40 px-3.5 py-1.5 rounded-full">
              FONDATEUR & CHERCHEUR EN CHEF ZEZEPAGNON
            </span>
            <span className="text-xs font-bold text-blue-200 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1">
              <Globe size={13} className="text-blue-400" />
              Miami & Atlanta, USA
            </span>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-white leading-tight">
              S.E. Professeur Alain TAGRO
            </h2>
            <p className="text-sm md:text-base text-blue-200 font-semibold mt-1">
              Ivoiro-Américain • Professeur d'Université à Miami (USA) • Enseignant-Chercheur
            </p>
          </div>

          <p className="text-sm md:text-base text-slate-200 leading-relaxed font-sans font-medium">
            Créateur du produit <strong className="text-white font-bold">Zezepagnon</strong>, tisane issue de la pharmacopée et de la médecine traditionnelle africaine purifiée. Ses travaux de recherche scientifique d'excellence sont conduits entre les États-Unis (Université de Miami & MAPA Atlanta-USA) et l'Afrique de l'Ouest.
          </p>

          {/* Key Achievements Badges */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl border border-white/10">
              <GraduationCap size={20} className="text-[#FBBF24] shrink-0" />
              <span className="text-xs text-white font-semibold">Professeur d'université et chercheur en santé cellulaire aux USA</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl border border-white/10">
              <Sparkles size={20} className="text-emerald-400 shrink-0" />
              <span className="text-xs text-white font-semibold">Formulation originale immunothérapeutique 100% naturelle Zezepagnon</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl border border-white/10">
              <CheckCircle2 size={20} className="text-[#FBBF24] shrink-0" />
              <span className="text-xs text-white font-semibold">Co-partenariat officiel avec l'Ambassadeur M. OLATOUNDJI Ilarion BIAOU au Bénin</span>
            </div>
          </div>

          <blockquote className="text-xs md:text-sm text-blue-100 italic border-l-4 border-[#FBBF24] pl-4 py-1">
            "Notre engagement est de mettre les découvertes d'immunothérapie les plus avancées au service de la santé globale de nos populations."
          </blockquote>
        </div>

      </div>
    </div>
  );
};
