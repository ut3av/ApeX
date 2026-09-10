import React, { useEffect, useState } from 'react';

export const AmbientBackground: React.FC = () => {
  const [mouseCoord, setMouseCoord] = useState({ x: -500, y: -500 });
  const [smoothCoord, setSmoothCoord] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMouseCoord({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth lerp animation for mouse tracking spotlight
  useEffect(() => {
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setSmoothCoord((prev) => ({
        x: lerp(prev.x, mouseCoord.x, 0.08),
        y: lerp(prev.y, mouseCoord.y, 0.08),
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mouseCoord]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080a] via-[#0b0b0e] to-[#0d0d12]" />

      {/* Dynamic Cursor-Tracking Ambient Spotlight */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-700 opacity-25 blur-[100px]"
        style={{
          transform: `translate(${smoothCoord.x - 250}px, ${smoothCoord.y - 250}px)`,
          background: 'radial-gradient(circle at center, rgba(220, 230, 255, 0.15), rgba(140, 160, 220, 0.04) 50%, transparent 80%)',
        }}
      />

      {/* Top subtle radial glow behind hero/emblem */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[550px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.14), rgba(160, 160, 180, 0.04) 50%, transparent 80%)',
        }}
      />

      {/* Center ambient glow behind glass card */}
      <div 
        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[600px] h-[450px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle at center, rgba(200, 210, 230, 0.1), rgba(120, 130, 160, 0.02) 60%, transparent 85%)',
        }}
      />

      {/* Very faint architectural geometric lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ambient-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#ffffff" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ambient-grid)" />
        </svg>
      </div>

      {/* Subtle bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08080a] to-transparent opacity-80" />
    </div>
  );
};
