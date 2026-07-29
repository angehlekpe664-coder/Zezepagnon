import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { FAQ_DATA } from '../data/faqData';
import { Search } from 'lucide-react';

export const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ name: 'Foire Aux Questions' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full">
          SUPPORT & INFORMATIONS
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-3">
          Questions Fréquemment Posées
        </h1>
        <p className="text-sm text-gray-600">
          Retrouvez les explications médicales et pratiques sur la commande et l'utilisation du sérum Zezepagnon au Bénin.
        </p>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex justify-center space-x-4 mb-8">
          {FAQ_DATA.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                activeTab === idx ? 'bg-[#0F62FE] text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <FAQAccordion questions={FAQ_DATA[activeTab].questions} />
      </section>
    </div>
  );
};
