import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { MapPin, Phone, MessageCircle, Send, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { sendContactEmail } from '../services/emailService';
import { StockisteProfileCard } from '../components/common/StockisteProfileCard';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Abomey-Calavi',
    message: ''
  });

  const BENIN_WHATSAPP_NUMBER = "22956549884";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // 1. Send Notification Email via EmailJS
    await sendContactEmail(formData);

    // 2. Transmit via WhatsApp
    const whatsappMessage = 
      `*📨 NOUVEAU MESSAGE AU STOCKISTE AGRÉÉ MAPA BÉNIN*\n` +
      `-----------------------------------\n` +
      `👤 *Nom :* ${formData.name}\n` +
      `📞 *Téléphone :* ${formData.phone}\n` +
      `📍 *Ville :* ${formData.city}\n` +
      `📧 *Email :* ${formData.email || 'Non renseigné'}\n` +
      `-----------------------------------\n` +
      `💬 *Message :*\n${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${BENIN_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ name: 'Contact & Stockiste MAPA Bénin' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          RÉPUBLIQUE DU BÉNIN UNIQUEMENT
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-3">
          Contactez votre Stockiste Agréé MAPA au Bénin
        </h1>
        <p className="text-sm text-gray-600">
          Nos conseillers et stockistes au Bénin sont disponibles pour répondre à toutes vos questions et orchestrer vos livraisons sécurisées.
        </p>
      </section>

      {/* Stockiste / Ambassador Profile Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <StockisteProfileCard />
      </section>

      {/* DEDICATED SECTION: Qu'est-ce qu'un Stockiste MAPA ? */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#0F172A] via-[#0F62FE] to-[#004CCD] text-white shadow-2xl border border-blue-400/30 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-[#7FFABA]">
              <Award size={24} />
            </div>
            <span className="text-xs font-bold text-[#7FFABA] uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              CERTIFICATION OFFICIELLE MAPA BÉNIN
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
            Qu'est-ce qu'un Stockiste MAPA ?
          </h2>
          <p className="text-sm md:text-base text-blue-50 leading-relaxed max-w-4xl font-medium">
            Les stockistes sont des partenaires agréés et certifiés de <strong className="text-white font-bold underline decoration-[#FBBF24]">MAPA</strong>, ayant suivi une formation rigoureuse et obtenu leur certification à travers l'acquisition du ticket d'engagement. Ce statut leur confère le droit exclusif de gérer et de distribuer l'ensemble des produits MAPA au Bénin. Vous pouvez les contacter directement pour commander vos produits MAPA en toute sécurité.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-8 bg-white border border-gray-200 space-y-6 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900">Stockiste Agréé MAPA Bénin</h3>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-[#0F62FE] shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-bold block text-gray-900">Siège du Stockiste MAPA</span>
                    <span>Calavi / Togoudo & Cotonou, République du Bénin</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-[#0F62FE] shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-bold block text-gray-900">Ligne Directe Stockiste Bénin</span>
                    <span>+229 56 54 98 84 (01 56 54 98 84)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="text-[#25D366] shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-bold block text-gray-900">Commande WhatsApp Rapide</span>
                    <a href="https://wa.me/22956549884" target="_blank" rel="noreferrer" className="text-[#25D366] font-semibold hover:underline">
                      Discuter avec le Stockiste (+229 56 54 98 84)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Towns Badge */}
            <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 space-y-2">
              <span className="text-xs font-bold text-[#1FA971] uppercase">Villes Livrées au Bénin en 24h</span>
              <p className="text-xs text-gray-600">Abomey-Calavi, Cotonou, Porto-Novo, Bohicon, Parakou, Natitingou, Ouidah, Lokossa, Djougou.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 bg-white border border-gray-200 shadow-soft">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={48} className="text-[#1FA971] mx-auto" />
                  <h3 className="text-2xl font-bold text-gray-900">Message Transmis au Stockiste MAPA !</h3>
                  <p className="text-sm text-gray-600">Votre message a été envoyé à M. OLATOUNDJI Ilarion BIAOU, stockiste agréé au Bénin.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#0F62FE] font-bold text-sm underline pt-2">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formulaire de Contact Stockiste MAPA</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Nom complet *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Sessinou Koffi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Numéro Téléphone (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+229 56 54 98 84"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Adresse Email</label>
                      <input
                        type="email"
                        placeholder="exemple@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Ville de Livraison au Bénin</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                      >
                        <option value="Abomey-Calavi">Abomey-Calavi</option>
                        <option value="Cotonou">Cotonou</option>
                        <option value="Porto-Novo">Porto-Novo</option>
                        <option value="Parakou">Parakou</option>
                        <option value="Autre commune Bénin">Autre commune Bénin</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Votre Message / Demande *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Précisez votre demande à M. BIAOU..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0F62FE] hover:bg-[#004CCD] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#0F62FE]/25 transition-all"
                  >
                    <Send size={16} />
                    <span>Envoyer au Stockiste MAPA</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
