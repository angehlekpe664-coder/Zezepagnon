import React from 'react';

export const CellularBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. VIBRANT MULTI-COLOR AMBIENT GLOW ORBS */}
      <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] bg-gradient-to-br from-[#0F62FE]/25 via-[#6366F1]/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 -right-24 w-[38rem] h-[38rem] bg-gradient-to-bl from-[#10B981]/25 via-[#059669]/15 to-transparent rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="absolute top-2/3 -left-20 w-[32rem] h-[32rem] bg-gradient-to-tr from-[#F59E0B]/22 via-[#D97706]/15 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-28 right-1/4 w-[34rem] h-[34rem] bg-gradient-to-tl from-[#F43F5E]/22 via-[#8B5CF6]/15 to-transparent rounded-full blur-3xl animate-pulse-medium"></div>

      {/* 2. REAL VIBRANT 3D CELLULAR STRUCTURES FLOATING IN BACKGROUND */}

      {/* CELL A: EMERALD / CYAN IMMUNO-CELL (Top Left) */}
      <div className="absolute top-20 left-[4%] md:left-[7%] w-44 h-44 md:w-64 md:h-64 rounded-full border-2 border-[#10B981]/40 bg-gradient-to-br from-[#10B981]/20 via-[#06B6D4]/15 to-transparent backdrop-blur-[3px] animate-spin-slow shadow-[0_0_60px_rgba(16,185,129,0.25)]">
        {/* Cell Nucleus */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-[#10B981] to-[#059669] opacity-60 flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 rounded-full bg-[#06B6D4] opacity-90 animate-ping"></div>
        </div>
        {/* Receptors around membrane */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#10B981] shadow-lg shadow-[#10B981]/60"></div>
        <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-[#06B6D4] shadow-lg shadow-[#06B6D4]/60"></div>
        <div className="absolute top-1/3 -left-3 w-5 h-5 rounded-full bg-[#F59E0B] shadow-lg shadow-[#F59E0B]/60"></div>
        {/* Double Helix Orbit Ring */}
        <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#10B981]/50 animate-reverse-spin-slow"></div>
      </div>

      {/* CELL B: ELECTRIC BLUE / VIOLET CELL (Top Right) */}
      <div className="absolute top-1/3 right-[3%] md:right-[6%] w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-[#0F62FE]/40 bg-gradient-to-tr from-[#0F62FE]/25 via-[#8B5CF6]/20 to-transparent backdrop-blur-[3px] animate-float-slow shadow-[0_0_60px_rgba(15,98,254,0.25)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#0F62FE] to-[#8B5CF6] opacity-60 flex items-center justify-center shadow-lg">
          <div className="w-7 h-7 rounded-full bg-white opacity-80 animate-pulse"></div>
        </div>
        <div className="absolute top-2 right-4 w-6 h-6 rounded-full bg-[#6366F1] shadow-md shadow-[#6366F1]/60"></div>
        <div className="absolute bottom-2 left-6 w-5 h-5 rounded-full bg-[#38BDF8] shadow-md"></div>
        <div className="absolute inset-3 rounded-full border border-dashed border-[#6366F1]/40 animate-spin-slow"></div>
      </div>

      {/* CELL C: GOLDEN AMBER ANTIBODY (Middle Left) */}
      <div className="absolute top-1/2 left-[2%] md:left-[5%] w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-[#F59E0B]/45 bg-gradient-to-bl from-[#F59E0B]/25 via-[#D97706]/15 to-transparent backdrop-blur-[3px] animate-reverse-spin-slow shadow-[0_0_50px_rgba(245,158,11,0.25)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444] opacity-60 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-white opacity-70 animate-ping"></div>
        </div>
        <div className="absolute -bottom-2 right-1/3 w-5 h-5 rounded-full bg-[#F59E0B] shadow-md"></div>
        <div className="absolute top-3 left-2 w-5 h-5 rounded-full bg-[#10B981]"></div>
      </div>

      {/* CELL D: ROSE MAGENTA BIO-FUSION CELL (Bottom Right) */}
      <div className="absolute bottom-1/4 right-[6%] md:right-[10%] w-36 h-36 md:w-52 md:h-52 rounded-full border-2 border-[#F43F5E]/40 bg-gradient-to-tl from-[#F43F5E]/25 via-[#EC4899]/20 to-transparent backdrop-blur-[3px] animate-spin-slow shadow-[0_0_55px_rgba(244,63,94,0.25)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-22 md:h-22 rounded-full bg-gradient-to-tr from-[#F43F5E] to-[#8B5CF6] opacity-60 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-white opacity-85 animate-ping"></div>
        </div>
        <div className="absolute top-1 left-1/2 w-5 h-5 rounded-full bg-[#F43F5E] shadow-md"></div>
        <div className="absolute bottom-3 left-4 w-5 h-5 rounded-full bg-[#06B6D4] shadow-md"></div>
      </div>

      {/* CELL E: TURQUOISE OXYGEN SPHERE (Bottom Left) */}
      <div className="absolute bottom-12 left-[10%] md:left-[16%] w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-[#06B6D4]/40 bg-gradient-to-r from-[#06B6D4]/20 via-[#3B82F6]/15 to-transparent backdrop-blur-[3px] animate-float-slow shadow-[0_0_40px_rgba(6,182,212,0.2)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#06B6D4] opacity-60 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-white opacity-80 animate-pulse"></div>
        </div>
      </div>

      {/* 3. VIBRANT MULTI-COLOR FLOATING PARTICLES STREAM */}
      <div className="absolute top-16 left-1/4 w-4 h-4 rounded-full bg-[#10B981] shadow-lg shadow-[#10B981] animate-bounce-slow"></div>
      <div className="absolute top-1/4 right-1/3 w-4.5 h-4.5 rounded-full bg-[#0F62FE] shadow-lg shadow-[#0F62FE] animate-bounce-medium"></div>
      <div className="absolute top-1/2 right-1/4 w-3.5 h-3.5 rounded-full bg-[#F59E0B] shadow-lg shadow-[#F59E0B] animate-pulse"></div>
      <div className="absolute top-2/3 left-1/3 w-4 h-4 rounded-full bg-[#F43F5E] shadow-lg shadow-[#F43F5E] animate-bounce-slow"></div>
      <div className="absolute bottom-1/3 right-1/2 w-4 h-4 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6] animate-pulse"></div>
      <div className="absolute bottom-24 right-1/3 w-3.5 h-3.5 rounded-full bg-[#06B6D4] shadow-lg shadow-[#06B6D4] animate-bounce-medium"></div>

      {/* 4. SUBTLE BACKGROUND RETICLE GRID */}
      <div 
        className="absolute inset-0 opacity-[0.025]" 
        style={{
          backgroundImage: `radial-gradient(#0F62FE 1.2px, transparent 1.2px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>
    </div>
  );
};
