import React from 'react';
import { ShieldCheck, Award, Phone, Mail, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';

export const StockisteProfileCard = () => {
  const WHATSAPP_LINK = "https://wa.me/22956549884?text=" + encodeURIComponent("Bonjour M. OLATOUNDJI Ilarion BIAOU, je souhaite me renseigner / commander le traitement Zezepagnon.");

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F62FE]/30 border border-blue-500/30 text-white p-8 md:p-12">
      {/* Motion ambient glowing background accents */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#0F62FE]/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#10B981]/20 rounded-full blur-3xl pointer-events-none animate-pulse-medium"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Styled Photo of M. OLATOUNDJI Ilarion BIAOU */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group">
            {/* Glowing gradient ring around photo */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#0F62FE] via-[#10B981] to-[#6366F1] blur-md opacity-80 group-hover:opacity-100 transition-opacity animate-pulse-medium"></div>
            
            {/* Photo frame */}
            <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-2 border-white/20 bg-slate-900 shadow-2xl">
              <img 
                src="/img/img/bi.png" 
                alt="OLATOUNDJI Ilarion BIAOU - Ambassadeur du Zezepagnon au Bénin" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="inline-block bg-[#10B981] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">
                  STOCKISTE CERTIFIÉ MAPA
                </span>
              </div>
            </div>
          </div>

          {/* Quick status badge */}
          <div className="mt-4 flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-xs font-semibold text-blue-100">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping"></span>
            <span>Ambassadeur Bénin depuis 2023</span>
          </div>
        </div>

        {/* Right Column: Bio & Information */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-[#0F62FE]/20 border border-[#0F62FE]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#7FFABA] uppercase tracking-wider">
              <Award size={16} className="text-[#FBBF24]" />
              <span>REPRÉSENTATION OFFICIELLE BÉNIN</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              OLATOUNDJI Ilarion BIAOU
            </h2>
            <p className="text-sm sm:text-base font-bold text-[#7FFABA] flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#10B981]" />
              Ambassadeur du Zezepagnon au Bénin & Stockiste Agréé MAPA
            </p>
          </div>

          {/* Description text extracted from official letter */}
          <p className="text-sm md:text-base text-blue-100/90 leading-relaxed font-sans">
            Ambassadeur certifié du Zezepagnon en République du Bénin depuis 2023, <strong>M. OLATOUNDJI Ilarion BIAOU</strong> assure la représentation officielle et la distribution sécurisée des traitements d'immunothérapie créés par Son Excellence le <strong>Pr. Alain TAGRO</strong> (Université de Chicago & Miami, USA) et le <strong>Pr. Richard SAWADOGO</strong>.
          </p>

          {/* Key Facts list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center space-x-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
              <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
              <span>Partenaire Agréé & Certifié MAPA</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
              <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
              <span>Interlocuteur Direct Santé Bénin</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
              <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
              <span>Suivi Personnalisé des Traitements</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
              <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
              <span>Livraison Sécurisée Calavi & Cotonou</span>
            </div>
          </div>

          {/* Contact coordinates */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="flex items-center space-x-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
              <MapPin size={18} className="text-[#10B981]" />
              <div>
                <span className="block font-bold text-white">Siège Stockiste</span>
                <span className="text-slate-300">Calavi / Togoudo & Cotonou</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
              <Mail size={18} className="text-[#0F62FE]" />
              <div>
                <span className="block font-bold text-white">Email Direct</span>
                <span className="text-slate-300">biaouilarion@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Direct Action Button */}
          <div className="pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#10B981] hover:to-[#0F62FE] text-white font-bold px-7 py-3.5 rounded-2xl shadow-xl shadow-[#25D366]/25 transition-all text-sm group"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              <span>Contacter l'Ambassadeur M. BIAOU (+229 56 54 98 84)</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
