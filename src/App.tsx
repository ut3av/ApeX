import React from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainGlassCard } from './components/MainGlassCard';
import { ComingSoonSection } from './components/ComingSoonSection';
import { BottomMessage } from './components/BottomMessage';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#08080a] text-white flex flex-col justify-between selection:bg-white/20 selection:text-white">
      {/* Subtle Apple-inspired ambient lighting & geometry */}
      <AmbientBackground />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center w-full z-10">
        {/* Minimal Navigation & Status Bar */}
        <Navbar />

        {/* Centered Hero */}
        <Hero />

        {/* Primary Interaction Liquid Glass Card */}
        <MainGlassCard />

        {/* Muted Preview Initiatives */}
        <ComingSoonSection />

        {/* Closing Philosophy */}
        <BottomMessage />
      </div>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
