import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('zezepagnon_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [currency, setCurrency] = useState('XOF'); // 'XOF' (FCFA) or 'USD'
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  const exchangeRateUSDToXOF = 600;

  useEffect(() => {
    localStorage.setItem('zezepagnon_cart', JSON.stringify(cart));
  }, [cart]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
    showToast(`Ajouté au panier: ${product.name}`);
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
    showToast('Produit retiré du panier');
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'BENIN2026' || cleanCode === 'ZEZE10') {
      setDiscountCode(cleanCode);
      setDiscountPercent(10);
      showToast('Code promo de 10% appliqué avec succès !');
      return true;
    } else {
      showToast('Code promo invalide');
      return false;
    }
  };

  const formatPrice = (priceInUSD, priceInXOF) => {
    if (currency === 'XOF') {
      const amount = priceInXOF || Math.round(priceInUSD * exchangeRateUSDToXOF);
      return `${amount.toLocaleString('fr-FR')} FCFA`;
    } else {
      return `$${priceInUSD.toFixed(2)}`;
    }
  };

  const subtotalUSD = cart.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);
  const subtotalXOF = cart.reduce((acc, item) => acc + item.product.priceXOF * item.quantity, 0);

  const discountAmountUSD = (subtotalUSD * discountPercent) / 100;
  const discountAmountXOF = (subtotalXOF * discountPercent) / 100;

  const shippingUSD = cart.length > 0 ? (subtotalUSD >= 200 ? 0 : 15) : 0;
  const shippingXOF = cart.length > 0 ? (subtotalXOF >= 100000 ? 0 : 3000) : 0;

  const totalUSD = subtotalUSD - discountAmountUSD + shippingUSD;
  const totalXOF = subtotalXOF - discountAmountXOF + shippingXOF;

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        currency,
        setCurrency,
        formatPrice,
        applyPromoCode,
        discountCode,
        discountPercent,
        subtotalUSD,
        subtotalXOF,
        shippingUSD,
        shippingXOF,
        totalUSD,
        totalXOF,
        totalItemsCount,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
