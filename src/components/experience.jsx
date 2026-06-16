import React from "react";

const experiences = [
  {
    company: "NextWaveAI",
    role: "Data Annotation Intern",
    duration: "Oct 2025 - Dec 2025",
    description: [
      "Strong attention to detail ensuring data and application accuracy",
      "Improved collaboration and communication within technical teams",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-25 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h3 className="text-neon-cyan font-mono tracking-widest uppercase mb-2">History</h3>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Professional <span className="text-neon-purple">Journey</span></h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line with Gradient */}
          <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent opacity-30 rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-24 group">
                {/* Glow Point */}
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-[#050505] border-2 border-neon-cyan shadow-[0_0_10px_#00f3ff] z-10 group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Content Card */}
                <div className="glass-card p-8 rounded-2xl group-hover:border-neon-purple/50 transition-all duration-500">
                  <span className="text-xs font-mono text-neon-cyan uppercase tracking-[0.2em] mb-2 block">{exp.duration}</span>
                  <h3 className="text-2xl font-black text-white mb-2">
                    {exp.role} <span className="text-gray-500 font-normal">@</span> <span className="text-neon-purple">{exp.company}</span>
                  </h3>
                  
                  <ul className="mt-6 space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
