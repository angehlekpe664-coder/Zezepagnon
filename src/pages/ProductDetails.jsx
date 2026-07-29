import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { 
  ShoppingCart, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Droplet, 
  FileText, 
  MessageCircle,
  Truck,
  ArrowLeft
} from 'lucide-react';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, formatPrice } = useCart();
  
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleInstantBuy = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ name: 'Produits', path: '/products' }, { name: product.name }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Main Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-card rounded-3xl p-6 bg-white border border-gray-200 aspect-square flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={selectedImg}
                alt={product.name}
                className="w-full h-full object-contain p-4 transition-all duration-300 hover:scale-105"
              />
            </div>
            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`rounded-2xl p-2 bg-white border transition-all aspect-square ${
                    selectedImg === img ? 'border-[#0F62FE] ring-2 ring-[#0F62FE]/20 scale-95' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="Aperçu" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Product Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                {product.category} • Grade Médical
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500">{product.subtitle}</p>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-900">{product.rating}</span>
              <span className="text-xs text-gray-400">({product.reviewsCount} évaluations vérifiées au Bénin)</span>
            </div>

            {/* Price Box */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-5 border border-blue-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 block">Prix Officiel Distributeur Bénin</span>
                <span className="text-3xl font-extrabold text-[#0F62FE]">
                  {formatPrice(product.priceUSD, product.priceXOF)}
                </span>
              </div>
              <div className="text-right text-xs text-[#1FA971] font-semibold space-y-0.5">
                <div>En stock à Abomey-Calavi & Cotonou</div>
                <div className="text-gray-500 font-normal">Livraison 24h garantie</div>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Quantity & CTA Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-bold text-gray-700">Quantité :</span>
                <div className="flex items-center space-x-2 border border-gray-200 rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-gray-700 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-gray-700 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="w-full bg-[#0F62FE] hover:bg-[#004CCD] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#0F62FE]/25 active:scale-95 transition-all"
                >
                  <ShoppingCart size={18} />
                  <span>Ajouter au Panier</span>
                </button>

                <button
                  onClick={handleInstantBuy}
                  className="w-full bg-[#1FA971] hover:bg-[#006C45] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#1FA971]/25 active:scale-95 transition-all"
                >
                  <span>Commander Directement</span>
                </button>
              </div>

              <a
                href={`https://wa.me/22956549884?text=Bonjour,%20je%20souhaite%20commander%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-all mt-2"
              >
                <MessageCircle size={16} />
                <span>Commander sur WhatsApp (Bénin)</span>
              </a>
            </div>

            {/* Protocol Summary Card */}
            <div className="glass-card rounded-2xl p-4 bg-white border border-gray-200 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <Droplet size={18} className="mx-auto text-[#0F62FE] mb-1" />
                <span className="text-gray-400 block">Dose Quotidienne</span>
                <span className="font-bold text-gray-900">{product.protocolGuidelines.dailyDose}</span>
              </div>
              <div>
                <Clock size={18} className="mx-auto text-[#0F62FE] mb-1" />
                <span className="text-gray-400 block">Heure Optimale</span>
                <span className="font-bold text-gray-900">{product.protocolGuidelines.optimalTime}</span>
              </div>
              <div>
                <Calendar size={18} className="mx-auto text-[#0F62FE] mb-1" />
                <span className="text-gray-400 block">Durée du Cycle</span>
                <span className="font-bold text-gray-900">{product.protocolGuidelines.cycleLength}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs & Active Ingredients Section */}
        <div className="mt-16 glass-card rounded-3xl p-8 bg-white border border-gray-200 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ingrédients Bio-Actifs Principaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.bioactiveIngredients.map((ing, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="font-bold text-sm text-[#0F62FE] block mb-1">{ing.name}</span>
                  <p className="text-xs text-gray-600 leading-relaxed">{ing.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instructions de Prise Clinique</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.protocolGuidelines.instructions}
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};
