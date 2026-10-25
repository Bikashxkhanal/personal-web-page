import { useCallback, useEffect, useState } from "react";
import About from "./components/about";
import BootLoader from "./components/BootLoader";
import EducationCertifications from "./components/education";
import HireMe from "./components/hireme";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
function App() {
  // reveal: curtain starts → hero name-grow + navbar 1.5s delay (original beats)
  const [revealed, setRevealed] = useState(false);

  const onReveal = useCallback(() => setRevealed(true), []);
  const onBootComplete = useCallback(() => {}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section-reveal");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <div className="page-atmosphere theme-transition relative min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
      <BootLoader onReveal={onReveal} onComplete={onBootComplete} />
      <Navbar reveal={revealed} />
      <Hero ready={revealed} />
      <div className="relative z-[2] space-y-8 pb-32 md:space-y-16">
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

      <footer className="relative z-[2] border-t border-[var(--border)] px-6 py-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text)]">
        © {new Date().getFullYear()} Bikash Khanal — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
