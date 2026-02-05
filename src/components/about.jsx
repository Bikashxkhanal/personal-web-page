import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-purple-200 flex items-center  px-30"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
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
                className="w-5 h-5 invert "
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

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-81 h-81 rounded-full overflow-hidden border-4 border-purple-700">
            <img
              src="/profile.jpeg"
              alt="Bikash Khanal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
