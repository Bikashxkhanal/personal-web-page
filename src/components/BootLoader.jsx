import { useCallback, useEffect, useRef, useState } from "react";
import { bootLines } from "../data/siteData";

const SESSION_KEY = "portfolio-boot-seen";

/** Original curtain + name reveal timing preserved after boot text. */
const BOOT_MS = 900;
const GLITCH_MS = 150;
const CURTAIN_MS = 1500; // matches animate-unfold-* 1.5s

function shouldPlayBoot() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    if (sessionStorage.getItem(SESSION_KEY) === "1") return false;
  } catch {
    /* ignore */
  }
  return true;
}

/**
 * Opening sequence (≈3s total, same curtain beats as before):
 * 1) Boot lines + progress (~0.9s)
 * 2) Glitch flash (~0.15s)
 * 3) Curtain unfold 1.5s (cubic-bezier 0.85,0,0.15,1) → reveal page
 *    → onReveal fires when curtains start (name-grow sync)
 * Skippable; once per session; skipped under prefers-reduced-motion.
 */
const BootLoader = ({ onReveal, onComplete }) => {
  const [play] = useState(shouldPlayBoot);
  const [phase, setPhase] = useState(() => (shouldPlayBoot() ? "boot" : "done"));
  const [visibleLines, setVisibleLines] = useState(0);
  const revealedRef = useRef(false);

  const markSeen = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const fireReveal = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    onReveal?.();
  }, [onReveal]);

  const finish = useCallback(() => {
    setPhase("done");
    markSeen();
    fireReveal();
    onComplete?.();
  }, [fireReveal, onComplete]);

  const skip = useCallback(() => {
    if (phase === "done") return;
    finish();
  }, [phase, finish]);

  // Skip path: already seen / reduced motion → reveal immediately once
  useEffect(() => {
    if (!play) {
      fireReveal();
      onComplete?.();
    }
  }, [play, fireReveal, onComplete]);

  // Boot line stagger
  useEffect(() => {
    if (!play || phase !== "boot") return;
    const step = BOOT_MS / bootLines.length;
    const timers = bootLines.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), step * (i + 1))
    );
    const toGlitch = setTimeout(() => setPhase("glitch"), BOOT_MS);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(toGlitch);
    };
  }, [play, phase]);

  // Glitch → curtain (reveal hero as curtains open — original name-grow sync)
  useEffect(() => {
    if (phase !== "glitch") return;
    const t = setTimeout(() => {
      setPhase("curtain");
      fireReveal();
    }, GLITCH_MS);
    return () => clearTimeout(t);
  }, [phase, fireReveal]);

  // Curtain complete — unmount overlay
  useEffect(() => {
    if (phase !== "curtain") return;
    const t = setTimeout(() => {
      setPhase("done");
      markSeen();
      onComplete?.();
    }, CURTAIN_MS);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  // Skip on click / key
  useEffect(() => {
    if (!play || phase === "done") return;
    const onKey = () => skip();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [play, phase, skip]);

  if (!play || phase === "done") return null;

  const isCurtain = phase === "curtain";
  const isGlitch = phase === "glitch";

  return (
    <div
      className="fixed inset-0 z-[200] film-grain cursor-pointer"
      role="dialog"
      aria-label="Loading sequence. Click or press any key to skip."
      aria-live="polite"
      onClick={skip}
    >
      {/* Curtain halves — hold solid until unfold, then animate apart */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <div
          className={`h-1/2 w-full origin-bottom border-b border-[var(--border)] ${
            isCurtain ? "animate-unfold-top" : ""
          }`}
          style={{ background: "var(--bg)" }}
        />
        <div
          className={`h-1/2 w-full origin-top border-t border-[var(--border)] ${
            isCurtain ? "animate-unfold-bottom" : ""
          }`}
          style={{ background: "var(--bg)" }}
        />
      </div>

      {/* Boot UI (hidden once curtains open) */}
      {!isCurtain && (
        <div
          className={`absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24 ${
            isGlitch ? "animate-glitch" : ""
          }`}
          style={{ background: "var(--bg)" }}
        >
          {/* Soft light sweep */}
          <div
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent"
            style={{ animation: "light-sweep 1.2s ease-out forwards" }}
            aria-hidden
          />

          <div className="relative z-10 w-full max-w-xl font-mono text-sm md:text-base">
            <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[var(--text)] opacity-60">
              system boot // click to skip
            </p>
            <ul className="space-y-2">
              {bootLines.map((line, i) => (
                <li
                  key={line}
                  className={`transition-opacity duration-200 ${
                    i < visibleLines ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ color: "var(--accent)" }}
                >
                  {line}
                </li>
              ))}
            </ul>

            {/* Progress line */}
            <div
              className="mt-10 h-px w-full origin-left overflow-hidden bg-[var(--border)]"
              aria-hidden
            >
              <div
                className="h-full w-full bg-[var(--accent)]"
                style={{
                  transformOrigin: "left",
                  animation: `progress-fill ${BOOT_MS}ms linear forwards`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Full-screen flash on glitch */}
      {isGlitch && (
        <div
          className="pointer-events-none absolute inset-0 bg-[var(--accent)]/30"
          aria-hidden
        />
      )}
    </div>
  );
};

export default BootLoader;
