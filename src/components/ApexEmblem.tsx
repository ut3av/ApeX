import React from 'react';

interface ApexEmblemProps {
  className?: string;
  size?: number;
}

export const ApexEmblem: React.FC<ApexEmblemProps> = ({ className = '', size = 76 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-500 hover:scale-105 select-none group ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      role="img"
      aria-label="ApeX Official Emblem"
    >
      {/* Ambient glowing aura behind the emblem */}
      <div className="absolute inset-0 rounded-full bg-white/15 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
      
      {/* Subtle outer silver rim highlight */}
      <div className="absolute -inset-[2px] rounded-full bg-gradient-to-b from-white/30 via-white/5 to-white/10 opacity-70 blur-[0.5px] pointer-events-none" />

      {/* Official Cropped ApeX Emblem */}
      <img
        src="./logo.png"
        alt="ApeX Emblem"
        className="w-full h-full object-contain relative z-10 rounded-full drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] filter contrast-105 transition-transform duration-500"
        loading="eager"
      />
    </div>
  );
};
