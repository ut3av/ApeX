import React from 'react';
import { ApexEmblem } from './ApexEmblem';
import { COMMUNITY_INFO } from '../config/socials';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center pt-8 pb-7 px-4 max-w-xl mx-auto z-10 relative">
      {/* Emblem with subtle entrance */}
      <div className="mb-5 animate-fade-in">
        <ApexEmblem size={64} />
      </div>

      {/* Main ApeX Wordmark with subtle silver gradient on X */}
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-3 select-none flex items-center justify-center">
        <span>Ape</span>
        <span className="bg-gradient-to-br from-white via-silver-200 to-silver-500 bg-clip-text text-transparent ml-[0.5px]">
          X
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-base sm:text-lg font-medium text-silver-200 tracking-tight mb-2">
        {COMMUNITY_INFO.tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-silver-400 max-w-sm mx-auto leading-relaxed mb-4">
        {COMMUNITY_INFO.description}
      </p>

      {/* Location Indicator */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass-badge text-xs text-silver-400 font-normal">
        <MapPin className="w-3.5 h-3.5 text-silver-400/80" />
        <span>{COMMUNITY_INFO.location}</span>
      </div>
    </section>
  );
};
