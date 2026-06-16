import React, { useState, useEffect } from 'react';

const STATIC_SHAPES = [...Array(15)].map((_, i) => ({
  id: i,
  type: i % 3 === 0 ? 'square' : i % 3 === 1 ? 'circle' : 'rect',
  size: Math.floor(Math.random() * 50 + 20) + 'px',
  delay: (Math.random() * 1).toFixed(2) + 's',
  rotation: Math.floor(Math.random() * 360) + 'deg',
  left: (Math.random() * 90 + 5).toFixed(2) + '%',
  duration: (Math.random() * 2 + 2).toFixed(2) + 's',
}));

const Hero = () => {
  const [phase, setPhase] = useState('unfolding'); // unfolding -> active

  useEffect(() => {
    const timer = setTimeout(() => setPhase('active'), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* 1. Page Unfold Panels (Reveal from center) */}
      <div className="absolute inset-0 z-[100] pointer-events-none">
        <div className="h-1/2 w-full bg-[#0a0a0a] border-b border-white/5 animate-unfold-top origin-bottom"></div>
        <div className="h-1/2 w-full bg-[#0a0a0a] border-t border-white/5 animate-unfold-bottom origin-top"></div>
      </div>

      {/* 2. Shape Flow Animation (Visible during and after unfold) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {STATIC_SHAPES.map((shape) => (
          <div
            key={shape.id}
            className={`absolute border border-white/10 bg-white/5 animate-shape-fall ${
              shape.type === 'circle' ? 'rounded-full' : ''
            }`}
            style={{
              width: shape.size,
              height: shape.type === 'rect' ? parseInt(shape.size) * 0.4 + 'px' : shape.size,
              left: shape.left,
              animationDelay: shape.delay,
              animationDuration: shape.duration,
              '--final-rotation': shape.rotation,
              top: '50%',
              marginTop: '-100vh',
            }}
          ></div>
        ))}
      </div>

      {/* 3. Identity Reveal (Scaling name during unfold) */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-5xl md:text-8xl lg:text-[10vw] font-black tracking-tighter text-white animate-text-grow whitespace-nowrap">
          BIKASH <span className="text-gray-500">KHANAL</span>
        </h1>
        
        <div className={`mt-10 transition-all duration-1000 delay-1000 ${
          phase === 'active' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-[11px] uppercase tracking-[0.6em] text-gray-500 mb-6 block font-mono">Full Stack Developer</span>
          <p className="max-w-md mx-auto text-gray-400 text-sm leading-relaxed tracking-wider font-light">
            I build modern, scalable, and interactive web applications with a focus on performance and minimal UI discipline.
          </p>
          
          <div className="mt-16">
            <a href="#about" className="inline-block">
               <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
