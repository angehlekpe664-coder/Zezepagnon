import React from 'react';

export const CellularBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Primary Gradient Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#0F62FE]/20 via-[#6366F1]/15 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] bg-gradient-to-bl from-[#10B981]/20 via-[#06B6D4]/15 to-transparent rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#3B82F6]/15 via-[#8B5CF6]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Rotating 3D Immunotherapy Cells */}
      <div className="absolute top-20 left-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full border border-[#0F62FE]/20 bg-gradient-to-br from-[#0F62FE]/10 to-transparent backdrop-blur-sm animate-spin-slow opacity-60">
        <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-[#0F62FE]/40 animate-ping"></div>
        <div className="absolute bottom-5 right-5 w-6 h-6 rounded-full bg-[#10B981]/40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-dashed border-[#6366F1]/30"></div>
      </div>

      <div className="absolute top-1/2 right-[8%] w-24 h-24 md:w-40 md:h-40 rounded-full border border-[#10B981]/20 bg-gradient-to-tr from-[#10B981]/10 via-[#06B6D4]/10 to-transparent backdrop-blur-sm animate-reverse-spin-slow opacity-50">
        <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#10B981]/50"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-[#0F62FE]/40"></div>
      </div>

      <div className="absolute bottom-24 left-[15%] w-20 h-20 md:w-32 md:h-32 rounded-full border border-[#6366F1]/20 bg-gradient-to-bl from-[#6366F1]/10 to-transparent backdrop-blur-sm animate-float-slow opacity-40">
        <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#6366F1]/40"></div>
      </div>

      {/* Floating Micro-particles / Cells */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#0F62FE]/30 animate-bounce-slow"></div>
      <div className="absolute top-2/3 right-1/4 w-4 h-4 rounded-full bg-[#10B981]/30 animate-bounce-medium"></div>
      <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 rounded-full bg-[#6366F1]/40 animate-pulse"></div>

      {/* Subtle Grid overlay for high-tech precision look */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(#0F62FE 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>
    </div>
  );
};
