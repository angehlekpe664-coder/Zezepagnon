import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart, formatPrice } = useCart();

  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between p-5 border border-white/60 bg-white/80 shadow-soft group">
      <div>
        {/* Top Badges */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[11px] font-semibold tracking-wider text-[#0F62FE] uppercase bg-[#0F62FE]/10 px-2.5 py-1 rounded-full border border-[#0F62FE]/20">
            {product.category}
          </span>
          {product.isBestSeller && (
            <span className="text-[11px] font-bold text-white bg-gradient-to-r from-[#1FA971] to-[#006C45] px-2.5 py-1 rounded-full shadow-sm">
              Best-Seller Bénin
            </span>
          )}
        </div>

        {/* Product Image Container */}
        <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden rounded-xl bg-gray-50 mb-4 group-hover:scale-105 transition-transform duration-300">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain p-4 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
            <span className="text-white text-xs font-semibold flex items-center space-x-1">
              <span>Voir la fiche clinique</span>
              <ArrowRight size={14} />
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
          <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewsCount} avis)</span>
        </div>

        {/* Title & Subtitle */}
        <Link to={`/product/${product.id}`} className="block group-hover:text-[#0F62FE] transition-colors">
          <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">{product.name}</h3>
          <p className="text-xs text-gray-500 line-clamp-2 mb-3">{product.subtitle}</p>
        </Link>

        {/* Key Medical Highlights */}
        <div className="space-y-1 mb-4 text-xs text-gray-600">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 size={13} className="text-[#1FA971]" />
            <span>Grade Clinique Homologué</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 size={13} className="text-[#1FA971]" />
            <span>Chaîne du froid préservée 24h au Bénin</span>
          </div>
        </div>
      </div>

      {/* Bottom Pricing & Action */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
        <div>
          <span className="text-xs text-gray-400 block">Prix Fixe Bénin</span>
          <span className="text-xl font-bold text-[#0F62FE]">
            {formatPrice(product.priceUSD, product.priceXOF)}
          </span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="flex items-center space-x-1.5 bg-[#0F62FE] hover:bg-[#004CCD] text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md hover:shadow-lg hover:shadow-[#0F62FE]/25 active:scale-95"
        >
          <ShoppingCart size={15} />
          <span>Ajouter</span>
        </button>
      </div>
    </div>
  );
};
