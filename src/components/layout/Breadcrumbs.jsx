import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 py-4 px-4 md:px-8 max-w-[1440px] mx-auto">
      <Link to="/" className="flex items-center space-x-1 hover:text-[#0F62FE] transition-colors">
        <Home size={14} />
        <span>Accueil</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="text-gray-400" />
          {item.path ? (
            <Link to={item.path} className="hover:text-[#0F62FE] transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="font-semibold text-gray-800">{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
