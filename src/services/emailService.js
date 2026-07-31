import emailjs from '@emailjs/browser';

// EmailJS Credentials Configuration
const EMAILJS_SERVICE_ID = "service_hfofyju"; // Connected to angehlekpe368@gmail.com
const EMAILJS_PUBLIC_KEY = "m5S9RNoEwtFGX1Si";  // Active Public Key

// FormSubmit Activated Random Hash Token for Silent Instant Delivery without activation prompt
// Target: biaouilarion@gmail.com / angehlekpe368@gmail.com
const FORMSUBMIT_ACTIVATED_TOKEN = "af0feadeb0bd26f40446cd1fd978cecc";

// Official Target Recipients
export const SELLER_EMAILS = ["biaouilarion@gmail.com", "angehlekpe368@gmail.com"];

/**
 * Sends clean order confirmation to seller and buyer without any activation prompt.
 */
export const sendOrderEmails = async (orderData) => {
  const customerEmail = orderData.email && orderData.email.includes('@') ? orderData.email : null;
  const orderSubject = `🛒 COMMANDE ZEZEPAGNON BÉNIN N° ${orderData.id} - ${orderData.fullName}`;
  
  // Clean, pretty, stylish client & seller email summary message
  const clientConfirmationMessage = 
    `🌿 ZÉZÉPAGNON BÉNIN - CONFIRMATION DE COMMANDE\n\n` +
    `Bonjour ${orderData.fullName},\n\n` +
    `Nous avons bien reçu votre commande N° ${orderData.id} !\n` +
    `Notre équipe de distribution prépare actuellement vos produits pour une livraison rapide à ${orderData.city}.\n\n` +
    `-----------------------------------------------\n` +
    `📦 VOS PRODUITS COMMANDÉS :\n${orderData.itemsText}\n\n` +
    `💰 MONTANT TOTAL : ${orderData.totalAmount}\n` +
    `📍 VILLE & ADRESSE DE LIVRAISON : ${orderData.city} - ${orderData.address}\n` +
    `📞 VOTE NUMÉRO DE CONTACT : ${orderData.phone}\n` +
    `💳 MODE DE PAIEMENT SÉLECTIONNÉ : ${orderData.paymentMethod ? orderData.paymentMethod.toUpperCase() : 'MOBILE MONEY'}\n` +
    `-----------------------------------------------\n\n` +
    `Un livreur ou conseiller de l'Ambassadeur Stockiste MAPA (M. OLATOUNDJI Ilarion BIAOU) vous contactera au ${orderData.phone} pour valider l'heure exacte de livraison.\n\n` +
    `💬 Besoin d'aide rapide ? Contactez-nous sur WhatsApp au +229 56 54 98 84.\n\n` +
    `Merci de votre confiance,\n` +
    `L'Équipe Zezepagnon Bénin & MAPA Atlanta-USA`;

  const templateParams = {
    order_id: orderData.id,
    name: orderData.fullName,
    customer_name: orderData.fullName,
    phone: orderData.phone,
    customer_phone: orderData.phone,
    email: customerEmail || 'biaouilarion@gmail.com',
    customer_email: customerEmail || 'Non renseigné',
    city: orderData.city,
    address: orderData.address,
    payment_method: orderData.paymentMethod ? orderData.paymentMethod.toUpperCase() : 'MOBILE MONEY',
    total_amount: orderData.totalAmount,
    message: clientConfirmationMessage,
    items_summary: orderData.itemsText,
    reply_to: customerEmail || 'biaouilarion@gmail.com'
  };

  console.log("📨 Dispatching clean order email...", templateParams);
  let emailjsSuccess = false;

  // 1. Send via EmailJS Primary Transport
  try {
    const emailjsRes = await emailjs.send(
      EMAILJS_SERVICE_ID,
      "template_contact",
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    console.log("✅ EmailJS dispatch success:", emailjsRes);
    emailjsSuccess = true;
  } catch (err) {
    console.warn("⚠️ EmailJS primary transport notice:", err);
  }

  // 2. Direct FormSubmit using the pre-activated token (af0feadeb0bd26f40446cd1fd978cecc)
  // This guarantees SILENT delivery without ever sending any activation email again!
  const sendFormSubmitWithToken = async (endpoint, payload) => {
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      console.log(`✅ FormSubmit silent delivery result (${endpoint}):`, data);
      return true;
    } catch (e) {
      console.warn(`⚠️ FormSubmit error (${endpoint}):`, e);
      return false;
    }
  };

  // Dispatch to pre-activated token (Stockist M. BIAOU & Admin)
  const sellerPayload = {
    _subject: orderSubject,
    "N° Commande": orderData.id,
    "Nom Client": orderData.fullName,
    "Téléphone": orderData.phone,
    "Email Client": customerEmail || "Non renseigné",
    "Ville de Livraison": orderData.city,
    "Adresse Complète": orderData.address,
    "Mode de Paiement": orderData.paymentMethod ? orderData.paymentMethod.toUpperCase() : "MOBILE MONEY",
    "Produits Commandés": orderData.itemsText,
    "Montant Total": orderData.totalAmount,
    "Message Confirmation": clientConfirmationMessage,
    _captcha: "false"
  };

  const sellerSubmitResult = await sendFormSubmitWithToken(FORMSUBMIT_ACTIVATED_TOKEN, sellerPayload);

  // If customer provided their own email, send a clean confirmation directly to customer
  let customerSubmitResult = false;
  if (customerEmail) {
    const customerPayload = {
      _subject: `🌿 Confirmation - Nous avons bien reçu votre commande Zezepagnon (N° ${orderData.id})`,
      "Statut Commande": "COMMANDE BIEN REÇUE ET EN COURS DE TRAITEMENT",
      "N° Commande": orderData.id,
      "Nom Client": orderData.fullName,
      "Montant Total": orderData.totalAmount,
      "Ville de Livraison": orderData.city,
      "Produits": orderData.itemsText,
      "Message pour le Client": clientConfirmationMessage,
      _captcha: "false"
    };
    customerSubmitResult = await sendFormSubmitWithToken(customerEmail, customerPayload);
  }

  const overallSuccess = emailjsSuccess || sellerSubmitResult || customerSubmitResult;

  return {
    success: overallSuccess,
    emailjsSuccess,
    sellerSubmitResult,
    customerSubmitResult,
    clientConfirmationMessage,
    mailtoUrl: generateMailtoLink(orderData)
  };
};

