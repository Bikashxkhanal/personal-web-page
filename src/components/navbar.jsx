import { useEffect, useState } from "react";
import { navItems, profile } from "../data/siteData";
import { useTheme } from "../context/ThemeContext";
import { IconMoon, IconSun } from "./icons";

const Navbar = ({ reveal = false }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const ids = navItems.map((n) => n.id);
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 280;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-[90] w-full px-6 py-5 transition-all duration-500 md:px-12 ${
        reveal
          ? "animate-fade-in [animation-delay:1.5s] [animation-fill-mode:both]"
          : "opacity-0"
      } ${scrolled ? "navbar-glass py-3" : "bg-transparent"}`}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-sm font-bold tracking-tight text-[var(--heading)]"
        >
          {profile.shortName}
          <span className="text-[var(--accent)]">_</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  activeSection === item.id
                    ? "text-[var(--accent)]"
                    : "text-[var(--text)] hover:text-[var(--heading)]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </li>
        </ul>

        {/* Mobile: links + toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ul className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--nav-glass)] px-2 py-1.5 backdrop-blur-xl">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block rounded-lg px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider ${
                    activeSection === item.id
                      ? "text-[var(--accent)]"
                      : "text-[var(--text)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--heading)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {theme === "dark" ? (
        <IconSun className="h-4 w-4" />
      ) : (
        <IconMoon className="h-4 w-4" />
      )}
    </button>
  );
}

export default Navbar;
