import React from 'react';
import { ShieldCheck, Award, Phone, Mail, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { STOCKISTES } from '../../data/stockistes';

export const StockisteProfileCard = () => {
  return (
    <div className="space-y-8 my-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold text-[#059669] uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">
          REPRÉSENTATION OFFICIELLE BÉNIN
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
          Nos Stockistes Agréés MAPA au Bénin
        </h2>
        <p className="text-sm text-slate-600">
          Trouvez l'interlocuteur officiel le plus proche de votre région pour vos commandes et suivis cliniques.
        </p>
      </div>

      {/* Stockistes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {STOCKISTES.map((stockiste, idx) => (
          <div
            key={stockiste.id}
            className="rounded-3xl bg-slate-900 border border-slate-800 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            {/* Ambient Background subtle accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              {/* Badge & Order indicator */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-300 bg-amber-950/80 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Award size={13} className="text-amber-400" />
                  {idx === 0 ? 'Premier Stockiste Bénin' : 'Second Stockiste Bénin'}
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
                  {stockiste.city}
                </span>
              </div>

              {/* Photo & Profile info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative shrink-0">
                  <img
                    src={stockiste.image}
                    alt={stockiste.name}
                    className="w-32 h-36 sm:w-36 sm:h-40 object-cover object-top rounded-2xl border-2 border-emerald-500/40 shadow-lg bg-slate-950"
                  />
                  <span className="absolute -bottom-2 right-2 bg-[#059669] text-white p-1 rounded-full border-2 border-slate-900">
                    <ShieldCheck size={14} />
                  </span>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {stockiste.name}
                  </h3>
                  <p className="text-xs font-bold text-emerald-400">
                    {stockiste.title}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {stockiste.bio}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 pt-2 border-t border-slate-800">
                {stockiste.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-slate-800/60 p-2 rounded-xl border border-slate-700/50">
                    <CheckCircle2 size={14} className="text-[#059669] shrink-0" />
                    <span className="font-medium text-[11px]">{h}</span>
                  </div>
                ))}
              </div>

              {/* Contacts list */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Contacts & Téléphones :
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {stockiste.phones.map((p, i) => (
                    <a
                      key={i}
                      href={`tel:${p.cleanNumber}`}
                      className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-2 rounded-xl text-xs text-white transition-colors"
                    >
                      <Phone size={13} className="text-[#059669] shrink-0" />
                      <span className="font-bold truncate">{p.number}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-6 relative z-10">
              <a
                href={`https://wa.me/${stockiste.phones[0].cleanNumber}?text=${encodeURIComponent(`Bonjour ${stockiste.name}, je souhaite me renseigner / commander le traitement Zezepagnon.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-2xl shadow-lg transition-all text-xs sm:text-sm"
              >
                <MessageCircle size={18} />
                <span>Contacter {stockiste.name.split(' ')[0]} {stockiste.name.split(' ')[1] || ''} sur WhatsApp</span>
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
