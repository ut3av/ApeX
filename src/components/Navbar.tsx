import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full max-w-xl mx-auto pt-6 px-4 flex items-center justify-between z-10 relative">
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold tracking-widest text-white uppercase">
          ApeX
        </span>
        <span className="text-[10px] text-silver-500 font-mono">
          / LNCTU
        </span>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-silver-400 font-medium">
        <span className="text-[10px] text-silver-500 font-mono">MCA Building</span>
      </div>
    </header>
  );
};
