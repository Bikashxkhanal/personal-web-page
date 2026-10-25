import { useEffect, useState } from "react";
import { profile } from "../data/siteData";
import { IconGithub, IconLinkedin } from "./icons";
import MacTerminal from "./MacTerminal";

/**
 * Hero — 50/50 split on desktop.
 * Staggered entrance after boot/curtain (same delay feel as original subtitle).
 */
const Hero = ({ ready = false }) => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!ready) return;
    // Match original: phase flip ~100ms then content with ~1s delay feel
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, [ready]);

  return (
    <section
      id="hero"
      className="relative z-[2] min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <div className="relative [transform-style:preserve-3d]">
          <h1
            className={`font-black tracking-tighter leading-[0.9] text-[clamp(3.5rem,10vw,9rem)] text-[var(--heading)] ${
              ready ? "animate-text-grow" : "opacity-0"
            }`}
            style={{
              textShadow: "var(--glow-text)",
            }}
          >
            {profile.nameLines[0]}
            <br />
            {profile.nameLines[1]}
            <span
              className="cursor-blink ml-1 inline-block align-baseline text-[0.55em] text-[var(--accent)]"
              aria-hidden
            >
              _
            </span>
          </h1>

          {/* Soft sweep over name (original 3s loop) */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)]/15 to-transparent"
            style={{ animation: "sweep 3s ease-in-out infinite" }}
            aria-hidden
          />

          <div
            className={`relative z-10 mt-8 max-w-md transition-all duration-1000 delay-1000 ${
              entered
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-base leading-relaxed text-[var(--text)] md:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-[var(--border-strong)] bg-[var(--accent)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--bg)] transition hover:opacity-90"
                style={{ boxShadow: "var(--glow)" }}
              >
                View Projects
              </a>
              <a
                href={profile.cvUrl}
                className="inline-flex items-center gap-2 border border-[var(--border-strong)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--heading)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                download
              >
                Download CV
              </a>
              <div className="ml-1 flex items-center gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[var(--text)] transition hover:text-[var(--accent)]"
                >
                  <IconGithub className="h-5 w-5" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[var(--text)] transition hover:text-[var(--accent)]"
                >
                  <IconLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — MacBook terminal */}
        <div
          className={`transition-all duration-1000 delay-[1200ms] ${
            entered
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <MacTerminal active={ready && entered} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
