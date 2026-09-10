import React from 'react';
import { ApexEmblem } from './ApexEmblem';
import { COMMUNITY_INFO } from '../config/socials';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero-section"
      className="flex flex-col items-center text-center pt-8 pb-7 px-4 max-w-xl mx-auto z-10 relative scroll-mt-20"
    >
      {/* Emblem with subtle entrance */}
      <div className="mb-5 animate-fade-in">
        <ApexEmblem size={76} />
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

      {/* Apple Liquid Location Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-liquid-dock text-xs text-silver-300 font-normal shadow-lg">
        <MapPin className="w-3.5 h-3.5 text-silver-400" />
        <span>{COMMUNITY_INFO.location}</span>
      </div>
    </section>
  );
};
