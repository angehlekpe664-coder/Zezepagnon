import React from 'react';

export const CellularBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. VIBRANT MULTI-COLOR GRADIENT GLOW ORBS */}
      {/* Royal Sapphire Blue Glow */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-[#0F62FE]/25 via-[#6366F1]/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Bio Emerald Green Glow */}
      <div className="absolute top-1/4 -right-32 w-[34rem] h-[34rem] bg-gradient-to-bl from-[#10B981]/25 via-[#059669]/15 to-transparent rounded-full blur-3xl animate-pulse-medium"></div>
      
      {/* Golden Amber Sunburst Glow */}
      <div className="absolute top-2/3 -left-20 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#F59E0B]/20 via-[#D97706]/15 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Rose Coral Bio-Fusion Glow */}
      <div className="absolute -bottom-36 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-tl from-[#F43F5E]/20 via-[#8B5CF6]/15 to-transparent rounded-full blur-3xl animate-pulse-medium"></div>

      {/* 2. REAL MULTI-COLORED 3D CELLULAR STRUCTURES */}

      {/* CELL A: EMERALD / CYAN IMMUNO-CELL (Top Left) */}
      <div className="absolute top-16 left-[5%] md:left-[8%] w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-[#10B981]/30 bg-gradient-to-br from-[#10B981]/15 via-[#06B6D4]/10 to-transparent backdrop-blur-md animate-spin-slow shadow-[0_0_50px_rgba(16,185,129,0.2)]">
        {/* Cell Nucleus */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#10B981] to-[#059669] opacity-40 blur-xs flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#06B6D4] opacity-80 animate-ping"></div>
        </div>
        {/* Receptors around membrane */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#10B981] shadow-lg shadow-[#10B981]/50"></div>
        <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-[#06B6D4] shadow-lg shadow-[#06B6D4]/50"></div>
        <div className="absolute top-1/3 -left-3 w-4 h-4 rounded-full bg-[#F59E0B] shadow-lg shadow-[#F59E0B]/50"></div>
        {/* Orbit Ring */}
        <div className="absolute inset-4 rounded-full border border-dashed border-[#10B981]/40 animate-reverse-spin-slow"></div>
      </div>

      {/* CELL B: ELECTRIC BLUE / VIOLET SAPPHIRE CELL (Top Right) */}
      <div className="absolute top-1/3 right-[4%] md:right-[7%] w-36 h-36 md:w-52 md:h-52 rounded-full border-2 border-[#0F62FE]/30 bg-gradient-to-tr from-[#0F62FE]/20 via-[#8B5CF6]/15 to-transparent backdrop-blur-md animate-float-slow shadow-[0_0_50px_rgba(15,98,254,0.2)]">
        {/* Nucleus & Cytoplasm */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[#0F62FE] to-[#8B5CF6] opacity-50 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-white opacity-70 animate-pulse"></div>
        </div>
        {/* Membrane spikes */}
        <div className="absolute top-2 right-4 w-5 h-5 rounded-full bg-[#6366F1] shadow-md shadow-[#6366F1]/50"></div>
        <div className="absolute bottom-2 left-6 w-4 h-4 rounded-full bg-[#38BDF8]"></div>
      </div>

      {/* CELL C: GOLDEN AMBER ACTIVE ANTIBODY (Middle Left) */}
      <div className="absolute top-1/2 left-[3%] md:left-[6%] w-28 h-28 md:w-44 md:h-44 rounded-full border-2 border-[#F59E0B]/35 bg-gradient-to-bl from-[#F59E0B]/20 via-[#D97706]/10 to-transparent backdrop-blur-md animate-reverse-spin-slow shadow-[0_0_40px_rgba(245,158,11,0.2)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444] opacity-50"></div>
        <div className="absolute -bottom-2 right-1/3 w-4 h-4 rounded-full bg-[#F59E0B] shadow-md"></div>
        <div className="absolute top-3 left-2 w-5 h-5 rounded-full bg-[#10B981]"></div>
      </div>

      {/* CELL D: ROSE MAGENTA BIO-FUSION CELL (Bottom Right) */}
      <div className="absolute bottom-1/4 right-[8%] md:right-[12%] w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-[#F43F5E]/30 bg-gradient-to-tl from-[#F43F5E]/20 via-[#EC4899]/15 to-transparent backdrop-blur-md animate-spin-slow shadow-[0_0_45px_rgba(244,63,94,0.2)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-18 md:h-18 rounded-full bg-gradient-to-tr from-[#F43F5E] to-[#8B5CF6] opacity-40 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-white opacity-80 animate-ping"></div>
        </div>
        <div className="absolute top-1 left-1/2 w-4 h-4 rounded-full bg-[#F43F5E]"></div>
        <div className="absolute bottom-3 left-4 w-4 h-4 rounded-full bg-[#06B6D4]"></div>
      </div>

      {/* CELL E: TURQUOISE OXYGEN-CARRIER (Bottom Left) */}
      <div className="absolute bottom-12 left-[12%] md:left-[18%] w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-[#06B6D4]/30 bg-gradient-to-r from-[#06B6D4]/15 via-[#3B82F6]/10 to-transparent backdrop-blur-md animate-float-slow">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#06B6D4] opacity-50"></div>
      </div>

      {/* 3. MULTI-COLOR FLOATING MICRO-PARTICLES STREAM */}
      <div className="absolute top-12 left-1/4 w-3.5 h-3.5 rounded-full bg-[#10B981] shadow-lg shadow-[#10B981] animate-bounce-slow opacity-80"></div>
      <div className="absolute top-1/4 right-1/3 w-4 h-4 rounded-full bg-[#0F62FE] shadow-lg shadow-[#0F62FE] animate-bounce-medium opacity-80"></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-[#F59E0B] shadow-lg shadow-[#F59E0B] animate-pulse opacity-90"></div>
      <div className="absolute top-2/3 left-1/3 w-4 h-4 rounded-full bg-[#F43F5E] shadow-lg shadow-[#F43F5E] animate-bounce-slow opacity-80"></div>
      <div className="absolute bottom-1/3 right-1/2 w-3.5 h-3.5 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6] animate-pulse opacity-85"></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 rounded-full bg-[#06B6D4] shadow-lg shadow-[#06B6D4] animate-bounce-medium opacity-80"></div>

      {/* 4. HIGH-TECH BIOLOGICAL RETICLE GRID */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(#0F62FE 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px'
        }}
      ></div>
    </div>
  );
};
