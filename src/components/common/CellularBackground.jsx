import React from 'react';

export const CellularBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none opacity-30">
      
      {/* 1. SOFT AMBIENT MULTI-COLOR GRADIENT GLOW ORBS */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-[#0F62FE]/15 via-[#6366F1]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 -right-32 w-[34rem] h-[34rem] bg-gradient-to-bl from-[#10B981]/15 via-[#059669]/10 to-transparent rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="absolute top-2/3 -left-20 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#F59E0B]/12 via-[#D97706]/8 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-36 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-tl from-[#F43F5E]/12 via-[#8B5CF6]/8 to-transparent rounded-full blur-3xl animate-pulse-medium"></div>

      {/* 2. SUBTLE 3D CELLULAR STRUCTURES IN BACKGROUND */}

      {/* CELL A: EMERALD / CYAN IMMUNO-CELL (Top Left) */}
      <div className="absolute top-16 left-[5%] md:left-[8%] w-32 h-32 md:w-48 md:h-48 rounded-full border border-[#10B981]/20 bg-gradient-to-br from-[#10B981]/10 via-[#06B6D4]/5 to-transparent backdrop-blur-[2px] animate-spin-slow opacity-60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#06B6D4]/40 animate-ping"></div>
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#10B981]/40"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#06B6D4]/40"></div>
        <div className="absolute inset-2 rounded-full border border-dashed border-[#10B981]/25 animate-reverse-spin-slow"></div>
      </div>

      {/* CELL B: ELECTRIC BLUE / VIOLET CELL (Top Right) */}
      <div className="absolute top-1/3 right-[4%] md:right-[7%] w-28 h-28 md:w-40 md:h-40 rounded-full border border-[#0F62FE]/20 bg-gradient-to-tr from-[#0F62FE]/10 via-[#8B5CF6]/8 to-transparent backdrop-blur-[2px] animate-float-slow opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0F62FE]/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#8B5CF6]/30 animate-pulse"></div>
        </div>
        <div className="absolute top-1 right-3 w-3 h-3 rounded-full bg-[#6366F1]/30"></div>
      </div>

      {/* CELL C: GOLDEN AMBER ANTIBODY (Middle Left) */}
      <div className="absolute top-1/2 left-[3%] md:left-[6%] w-24 h-24 md:w-36 md:h-36 rounded-full border border-[#F59E0B]/20 bg-gradient-to-bl from-[#F59E0B]/10 via-[#D97706]/5 to-transparent backdrop-blur-[2px] animate-reverse-spin-slow opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#F59E0B]/20"></div>
        <div className="absolute -bottom-1 right-1/3 w-3 h-3 rounded-full bg-[#F59E0B]/30"></div>
      </div>

      {/* CELL D: ROSE MAGENTA CELL (Bottom Right) */}
      <div className="absolute bottom-1/4 right-[8%] md:right-[12%] w-24 h-24 md:w-36 md:h-36 rounded-full border border-[#F43F5E]/20 bg-gradient-to-tl from-[#F43F5E]/10 via-[#EC4899]/8 to-transparent backdrop-blur-[2px] animate-spin-slow opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#F43F5E]/20"></div>
      </div>

      {/* CELL E: TURQUOISE SPHERE (Bottom Left) */}
      <div className="absolute bottom-12 left-[12%] md:left-[18%] w-20 h-20 md:w-28 md:h-28 rounded-full border border-[#06B6D4]/20 bg-gradient-to-r from-[#06B6D4]/10 via-[#3B82F6]/5 to-transparent backdrop-blur-[2px] animate-float-slow opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#06B6D4]/20"></div>
      </div>

      {/* 3. SOFT FLOATING PARTICLES */}
      <div className="absolute top-12 left-1/4 w-2 h-2 rounded-full bg-[#10B981]/30 animate-bounce-slow"></div>
      <div className="absolute top-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-[#0F62FE]/30 animate-bounce-medium"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#F59E0B]/30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/2 w-2 h-2 rounded-full bg-[#8B5CF6]/30 animate-pulse"></div>

      {/* 4. SUBTLE BACKGROUND GRID */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `radial-gradient(#0F62FE 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      ></div>
    </div>
  );
};
