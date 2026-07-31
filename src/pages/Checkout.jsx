import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';
import { Truck, CreditCard, CheckCircle2, MessageCircle, Mail, ShieldCheck, Smartphone, Send, ArrowRight, Award, Sparkles } from 'lucide-react';
import { sendOrderEmails } from '../services/emailService';

export const Checkout = () => {
  const { cart, clearCart, formatPrice, totalUSD, totalXOF } = useCart();
  const { addOrder } = useAuth();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('online_momo'); // 'online_momo', 'mtn', 'moov', 'wave', 'cod'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('Abomey-Calavi');
  const [address, setAddress] = useState('Abomey-Calavi');
  const [fullName, setFullName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  // BENIN WHATSAPP NUMBER FOR ORDERS
  const BENIN_WHATSAPP_NUMBER = "22956549884";

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const orderId = `ZZP-BN-${Math.floor(10000 + Math.random() * 90000)}`;
    const itemsText = cart.map(i => `- ${i.product.name} (x${i.quantity}) : ${formatPrice(i.product.priceUSD * i.quantity, i.product.priceXOF * i.quantity)}`).join('\n');
    const totalFormatted = formatPrice(totalUSD, totalXOF);

    // 1. Send Email Notification via EmailJS & FormSubmit APIs
    const emailResult = await sendOrderEmails({
      id: orderId,
      fullName,
      phone: phoneNumber,
      email,
      city: deliveryCity,
      address,
      paymentMethod,
      totalAmount: totalFormatted,
      itemsText
    });

    // 2. Format WhatsApp Message
    const whatsappMessage = 
      `*🛒 NOUVELLE COMMANDE ZEZEPAGNON BÉNIN*\n` +
      `*N° Commande :* ${orderId}\n` +
      `-----------------------------------\n` +
      `👤 *Client :* ${fullName}\n` +
      `📞 *Téléphone :* ${phoneNumber}\n` +
      `📧 *Email :* ${email || 'Non renseigné'}\n` +
      `📍 *Ville :* ${deliveryCity}\n` +
      `🏠 *Adresse :* ${address}\n` +
      `💳 *Paiement :* ${paymentMethod.toUpperCase()}\n` +
      `-----------------------------------\n` +
      `📦 *Produits :*\n${itemsText}\n` +
      `-----------------------------------\n` +
      `💰 *MONTANT TOTAL :* ${totalFormatted}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${BENIN_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    const newOrderObj = {
      id: orderId,
      date: new Date().toISOString().split('T')[0],
      status: paymentMethod === 'online_momo' ? "Payé en ligne - En livraison (Bénin)" : "En cours de livraison (Bénin)",
      totalXOF,
      totalUSD,
      items: cart.map(i => `${i.product.name} (x${i.quantity})`),
      trackingStep: 2,
      deliveryLocation: `${deliveryCity} - ${address}`,
      paymentMethod,
      fullName,
      phone: phoneNumber,
      email,
      whatsappUrl,
      emailResult,
      totalFormatted
    };

    addOrder(newOrderObj);
    clearCart();
    setIsProcessing(false);
    setCompletedOrder(newOrderObj);

    // Trigger Confetti Celebration
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 }
    });
  };

  // IF ORDER COMPLETED - RENDER SUCCESS CONFIRMATION VIEW
  if (completedOrder) {
    return (
      <div className="space-y-8 pb-16">
        <Breadcrumbs items={[{ name: 'Panier', path: '/cart' }, { name: 'Commande Validée' }]} />

        <section className="max-w-4xl mx-auto px-4">
          <div className="glass-card rounded-3xl p-8 md:p-12 bg-white border border-emerald-200 shadow-2xl space-y-8 text-center">
            
            {/* Success Header Icon */}
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-[#1FA971] shadow-inner">
              <CheckCircle2 size={48} className="animate-bounce" />
            </div>

            <div>
              <span className="text-xs font-extrabold text-[#1FA971] uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
                COMMANDE CONFIRMÉE AVEC SUCCÈS
              </span>
              <h1 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mt-4">
                Merci pour votre commande !
              </h1>
              <p className="text-sm md:text-base text-gray-600 font-medium mt-2">
                Votre numéro de suivi officiel est <strong className="text-[#0F62FE] font-black">{completedOrder.id}</strong>
              </p>
            </div>

            {/* Email Dispatch Notification Status */}
            <div className="bg-gradient-to-r from-blue-50 via-emerald-50 to-blue-50 p-6 rounded-2xl border border-blue-200 text-left space-y-3 shadow-sm">
              <div className="flex items-center space-x-3 text-[#0F62FE]">
                <Mail size={22} className="shrink-0" />
                <h3 className="font-extrabold text-sm md:text-base">Notification Email Transmise</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Un récapitulatif de votre commande a été envoyé automatiquement à l'Ambassadeur Stockiste MAPA <strong>M. OLATOUNDJI Ilarion BIAOU</strong> (<span className="font-semibold text-blue-600">biaouilarion@gmail.com</span>) {completedOrder.email ? `et à votre email (${completedOrder.email}).` : '.'}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                <span className="bg-emerald-600 text-white font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 size={13} /> Email Notification Envoyée
                </span>
                <a
                  href={completedOrder.emailResult?.mailtoUrl}
                  className="bg-white hover:bg-gray-100 text-blue-700 font-bold px-3 py-1 rounded-full border border-blue-300 flex items-center gap-1 transition-colors"
                >
                  <Send size={12} /> Envoyer une copie directe par Email
                </a>
              </div>
            </div>

            {/* Action Buttons: WhatsApp & Tracking */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <a
                href={completedOrder.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-extrabold text-sm shadow-xl shadow-[#25D366]/30 hover:scale-[1.02] transition-all"
              >
                <MessageCircle size={22} />
                <span>Ouvrir WhatsApp Stockiste Direct</span>
              </a>

              <Link
                to={`/order-tracking?orderId=${completedOrder.id}`}
                className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-[#0F62FE] hover:bg-[#004CCD] text-white font-heading font-extrabold text-sm shadow-xl shadow-[#0F62FE]/30 hover:scale-[1.02] transition-all"
              >
                <Truck size={20} />
                <span>Suivre mon Colis en Direct</span>
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 flex items-center justify-center space-x-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Stockiste Agréé MAPA Bénin • Calavi / Cotonou (+229 56 54 98 84)</span>
            </div>

          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: 'Panier', path: '/cart' }, { name: 'Paiement & Caisse' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Paiement & Validation de Commande Bénin</h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Shipping & Mobile Money */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Delivery Info Box */}
            <div className="glass-card rounded-3xl p-6 bg-white border border-gray-200 space-y-4 shadow-soft">
              <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                <Truck className="text-[#0F62FE]" size={22} />
                <h3 className="text-lg font-bold text-gray-900">Adresse de Livraison au Bénin</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Nom Complet du Destinataire *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Sessinou Koffi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Numéro Mobile Money (SMS/WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+229 56 54 98 84"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Adresse Email (Pour recevoir la facture & reçu)</label>
                  <input
                    type="email"
                    placeholder="exemple@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Ville de Livraison *</label>
                  <select
                    value={deliveryCity}
                    onChange={(e) => setDeliveryCity(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                  >
                    <option value="Abomey-Calavi">Abomey-Calavi (Livraison 24h)</option>
                    <option value="Cotonou">Cotonou (Livraison 24h)</option>
                    <option value="Porto-Novo">Porto-Novo (Livraison 24h)</option>
                    <option value="Bohicon / Abomey">Bohicon / Abomey (Livraison 24h)</option>
                    <option value="Parakou">Parakou (Livraison 24h)</option>
                    <option value="Autre commune Bénin">Autre commune Bénin (48h)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Quartier & Précisions Adresse *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Akassato, Calavi Centre, Rue 120"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0F62FE]"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="glass-card rounded-3xl p-6 bg-white border border-gray-200 space-y-4 shadow-soft">
              <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                <CreditCard className="text-[#0F62FE]" size={22} />
                <h3 className="text-lg font-bold text-gray-900">Mode de Paiement au Bénin</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('online_momo')}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    paymentMethod === 'online_momo' ? 'border-[#0F62FE] bg-blue-50/80 ring-2 ring-[#0F62FE]/30' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded w-fit mb-2 flex items-center gap-1">
                    <Smartphone size={13} /> Paiement Mobile Money 🇧🇯
                  </span>
                  <span className="text-xs text-gray-700 font-medium">MTN MoMo, Moov, Wave & CB</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('mtn')}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    paymentMethod === 'mtn' ? 'border-[#0F62FE] bg-blue-50/60 ring-2 ring-[#0F62FE]/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-xs font-bold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded w-fit mb-2">MTN MoMo Direct 🇧🇯</span>
                  <span className="text-xs text-gray-600">Paiement Mobile Money direct au +229 56 54 98 84</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('moov')}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    paymentMethod === 'moov' ? 'border-[#0F62FE] bg-blue-50/60 ring-2 ring-[#0F62FE]/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded w-fit mb-2">Moov Money 🇧🇯</span>
                  <span className="text-xs text-gray-600">Paiement Moov Flooz</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('wave')}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    paymentMethod === 'wave' ? 'border-[#0F62FE] bg-blue-50/60 ring-2 ring-[#0F62FE]/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-xs font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded w-fit mb-2">Wave Bénin 🌊</span>
                  <span className="text-xs text-gray-600">Transfert rapide Wave</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    paymentMethod === 'cod' ? 'border-[#0F62FE] bg-blue-50/60 ring-2 ring-[#0F62FE]/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-xs font-bold text-gray-800 bg-gray-200 px-2 py-0.5 rounded w-fit mb-2">Espèces à la Livraison</span>
                  <span className="text-xs text-gray-600">Payez lors de la réception</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Summary */}
          <div className="lg:col-span-4">
            <div className="glass-card rounded-3xl p-6 bg-white border border-gray-200 space-y-6 shadow-xl sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Commande Finale</h3>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-gray-900 block">{item.product.name}</span>
                      <span className="text-gray-400">Qté : {item.quantity}</span>
                    </div>
                    <span className="font-bold text-gray-900">
                      {formatPrice(item.product.priceUSD * item.quantity, item.product.priceXOF * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-900">Montant Total :</span>
                <span className="text-2xl font-extrabold text-[#0F62FE]">
                  {formatPrice(totalUSD, totalXOF)}
                </span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#1FA971] hover:bg-[#006C45] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#1FA971]/30 active:scale-95 transition-all disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Validation & Envoi des Notifications...</span>
                ) : (
                  <>
                    <Sparkles size={18} className="text-yellow-300" />
                    <span>Valider & Envoyer la Commande</span>
                  </>
                )}
              </button>
              
              <div className="space-y-1.5 pt-2 text-[11px] text-gray-500">
                <div className="flex items-center space-x-1.5 text-emerald-600">
                  <CheckCircle2 size={13} />
                  <span>Notification EmailJS & FormSubmit automatique envoyée</span>
                </div>
                <div className="flex items-center space-x-1.5 text-blue-600">
                  <ShieldCheck size={13} />
                  <span>Livraison certifiée MAPA au Bénin</span>
                </div>
              </div>
            </div>
          </div>

        </form>
      </section>
    </div>
  );
};
