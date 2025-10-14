'use client';

import { useEffect, useState } from 'react';
import ClientOnly from './ClientOnly';

function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (currentScroll / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background/20 z-50">
      <div
        className="h-full bg-gradient-primary transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default function ProgressIndicator() {
  return (
    <ClientOnly
      fallback={
        <div className="fixed top-0 left-0 w-full h-1 bg-background/20 z-50">
          <div
            className="h-full bg-gradient-primary transition-all duration-300 ease-out"
            style={{ width: '0%' }}
          />
        </div>
      }
    >
      <ProgressBar />
    </ClientOnly>
  );
}
