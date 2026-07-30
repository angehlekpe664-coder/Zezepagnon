import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, ShieldCheck, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart, formatPrice } = useCart();

  return (
    <div className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between p-5 border border-emerald-100/80 bg-white/90 shadow-card-lux group transition-all duration-300">
      <div>
        {/* Top Badges */}
        <div className="flex justify-between items-center mb-3.5">
          <span className="text-[11px] font-bold tracking-wider text-[#059669] uppercase bg-[#059669]/10 px-3 py-1 rounded-full border border-[#059669]/20">
            {product.category}
          </span>
          {product.isBestSeller && (
            <span className="text-[11px] font-bold text-amber-900 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Award size={12} className="text-amber-200" />
              Best-Seller Bénin
            </span>
          )}
        </div>

        {/* Product Image Container */}
        <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-emerald-50/40 mb-4 group-hover:scale-105 transition-transform duration-500">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#022C22]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-xs font-heading font-bold flex items-center space-x-1.5">
              <span>Voir la fiche clinique</span>
              <ArrowRight size={14} className="text-[#FBBF24]" />
            </span>
          </div>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-1.5 mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-800">{product.rating}</span>
          <span className="text-xs text-slate-400">({product.reviewsCount} avis)</span>
        </div>

        {/* Title & Subtitle */}
        <Link to={`/product/${product.id}`} className="block group-hover:text-[#059669] transition-colors">
          <h3 className="text-lg font-heading font-bold text-slate-900 leading-snug mb-1">{product.name}</h3>
          <p className="text-xs text-slate-500 line-clamp-2 mb-3">{product.subtitle}</p>
        </Link>

        {/* Key Medical Highlights */}
        <div className="space-y-1.5 mb-4 text-xs text-slate-600">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 size={14} className="text-[#059669] shrink-0" />
            <span className="font-medium">Stockiste Officiel MAPA Homologué</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 size={14} className="text-[#059669] shrink-0" />
            <span className="font-medium">Livraison Express 24h & Suivi Bénin</span>
          </div>
        </div>
      </div>

      {/* Bottom Pricing & Action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <div>
          <span className="text-[11px] text-slate-400 font-medium block">Prix Officiel Bénin</span>
          <span className="text-xl font-heading font-black text-[#059669]">
            {formatPrice(product.priceUSD, product.priceXOF)}
          </span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="flex items-center space-x-1.5 bg-gradient-to-r from-[#059669] to-[#046C4E] hover:from-[#10B981] hover:to-[#059669] text-white px-4 py-2.5 rounded-2xl font-heading font-bold text-xs transition-all shadow-md hover:shadow-lg hover:shadow-[#059669]/30 active:scale-95"
        >
          <ShoppingCart size={15} />
          <span>Ajouter</span>
        </button>
      </div>
    </div>
  );
};

