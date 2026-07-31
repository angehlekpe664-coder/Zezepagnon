import emailjs from '@emailjs/browser';

// EmailJS Credentials Configuration
const EMAILJS_SERVICE_ID = "service_hfofyju"; // Connected to angehlekpe368@gmail.com
const EMAILJS_PUBLIC_KEY = "m5S9RNoEwtFGX1Si";  // Active Public Key

// Official Target Recipients
export const SELLER_EMAILS = ["biaouilarion@gmail.com", "angehlekpe368@gmail.com"];

/**
 * Sends order notification email to seller (biaouilarion@gmail.com & angehlekpe368@gmail.com)
 * and confirmation email to buyer.
 */
export const sendOrderEmails = async (orderData) => {
  const customerEmail = orderData.email && orderData.email.includes('@') ? orderData.email : null;
  const orderSubject = `🛒 COMMANDE ZEZEPAGNON BÉNIN N° ${orderData.id} - ${orderData.fullName}`;
  
  const formattedSummary = 
    `NOUVELLE COMMANDE ZEZEPAGNON BÉNIN N° ${orderData.id}\n` +
    `===============================================\n` +
    `Client : ${orderData.fullName}\n` +
    `Téléphone : ${orderData.phone}\n` +
    `Email Client : ${customerEmail || 'Non renseigné'}\n` +
    `Ville de Livraison : ${orderData.city}\n` +
    `Adresse Complète : ${orderData.address}\n` +
    `Mode de Paiement : ${orderData.paymentMethod ? orderData.paymentMethod.toUpperCase() : 'MOBILE MONEY'}\n` +
    `===============================================\n` +
    `PRODUIT(S) COMMANDÉ(S) :\n${orderData.itemsText}\n` +
    `===============================================\n` +
    `MONTANT TOTAL : ${orderData.totalAmount}\n` +
    `Date : ${new Date().toLocaleString('fr-FR')}\n`;

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
    message: formattedSummary,
    items_summary: orderData.itemsText,
    reply_to: customerEmail || 'biaouilarion@gmail.com'
  };

  console.log("📨 Starting Dual Order Email Dispatch...", templateParams);
  let emailjsSuccess = false;

  // 1. Attempt EmailJS Transmission
  try {
    const emailjsRes = await emailjs.send(
      EMAILJS_SERVICE_ID,
      "template_contact",
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    console.log("✅ EmailJS transmission succeeded:", emailjsRes);
    emailjsSuccess = true;
  } catch (err) {
    console.warn("⚠️ EmailJS primary attempt notice:", err);
  }

  // 2. Guaranteed FormSubmit API Fallback to Seller Emails & Buyer Email
  const recipients = [...SELLER_EMAILS];
  if (customerEmail && !recipients.includes(customerEmail)) {
    recipients.push(customerEmail);
  }

  const sendFormSubmit = async (targetEmail) => {
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: orderSubject,
          "N° Commande": orderData.id,
          "Nom Client": orderData.fullName,
          "Téléphone": orderData.phone,
          "Email Client": customerEmail || "Non renseigné",
          "Ville": orderData.city,
          "Adresse": orderData.address,
          "Mode de Paiement": orderData.paymentMethod ? orderData.paymentMethod.toUpperCase() : "MOBILE MONEY",
          "Détail Produits": orderData.itemsText,
          "Montant Total": orderData.totalAmount,
          "Message": formattedSummary,
          _captcha: "false"
        })
      });
      const data = await response.json();
      console.log(`✅ FormSubmit Email sent to ${targetEmail}:`, data);
      return true;
    } catch (e) {
      console.warn(`⚠️ FormSubmit error for ${targetEmail}:`, e);
      return false;
    }
  };

  // Trigger fallback sending to recipients in background
  const fallbackPromises = recipients.map(emailAddr => sendFormSubmit(emailAddr));
  const fallbackResults = await Promise.all(fallbackPromises);

  const overallSuccess = emailjsSuccess || fallbackResults.some(r => r === true);

  return {
    success: overallSuccess,
    emailjsSuccess,
    fallbackResults,
    formattedSummary,
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

  // Backup FormSubmit send
  for (const sellerEmail of SELLER_EMAILS) {
    try {
      await fetch(`https://formsubmit.co/ajax/${sellerEmail}`, {
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
