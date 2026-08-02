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
  ChevronRight,
  Award,
  ShieldCheck,
  Zap,
  CreditCard,
  Truck
} from 'lucide-react';
import { ProductCard } from '../components/common/ProductCard';
import { DoctorProfileCard } from '../components/common/DoctorProfileCard';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { TestimonialCard, VideoTestimonialModal } from '../components/common/TestimonialCard';
import { StockisteProfileCard } from '../components/common/StockisteProfileCard';
import { MapaInfoCard } from '../components/common/MapaInfoCard';
import { DrTagroProfileCard } from '../components/common/DrTagroProfileCard';
import { GallerySection } from '../components/common/GallerySection';
import { PRODUCTS } from '../data/products';
import { DOCTORS } from '../data/doctors';
import { FAQ_DATA } from '../data/faqData';
import { TESTIMONIALS } from '../data/testimonials';

const HERO_CAROUSEL = [
  {
    url: "/img/img/p5.jpeg",
    title: "Tisane Spécialisée Grand",
    desc: "300 000 CFA - Grand Traitement d'Immunothérapie Complexe 10 Plantes"
  },
  {
    url: "/img/img/p7.jpeg",
    title: "Diabète Spécialisé Grand",
    desc: "300 000 CFA - Traitement Intensif pour la Régulation Glycémique"
  },
  {
    url: "/img/img/p1.jpeg",
    title: "Cacao Booster Oxygen",
    desc: "20 000 CFA - Oxygénation Cellulaire & Stimulation Globale"
  },
  {
    url: "/img/img/p2.jpeg",
    title: "Cacao Bangala",
    desc: "20 000 CFA - Le Cacao Tonifiant au service de votre bien-être"
  },
  {
    url: "/img/img/p9.jpeg",
    title: "Argile Miracle",
    desc: "50 000 CFA - Formule Purifiante & Détoxification Profonde"
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
      <section className="relative pt-4 md:pt-10 px-3 sm:px-6 md:px-8 max-w-[1440px] mx-auto overflow-hidden">
        
        {/* Glow ambient backdrops (Desktop only for performance) */}
        <div className="hidden md:block absolute top-10 left-10 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl -z-10"></div>
        <div className="hidden md:block absolute bottom-10 right-10 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-5 text-left relative z-10">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full shadow-xs max-w-full">
              <Award size={15} className="text-[#059669] shrink-0" />
              <span className="text-[11px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-[#047857] truncate">
                STOCKISTE AGRÉÉ MAPA BÉNIN
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight sm:leading-[1.15]">
              L'Avenir de la Santé : <br className="hidden sm:inline" />
              <span className="text-[#064e3b] font-display block mt-1 font-extrabold whitespace-nowrap sm:whitespace-normal">L'Immunothérapie Zezepagnon</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl font-sans font-medium">
              Issue des recherches scientifiques en microbiologie du Pr. Alain Tagro Kalou, l'immunothérapie Zezepagnon combine la puissance de 10 plantes d'Afrique pour régénérer votre système immunitaire au Bénin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/products"
                className="flex items-center justify-center space-x-2.5 bg-gradient-to-r from-[#059669] via-[#046C4E] to-[#0F766E] hover:from-[#046C4E] hover:to-[#059669] text-white font-heading font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-[#059669]/25 transition-all text-sm sm:text-base"
              >
                <Sparkles size={18} className="text-[#FBBF24]" />
                <span>Commander Zezepagnon</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/immunotherapy"
                className="flex items-center justify-center space-x-2 bg-white text-slate-800 font-heading font-bold px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl border border-slate-300 shadow-xs hover:border-[#059669] transition-all text-sm sm:text-base"
              >
                <FileText size={18} className="text-[#059669]" />
                <span>La Science Zezepagnon</span>
              </Link>
            </div>

            {/* Quick Trust Badges with Lucide React Icons */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-800 font-semibold">
              <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <ShieldCheck size={16} className="text-[#059669] shrink-0" />
                <span>Stockiste MAPA Bénin</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <CreditCard size={16} className="text-[#059669] shrink-0" />
                <span>Paiement MoMo / Wave</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <Truck size={16} className="text-[#059669] shrink-0" />
                <span>Livraison 24h Cotonou</span>
              </div>
            </div>

          </div>

          {/* Right Hero - Dynamic Auto-sliding Medicine Carousel */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#059669]/25 via-[#10B981]/20 to-[#F59E0B]/25 rounded-3xl blur-2xl opacity-80 animate-glow"></div>
            
            <div className="glass-card rounded-3xl p-4 md:p-6 border border-emerald-100/80 relative shadow-card-lux overflow-hidden bg-white/95 group">
              
              {/* Product Photo Carousel Viewport */}
              <div className="relative h-80 md:h-96 w-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-emerald-50/30">
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
                      className="w-full h-full object-contain p-2 rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-2 rounded-xl text-xs flex justify-between items-center border border-white/10">
                      <span className="font-heading font-bold truncate">{slide.title}</span>
                      <span className="text-[10px] text-amber-300 font-bold bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 rounded-full shrink-0">
                        100% Naturel
                      </span>
                    </div>
                  </div>
                ))}

                {/* Carousel Prev/Next Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg transition-all hover:scale-110 border border-slate-100"
                  title="Photo précédente"
                >
                  <ChevronLeft size={20} className="text-[#059669]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg transition-all hover:scale-110 border border-slate-100"
                  title="Photo suivante"
                >
                  <ChevronRight size={20} className="text-[#059669]" />
                </button>
              </div>

              {/* Carousel Indicators / Dots */}
              <div className="flex justify-center space-x-2 pt-4 pb-1">
                {HERO_CAROUSEL.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === carouselIndex ? 'w-8 bg-[#059669]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Stat Widget */}
              <div className="mt-3 glass-card p-4 rounded-2xl border border-emerald-100/80 shadow-md flex items-center justify-between bg-white/95">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block font-medium">Résultats Patients Bénin</span>
                    <span className="text-sm font-heading font-extrabold text-slate-900">98% Amélioration Constatée</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#047857] bg-emerald-100/80 border border-emerald-200 px-3 py-1 rounded-full shrink-0">
                  100% MAPA
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Why Immunotherapy Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-[#064E3B] via-[#046C4E] to-[#0D9488] rounded-3xl p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold font-heading">
                <ShieldCheck size={14} />
                <span>EXCELLENCE DE PHARMACOPÉE</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight leading-snug">
                Pourquoi choisir l'Immunothérapie Zezepagnon ?
              </h2>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-emerald-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={20} className="text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-white">Pharmacopée 100% Africaine</h4>
                    <p className="text-xs text-emerald-100 leading-relaxed">Combinaison synergique de 10 plantes médicinales traditionnelles cultivées et préparées sans additifs chimiques.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-emerald-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={20} className="text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-white">Base Scientifique Rigoureuse</h4>
                    <p className="text-xs text-emerald-100 leading-relaxed">Chaque tisane et traitement est élaboré sur la base de recherches doctorales en microbiologie et immunologie.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-emerald-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={20} className="text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-white">Action Multi-Pathologies</h4>
                    <p className="text-xs text-emerald-100 leading-relaxed">Efficacité constatée sur le diabète, l'insomnie, les infections et le renforcement des anticorps.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Efficacy Graph Mock Widget */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900/60 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-7 space-y-6 shadow-2xl">
                <div className="flex justify-between items-center border-b border-emerald-900/50 pb-4">
                  <span className="text-xs font-heading font-bold tracking-widest uppercase text-emerald-300 flex items-center gap-2">
                    <Zap size={14} className="text-[#FBBF24]" />
                    <span>RAPPORT D'EFFICACITÉ BÉNIN</span>
                  </span>
                  <TrendingUp size={20} className="text-emerald-400" />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-heading font-bold mb-2">
                    <span>Taux de Satisfaction Global</span>
                    <span className="text-amber-300 font-extrabold">98%</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div className="h-full bg-gradient-to-r from-[#059669] via-[#10B981] to-[#F59E0B] rounded-full animate-pulse" style={{ width: '98%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-heading font-bold mb-2">
                    <span>Stabilité de la Glycémie & Vitalité</span>
                    <span className="text-emerald-300 font-extrabold">95%</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div className="h-full bg-gradient-to-r from-[#0D9488] to-[#10B981] rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="pt-3 text-xs text-emerald-200/80 italic border-t border-emerald-900/40">
                  * Formules certifiées issues de la pharmacopée MAPA du Pr Alain Tagro Kalou.
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
            <span className="text-xs font-heading font-extrabold text-[#059669] uppercase tracking-widest bg-[#059669]/10 px-3.5 py-1.5 rounded-full border border-[#059669]/20">
              GAMME DES MÉDICAMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mt-3">
              Les Formules Zezepagnon Disponibles au Bénin
            </h2>
          </div>
          <Link to="/products" className="text-sm font-heading font-bold text-[#059669] hover:text-[#046C4E] flex items-center space-x-1.5 group">
            <span>Voir toute la gamme</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* Doctor & Scientific Endorsements */}
      <section className="bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 py-16 border-y border-emerald-100/60">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-heading font-extrabold text-[#059669] uppercase tracking-widest bg-[#059669]/10 px-3.5 py-1.5 rounded-full border border-[#059669]/20">
              CAUTION SCIENTIFIQUE
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900">
              Créé par le Pr Alain Tagro Kalou
            </h2>
            <p className="text-sm text-slate-600">
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
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-heading font-extrabold text-[#059669] uppercase tracking-widest bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            TÉMOIGNAGES EN DIRECT
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900">
            La Parole à Nos Patients au Bénin
          </h2>
          <p className="text-sm text-slate-600">
            Regardez les témoignages vidéo et retours d'expérience enregistrés auprès de nos patients.
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
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900">
            Foire Aux Questions Patients
          </h2>
          <p className="text-sm text-slate-600">
            Toutes les réponses concernant les posologies et la livraison à Abomey-Calavi & Cotonou.
          </p>
        </div>

        <FAQAccordion questions={FAQ_DATA[0].questions.concat(FAQ_DATA[1].questions)} />
      </section>

      {/* S.E. Professeur Alain TAGRO Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <DrTagroProfileCard />
      </section>

      {/* MAPA Organisation Description Card */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <MapaInfoCard />
      </section>

      {/* Ambassadeur & Stockiste Profile Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <StockisteProfileCard />
      </section>

      {/* Interactive Photo Gallery Section */}
      <GallerySection />

      {/* DEDICATED SECTION: Qu'est-ce qu'un Stockiste MAPA ? */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#0F172A] via-[#0F62FE] to-[#004CCD] text-white shadow-2xl border border-blue-400/30 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="text-[#FBBF24]" size={28} />
            <span className="text-xs font-heading font-extrabold text-[#FBBF24] uppercase tracking-widest bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full backdrop-blur-md">
              CERTIFICATION AGRÉÉE MAPA BÉNIN
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-4 text-white drop-shadow-sm">
            Qu'est-ce qu'un Stockiste MAPA ?
          </h2>
          <p className="text-sm md:text-base text-blue-50 leading-relaxed max-w-4xl font-sans font-medium">
            Les stockistes sont des partenaires agréés et certifiés de <strong className="text-white font-bold underline decoration-[#FBBF24]">MAPA</strong>, ayant suivi une formation rigoureuse et obtenu leur certification à travers l'acquisition du ticket d'engagement. Ce statut leur confère le droit exclusif de gérer et de distribuer l'ensemble des produits MAPA au Bénin. Vous pouvez les contacter directement pour commander vos traitements Zezepagnon en toute sécurité.
          </p>
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-14 bg-gradient-to-r from-emerald-50/60 via-white to-amber-50/40 border border-emerald-200/80 text-center space-y-6 shadow-card-lux">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900">
            Prêt à transformer votre santé immunitaire ?
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Commandez directement vos tisanes et traitements Zezepagnon auprès du stockiste agréé MAPA au Bénin. Profitez d'une livraison rapide à Abomey-Calavi et Cotonou avec paiement Mobile Money ou à la livraison.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="bg-gradient-to-r from-[#059669] to-[#046C4E] hover:from-[#10B981] hover:to-[#059669] text-white font-heading font-bold px-8 py-4 rounded-2xl shadow-xl shadow-[#059669]/30 hover:scale-105 transition-all text-base"
            >
              Obtenir mon Traitement
            </Link>
            <a
              href="https://wa.me/22956549884"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold px-7 py-4 rounded-2xl shadow-xl shadow-[#25D366]/30 hover:scale-105 transition-all text-base"
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

