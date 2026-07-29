import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-24 right-6 z-50 animate-bounce">
      <div className="bg-gray-900/90 text-white backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 border border-white/20">
        <CheckCircle2 size={20} className="text-[#1FA971]" />
        <span className="text-sm font-medium">{toastMessage}</span>
      </div>
    </div>
  );
};
