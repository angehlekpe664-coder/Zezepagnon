import React from 'react';

export const FeatureCard = ({ number, title, description, icon: Icon, image, accentColor = 'blue' }) => {
  const isBlue = accentColor === 'blue';
  
  return (
    <div className={`glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between border ${
      isBlue ? 'border-blue-100/80 hover:border-[#0F62FE]/40' : 'border-emerald-100/80 hover:border-[#1FA971]/40'
    } bg-white/80`}>
      <div>
        {/* Icon Blob */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
          isBlue ? 'bg-[#0F62FE]/10 text-[#0F62FE]' : 'bg-[#1FA971]/10 text-[#1FA971]'
        }`}>
          {Icon && <Icon size={24} />}
        </div>

        {/* Step Number & Title */}
        <div className="flex items-center space-x-3 mb-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            isBlue ? 'bg-blue-100 text-[#0F62FE]' : 'bg-emerald-100 text-[#1FA971]'
          }`}>
            Phase 0{number}
          </span>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {image && (
        <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-inner mt-2">
          <img src={image} alt={title} className="w-full h-36 object-cover object-center hover:scale-105 transition-transform duration-500" />
        </div>
      )}
    </div>
  );
};
