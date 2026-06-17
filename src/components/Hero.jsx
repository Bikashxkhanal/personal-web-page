import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [phase, setPhase] = useState('unfolding'); // unfolding -> active

  useEffect(() => {
    const timer = setTimeout(() => setPhase('active'), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] [perspective:2000px]">
      
      {/* 1. Cinematic Reveal Panels - Fixed for perfect coverage */}
      <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col">
        <div className="h-1/2 w-full bg-[#0a0a0a] border-b border-white/10 animate-unfold-top origin-bottom"></div>
        <div className="h-1/2 w-full bg-[#0a0a0a] border-t border-white/10 animate-unfold-bottom origin-top"></div>
      </div>

      {/* 2. Identity Reveal (Responsive Scale) */}
      <div className="relative z-20 text-center px-8 md:px-24 [transform-style:preserve-3d]">
        <div className="relative inline-block">
          <h1 className="text-4xl sm:text-8xl md:text-10xl lg:text-[10vw] font-black tracking-tighter text-white animate-text-grow whitespace-nowrap will-change-transform filter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            BIKASH <span className="text-gray-500">KHANAL</span>
          </h1>
          {/* Light sweep effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[sweep_3s_ease-in-out_infinite] pointer-events-none"></div>
        </div>
        
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
