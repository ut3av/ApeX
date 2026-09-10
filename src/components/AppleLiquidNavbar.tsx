import React, { useState, useEffect } from 'react';
import { Home, Users, Sparkles } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    targetId: 'hero-section',
  },
  {
    id: 'connect',
    label: 'Connect',
    icon: Users,
    targetId: 'profiles-section',
  },
  {
    id: 'explore',
    label: 'Explore',
    icon: Sparkles,
    targetId: 'coming-soon-section',
  },
];

export const AppleLiquidNavbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (targetId: string, tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Automatically update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const profilesEl = document.getElementById('profiles-section');
      const exploreEl = document.getElementById('coming-soon-section');

      if (exploreEl && scrollY >= exploreEl.offsetTop - 300) {
        setActiveTab('explore');
      } else if (profilesEl && scrollY >= profilesEl.offsetTop - 300) {
        setActiveTab('connect');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      aria-label="Bottom Navigation Dock"
      className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 select-none pointer-events-auto"
    >
      {/* Outer Floating Liquid Glass Dock */}
      <div className="apple-liquid-dock p-1.5 rounded-full flex items-center gap-1 shadow-2xl">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.targetId, item.id)}
              className={`relative flex flex-col items-center justify-center transition-all duration-300 rounded-full px-5 py-2.5 sm:px-6 sm:py-2.5 focus:outline-none ${
                isActive 
                  ? 'apple-liquid-active-pill text-white' 
                  : 'text-silver-400 hover:text-silver-200'
              }`}
            >
              {/* Icon */}
              <Icon 
                className={`w-4 h-4 mb-0.5 transition-transform duration-300 ${
                  isActive ? 'scale-110 text-white' : 'text-silver-400'
                }`} 
              />

              {/* Label */}
              <span className={`text-[11px] font-medium tracking-tight transition-colors ${
                isActive ? 'text-white font-semibold' : 'text-silver-400'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
