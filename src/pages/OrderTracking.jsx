import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Search, Truck, CheckCircle2, Clock, PackageCheck, MapPin } from 'lucide-react';

export const OrderTracking = () => {
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get('orderId') || 'ZZP-BN-98214';

  const [orderInput, setOrderInput] = useState(initialId);
  const [activeOrder, setActiveOrder] = useState({
    id: initialId,
    date: '2026-07-28',
    status: 'En cours de livraison à Cotonou Akpakpa',
    estimatedDelivery: 'Aujourd\'hui à 16:30',
    currentStep: 3,
    carrier: 'Express Logistics Bénin (Chaîne du Froid)',
    items: ["Zezepagnon Concentré d'Immunothérapie 50ml (x1)"]
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveOrder({
      id: orderInput.toUpperCase(),
      date: '2026-07-28',
      status: 'En cours d\'acheminement express',
      estimatedDelivery: 'Sous 24h',
      currentStep: 2,
      carrier: 'Bénin Express Courier',
      items: ["Zezepagnon Sérum (x1)"]
    });
  };

  const steps = [
    { title: 'Commande Reçue', desc: 'Paiement ou validation Mobile Money effectuée' },
    { title: 'Conditionnement Froid', desc: 'Emballage isotherme médical certifié' },
    { title: 'En cours de livraison', desc: 'Livreur en route à Cotonou / Porto-Novo' },
    { title: 'Livré au Patient', desc: 'Remis en main propre' }
  ];

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: 'Suivi de Livraison Bénin' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full">
          SUIVI EN TEMPS RÉEL
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-3">
          Suivre mon Colis Zezepagnon
        </h1>
        <p className="text-sm text-gray-600">
          Saisissez votre numéro de commande pour connaître l'emplacement exact de votre traitement.
        </p>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Search input */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-10 flex space-x-2">
          <input
            type="text"
            placeholder="N° de commande (Ex: ZZP-BN-98214)"
            value={orderInput}
            onChange={(e) => setOrderInput(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold focus:outline-none focus:border-[#0F62FE] shadow-sm"
          />
          <button
            type="submit"
            className="bg-[#0F62FE] hover:bg-[#004CCD] text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md shrink-0 flex items-center space-x-2"
          >
            <Search size={16} />
            <span>Rechercher</span>
          </button>
        </form>

        {/* Order Details Display Card */}
        <div className="glass-card rounded-3xl p-8 bg-white border border-gray-200 max-w-3xl mx-auto space-y-8 shadow-xl">
          
          <div className="flex flex-wrap justify-between items-center pb-6 border-b border-gray-100 gap-4">
            <div>
              <span className="text-xs text-gray-400 block">Identifiant Commande</span>
              <span className="text-xl font-extrabold text-gray-900">{activeOrder.id}</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 block">Livraison Estimée</span>
              <span className="text-sm font-bold text-[#1FA971]">{activeOrder.estimatedDelivery}</span>
            </div>
          </div>

          {/* Stepper Progress */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-gray-900">ÉTAPES DE LIVRAISON AU BÉNIN</h4>
            
            <div className="relative pl-6 space-y-8 border-l-2 border-gray-200">
              {steps.map((st, idx) => {
                const stepNum = idx + 1;
                const isDone = stepNum <= activeOrder.currentStep;
                const isCurrent = stepNum === activeOrder.currentStep;

                return (
                  <div key={idx} className="relative">
                    <div className={`absolute -left-[31px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isDone ? 'bg-[#1FA971] text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {isDone ? <CheckCircle2 size={14} /> : stepNum}
                    </div>
                    <div>
                      <h5 className={`font-bold text-sm ${isCurrent ? 'text-[#0F62FE]' : 'text-gray-900'}`}>
                        {st.title}
                      </h5>
                      <p className="text-xs text-gray-500">{st.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center space-x-3 text-xs text-gray-500">
            <Truck size={16} className="text-[#0F62FE]" />
            <span>Transporteur : {activeOrder.carrier}</span>
          </div>

        </div>

      </section>
    </div>
  );
};
