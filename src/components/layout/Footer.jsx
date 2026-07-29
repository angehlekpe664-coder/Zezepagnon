import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin, Send, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191C1E] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info & Benin Distributor Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F62FE] flex items-center justify-center text-white">
                <ShieldCheck size={24} />
              </div>
              <span className="text-2xl font-bold text-white">
                Zezepagnon <span className="text-[#1FA971]">Bénin</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Représentation et distribution officielle des traitements d'immunothérapie Zezepagnon en République du Bénin. Alliant la richesse de la pharmacopée africaine du Pr Alain Tagro Kalou et le renforcement naturel de la résilience immunitaire.
            </p>
            <div className="space-y-2 text-sm text-gray-300 pt-2">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#1FA971]" />
                <span>Siège Distribution : Abomey-Calavi & Cotonou, Bénin</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#1FA971]" />
                <span>+229 56 54 98 84 / WhatsApp Direct Bénin</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#1FA971]" />
                <span>benin@zezepagnon.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">À Propos de Zezepagnon</Link></li>
              <li><Link to="/immunotherapy" className="hover:text-white transition-colors">Science & Immunothérapie</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Gamme des Médicaments</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Témoignages Vidéo & Patients</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Articles & Recherches</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Foire Aux Questions</Link></li>
            </ul>
          </div>

          {/* Legal & Orders */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Espace Commande & Légal</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/cart" className="hover:text-white transition-colors">Mon Panier de Commande</Link></li>
              <li><Link to="/order-tracking" className="hover:text-white transition-colors">Suivi de Colis Bénin</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Politique de Confidentialité</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Conditions Générales de Vente</Link></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Newsletter Médicale</h4>
            <p className="text-xs text-gray-400 mb-3">
              Recevez les avancées scientifiques et conseils sur les traitements Zezepagnon au Bénin.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Merci pour votre inscription à la newsletter Zezepagnon Bénin !'); }} className="space-y-2">
              <input
                type="email"
                placeholder="Votre adresse email..."
                required
                className="w-full px-3.5 py-2.5 bg-gray-800 text-white placeholder-gray-500 rounded-lg text-sm border border-gray-700 focus:outline-none focus:border-[#0F62FE]"
              />
              <button
                type="submit"
                className="w-full bg-[#0F62FE] hover:bg-[#004CCD] text-[#ffffff] py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <span>S'abonner</span>
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Credits & Payment Badges */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div>
            © 2026 Zezepagnon Bénin. Distribution officielle agréée. Tous droits réservés.
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-gray-400">Paiements acceptés :</span>
            <span className="bg-yellow-500/20 text-yellow-300 font-bold px-2 py-0.5 rounded">MTN MoMo</span>
            <span className="bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded">Moov Money</span>
            <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">Wave</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded">Espèces à la livraison</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-gray-800 hover:bg-[#0F62FE] text-gray-400 hover:text-white rounded-lg transition-colors"
            title="Haut de page"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};
