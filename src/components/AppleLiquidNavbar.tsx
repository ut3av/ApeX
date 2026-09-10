import React, { useState, useEffect, useRef } from 'react';
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
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [isPressing, setIsPressing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Recalculate position of the sliding liquid bubble
  useEffect(() => {
    const activeButton = buttonRefs.current[activeTab];
    const container = containerRef.current;
    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      setPillStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [activeTab]);

  const scrollToSection = (targetId: string, tabId: string) => {
    setActiveTab(tabId);
    setIsPressing(true);
    setTimeout(() => setIsPressing(false), 300);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Live dynamic synchronization with page scroll
  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      cancelAnimationFrame(timeoutId);
      timeoutId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const profilesEl = document.getElementById('profiles-section');
        const exploreEl = document.getElementById('coming-soon-section');

        if (exploreEl && scrollY >= exploreEl.offsetTop - 280) {
          setActiveTab('explore');
        } else if (profilesEl && scrollY >= profilesEl.offsetTop - 280) {
          setActiveTab('connect');
        } else {
          setActiveTab('home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(timeoutId);
    };
  }, []);

  return (
    <nav 
      aria-label="Apple Liquid Navigation Dock"
      className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 select-none pointer-events-auto"
    >
      {/* Outer Floating Liquid Glass Dock */}
      <div 
        ref={containerRef}
        className="apple-liquid-dock relative p-1.5 rounded-full flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
      >
        {/* Dynamic Sliding Liquid Glass Bubble with Spring Viscosity */}
        <div
          className={`absolute top-1.5 bottom-1.5 rounded-full pointer-events-none transition-all duration-500 apple-liquid-active-pill ${
            isPressing ? 'scale-95' : 'scale-100'
          }`}
          style={{
            transform: `translateX(${pillStyle.left}px)`,
            width: `${pillStyle.width}px`,
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            left: 0,
          }}
        >
          {/* Internal Liquid Refraction Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/10 via-white/20 to-white/40 opacity-75 blur-[1px]" />
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/60 blur-[0.5px]" />
        </div>

        {/* Tab Buttons */}
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              ref={(el) => { buttonRefs.current[item.id] = el; }}
              type="button"
              onClick={() => scrollToSection(item.targetId, item.id)}
              className="relative z-10 flex flex-col items-center justify-center transition-all duration-300 rounded-full px-5 py-2.5 sm:px-6 sm:py-2.5 focus:outline-none"
            >
              {/* Icon */}
              <Icon 
                className={`w-4 h-4 mb-0.5 transition-all duration-300 ${
                  isActive ? 'scale-110 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]' : 'text-silver-400 hover:text-silver-200'
                }`} 
              />

              {/* Label */}
              <span className={`text-[11px] transition-all duration-300 ${
                isActive ? 'text-white font-bold drop-shadow-sm' : 'text-silver-400 font-medium'
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
