"use client";

import { useEffect } from 'react';
import { renderCanvas } from '@/components/ui/canvas';

export function GlobalCanvas() {
  useEffect(() => {
    // Initialize canvas after component mounts
    const timer = setTimeout(() => {
      renderCanvas();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <canvas
      className="pointer-events-none fixed inset-0 z-20 bg-transparent"
      id="canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 20,
        pointerEvents: 'none'
      }}
    />
  );
}