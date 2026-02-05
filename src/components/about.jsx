import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-purple-200 flex items-center px-6  md:px-30 py-20 md:py-10"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-center gap-12">
        {/* RIGHT IMAGE (on mobile: top, on desktop: right) */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 order-1 md:order-2">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-700">
            <img
              src="/profile.jpeg"
              alt="Bikash Khanal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* LEFT CONTENT (on mobile: below image) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl font-bold text-purple-900">Bikash Khanal</h1>

          <h2 className="text-2xl font-semibold text-purple-700 mt-2">
            Full Stack Web Developer
          </h2>

          <p className="mt-6 text-purple-800 max-w-lg leading-relaxed">
            I am a passionate full stack developer who enjoys building scalable,
            user-friendly web applications using modern frontend and backend
            technologies. I love clean code, thoughtful UI, and solving real
            problems through software.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bikash-khanal-51b84a27b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-600 border border-purple-900 hover:bg-purple-900 transition"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-5 h-5 invert"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Bikashxkhanal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-600 border border-purple-900 hover:bg-purple-900 transition"
            >
              <img src="/github.png" alt="GitHub" className="w-5 h-5 invert" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_bikash_k_0/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-600 border border-purple-900 hover:bg-purple-900 transition"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-5 h-5 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
