import React from "react";

const techStack = [
  // Frontend
  { name: "React.js", color: "bg-blue-500", category: "Frontend" },
  { name: "Next.js", color: "bg-blue-800", category: "Frontend" },
  { name: "Tailwind CSS", color: "bg-teal-400", category: "Frontend" },
  { name: "HTML5", color: "bg-orange-500", category: "Frontend" },
  { name: "CSS3", color: "bg-blue-400", category: "Frontend" },
  { name: "JavaScript", color: "bg-yellow-400", category: "Frontend" },
  {
    name: "React Query / TanStack",
    color: "bg-purple-500",
    category: "Frontend",
  },

  // Backend
  { name: "Node.js", color: "bg-green-600", category: "Backend" },
  { name: "Express.js", color: "bg-gray-700", category: "Backend" },
  { name: "Laravel", color: "bg-red-500", category: "Backend" },
  { name: "PHP", color: "bg-violet-500", category: "Backend" },

  // Database
  { name: "MongoDB", color: "bg-green-800", category: "Database" },
  { name: "MySQL", color: "bg-blue-600", category: "Database" },
  { name: "PostgreSQL", color: "bg-blue-800", category: "Database" },

  // Dev Tools & Others
  { name: "Git", color: "bg-red-600", category: "Dev Tools" },
  { name: "VS Code", color: "bg-blue-500", category: "Dev Tools" },
  { name: "Postman", color: "bg-orange-500", category: "Dev Tools" },
  { name: "Docker", color: "bg-blue-400", category: "Dev Tools" },
  { name: "JWT", color: "bg-purple-700", category: "Dev Tools" },

  // Deployment / Cloud
  { name: "Vercel", color: "bg-black text-white", category: "Deployment" },
  { name: "Netlify", color: "bg-teal-500", category: "Deployment" },
  { name: "AWS", color: "bg-orange-600", category: "Deployment" },
];

const TechStack = () => {
  return (
    <section id="techstack" className="min-h-screen bg-purple-100 px-10 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-purple-900 mb-12">Tech Stack</h2>

        {/* Grid of Tech Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium text-white ${tech.color} transition transform hover:scale-105`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
