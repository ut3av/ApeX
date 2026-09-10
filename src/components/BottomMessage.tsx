import React from 'react';

export const BottomMessage: React.FC = () => {
  return (
    <section className="w-full max-w-xl mx-auto px-4 mt-16 mb-8 text-center z-10 relative">
      <div className="py-6 px-4">
        <p className="text-base sm:text-lg font-medium text-silver-200 tracking-tight mb-1.5">
          You don't have to figure it out alone.
        </p>
        <p className="text-xs sm:text-sm text-silver-500 font-normal">
          Connect with people who are building too.
        </p>
      </div>
    </section>
  );
};
