import emailjs from '@emailjs/browser';

// EmailJS Credentials Configuration
const EMAILJS_SERVICE_ID = "service_hfofyju"; // Connected to angehlekpe368@gmail.com
const EMAILJS_PUBLIC_KEY = "m5S9RNoEwtFGX1Si";  // Active Public Key

/**
 * Sends order notification email to seller (angehlekpe368@gmail.com) and confirmation email to buyer
 */
export const sendOrderEmails = async (orderData) => {
  try {
    const templateParams = {
      order_id: orderData.id,
      name: orderData.fullName,
      customer_name: orderData.fullName,
      phone: orderData.phone,
      customer_phone: orderData.phone,
      email: orderData.email || 'angehlekpe368@gmail.com',
      customer_email: orderData.email || 'Non renseigné',
      city: orderData.city,
      address: orderData.address,
      payment_method: orderData.paymentMethod ? orderData.paymentMethod.toUpperCase() : 'MOBILE MONEY',
      total_amount: orderData.totalAmount,
      message: `Nouvelle commande Zezepagnon Bénin (N° ${orderData.id}). Produit(s) : ${orderData.itemsText}. Montant: ${orderData.totalAmount}. Client: ${orderData.fullName} (${orderData.phone}), Ville: ${orderData.city}, Adresse: ${orderData.address}`,
      items_summary: orderData.itemsText,
      reply_to: orderData.email || 'angehlekpe368@gmail.com'
    };

    console.log("📨 EmailJS: Transmitting order email...", templateParams);

    // Send email using EmailJS service
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      "template_contact", // Using default or template_contact
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    console.log("✅ EmailJS Order Email Sent Successfully!", result);
    return { success: true, result };
  } catch (error) {
    console.warn("⚠️ EmailJS Order Email fallback notice:", error);
    return { success: false, error };
  }
};

/**
 * Sends contact form notification email to seller (angehlekpe368@gmail.com)
 */
export const sendContactEmail = async (contactData) => {
  try {
    const templateParams = {
      name: contactData.name,
      from_name: contactData.name,
      phone: contactData.phone,
      from_phone: contactData.phone,
      email: contactData.email || 'angehlekpe368@gmail.com',
      from_email: contactData.email || 'Non renseigné',
      city: contactData.city,
      message: contactData.message,
      title: `Message de ${contactData.name} (${contactData.city})`
    };

    console.log("📨 EmailJS: Transmitting contact email...", templateParams);

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      "template_contact",
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log("✅ EmailJS Contact Email Sent Successfully!", result);
    return { success: true, result };
  } catch (error) {
    console.warn("⚠️ EmailJS Contact Email fallback notice:", error);
    return { success: false, error };
  }
};
