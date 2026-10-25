import { useEffect, useRef, useState } from "react";
import { terminalScript } from "../data/siteData";

const CHAR_MS = 28; // realistic typing speed
const PAUSE_AFTER_CMD = 180;
const PAUSE_AFTER_OUTPUT = 500;
const LOOP_PAUSE = 2200;

function OutputLine({ line }) {
  if (line.type === "kv") {
    return (
      <div className="whitespace-pre-wrap">
        <span className="text-[#00ff88]">{line.key.padEnd(10)}</span>
        <span className="text-[#6b7280]">: </span>
        <span className="text-[#e8fff3]">{line.value}</span>
        {line.comment && (
          <span className="text-[#6b7280]">  {line.comment}</span>
        )}
      </div>
    );
  }
  if (line.type === "success") {
    return <div className="text-[#00c46a]">{line.text}</div>;
  }
  if (line.type === "comment") {
    return <div className="text-[#6b7280]">{line.text}</div>;
  }
  return <div className="text-[#e8fff3]">{line.text}</div>;
}

/**
 * CSS MacBook frame with auto-typing terminal.
 * Terminal stays dark in both themes; bezel uses theme --mac-* vars.
 */
const MacTerminal = ({ active = true }) => {
  const [blocks, setBlocks] = useState([]); // completed {cmd, typed, output}
  const [currentCmd, setCurrentCmd] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frameRef = useRef(null);
  const scrollRef = useRef(null);
  const cancelRef = useRef(false);

  // Auto-type script
  useEffect(() => {
    if (!active) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    cancelRef.current = false;

    const sleep = (ms) =>
      new Promise((r) => {
        if (reduced) r();
        else setTimeout(r, ms);
      });

    const run = async () => {
      while (!cancelRef.current) {
        setBlocks([]);
        setCurrentCmd("");
        setShowPrompt(true);

        for (const step of terminalScript) {
          if (cancelRef.current) return;
          setShowPrompt(true);
          setCurrentCmd("");

          if (reduced) {
            setCurrentCmd(step.cmd);
          } else {
            for (let i = 0; i <= step.cmd.length; i++) {
              if (cancelRef.current) return;
              setCurrentCmd(step.cmd.slice(0, i));
              await sleep(CHAR_MS);
            }
          }

          await sleep(PAUSE_AFTER_CMD);
          setBlocks((prev) => [
            ...prev,
            { cmd: step.cmd, output: step.output },
          ]);
          setCurrentCmd("");
          setShowPrompt(false);
          await sleep(PAUSE_AFTER_OUTPUT);
          setShowPrompt(true);
        }

        await sleep(LOOP_PAUSE);
      }
    };

    run();
    return () => {
      cancelRef.current = true;
    };
  }, [active]);

  // Auto-scroll terminal
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [blocks, currentCmd]);

  // Faint 3D tilt
  const onMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="w-full max-w-lg mx-auto [perspective:1000px]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        ref={frameRef}
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Bezel */}
        <div
          className="rounded-[18px] p-[10px] md:p-[12px] shadow-2xl"
          style={{
            background: "linear-gradient(160deg, var(--mac-bezel), #111 60%)",
            boxShadow:
              "0 25px 50px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          {/* Camera notch */}
          <div className="relative mb-2 flex justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-black/80 ring-1 ring-white/10" />
          </div>

          {/* Screen */}
          <div className="overflow-hidden rounded-[8px] border border-black/40 bg-[#0a0c0b]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-white/5 bg-[#121412] px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 flex-1 truncate text-center font-mono text-[10px] text-[#6b7280]">
                bikash@netlab: ~
              </span>
            </div>

            {/* Terminal body */}
            <div
              ref={scrollRef}
              className="h-[280px] md:h-[340px] overflow-y-auto p-3 md:p-4 font-mono text-[11px] md:text-[12px] leading-relaxed"
              aria-label="Demo terminal session"
            >
              {blocks.map((b, i) => (
                <div key={i} className="mb-3">
                  <div>
                    <span className="text-[#00c46a]">$</span>{" "}
                    <span className="text-[#e8fff3]">{b.cmd}</span>
                  </div>
                  {b.output.map((line, j) => (
                    <OutputLine key={j} line={line} />
                  ))}
                </div>
              ))}

              {showPrompt && (
                <div>
                  <span className="text-[#00c46a]">$</span>{" "}
                  <span className="text-[#e8fff3]">{currentCmd}</span>
                  <span className="cursor-blink ml-0.5 text-[#00ff88]">█</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Thin base / chin */}
        <div
          className="mx-auto h-2 w-[72%] rounded-b-md"
          style={{
            background: "linear-gradient(to bottom, var(--mac-base), #333)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.35)",
          }}
        />
        {/* Reflection strip */}
        <div
          className="mx-auto mt-1 h-px w-[40%] opacity-40"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default MacTerminal;
