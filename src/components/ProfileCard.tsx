import React, { useRef, useState, MouseEvent } from 'react';
import { FounderProfile } from '../config/socials';
import { ArrowUpRight } from 'lucide-react';

interface ProfileCardProps {
  profile: FounderProfile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full rounded-[26px] liquid-glass-card p-5 sm:p-7 overflow-hidden transition-all duration-500 group"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`
            : 'none',
        }}
      />
      {/* Dynamic Specular Border Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.25), transparent 60%)`
            : 'none',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Profile Header: Photo + Info */}
      <div className="flex items-start gap-4 mb-5 relative z-10">
        {/* Photo with specular glass ring */}
        <div className="relative shrink-0">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-lg shadow-black/50">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              style={{ objectPosition: profile.photoPosition || 'center center' }}
              className="w-full h-full object-cover rounded-[14px] bg-[#151518] filter contrast-105"
              loading="eager"
            />
          </div>
          {/* Active status indicator */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#08080a] flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#08080a]" />
          </div>
        </div>

        {/* Identity info */}
        <div className="flex flex-col text-left flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] bg-gradient-to-r from-white via-[#f5f5f7] to-[#a1a1aa] bg-clip-text text-transparent truncate drop-shadow-sm">
              {profile.name}
            </h3>
            <span className="text-xs text-silver-500 font-mono tracking-tight">
              {profile.handle}
            </span>
          </div>

          <div className="inline-flex mt-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full apple-liquid-active-pill text-[11px] font-medium tracking-wide text-silver-200 border border-white/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profile.role}</span>
            </span>
          </div>

          <p className="text-xs text-silver-400 mt-2 font-normal leading-relaxed line-clamp-2">
            {profile.tagline}
          </p>
        </div>
      </div>

      {/* Modern & Premium Interactive Action Buttons */}
      <div className="flex flex-col gap-3 relative z-10">
        {/* LinkedIn */}
        {profile.links.linkedin && (
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect with ${profile.name} on LinkedIn`}
            className="group/btn relative flex items-center justify-between w-full px-5 py-3.5 rounded-2xl liquid-glass-btn shimmer-effect text-left select-none focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <div className="flex flex-col gap-0.5 z-10">
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-white tracking-[-0.01em] group-hover/btn:text-white transition-colors">
                  LinkedIn
                </span>
                <span className="text-[9.5px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.06] text-silver-400 border border-white/10 group-hover/btn:border-white/20">
                  Profile
                </span>
              </div>
              <span className="text-[12px] text-silver-400 group-hover/btn:text-silver-200 font-normal tracking-[0.005em] transition-colors">
                Connect professionally with {profile.name}
              </span>
            </div>
            
            <div className="flex items-center gap-2 z-10">
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 group-hover/btn:border-white/20 group-hover/btn:bg-white/[0.08] transition-all shadow-inner">
                <svg className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </div>
              <ArrowUpRight className="w-4 h-4 text-silver-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
            </div>
          </a>
        )}

        {/* GitHub */}
        {profile.links.github && (
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${profile.name}'s GitHub`}
            className="group/btn relative flex items-center justify-between w-full px-5 py-3.5 rounded-2xl liquid-glass-btn shimmer-effect text-left select-none focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <div className="flex flex-col gap-0.5 z-10">
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-white tracking-[-0.01em] group-hover/btn:text-white transition-colors">
                  GitHub
                </span>
                <span className="text-[9.5px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.06] text-silver-400 border border-white/10 group-hover/btn:border-white/20">
                  Repositories
                </span>
              </div>
              <span className="text-[12px] text-silver-400 group-hover/btn:text-silver-200 font-normal tracking-[0.005em] transition-colors">
                Explore code & active open-source projects
              </span>
            </div>
            
            <div className="flex items-center gap-2 z-10">
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 group-hover/btn:border-white/20 group-hover/btn:bg-white/[0.08] transition-all shadow-inner">
                <svg className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <ArrowUpRight className="w-4 h-4 text-silver-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
            </div>
          </a>
        )}

        {/* Discord */}
        {profile.links.discord && (
          <a
            href={profile.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Join ${profile.name} on Discord`}
            className="group/btn relative flex items-center justify-between w-full px-5 py-3.5 rounded-2xl liquid-glass-btn shimmer-effect text-left select-none focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <div className="flex flex-col gap-0.5 z-10">
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-white tracking-[-0.01em] group-hover/btn:text-white transition-colors">
                  Discord
                </span>
                <span className="text-[9.5px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.06] text-silver-400 border border-white/10 group-hover/btn:border-white/20">
                  Community
                </span>
              </div>
              <span className="text-[12px] text-silver-400 group-hover/btn:text-silver-200 font-normal tracking-[0.005em] transition-colors">
                Connect in real-time & collaborate
              </span>
            </div>
            
            <div className="flex items-center gap-2 z-10">
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 group-hover/btn:border-white/20 group-hover/btn:bg-white/[0.08] transition-all shadow-inner">
                <svg className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <ArrowUpRight className="w-4 h-4 text-silver-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};
