import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-[60vh] flex items-center px-8 md:px-24 py-32 relative">
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-8 block font-mono">Profile</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter leading-tight">
          Engineering scalable solutions with <br/>
          <span className="text-gray-500">minimal design discipline.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            I am a full stack developer focused on building high-performance web applications. 
            My approach combines technical rigor with a commitment to clean, structured UI 
            that prioritizes clarity and user experience above all else.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            I specialize in React, Node.js, and modern cloud architectures. I believe that 
            software should be as elegant as it is functional, and I strive to achieve 
            this balance in every project I undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
