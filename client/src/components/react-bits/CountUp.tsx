import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * React Bits-style "Count Up" (no deps).
 */
export default function CountUp({
  to,
  durationMs = 1400,
  suffix = "",
  className = "",
}: {
  to: number;
  durationMs?: number;
  suffix?: string;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;

    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const t = Math.min((ts - startRef.current) / durationMs, 1);
      const eased = easeOutCubic(t);
      setValue(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, durationMs]);

  return (
    <span
      className={`bg-gradient-to-r from-kodeia-sky via-white to-kodeia-blue bg-clip-text text-transparent ${className}`}
    >
      {value.toLocaleString("sv-SE")}
      {suffix}
    </span>
  );
}
