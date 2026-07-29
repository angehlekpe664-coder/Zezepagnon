import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  FileText, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { ProductCard } from '../components/common/ProductCard';
import { DoctorProfileCard } from '../components/common/DoctorProfileCard';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { TestimonialCard, VideoTestimonialModal } from '../components/common/TestimonialCard';
import { PRODUCTS } from '../data/products';
import { DOCTORS } from '../data/doctors';
import { FAQ_DATA } from '../data/faqData';
import { TESTIMONIALS } from '../data/testimonials';

const HERO_CAROUSEL = [
  {
    url: "/img/img/WhatsApp Image 2026-07-28 at 12.15.07.jpeg",
    title: "Zezepagnon Diabète Spécialisé Grand",
    desc: "Formule naturelle pour la régulation de la glycémie"
  },
  {
    url: "/img/img/WhatsApp Image 2026-07-28 at 12.15.0.jpeg",
    title: "Zezepagnon Sommeil Réparateur",
    desc: "Tisane naturelle pour un sommeil profond et apaisé"
  },
  {
    url: "/img/img/WhatsApp Image 2026-07-28 at 12.15..jpeg",
    title: "Zezepagnon Tisane Antibiotique Grand Format",
    desc: "Immunothérapie puissante à base de 10 plantes africaines"
  },
  {
    url: "/img/img/WhatsApp Image 2026-07-28 at 12.15.08.jpeg",
    title: "Zezepagnon Cacao Bangala",
    desc: "Le cacao énergisant au service de votre bien-être"
  },
  {
    url: "/img/img/WhatsApp Image 2026-07-28 at 12.15.09.jpeg",
    title: "Zezepagnon Diabète Spécialisé Petit",
    desc: "Format pratique de 10 plantes pour l'équilibre glycémique"
  }
];

