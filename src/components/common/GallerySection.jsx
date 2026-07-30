import React, { useState } from 'react';
import { Camera, Eye, X, Sparkles, ShieldCheck, Award } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/img/gallery/g1.jpg",
    title: "Laboratoire & Recherches MAPA",
    category: "Recherche",
    caption: "Travaux de recherche scientifique biomédicale sur les extraits botaniques Zezepagnon."
  },
  {
    id: 2,
    src: "/img/gallery/g2.jpg",
    title: "Analyses de Biodisponibilité",
    category: "Recherche",
    caption: "Contrôle de qualité et essais de précision en laboratoire certifié."
  },
  {
    id: 3,
    src: "/img/gallery/g3.jpg",
    title: "Consultation & Suivi Médical Patients",
    category: "Consultations",
    caption: "Accompagnement personnalisé par l'équipe d'immunologues et de stockistes."
  },
  {
    id: 4,
    src: "/img/gallery/g4.jpg",
    title: "Distribution Agréée MAPA Bénin",
    category: "Distribution",
    caption: "Conditionnement hermétique et sécurisé sous contrôle strict."
  },
  {
    id: 5,
    src: "/img/gallery/g5.jpg",
    title: "Stockiste Officiel à Calavi & Cotonou",
    category: "Distribution",
    caption: "Vérification des lots et préparation des livraisons en 24h au Bénin."
  },
  {
    id: 6,
    src: "/img/gallery/g6.jpg",
    title: "Sélection des Plantes Pharmacopée",
    category: "Recherche",
    caption: "Purification des principes actifs botaniques aux normes internationales."
  },
  {
    id: 7,
    src: "/img/gallery/g7.jpg",
    title: "Session de Formation Certifiée MAPA",
    category: "Certifications",
    caption: "Délivrance du statut de stockiste agréé après validation du ticket d'engagement."
  },
  {
    id: 8,
    src: "/img/gallery/g8.jpg",
    title: "Rencontre d'Ambassadeurs au Bénin",
    category: "Certifications",
    caption: "Présentation officielle de la gamme Zezepagnon aux autorités médicales."
  },
  {
    id: 9,
    src: "/img/gallery/g9.jpg",
    title: "Conditionnement Qualité ISO",
    category: "Distribution",
    caption: "Protection optimale contre l'humidité pour garantir l'efficacité des tisanes."
  },
  {
    id: 10,
    src: "/img/gallery/g10.jpg",
    title: "Suivi Clinique des Patients Diabétiques",
    category: "Consultations",
    caption: "Évaluation périodique de l'équilibre glycémique sous immunothérapie Zezepagnon."
  },
  {
    id: 11,
    src: "/img/gallery/g11.jpg",
    title: "Conférence Médicale Internationale MAPA",
    category: "Certifications",
    caption: "Présentation des résultats par Son Excellence le Professeur Alain TAGRO."
  },
  {
    id: 12,
    src: "/img/gallery/g12.jpg",
    title: "Contrôle Qualité des Décoctions",
    category: "Recherche",
    caption: "Validation biologique de la stabilité et de la biodisponibilité cellulaire."
  }
];

export const GallerySection = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [activeImage, setActiveImage] = useState(null);

  const filters = ["Tous", "Recherche", "Consultations", "Distribution", "Certifications"];

  const filteredItems = selectedFilter === "Tous" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  return (
    <section className="py-12 my-8">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-8">
        <span className="text-xs font-extrabold text-[#0F62FE] uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-flex items-center gap-1.5">
          <Camera size={14} className="text-[#0F62FE]" />
          GALERIE OFFICIELLE MAPA BÉNIN
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mt-3 mb-3">
          Immersion dans nos Recherches & Activités
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-medium">
          Découvrez en images les coulisses des recherches du S.E. Pr. Alain TAGRO, les consultations médicales et la distribution officielle assurée par l'Ambassadeur M. BIAOU.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              selectedFilter === filter
                ? "bg-[#0F62FE] text-white shadow-lg shadow-[#0F62FE]/30 scale-105"
                : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-4 md:px-8">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[10px] font-extrabold text-[#FBBF24] uppercase tracking-wider bg-amber-500/20 px-2.5 py-1 rounded-full w-max mb-1.5 border border-amber-500/30">
                {item.category}
              </span>
              <h3 className="text-base font-bold text-white leading-snug group-hover:text-blue-200 transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center space-x-1.5 text-xs text-blue-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye size={14} className="text-[#FBBF24]" />
                <span className="font-semibold">Agrandir la photo</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0F172A] rounded-3xl overflow-hidden border border-blue-400/30 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <X size={22} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-8 bg-black">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="w-full max-h-[75vh] object-contain mx-auto"
                />
              </div>
              <div className="md:col-span-4 p-6 space-y-3 text-white">
                <span className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/40">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed font-sans">
                  {activeImage.caption}
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-blue-300">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Laboratoire & Stockiste MAPA Bénin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
