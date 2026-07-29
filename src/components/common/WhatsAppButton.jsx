import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/22956549884?text=Bonjour%20Zezepagnon%20B%C3%A9nin,%20je%20souhaite%20commander%20le%20m%C3%A9dicament%20d'immunoth%C3%A9rapie%20ou%20avoir%20plus%20d'informations.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-105 transition-all duration-300 group"
      title="Discuter directement sur WhatsApp avec le distributeur au Bénin"
    >
      <div className="relative">
        <MessageCircle size={24} className="fill-white stroke-none" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
      </div>
      <span className="hidden md:inline font-semibold text-sm">WhatsApp Bénin Direct</span>
    </a>
  );
};
