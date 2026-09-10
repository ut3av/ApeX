import React from 'react';

interface ApexEmblemProps {
  className?: string;
  size?: number;
}

export const ApexEmblem: React.FC<ApexEmblemProps> = ({ className = '', size = 56 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-full emblem-glass-ring transition-transform duration-500 hover:scale-105 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      role="img"
      aria-label="ApeX Community Emblem"
    >
      {/* Specular rim light */}
      <div className="absolute inset-0 rounded-full border border-white/25 pointer-events-none" />
      <div className="absolute inset-[1px] rounded-full border border-white/10 pointer-events-none" />
      
      {/* Subtle top glare dot */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-white/30 blur-[1px] pointer-events-none" />

      {/* Geometric Apex Chevron / Vertex Monogram */}
      <svg 
        width={Math.round(size * 0.52)} 
        height={Math.round(size * 0.52)} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-white relative z-10"
      >
        {/* Sleek Apex Geometric Vertex */}
        <path 
          d="M16 5.5L26.5 24H21L16 14.5L11 24H5.5L16 5.5Z" 
          fill="url(#emblem-silver-grad)" 
          stroke="rgba(255, 255, 255, 0.4)" 
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        {/* Subtle internal cross beam */}
        <line 
          x1="10" 
          y1="19.5" 
          x2="22" 
          y2="19.5" 
          stroke="rgba(255, 255, 255, 0.5)" 
          strokeWidth="1.2" 
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="emblem-silver-grad" x1="16" y1="5.5" x2="16" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="0.6" stopColor="#E0E0E6" stopOpacity="0.85" />
            <stop offset="1" stopColor="#9C9CA4" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
