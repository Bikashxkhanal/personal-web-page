import { useEffect } from "react";
import About from "./components/about";
import EducationCertifications from "./components/education";
import HireMe from "./components/hireme";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Hero from "./components/Hero";

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".section-reveal");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <div className="px-6 md:px-0 space-y-40 pb-40">
        <div className="section-reveal">
          <About />
        </div>
        <div className="section-reveal">
          <Projects />
        </div>
        <div className="section-reveal">
          <EducationCertifications />
        </div>
        <div className="section-reveal">
          <HireMe />
        </div>
      </div>
    </div>
  );
}

export default App;
