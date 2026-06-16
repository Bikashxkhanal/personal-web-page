import React from "react";

const educationData = [
  {
    degree: "Bachelor of Computer System and Information Technology",
    institution: "Pokhara University",
    duration: "2024 – present",
    location: "Kathmandu, Nepal",
  },
];

const EducationCertifications = () => {
  return (
    <section id="education" className="py-32 px-8 md:px-24 relative">
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-8 block font-mono">Credentials</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-20 tracking-tighter uppercase">Education</h2>

        <div className="space-y-24">
          {educationData.map((edu, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-white/10 pb-12 group-hover:border-white transition-colors">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-500 text-lg font-light">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono text-gray-500 block">{edu.duration}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