/**
 * Sends contact form notification email
 */
export const sendContactEmail = async (contactData) => {
  const contactSubject = `📩 NOUVEAU MESSAGE CONTACT ZEZEPAGNON - ${contactData.name}`;
  
  const templateParams = {
    name: contactData.name,
    from_name: contactData.name,
    phone: contactData.phone,
    from_phone: contactData.phone,
    email: contactData.email || 'biaouilarion@gmail.com',
    from_email: contactData.email || 'Non renseigné',
    city: contactData.city,
    message: contactData.message,
    title: contactSubject
  };

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      "template_contact",
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  } catch (err) {
    console.warn("⚠️ EmailJS contact error:", err);
  }

  // Backup FormSubmit send using activated token
  try {
    await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ACTIVATED_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: contactSubject,
        Nom: contactData.name,
        Téléphone: contactData.phone,
        Email: contactData.email || "Non renseigné",
        Ville: contactData.city,
        Message: contactData.message,
        _captcha: "false"
      })
    });
  } catch (e) {
    console.warn("FormSubmit contact fallback err:", e);
  }

  return { success: true };
};

/**
 * Generates a pre-filled mailto URL for manual 1-click email sending
 */
export const generateMailtoLink = (orderData) => {
  const subject = encodeURIComponent(`Reçu de Commande Zezepagnon N° ${orderData.id}`);
  const body = encodeURIComponent(
    `Bonjour M. OLATOUNDJI Ilarion BIAOU (Ambassadeur Stockiste MAPA),\n\n` +
    `Je viens d'effectuer une commande sur le site Zezepagnon Bénin.\n\n` +
    `Détails de ma commande (N° ${orderData.id}) :\n` +
    `- Client : ${orderData.fullName}\n` +
    `- Téléphone : ${orderData.phone}\n` +
    `- Ville : ${orderData.city}\n` +
    `- Adresse : ${orderData.address}\n` +
    `- Produits : \n${orderData.itemsText}\n` +
    `- Montant Total : ${orderData.totalAmount}\n\n` +
    `Merci de me confirmer la livraison à mon adresse.\n\n` +
    `Cordialement,\n${orderData.fullName}`
  );
  return `mailto:biaouilarion@gmail.com,angehlekpe368@gmail.com?subject=${subject}&body=${body}`;
};
