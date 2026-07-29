import React from 'react';
import { Check, Sparkles, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';

export const PricingSection = () => {
  const { addToCart, formatPrice } = useCart();

  return (
    <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-[#0F62FE]/10 px-3 py-1 rounded-full">
          Tarification & Offres Bénin
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
          Choisissez votre Cure d'Immunothérapie
        </h2>
        <p className="text-sm text-gray-600">
          Des formules adaptées à vos besoins cliniques avec garantie d'origine et livraison express sur tout le territoire béninois.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className={`glass-card rounded-3xl p-8 flex flex-col justify-between relative border ${
              product.isBestSeller
                ? 'border-[#0F62FE] shadow-2xl bg-white scale-[1.03] z-10'
                : 'border-white/80 bg-white/80 hover:border-gray-300'
            }`}
          >
            {product.isBestSeller && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0F62FE] to-[#004CCD] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center space-x-1">
                <Sparkles size={14} />
                <span>Formule Recommandée Bénin</span>
              </div>
            )}

            <div>
              <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider block mb-2">
                {product.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-6">{product.subtitle}</p>

              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  {formatPrice(product.priceUSD, product.priceXOF)}
                </span>
                <span className="text-xs text-gray-400 block mt-1">Paiement Mobile Money ou à la livraison</span>
              </div>

              <ul className="space-y-3 mb-8 text-xs md:text-sm text-gray-600">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check size={16} className="text-[#1FA971] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => addToCart(product)}
              className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95 ${
                product.isBestSeller
                  ? 'bg-[#0F62FE] hover:bg-[#004CCD] text-white shadow-[#0F62FE]/30'
                  : 'bg-gray-900 hover:bg-black text-white'
              }`}
            >
              <ShoppingCart size={16} />
              <span>Commander cette formule</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
