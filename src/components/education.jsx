import React from "react";

const educationData = [
  {
    degree: "Bachelor of Computer System and Information Technology",
    institution: "Pokhara University",
    duration: "2024 – present",
    location: "Kathmandu, Nepal",
    type: "education",
  },
];

const certificationData = [
  //   {
  //     title: "Full Stack Web Development",
  //     provider: "Coursera",
  //     issued: "May 2023",
  //     link: "https://www.coursera.org/certificate/fullstack",
  //     type: "certification",
  //   },
  //   {
  //     title: "React Developer",
  //     provider: "Udemy",
  //     issued: "March 2023",
  //     link: "https://www.udemy.com/certificate/react",
  //     type: "certification",
  //   },
];

const EducationCertifications = () => {
  return (
    <section id="education" className="h-min bg-purple-200 px-10 py-10 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-purple-900 mb-12">
          Education & Certifications
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Cards */}
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-purple-900">
                {edu.degree}
              </h3>
              <p className="text-purple-700 font-medium mt-1">
                {edu.institution}
              </p>
              <p className="text-sm text-purple-600 mt-1">
                {edu.duration} | {edu.location}
              </p>
            </div>
          ))}

          {/* Certification Cards */}
          {certificationData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-purple-900">
                  {cert.title}
                </h3>
                <p className="text-purple-700 font-medium mt-1">
                  {cert.provider}
                </p>
                <p className="text-sm text-purple-600 mt-1">
                  Issued: {cert.issued}
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
