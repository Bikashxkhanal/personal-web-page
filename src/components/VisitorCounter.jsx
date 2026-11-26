import { useEffect, useState } from "react";

const COUNTER_KEY = "bikashkhanal07_com_np_unique_visitors_2026";
const VISITOR_MARKER = "portfolio-visitor-counted";
const API_URL = "https://countapi.mileshilliard.com/api/v1";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let active = true;

    const readCount = async () => {
      try {
        const response = await fetch(`${API_URL}/get/${COUNTER_KEY}`, {
          cache: "no-store",
        });
        if (!response.ok) return;
        const data = await response.json();
        if (active && Number.isFinite(Number(data.value))) {
          setCount(Number(data.value));
        }
      } catch {
        // Keep the counter unobtrusive when the external service is unavailable.
      }
    };

    const registerVisitor = async () => {
      try {
        if (localStorage.getItem(VISITOR_MARKER)) return;
        // Set synchronously so React StrictMode and multiple tabs cannot double-count.
        localStorage.setItem(VISITOR_MARKER, "1");
        const response = await fetch(`${API_URL}/hit/${COUNTER_KEY}`, {
          cache: "no-store",
        });
        if (!response.ok) return;
        const data = await response.json();
        if (active && Number.isFinite(Number(data.value))) {
          setCount(Number(data.value));
        }
      } catch {
        // Storage or network restrictions should not affect the portfolio.
      }
    };

    void registerVisitor().finally(readCount);
    const poll = window.setInterval(readCount, 15000);

    return () => {
      active = false;
      window.clearInterval(poll);
    };
  }, []);

  return (
    <aside
      className="visitor-counter"
      aria-label={`Unique visitors: ${count ?? "loading"}`}
      title="Unique visitors"
    >
      <span className="visitor-counter__label">VISITORS</span>
      <span className="visitor-counter__value" aria-live="polite">
        {count === null ? "···" : count.toLocaleString()}
      </span>
      <span className="visitor-counter__status">
        <span className="visitor-counter__dot" aria-hidden="true" /> LIVE
      </span>
    </aside>
  );
};

export default VisitorCounter;
