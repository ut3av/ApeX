import React from 'react';
import { Heart } from 'lucide-react';
import { COMMUNITY_INFO } from '../config/socials';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-xl mx-auto px-4 pb-14 text-center z-10 relative">
      <div className="pt-8 border-t border-white/[0.06] flex flex-col items-center gap-2">
        {/* Made with lot many lob message */}
        <p className="flex items-center justify-center gap-1.5 text-xs text-silver-300 font-medium tracking-tight">
          <span>Made with lot many lob from</span>
          <span className="font-semibold text-white">Ut3av</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block animate-pulse" />
        </p>

        {/* Community details & Copyright */}
        <div className="flex flex-col items-center gap-1 text-[11px] text-silver-500 mt-1">
          <span className="font-medium text-silver-400">
            {COMMUNITY_INFO.name} • {COMMUNITY_INFO.institution}
          </span>
          <span className="text-[10px] text-silver-600 font-mono">
            {COMMUNITY_INFO.building}
          </span>
          <span className="text-[10px] text-silver-600 font-mono mt-1">
            © {COMMUNITY_INFO.year} {COMMUNITY_INFO.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
