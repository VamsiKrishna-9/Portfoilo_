import React from 'react';

export const TechnicalGridBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden technical-grid-bg select-none"
      aria-hidden="true"
    >
      {/* Decorative Technical Coordinate & System Labels along edges - subtle & unobtrusive */}
      <div className="absolute top-3 left-4 text-[10px] font-mono text-[#625E58]/25 dark:text-[#9E9991]/20 tracking-widest hidden sm:block">
        SYS.01 // GRID-ALIGN [24/120px]
      </div>
      <div className="absolute top-3 right-4 text-[10px] font-mono text-[#625E58]/25 dark:text-[#9E9991]/20 tracking-widest hidden sm:block">
        COORD: 16.30°N · 80.44°E // IND
      </div>
      <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[#625E58]/25 dark:text-[#9E9991]/20 tracking-widest hidden sm:block">
        + STATUS // ACTIVE_PORTFOLIO
      </div>
      <div className="absolute bottom-3 right-4 text-[10px] font-mono text-[#625E58]/25 dark:text-[#9E9991]/20 tracking-widest hidden sm:block">
        LATENT_SPACE: STABLE // 2026
      </div>

      {/* Engineering Crosshair Markers (+) - softened */}
      <div className="absolute top-[120px] left-[120px] text-[#E17A43]/18 font-mono text-sm leading-none font-bold">
        +
      </div>
      <div className="absolute top-[120px] right-[120px] text-[#625E58]/15 dark:text-[#9E9991]/12 font-mono text-sm leading-none">
        +
      </div>
      <div className="absolute top-[360px] left-[24px] text-[#625E58]/15 dark:text-[#9E9991]/12 font-mono text-sm leading-none">
        +
      </div>
      <div className="absolute top-[600px] right-[48px] text-[#E17A43]/15 font-mono text-sm leading-none">
        +
      </div>
      <div className="absolute bottom-[240px] left-[120px] text-[#625E58]/15 dark:text-[#9E9991]/12 font-mono text-sm leading-none">
        +
      </div>
      <div className="absolute bottom-[120px] right-[120px] text-[#E17A43]/18 font-mono text-sm leading-none font-bold">
        +
      </div>

      {/* Subtle dashed technical circles - soft and ambient */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-dashed border-[#E8E2D8] dark:border-[#2A2723] opacity-25 animate-[spin_120s_linear_infinite]" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-dashed border-[#E17A43]/10 opacity-20 animate-[spin_90s_linear_infinite_reverse]" />
      
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full border border-dashed border-[#E8E2D8] dark:border-[#2A2723] opacity-20 animate-[spin_160s_linear_infinite]" />
      <div className="absolute -bottom-40 right-1/4 w-80 h-80 rounded-full border border-dashed border-[#E8E2D8] dark:border-[#2A2723] opacity-25" />

      {/* Subtle corner bracket ticks */}
      <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[#625E58]/15 dark:border-[#9E9991]/15" />
      <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[#625E58]/15 dark:border-[#9E9991]/15" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[#625E58]/15 dark:border-[#9E9991]/15" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[#625E58]/15 dark:border-[#9E9991]/15" />
    </div>
  );
};
