import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ShieldCheck, Award, Users, Globe, Building2, CheckCircle2 } from 'lucide-react';
import { DOCTORS } from '../data/doctors';

export const About = () => {
  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ name: 'À Propos du Laboratoire' }]} />

      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-[#0F62FE]/10 px-3.5 py-1.5 rounded-full">
          10+ ANS DE RECHERCHE CLINIQUE
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
          Une Décennie de Précision au Service de l'Immunité
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Nos travaux s'étendent sur plus de 10 ans de recherches biomédicales intensives et de partenariats scientifiques pour offrir aux patients au Bénin un accès privilégié à des solutions immunothérapeutiques de classe mondiale.
        </p>
      </section>

      {/* Lab Stats */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-card rounded-3xl p-6 bg-gradient-to-br from-[#0F62FE] to-[#004CCD] text-white text-center shadow-xl">
            <span className="text-4xl font-extrabold block mb-1">10+</span>
            <span className="text-xs font-medium text-blue-100 uppercase tracking-wider">Années de Recherche</span>
          </div>
          <div className="glass-card rounded-3xl p-6 bg-white border border-gray-100 text-center shadow-soft">
            <span className="text-4xl font-extrabold text-[#1FA971] block mb-1">98%</span>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfaction Patients</span>
          </div>
          <div className="glass-card rounded-3xl p-6 bg-white border border-gray-100 text-center shadow-soft">
            <span className="text-4xl font-extrabold text-gray-900 block mb-1">15k+</span>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Consultations & Suivis</span>
          </div>
          <div className="glass-card rounded-3xl p-6 bg-emerald-50 border border-emerald-100 text-center">
            <span className="text-4xl font-extrabold text-[#1FA971] block mb-1">100%</span>
            <span className="text-xs font-medium text-[#1FA971] uppercase tracking-wider">Ingrédients Purifiés</span>
          </div>
        </div>
      </section>

      {/* Certified Lab Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-12 bg-white border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              LABORATOIRE CERTIFIÉ
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Installations Médicales aux Normes Internationales
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Le laboratoire Zezepagnon intègre des équipements de séquençage génomique et d'analyse cellulaire de pointe. Nos unités de production garantissent un contrôle strict du processus d'extraction botanique et de formulation synthétique.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700 pt-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-[#1FA971]" />
                <span>Certification ISO & Homologation Médicale Ouest-Africaine</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-[#1FA971]" />
                <span>Chaîne du froid automatisée et traçabilité par lot</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-[#1FA971]" />
                <span>Réseau de distribution agréé en République du Bénin</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <img
              src="/img/IMG-20260727-WA0149.jpg"
              alt="Laboratoire Zezepagnon"
              className="w-full h-80 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Notre Équipe Scientifique</h2>
          <p className="text-sm text-gray-600 mt-2">Des immunologues passionnés par la santé cellulaire.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map(doc => (
            <div key={doc.id} className="glass-card rounded-2xl p-6 bg-white border border-gray-100 text-center">
              <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2 border-[#0F62FE]" />
              <h3 className="font-bold text-gray-900">{doc.name}</h3>
              <p className="text-xs text-[#0F62FE] font-medium mb-2">{doc.role}</p>
              <p className="text-xs text-gray-500">{doc.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
