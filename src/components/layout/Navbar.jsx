import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  Truck, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight,
  Globe,
  Sparkles
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItemsCount, currency, setCurrency } = useCart();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Immunothérapie', path: '/immunotherapy' },
    { name: 'Produits', path: '/products' },
    { name: 'Témoignages', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Benin Distribution Bar */}
      <div className="bg-[#004CCD] text-white text-xs py-1.5 px-4">
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">Distributeur Officiel Bénin</span>
            <span className="hidden sm:inline text-white/60">|</span>
            <span className="hidden sm:inline text-blue-100">Livraison Express 24h à Abomey-Calavi & Cotonou</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/order-tracking" className="hover:underline flex items-center gap-1 text-white/90 hover:text-white">
              <Truck size={13} />
              <span>Suivre un colis</span>
            </Link>
            <button 
              onClick={() => setCurrency(currency === 'XOF' ? 'USD' : 'XOF')}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[11px] transition-colors"
              title="Changer la devise de paiement"
            >
              <Globe size={12} />
              <span className="font-bold">{currency === 'XOF' ? 'FCFA (Bénin 🇧🇯)' : 'USD ($ 🇺🇸)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="glass-nav">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F62FE] to-[#1FA971] flex items-center justify-center text-white shadow-lg shadow-[#0F62FE]/20 group-hover:scale-105 transition-transform">
              <ShieldCheck size={24} className="stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-[#0F62FE]">
                Zezepagnon <span className="text-[#191C1E] font-medium text-lg">Bénin</span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase -mt-1">
                Excellence Immunothérapeutique
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-[#0F62FE] bg-[#0F62FE]/10 font-semibold'
                    : 'text-gray-700 hover:text-[#0F62FE] hover:bg-gray-100/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Icons & Direct Order CTA (NO Login required!) */}
          <div className="flex items-center space-x-3">
            
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2.5 text-gray-700 hover:text-[#0F62FE] hover:bg-white/80 rounded-xl transition-all border border-transparent hover:border-gray-200"
              title="Panier de commande"
            >
              <ShoppingBag size={20} />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1FA971] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                  {totalItemsCount}
                </span>
              )}
            </Link>

            {/* Direct Order Action CTA */}
            <Link
              to="/products"
              className="hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0F62FE] to-[#004CCD] text-white font-medium text-sm shadow-md hover:shadow-lg hover:shadow-[#0F62FE]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles size={16} />
              <span>Commander Zezepagnon</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#0F62FE] focus:outline-none"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-6 py-6 space-y-3 transition-all animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-[#0F62FE] bg-[#0F62FE]/10 font-bold'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight size={18} className="text-gray-400" />
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#0F62FE] text-white font-semibold text-center shadow-lg shadow-[#0F62FE]/25"
              >
                <Sparkles size={18} />
                <span>Commander maintenant (Bénin)</span>
              </Link>
              <Link
                to="/order-tracking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-medium text-center"
              >
                <Truck size={18} />
                <span>Suivre ma livraison</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
