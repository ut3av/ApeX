import React, { useState } from 'react';
import { ProfileCard } from './ProfileCard';
import { PROFILES, COMMUNITY_INFO } from '../config/socials';
import { Users, ArrowUpRight } from 'lucide-react';

export const MainGlassCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'vansh' | 'utsav'>('all');

  const filteredProfiles = activeTab === 'all'
    ? PROFILES
    : PROFILES.filter((p) => p.id === activeTab);

  return (
    <section 
      className="w-full max-w-xl mx-auto px-4 z-10 relative animate-fade-up"
      aria-label="Core Profiles & Connection Channels"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-5">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Connect with us
          </h2>
          <span className="text-[11px] font-mono text-silver-400 px-2 py-0.5 rounded-full liquid-glass-badge">
            2 Profiles
          </span>
        </div>
        <p className="text-xs sm:text-sm text-silver-400 font-normal">
          Direct lines to the builders behind ApeX.
        </p>
      </div>

      {/* Apple-style Segmented Filter for Mobile & Desktop */}
      <div className="p-1 rounded-2xl liquid-glass-badge flex items-center justify-between mb-5 w-full">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-300 select-none flex items-center justify-center gap-1.5 ${
            activeTab === 'all'
              ? 'bg-white/15 text-white shadow-sm border border-white/20'
              : 'text-silver-400 hover:text-white'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Both (2)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('vansh')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-300 select-none ${
            activeTab === 'vansh'
              ? 'bg-white/15 text-white shadow-sm border border-white/20'
              : 'text-silver-400 hover:text-white'
          }`}
        >
          Vansh
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('utsav')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-300 select-none ${
            activeTab === 'utsav'
              ? 'bg-white/15 text-white shadow-sm border border-white/20'
              : 'text-silver-400 hover:text-white'
          }`}
        >
          Utsav
        </button>
      </div>

      {/* Stack of Profile Cards */}
      <div className="flex flex-col gap-5">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      {/* Community Server Quick Connect Banner */}
      <div className="mt-5 p-4 rounded-2xl liquid-glass-preview-card flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>
          <div className="text-left">
            <h4 className="text-xs font-semibold text-white">
              ApeX Community Hub
            </h4>
            <p className="text-[11px] text-silver-400">
              Join all LNCTU students on Discord
            </p>
          </div>
        </div>

        <a
          href={COMMUNITY_INFO.communityDiscord}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-medium text-white inline-flex items-center gap-1 transition-all active:scale-95"
        >
          <span>Join</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-silver-400" />
        </a>
      </div>
    </section>
  );
};
