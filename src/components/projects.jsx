import React, { useState } from "react";

const projects = [
  {
    title: "Video Streaming Platform",
    description: "A high-performance backend infrastructure for video streaming services.",
    longDescription: "This project focused on building a scalable backend capable of handling high-bandwidth video delivery. I implemented a robust microservices architecture that handles everything from secure user authentication to adaptive bitrate streaming logic.",
    features: [
      "JWT-based Secure Authentication & Authorization",
      "Chunked Video Upload with Progress Tracking",
      "Automated Video Transcoding Pipeline",
      "Scalable API with Redis Caching",
      "Dynamic Watch History and Recommendation Engine"
    ],
    problem: "Existing solutions struggled with latency and secure metadata synchronization during high concurrent usage. I solved this by implementing a decentralized caching strategy and optimized database indexing.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "AWS S3"],
  },
  {
    title: "Inventory Management System",
    description: "An enterprise-grade stock tracking and procurement management system.",
    longDescription: "A comprehensive solution designed for medium-to-large businesses to manage their global supply chain. The system provides real-time visibility into stock levels across multiple warehouses, with automated procurement triggers.",
    features: [
      "Real-time Multi-warehouse Stock Synchronization",
      "Predictive Analytics for Inventory Procurement",
      "Automated Supplier Communication & PO Generation",
      "Detailed Financial Reporting & Audit Logs",
      "Role-based Access Control for Staff"
    ],
    problem: "Manual inventory tracking led to a 15% discrepancy in annual stock audits. The automated system reduced this to less than 0.5% while decreasing manual data entry by 70%.",
    techStack: ["React", "Tailwind CSS", "MySQL", "PHP", "TanStack Query", "Redux"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen px-8 md:px-24 py-32 relative">
      <div className="max-w-7xl mx-auto mb-24">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4 block font-mono">Portfolio</span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">Featured <span className="text-gray-500">Works</span></h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="glass-card p-16 rounded-sm flex flex-col cursor-pointer group hover:bg-white transition-all duration-700 min-h-[400px]"
          >
            <div className="group-hover:opacity-0 transition-opacity duration-500 flex flex-col h-full">
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
                {project.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed font-light">
                {project.description}
              </p>
              <div className="mt-auto pt-12 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white">
                 Inspect Project
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
              </div>
            </div>
            {/* Hover Reveal Indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
               <span className="text-black text-[11px] uppercase tracking-[0.5em] font-black">Open Details</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] bg-[#0a0a0a] overflow-y-auto animate-fade-in">
          <div className="min-h-screen flex flex-col">
            {/* Modal Header */}
            <div className="px-8 md:px-24 py-12 flex items-center justify-between border-b border-white/5">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-mono">Case Study</span>
              <button 
                onClick={() => setSelectedProject(null)}
                className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white hover:text-gray-400 transition-colors"
              >
                Close Project
                <div className="w-12 h-px bg-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </button>
            </div>

            {/* Modal Content */}
            <div className="max-w-6xl mx-auto w-full px-8 md:px-24 py-24 flex-grow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                
                {/* Left Side: Title & About */}
                <div className="lg:col-span-7 space-y-16">
                  <div>
                    <h3 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase leading-none">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-400 text-xl leading-relaxed font-light italic">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-white font-black mb-8 border-l-2 border-white pl-6">Problem & Objective</h4>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">{selectedProject.problem}</p>
                  </div>
                </div>

                {/* Right Side: Features & Tech */}
                <div className="lg:col-span-5 space-y-16">
                   <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-black mb-8 uppercase">Key Features</h4>
                    <ul className="space-y-6">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="text-white font-light flex items-start gap-4 text-sm leading-relaxed">
                          <span className="text-gray-600 font-mono">0{i+1}</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-black mb-8 uppercase">Technical Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-2 border border-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold bg-white/5 hover:border-white/20 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 md:px-24 py-16 border-t border-white/5 text-center">
               <p className="text-[10px] uppercase tracking-[0.5em] text-gray-700 font-mono">End of Document</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
