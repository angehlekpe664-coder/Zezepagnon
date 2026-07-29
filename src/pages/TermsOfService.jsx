import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const TermsOfService = () => {
  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: 'Conditions Générales de Vente' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 max-w-4xl">
        <div className="glass-card rounded-3xl p-8 bg-white border border-gray-200 space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Conditions Générales de Vente (CGV)</h1>
          <p className="text-xs text-gray-400">Distributeur Officiel Zezepagnon République du Bénin</p>

          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-gray-900">1. Champ d'Application</h3>
            <p>
              Les présentes conditions régissent toutes les ventes de la gamme d'immunothérapie Zezepagnon réalisées sur le territoire de la République du Bénin.
            </p>

            <h3 className="text-lg font-bold text-gray-900">2. Tarifs & Monnaies</h3>
            <p>
              Les prix sont indiqués en Francs CFA (XOF) et en Dollars Américains (USD). Les tarifs incluent la livraison express dans les villes principales (Cotonou, Porto-Novo, Parakou).
            </p>

            <h3 className="text-lg font-bold text-gray-900">3. Modalités de Livraison & Chaîne du Froid</h3>
            <p>
              Le distributeur s'engage à livrer le produit dans un emballage thermique isotherme préservant l'intégrité des molécules actives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
