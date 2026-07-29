import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('zezepagnon_user');
    return saved ? JSON.parse(saved) : {
      name: "Sessinou Koffi",
      email: "sessinou.koffi@gmail.com",
      phone: "+229 97 12 34 56",
      city: "Cotonou",
      address: "Quartier Haie Vive, Rue 380, Cotonou, Bénin",
      isLoggedIn: true
    };
  });

  const [orders, setOrders] = useState([
    {
      id: "ZZP-BN-98214",
      date: "2026-07-15",
      status: "Livré",
      totalXOF: 170000,
      totalUSD: 285.00,
      items: ["Zezepagnon Concentré d'Immunothérapie (x1)"],
      trackingStep: 4,
      deliveryLocation: "Cotonou Akpakpa"
    },
    {
      id: "ZZP-BN-87103",
      date: "2026-06-02",
      status: "Terminé",
      totalXOF: 450000,
      totalUSD: 760.00,
      items: ["Zezepagnon Pack Cure Intensive (x1)"],
      trackingStep: 4,
      deliveryLocation: "Porto-Novo Centre"
    }
  ]);

  const login = (email, password) => {
    const newUser = {
      name: email.split('@')[0],
      email: email,
      phone: "+229 96 00 00 00",
      city: "Cotonou",
      address: "Cotonou, Bénin",
      isLoggedIn: true
    };
    setUser(newUser);
    localStorage.setItem('zezepagnon_user', JSON.stringify(newUser));
  };

  const logout = () => {
    const loggedOutUser = { isLoggedIn: false };
    setUser(loggedOutUser);
    localStorage.removeItem('zezepagnon_user');
  };

  const addOrder = (orderData) => {
    setOrders(prev => [orderData, ...prev]);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, orders, addOrder }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
