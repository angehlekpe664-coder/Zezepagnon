import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Dna, ShieldCheck, Activity, Download } from 'lucide-react';

export const Immunotherapy = () => {
  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ name: 'Immunothérapie Zezepagnon' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full">
          PHARMACOPÉE 100% AFRICAINE
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
          La Science Zezepagnon du Pr Alain Tagro Kalou
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          Dix plantes sélectionnées et transformées selon les traditions et les recherches doctorales en microbiologie et immunologie pour fortifier les défenses cellulaires naturelles du corps.
        </p>
      </section>

      {/* Immunotherapy Benefits */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8 bg-white border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0F62FE] flex items-center justify-center">
              <Dna size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Régénération Cellulaire & Vitalité</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les tisanes et extraits concentrés Zezepagnon apportent aux cellules du système immunitaire les nutriments essentiels pour soutenir la régulation de la glycémie, apaiser le système nerveux et renforcer la résistance contre les infections.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 bg-white border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#1FA971] flex items-center justify-center">
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Soutien Multi-Pathologies</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Prouvé et reconnu pour agir en synergie sur plus de 50 pathologies (diabète, insomnie, baisse d'énergie, infections chroniques) tout en restant 100% naturel et sans accoutumance.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepaper Download CTA */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="glass-card rounded-3xl p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Document de Présentation Zezepagnon</h3>
            <p className="text-xs text-gray-400">Présentation des vertus et posologies des 10 plantes de la pharmacopée africaine.</p>
          </div>
          <button
            onClick={() => alert("Document Zezepagnon (PDF) téléchargé avec succès !")}
            className="flex items-center space-x-2 bg-[#0F62FE] hover:bg-[#004CCD] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shrink-0"
          >
            <Download size={18} />
            <span>Télécharger (PDF)</span>
          </button>
        </div>
      </section>
    </div>
  );
};
