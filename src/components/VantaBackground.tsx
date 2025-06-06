import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

declare global {
  interface Window {
    VANTA: any;
  }
}

interface VantaBackgroundProps {
  effect?: 'net' | 'waves' | 'birds' | 'fog';
  children?: React.ReactNode;
  className?: string;
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ 
  effect = 'net', 
  children, 
  className = '' 
}) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load Vanta.js dynamically
    const loadVanta = async () => {
      if (!window.VANTA) {
        // Load Vanta.js
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
        script.onload = initVanta;
        document.head.appendChild(script);
      } else {
        initVanta();
      }
    };

    const initVanta = () => {
      if (vantaRef.current && window.VANTA) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x00d4ff,
          backgroundColor: 0x0f172a,
          points: 10.00,
          maxDistance: 20.00,
          spacing: 15.00
        });
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [effect]);

  return (
    <div ref={vantaRef} className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default VantaBackground;