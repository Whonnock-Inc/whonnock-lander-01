import React, { useEffect, useRef, useState } from "react";

const AmbientOrbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [isMounted, setIsMounted] = useState(false);

  // Orb configuration
  const orbs = [
    {
      size: 'w-32 h-32',
      color: 'bg-gradient-to-br from-orange-200/50 to-orange-300/30',
      blur: 'blur-xl',
      initialX: 15,
      initialY: 20,
      speed: 0.8,
      fadeSpeed: 0.02
    },
    {
      size: 'w-48 h-48',
      color: 'bg-gradient-to-br from-yellow-200/40 to-yellow-300/25',
      blur: 'blur-2xl',
      initialX: 70,
      initialY: 15,
      speed: 0.6,
      fadeSpeed: 0.025
    },
    {
      size: 'w-24 h-24',
      color: 'bg-gradient-to-br from-orange-100/60 to-orange-200/40',
      blur: 'blur-lg',
      initialX: 85,
      initialY: 45,
      speed: 1.2,
      fadeSpeed: 0.03
    },
    {
      size: 'w-40 h-40',
      color: 'bg-gradient-to-br from-white/30 to-orange-100/35',
      blur: 'blur-xl',
      initialX: 10,
      initialY: 70,
      speed: 0.9,
      fadeSpeed: 0.015
    },
    {
      size: 'w-36 h-36',
      color: 'bg-gradient-to-br from-yellow-100/45 to-orange-200/30',
      blur: 'blur-xl',
      initialX: 50,
      initialY: 85,
      speed: 0.7,
      fadeSpeed: 0.028
    },
    {
      size: 'w-28 h-28',
      color: 'bg-gradient-to-br from-orange-50/50 to-orange-200/35',
      blur: 'blur-lg',
      initialX: 25,
      initialY: 50,
      speed: 1.0,
      fadeSpeed: 0.022
    }
  ];

  useEffect(() => {
    console.log('AmbientOrbs mounting...');
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || e.touches.length === 0) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      mousePosition.current = {
        x: (touch.clientX - rect.left) / rect.width,
        y: (touch.clientY - rect.top) / rect.height
      };
    };

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      
      orbsRef.current.forEach((orb, index) => {
        if (!orb) return;
        
        const config = orbs[index];
        const baseX = config.initialX;
        const baseY = config.initialY;
        
        // Slow floating motion
        const floatX = Math.sin(time * config.speed + index) * 2;
        const floatY = Math.cos(time * config.speed * 0.8 + index) * 1.5;
        
        // Mouse influence (subtle)
        const mouseInfluenceX = (mousePosition.current.x - 0.5) * 10 * config.speed;
        const mouseInfluenceY = (mousePosition.current.y - 0.5) * 8 * config.speed;
        
        // Final position
        const x = baseX + floatX + mouseInfluenceX;
        const y = baseY + floatY + mouseInfluenceY;
        
        // Fade in/out effect
        const fadePhase = Math.sin(time * config.fadeSpeed + index * 2) * 0.3 + 0.7;
        
        // Size variation
        const sizeVariation = Math.sin(time * config.fadeSpeed * 1.5 + index) * 0.1 + 1;
        
        orb.style.transform = `translate(${x}vw, ${y}vh) scale(${sizeVariation})`;
        orb.style.opacity = `${fadePhase}`;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isMounted) {
      console.log('Starting animation...');
      animate();
      
      // Add event listeners
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [isMounted]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      {orbs.map((orb, index) => (
        <div
          key={index}
          ref={el => el && (orbsRef.current[index] = el)}
          className={`
            absolute rounded-full transition-opacity duration-1000 ease-in-out
            ${orb.size} ${orb.color} ${orb.blur}
          `}
          style={{
            transform: `translate(${orb.initialX}vw, ${orb.initialY}vh)`,
            opacity: 0,
            willChange: 'transform, opacity'
          }}
        />
      ))}
      
      {/* Test orb for debugging */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full opacity-80 z-50" />
      
      {/* Additional overlay orbs for depth */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-100/20 to-yellow-100/25 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-white/15 to-orange-50/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default AmbientOrbs;