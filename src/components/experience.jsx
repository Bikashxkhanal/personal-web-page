import React from "react";

const experiences = [
  {
    company: "NextWaveAI",
    role: "Data Annotation Intern",
    duration: "Oct 2025 - Dec 2025",
    description: [
      "Developed responsive web applications using React, Next.js, and Tailwind.",
      "Implemented state management using Redux and React Query.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="h-min bg-purple-200 px-15 py-10">
      <div className="max-w-4xl ">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-purple-900 mb-12">Experience</h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-1  bg-gray-400 rounded-lg"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Circular checkpoint fully overlapping the line */}
                <div className="absolute left-7 top-2 w-3 h-3 rounded-full bg-gray-400 border-2 border-gray-400 "></div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-purple-900">
                  {exp.role} @ {exp.company}
                </h3>
                <p className="text-sm text-purple-700">{exp.duration}</p>
                <ul className="mt-2 text-purple-800 list-disc list-inside space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