export const Home = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-play carousel every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % HERO_CAROUSEL.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % HERO_CAROUSEL.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + HERO_CAROUSEL.length) % HERO_CAROUSEL.length);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-12 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              <Sparkles size={14} className="text-[#1FA971]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1FA971]">
                EXCELLENCE IMMUNOTHÉRAPEUTIQUE BÉNIN
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              L'Avenir de la Guérison : <br />
              <span className="text-gradient-blue">L'Immunothérapie Zezepagnon</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Issue des recherches en microbiologie du Pr. Alain Tagro Kalou, l'immunothérapie Zezepagnon combine la puissance de 10 plantes de la pharmacopée africaine pour renforcer vos défenses immunitaires et traiter à la racine plus de 50 pathologies.
            </p>

            {/* CTA Buttons (NO Consultation Button!) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/products"
                className="flex items-center space-x-2 bg-gradient-to-r from-[#0F62FE] to-[#004CCD] hover:opacity-95 text-white font-bold px-7 py-4 rounded-2xl shadow-xl shadow-[#0F62FE]/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm md:text-base"
              >
                <span>Commander Zezepagnon</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/immunotherapy"
                className="flex items-center space-x-2 bg-white/80 hover:bg-white text-gray-800 font-semibold px-6 py-4 rounded-2xl border border-gray-200 shadow-soft hover:shadow-md transition-all text-sm md:text-base"
              >
                <FileText size={18} className="text-[#0F62FE]" />
                <span>La Science Zezepagnon</span>
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-500 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-[#1FA971]" />
                <span>Distribution Agréée Bénin</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-[#1FA971]" />
                <span>Paiement Mobile Money (MTN / Moov / Wave)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-[#1FA971]" />
                <span>Livraison 24h Abomey-Calavi & Cotonou</span>
              </div>
            </div>

          </div>

          {/* Right Hero - Dynamic Auto-sliding Medicine Carousel */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0F62FE]/20 to-[#1FA971]/20 rounded-3xl blur-2xl opacity-70 animate-glow"></div>
            
            <div className="glass-card rounded-3xl p-4 md:p-6 border border-white/80 relative shadow-2xl overflow-hidden bg-white/90 group">
              
              {/* Product Photo Carousel Viewport */}
              <div className="relative h-80 md:h-96 w-full flex items-center justify-center overflow-hidden rounded-2xl bg-gray-50">
                {HERO_CAROUSEL.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center p-2 ${
                      idx === carouselIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.url}
                      alt={slide.title}
                      className="w-full h-full object-contain p-2 rounded-xl"
                    />
                    <div className="absolute top-2 left-2 right-2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs flex justify-between items-center">
                      <span className="font-bold truncate">{slide.title}</span>
                      <span className="text-[10px] text-emerald-300 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded">
                        100% Naturel
                      </span>
                    </div>
                  </div>
                ))}

                {/* Carousel Prev/Next Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all hover:scale-110"
                  title="Photo précédente"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all hover:scale-110"
                  title="Photo suivante"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Carousel Indicators / Dots */}
              <div className="flex justify-center space-x-1.5 pt-3 pb-1">
                {HERO_CAROUSEL.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === carouselIndex ? 'w-6 bg-[#0F62FE]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Stat Widget */}
              <div className="mt-3 glass-card p-3.5 rounded-2xl border border-white/80 shadow-md flex items-center justify-between bg-white/95">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1FA971]/10 text-[#1FA971] flex items-center justify-center">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-500 block font-medium">Résultats Patients Bénin</span>
                    <span className="text-sm font-extrabold text-gray-900">98% Amélioration Constatée</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1FA971] bg-emerald-100 px-2.5 py-1 rounded-full">
                  100% Certifié
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Why Immunotherapy Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-[#0F62FE] to-[#004CCD] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Pourquoi choisir l'Immunothérapie Zezepagnon ?
              </h2>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} className="text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">Pharmacopée 100% Africaine</h4>
                    <p className="text-xs text-blue-100">Combinaison de 10 plantes traditionnelles cultivées et transformées sans additifs chimiques.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} className="text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">Base Scientifique Rigoureuse</h4>
                    <p className="text-xs text-blue-100">Chaque formule est élaborée à partir de recherches doctorales en microbiologie et immunologie.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} className="text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">Multi-Pathologies</h4>
                    <p className="text-xs text-blue-100">Efficacité reconnue sur le diabète, le sommeil, les infections virales et la fatigue chronique.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Efficacy Graph Mock Widget */}
            <div className="lg:col-span-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs font-bold tracking-wider uppercase text-blue-200">RAPPORT D'EFFICACITÉ BÉNIN</span>
                  <TrendingUp size={18} className="text-emerald-400" />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span>Taux de Satisfaction Global</span>
                    <span className="text-emerald-300 font-bold">98%</span>
                  </div>
                  <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span>Stabilité de la Glycémie & Vitalité</span>
                    <span className="text-blue-200 font-bold">95%</span>
                  </div>
                  <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1FA971] rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-blue-200 italic">
                  *Formules certifiées issues de la pharmacopée MAPA du Pr Alain Tagro Kalou.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-[#0F62FE]/10 px-3 py-1 rounded-full">
              GAMME DES MÉDICAMENTS
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Les Formules Zezepagnon Disponibles au Bénin
            </h2>
          </div>
          <Link to="/products" className="text-sm font-bold text-[#0F62FE] hover:underline flex items-center space-x-1">
            <span>Voir toute la gamme</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* Doctor & Scientific Endorsements */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-[#0F62FE]/10 px-3 py-1 rounded-full">
              CAUTION SCIENTIFIQUE
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Créé par le Pr Alain Tagro Kalou
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Docteur en Microbiologie & Immunologie, spécialiste des systèmes immunitaires et de la pharmacopée africaine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS.map((doc) => (
              <DoctorProfileCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* Video & Patient Testimonials */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#1FA971] uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            TÉMOIGNAGES EN DIRECT
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            La Parole à Nos Patients
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Regardez les témoignages vidéo et retours d'expérience enregistrés auprès de nos patients au Bénin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test) => (
            <TestimonialCard
              key={test.id}
              testimonial={test}
              onOpenVideo={(url) => setActiveVideoUrl(url)}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Foire Aux Questions Patients
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Toutes les réponses concernant les posologies et la livraison à Abomey-Calavi & Cotonou.
          </p>
        </div>

        <FAQAccordion questions={FAQ_DATA[0].questions.concat(FAQ_DATA[1].questions)} />
      </section>

      {/* Final Action Banner */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-14 bg-gradient-to-r from-blue-50 via-white to-emerald-50 border border-blue-100 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Prêt à transformer votre santé immunitaire ?
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Commandez directement vos tisanes et traitements Zezepagnon auprès du distributeur officiel au Bénin. Profitez d'une livraison rapide à Abomey-Calavi et Cotonou avec paiement Mobile Money ou à la livraison.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="bg-[#0F62FE] hover:bg-[#004CCD] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-[#0F62FE]/30 hover:scale-105 transition-all text-sm md:text-base"
            >
              Obtenir mon Traitement
            </Link>
            <a
              href="https://wa.me/22956549884"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-[#25D366]/30 hover:scale-105 transition-all text-sm md:text-base"
            >
              <MessageCircle size={20} />
              <span>Commander sur WhatsApp Bénin</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal Video Player */}
      <VideoTestimonialModal
        videoUrl={activeVideoUrl}
        onClose={() => setActiveVideoUrl(null)}
      />

    </div>
  );
};
