import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "projects", "education", "hireme"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "hireme", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500 px-8 md:px-16 py-6 ${scrolled ? 'navbar-glass py-4' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Minimal Signature Logo */}
        <a href="#hero" className="text-xl font-bold tracking-tight text-white">
          BK
        </a>

        {/* Nav Links */}
        <ul className="flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                className={`text-[11px] uppercase tracking-[0.2em] transition-all ${
                  activeSection === item.id ? "text-white font-black" : "text-gray-500 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
