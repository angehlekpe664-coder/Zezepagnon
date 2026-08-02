import React from 'react';

export const CellularBackground = () => {
  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. VIBRANT MULTI-COLOR AMBIENT GLOW ORBS */}
      <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] bg-gradient-to-br from-[#0F62FE]/15 via-[#6366F1]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 -right-24 w-[38rem] h-[38rem] bg-gradient-to-bl from-[#10B981]/15 via-[#059669]/10 to-transparent rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="absolute top-2/3 -left-20 w-[32rem] h-[32rem] bg-gradient-to-tr from-[#F59E0B]/15 via-[#D97706]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

      {/* 2. CELLULAR STRUCTURES FLOATING IN BACKGROUND FOR DESKTOP */}
      <div className="absolute top-20 left-[7%] w-56 h-56 rounded-full border border-[#10B981]/30 bg-gradient-to-br from-[#10B981]/10 via-[#06B6D4]/10 to-transparent opacity-60 animate-spin-slow shadow-lg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-[#10B981] to-[#059669] opacity-40 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#06B6D4] opacity-70"></div>
        </div>
      </div>

      <div className="absolute top-1/3 right-[6%] w-48 h-48 rounded-full border border-[#0F62FE]/30 bg-gradient-to-tr from-[#0F62FE]/10 via-[#8B5CF6]/10 to-transparent opacity-60 animate-float-slow shadow-lg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-[#0F62FE] to-[#8B5CF6] opacity-40 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-white opacity-70"></div>
        </div>
      </div>

      {/* SUBTLE BACKGROUND RETICLE GRID */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(#0F62FE 1.2px, transparent 1.2px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>
    </div>
  );
};
