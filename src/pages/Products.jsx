import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ProductCard } from '../components/common/ProductCard';
import { PRODUCTS } from '../data/products';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['Tous', 'Concentré', 'Pack Cure', 'Entretien', 'Spécialisé'];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.priceXOF - b.priceXOF;
    if (sortBy === 'price-desc') return b.priceXOF - a.priceXOF;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // Default popular
  });

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: 'Produits Zezepagnon' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full">
            DISTRIBUTION NATIONALE BÉNIN
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-3">
            Catalogue des Formules Zezepagnon
          </h1>
          <p className="text-sm text-gray-600">
            Sélectionnez la formule d'immunothérapie adaptée à votre situation clinique.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="glass-card rounded-2xl p-4 mb-8 bg-white border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une formule..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE] focus:bg-white"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 custom-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0F62FE] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
            <SlidersHorizontal size={16} className="text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700 py-2.5 px-3 rounded-xl focus:outline-none focus:border-[#0F62FE]"
            >
              <option value="popular">Recommandés</option>
              <option value="price-asc">Prix : Croissant</option>
              <option value="price-desc">Prix : Décroissant</option>
              <option value="rating">Meilleures notes</option>
            </select>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200">
            <p className="text-gray-500 text-sm">Aucun produit ne correspond à votre recherche.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('Tous'); }}
              className="mt-4 text-[#0F62FE] font-bold text-sm underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
