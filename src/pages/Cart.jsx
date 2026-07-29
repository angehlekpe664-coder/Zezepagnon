import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, ArrowLeft } from 'lucide-react';

export const Cart = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    formatPrice, 
    currency,
    applyPromoCode,
    discountCode,
    discountPercent,
    subtotalUSD,
    subtotalXOF,
    shippingUSD,
    shippingXOF,
    totalUSD,
    totalXOF
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const navigate = useNavigate();

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput) {
      applyPromoCode(promoInput);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="space-y-8 pb-16">
        <Breadcrumbs items={[{ name: 'Mon Panier' }]} />
        <div className="max-w-[1440px] mx-auto px-4 text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-soft max-w-xl">
          <div className="w-20 h-20 rounded-full bg-blue-50 text-[#0F62FE] flex items-center justify-center mx-auto mb-4">
            <ShoppingBag size={36} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Votre panier est vide</h2>
          <p className="text-sm text-gray-500 mb-6">Découvrez nos formules d'immunothérapie et commencez votre traitement dès aujourd'hui.</p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-[#0F62FE] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#0F62FE]/25 hover:bg-[#004CCD] transition-all"
          >
            <span>Voir le Catalogue Produits</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: 'Mon Panier de Commande' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Mon Panier de Commande Zezepagnon</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="glass-card rounded-2xl p-4 md:p-6 bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft"
              >
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-contain rounded-xl bg-gray-50 p-2 border border-gray-100"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{item.product.name}</h3>
                    <span className="text-xs text-gray-400 block">{item.product.category}</span>
                    <span className="text-sm font-bold text-[#0F62FE] mt-1 block">
                      {formatPrice(item.product.priceUSD, item.product.priceXOF)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto space-x-6">
                  {/* Quantity controls */}
                  <div className="flex items-center space-x-2 border border-gray-200 rounded-xl bg-gray-50 p-1">
                    <button
                      onClick={() => updateQuantity(item.product.id, -1)}
                      className="w-8 h-8 rounded-lg bg-white hover:bg-gray-200 font-bold text-gray-700 flex items-center justify-center border"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, 1)}
                      className="w-8 h-8 rounded-lg bg-white hover:bg-gray-200 font-bold text-gray-700 flex items-center justify-center border"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal Item */}
                  <span className="font-extrabold text-gray-900 text-base min-w-[100px] text-right">
                    {formatPrice(item.product.priceUSD * item.quantity, item.product.priceXOF * item.quantity)}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-red-500 p-2 rounded-lg transition-colors"
                    title="Supprimer du panier"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-2 flex justify-between items-center text-xs">
              <Link to="/products" className="text-[#0F62FE] font-bold flex items-center space-x-1 hover:underline">
                <ArrowLeft size={14} />
                <span>Continuer mes achats</span>
              </Link>
              <span className="text-gray-400">Paiement 100% sécurisé au Bénin</span>
            </div>
          </div>

          {/* Order Summary Card */}
          <div className="lg:col-span-4">
            <div className="glass-card rounded-3xl p-6 bg-white border border-gray-200 space-y-6 shadow-xl sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Récapitulatif de Commande</h3>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 block">Code promo / Réduction</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Ex: BENIN2026"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs uppercase focus:outline-none focus:border-[#0F62FE]"
                  />
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-xl text-xs font-bold shrink-0"
                  >
                    Appliquer
                  </button>
                </div>
                {discountCode && (
                  <span className="text-[11px] text-[#1FA971] font-bold block">
                    Code {discountCode} appliqué (-{discountPercent}%)
                  </span>
                )}
              </form>

              {/* Totals Breakdown */}
              <div className="space-y-2 text-xs text-gray-600 border-t border-b border-gray-100 py-4">
                <div className="flex justify-between">
                  <span>Sous-total :</span>
                  <span className="font-bold text-gray-900">{formatPrice(subtotalUSD, subtotalXOF)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#1FA971] font-semibold">
                    <span>Réduction ({discountPercent}%) :</span>
                    <span>-{formatPrice((subtotalUSD * discountPercent) / 100, (subtotalXOF * discountPercent) / 100)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Frais de livraison (Bénin) :</span>
                  <span className="font-bold text-gray-900">
                    {shippingXOF === 0 ? 'GRATUIT' : formatPrice(shippingUSD, shippingXOF)}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-900">Total à Payer :</span>
                <span className="text-2xl font-extrabold text-[#0F62FE]">
                  {formatPrice(totalUSD, totalXOF)}
                </span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#0F62FE] hover:bg-[#004CCD] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#0F62FE]/25 active:scale-95 transition-all"
              >
                <span>Valider et Passer la Commande</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
