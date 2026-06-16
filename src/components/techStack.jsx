import React from "react";

const techStack = [
  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TanStack Query", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },

  // Database
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },

  // Dev Tools & Others
  { name: "Git", category: "Dev Tools" },
  { name: "Docker", category: "Dev Tools" },
  { name: "JWT", category: "Dev Tools" },

  // Deployment / Cloud
  { name: "Vercel", category: "Deployment" },
  { name: "Netlify", category: "Deployment" },
  { name: "AWS", category: "Deployment" },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-neon-cyan font-mono tracking-widest uppercase mb-4">Toolkit</h3>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-16">
          Mastered <span className="text-neon-purple">Technologies</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="glass px-6 py-3 rounded-xl border border-white/5 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all duration-300 group cursor-default"
            >
              <span className="text-gray-400 group-hover:text-white font-mono text-sm tracking-wider transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
