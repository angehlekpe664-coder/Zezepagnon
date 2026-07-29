import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="glass-card rounded-3xl p-8 md:p-12 bg-white border border-gray-200 shadow-xl max-w-lg space-y-4">
        <span className="text-6xl font-extrabold text-[#0F62FE]">404</span>
        <h1 className="text-2xl font-bold text-gray-900">Page Introuvable</h1>
        <p className="text-xs text-gray-500">
          La page médicale ou la ressource demandée n'existe pas ou a été déplacée.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-[#0F62FE] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-[#004CCD] transition-all"
          >
            <Home size={16} />
            <span>Retourner à l'Accueil</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
