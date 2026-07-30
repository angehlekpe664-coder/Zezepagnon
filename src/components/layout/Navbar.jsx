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
  Sparkles,
  Award
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
      {/* Top Benin MAPA Certified Distribution Bar */}
      <div className="bg-gradient-to-r from-[#022C22] via-[#046C4E] to-[#0D9488] text-white text-xs py-2 px-4 shadow-sm">
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2.5">
            <span className="inline-flex items-center gap-1 bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/40 px-2 py-0.5 rounded-full font-semibold text-[11px]">
              <Award size={12} className="text-[#FBBF24]" />
              Stockiste Officiel MAPA
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-emerald-100 font-medium">
              ⚡ Livraison Express 24h & Paiement Mobile Money (MTN / Moov) à Cotonou & Calavi
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/order-tracking" className="hover:underline flex items-center gap-1.5 text-emerald-100 hover:text-white transition-colors">
              <Truck size={13} className="text-[#FBBF24]" />
              <span className="font-medium">Suivre ma commande</span>
            </Link>
            <button 
              onClick={() => setCurrency(currency === 'XOF' ? 'USD' : 'XOF')}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/15 px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all"
              title="Changer la devise de paiement"
            >
              <Globe size={12} className="text-emerald-300" />
              <span>{currency === 'XOF' ? 'FCFA (Bénin 🇧🇯)' : 'USD ($ 🇺🇸)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="glass-nav border-b border-emerald-900/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#059669] via-[#10B981] to-[#D97706] flex items-center justify-center text-white shadow-lg shadow-[#059669]/25 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck size={26} className="stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black font-heading tracking-tight text-[#0F172A] group-hover:text-[#059669] transition-colors">
                Zezepagnon <span className="text-[#059669] font-medium text-lg font-sans">Bénin</span>
              </span>
              <span className="text-[10px] text-[#0D9488] font-bold tracking-widest uppercase -mt-1 flex items-center gap-1">
                <span>STOCKISTE AGRÉÉ MAPA</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-[#059669] bg-[#059669]/10 shadow-sm font-bold'
                    : 'text-[#334155] hover:text-[#059669] hover:bg-[#059669]/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Icons & Direct Order CTA */}
          <div className="flex items-center space-x-3">
            
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2.5 text-[#334155] hover:text-[#059669] hover:bg-emerald-50/80 rounded-2xl transition-all border border-slate-200/60 hover:border-emerald-200"
              title="Panier de commande"
            >
              <ShoppingBag size={22} />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#D97706] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md border-2 border-white">
                  {totalItemsCount}
                </span>
              )}
            </Link>

            {/* Direct Order Action CTA */}
            <Link
              to="/products"
              className="hidden sm:flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#059669] via-[#046C4E] to-[#0F766E] text-white font-heading font-bold text-sm shadow-lg shadow-[#059669]/25 hover:shadow-xl hover:shadow-[#059669]/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              <Sparkles size={16} className="text-[#FBBF24] animate-pulse" />
              <span>Commander Zezepagnon</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-[#0F172A] hover:text-[#059669] focus:outline-none rounded-xl hover:bg-emerald-50"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-emerald-100 px-6 py-6 space-y-3 shadow-2xl transition-all animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-[#059669] bg-[#059669]/10 font-bold'
                    : 'text-[#1E293B] hover:bg-emerald-50'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight size={18} className="text-[#059669]" />
              </Link>
            ))}
            
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#059669] to-[#046C4E] text-white font-heading font-bold text-center shadow-lg shadow-[#059669]/30"
              >
                <Sparkles size={18} className="text-[#FBBF24]" />
                <span>Commander maintenant (Bénin)</span>
              </Link>
              <Link
                to="/order-tracking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-emerald-50 text-[#047857] font-semibold text-center border border-emerald-200"
              >
                <Truck size={18} />
                <span>Suivre ma commande</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

