import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { User, Package, Calendar, Download, LogOut, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UserDashboard = () => {
  const { user, logout, orders } = useAuth();
  const { formatPrice } = useCart();
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: 'Mon Espace Santé' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* User Greeting Header */}
        <div className="glass-card rounded-3xl p-6 md:p-8 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-[#0F62FE] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Bienvenue, {user?.name || 'Patient Zezepagnon'}</h1>
              <p className="text-xs text-gray-500">{user?.email} • {user?.phone}</p>
              <span className="text-[10px] font-bold text-[#1FA971] bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mt-1">
                Profil Vérifié Bénin 🇧🇯
              </span>
            </div>
          </div>

          <button
            onClick={logout}
            className="flex items-center space-x-2 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-xl border border-red-200 transition-colors"
          >
            <LogOut size={16} />
            <span>Déconnexion</span>
          </button>
        </div>

        {/* Dashboard Tabs & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Nav */}
          <div className="lg:col-span-3 space-y-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs flex items-center space-x-3 transition-all ${
                activeTab === 'orders' ? 'bg-[#0F62FE] text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Package size={16} />
              <span>Mes Commandes & Traitements</span>
            </button>

            <button
              onClick={() => setActiveTab('reports')}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs flex items-center space-x-3 transition-all ${
                activeTab === 'reports' ? 'bg-[#0F62FE] text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Download size={16} />
              <span>Analyses & Rapports Cliniques</span>
            </button>
          </div>

          {/* Main Display Area */}
          <div className="lg:col-span-9">
            {activeTab === 'orders' ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Historique des Commandes</h3>
                
                {orders.map((ord) => (
                  <div key={ord.id} className="glass-card rounded-2xl p-6 bg-white border border-gray-200 space-y-4 shadow-soft">
                    <div className="flex flex-wrap justify-between items-center text-xs gap-2 border-b border-gray-100 pb-3">
                      <div>
                        <span className="font-bold text-gray-900 text-sm block">Commande #{ord.id}</span>
                        <span className="text-gray-400">Date : {ord.date}</span>
                      </div>
                      <span className="bg-emerald-100 text-[#1FA971] font-bold px-3 py-1 rounded-full">
                        {ord.status}
                      </span>
                    </div>

                    <div className="text-xs text-gray-700 space-y-1">
                      <span className="font-semibold block text-gray-900">Articles :</span>
                      {ord.items.map((it, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 size={13} className="text-[#1FA971]" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                      <span className="text-gray-500">Livraison : {ord.deliveryLocation}</span>
                      <Link
                        to={`/order-tracking?orderId=${ord.id}`}
                        className="text-[#0F62FE] font-bold hover:underline"
                      >
                        Suivre cette livraison →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-3xl p-8 bg-white border border-gray-200 text-center space-y-4">
                <ShieldCheck size={48} className="text-[#0F62FE] mx-auto" />
                <h3 className="text-xl font-bold text-gray-900">Vos Bulletins Médicaux & Rapports</h3>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Consultez et téléchargez les bilans d'immunité et certificats de conformité délivrés par nos partenaires biologistes au Bénin.
                </p>
                <button
                  onClick={() => alert("Certificat d'analyse Zezepagnon (PDF) téléchargé.")}
                  className="bg-[#0F62FE] text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-[#004CCD]"
                >
                  Télécharger le Certificat de Lot
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
