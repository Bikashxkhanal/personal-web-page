import React from "react";

const projects = [
  {
    title: "Video Streaming Platform",
    description:
      "A full-featured backend system for video streaming with authentication, watch history, and scalable APIs.",
    image: "/projects/video-streaming.png",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    repoUrl: "https://github.com/Bikashxkhanal/mern-project",
  },
  {
    title: "Currency Converter",
    description:
      "A React-based currency converter using custom hooks and real-time exchange rates.",
    image: "/projects/currency-converter.png",
    techStack: [
      "React",
      "Tailwindcss",
      "Mysql",
      "RestAPI",
      "PHP",
      "TanStack",
      "Redux",
    ],
    repoUrl: "https://github.com/Bikashxkhanal/Inventory-Management-System",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-purple-200 px-15">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-purple-900 mb-12">Projects</h2>

        {/* Projects Grid */}

        <div className="flex flex-wrap gap-8 justify-start">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[48%] lg:w-[30%] bg-purple-50 rounded-xl overflow-hidden border border-purple-200 hover:shadow-lg transition flex flex-col"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-purple-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-purple-800 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-6 flex">
                  <div className="ml-auto">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-sm font-medium rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-sm font-medium rounded-lg border border-purple-700 text-purple-700 hover:bg-purple-100 transition"
                      >
                        View Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
