import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const PrivacyPolicy = () => {
  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: 'Politique de Confidentialité' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 max-w-4xl">
        <div className="glass-card rounded-3xl p-8 bg-white border border-gray-200 space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Politique de Confidentialité & Données Médicales</h1>
          <p className="text-xs text-gray-400">Dernière mise à jour : Juillet 2026 • République du Bénin</p>

          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-gray-900">1. Collecte des Données Personnelles</h3>
            <p>
              Dans le cadre de la distribution de nos produits d'immunothérapie Zezepagnon au Bénin, nous collectons les informations strictement nécessaires à la prise en charge de vos commandes et à la livraison sécurisée (Nom, numéro de téléphone, adresse de livraison, détails de paiement Mobile Money).
            </p>

            <h3 className="text-lg font-bold text-gray-900">2. Secret Médical & Confidentialité</h3>
            <p>
              Aucune donnée relative à votre état de santé ou à votre protocole de traitement n'est transmise à des tiers sans votre consentement explicite. Toutes les communications sur WhatsApp ou via notre plateforme sont chiffrées de bout en bout.
            </p>

            <h3 className="text-lg font-bold text-gray-900">3. Paiements Sécurisés Mobile Money</h3>
            <p>
              Les paiements via MTN Mobile Money, Moov Money et Wave sont traités directement par les API sécurisées des opérateurs. Zezepagnon ne conserve aucun code PIN ni identifiant secret.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
