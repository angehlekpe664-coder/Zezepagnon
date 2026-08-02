import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin, Send, ArrowUp, Award, Smartphone, Wallet, Banknote } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0B132B] via-[#061E17] to-[#021A12] text-white pt-16 pb-8 border-t border-emerald-900/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/40">
          
          {/* Brand Info & Benin Stockiste MAPA Details */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/img/logo.jpeg" 
                alt="Logo MAPA Atlanta-USA" 
                className="w-12 h-12 rounded-xl object-contain bg-white p-1 border border-blue-200 shadow-md group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black font-heading tracking-tight text-white group-hover:text-[#0F62FE] transition-colors">
                  Zezepagnon <span className="text-[#0F62FE] font-medium text-lg font-sans">Bénin</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#FBBF24] flex items-center gap-1">
                  <Award size={11} /> Stockiste Agréé MAPA Atlanta-USA
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Représentation et distribution officielle des traitements d'immunothérapie Zezepagnon par le Stockiste Agréé MAPA en République du Bénin. Formulations scientifiques du Pr Alain Tagro Kalou pour la régénération cellulaire et la résilience immunitaire.
            </p>
            <div className="space-y-2.5 text-sm text-slate-300 pt-2">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#059669] shrink-0 mt-0.5" />
                <span>Points de Distribution MAPA : Cotonou, Calavi & Parakou</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-[#D97706] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <p className="font-bold text-emerald-300">Cotonou : +229 01 67 31 31 02 / +229 01 40 51 90 41 / +229 56 54 98 84</p>
                  <p className="font-bold text-emerald-300">Parakou : +229 01 97 11 36 52 / +229 01 42 61 41 61</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#059669] shrink-0" />
                <span>zezepagnonbenin58@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-base font-heading font-bold text-white mb-4 tracking-wide uppercase text-xs text-emerald-400">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-[#10B981] transition-colors">À Propos de Zezepagnon</Link></li>
              <li><Link to="/immunotherapy" className="hover:text-[#10B981] transition-colors">Science & Immunothérapie</Link></li>
              <li><Link to="/products" className="hover:text-[#10B981] transition-colors">Gamme des Médicaments</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#10B981] transition-colors">Témoignages Vidéo & Patients</Link></li>
              <li><Link to="/blog" className="hover:text-[#10B981] transition-colors">Articles & Recherches</Link></li>
              <li><Link to="/faq" className="hover:text-[#10B981] transition-colors">Foire Aux Questions</Link></li>
            </ul>
          </div>

          {/* Legal & Orders */}
          <div>
            <h4 className="text-base font-heading font-bold text-white mb-4 tracking-wide uppercase text-xs text-emerald-400">Espace Commande & Légal</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/cart" className="hover:text-[#10B981] transition-colors">Mon Panier de Commande</Link></li>
              <li><Link to="/order-tracking" className="hover:text-[#10B981] transition-colors">Suivi de Colis Bénin</Link></li>
              <li><Link to="/privacy" className="hover:text-[#10B981] transition-colors">Politique de Confidentialité</Link></li>
              <li><Link to="/terms" className="hover:text-[#10B981] transition-colors">Conditions Générales de Vente</Link></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 className="text-base font-heading font-bold text-white mb-4 tracking-wide uppercase text-xs text-emerald-400">Newsletter Médicale</h4>
            <p className="text-xs text-slate-300 mb-3">
              Recevez les avancées scientifiques et conseils sur les traitements Zezepagnon au Bénin.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Merci pour votre inscription à la newsletter Zezepagnon Bénin !'); }} className="space-y-2.5">
              <input
                type="email"
                placeholder="Votre adresse email..."
                required
                className="w-full px-4 py-2.5 bg-slate-900/80 text-white placeholder-slate-400 rounded-xl text-sm border border-emerald-900/60 focus:outline-none focus:border-[#10B981]"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#059669] to-[#046C4E] hover:from-[#10B981] hover:to-[#059669] text-white py-2.5 rounded-xl text-sm font-heading font-bold transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>S'abonner</span>
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Credits & Payment Badges */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © 2026 Zezepagnon Bénin. Distribution officielle agréée MAPA. Tous droits réservés.
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-slate-400 mr-1 flex items-center gap-1 font-medium">
              <ShieldCheck size={14} className="text-[#059669]" />
              Paiements sécurisés Bénin :
            </span>
            <span className="bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1">
              <Smartphone size={12} className="text-amber-400" />
              MTN MoMo
            </span>
            <span className="bg-blue-500/15 border border-blue-500/30 text-blue-300 font-bold px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1">
              <Smartphone size={12} className="text-blue-400" />
              Moov Money
            </span>
            <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1">
              <Wallet size={12} className="text-emerald-400" />
              Wave
            </span>
            <span className="bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1">
              <Banknote size={12} className="text-slate-400" />
              Espèces livraison
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-800/80 hover:bg-[#059669] text-slate-300 hover:text-white rounded-xl transition-all border border-slate-700 hover:border-emerald-500"
            title="Haut de page"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
};

