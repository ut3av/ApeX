import React from 'react';
import { COMING_SOON_ITEMS } from '../config/socials';
import { Compass, BookOpen, Layers, Sparkles } from 'lucide-react';

export const ComingSoonSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'roadmaps':
        return <Compass className="w-4 h-4 text-silver-400" />;
      case 'resources':
        return <BookOpen className="w-4 h-4 text-silver-400" />;
      case 'projects':
        return <Layers className="w-4 h-4 text-silver-400" />;
      case 'opportunities':
        return <Sparkles className="w-4 h-4 text-silver-400" />;
      default:
        return null;
    }
  };

  return (
    <section 
      className="w-full max-w-xl mx-auto px-4 mt-12 z-10 relative"
      aria-label="Upcoming Community Initiatives"
    >
      {/* Section Header */}
      <div className="mb-5 text-left px-1">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-silver-200">
            More is coming.
          </h3>
          <span className="text-[10px] font-semibold tracking-wider text-silver-400/90 px-2 py-0.5 rounded-full liquid-glass-badge uppercase">
            Coming Soon
          </span>
        </div>
        <p className="text-xs sm:text-sm text-silver-500 font-normal">
          ApeX is just getting started.
        </p>
      </div>

      {/* Grid of 4 Preview Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {COMING_SOON_ITEMS.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl liquid-glass-preview-card text-left select-none relative group overflow-hidden cursor-default"
          >
            {/* Top row with icon & subtle micro-dot */}
            <div className="flex items-center justify-between mb-2.5">
              <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                {getIcon(item.id)}
              </div>
              <span className="text-[9px] font-mono tracking-wider text-silver-500/80 uppercase">
                Preview
              </span>
            </div>

            {/* Title & Description */}
            <h4 className="text-sm font-medium text-silver-200 mb-1 tracking-tight">
              {item.title}
            </h4>
            <p className="text-xs text-silver-500 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
