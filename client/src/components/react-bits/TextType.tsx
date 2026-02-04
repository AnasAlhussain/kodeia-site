import { useEffect, useMemo, useState } from "react";

/**
 * React Bits-style "Text Type" animation.
 */
export default function TextType({
  words,
  typingMs = 200,
  pauseMs = 2100,
  className = "",
}: {
  words: string[];
  typingMs?: number;
  pauseMs?: number;
  className?: string;
}) {
  const list = useMemo(() => words.filter(Boolean), [words]);
  const [i, setI] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!list.length) return;

    const full = list[i % list.length];

    let t: number;

    if (!deleting) {
      if (sub.length < full.length) {
        t = window.setTimeout(() => setSub(full.slice(0, sub.length + 1)), typingMs);
      } else {
        t = window.setTimeout(() => setDeleting(true), pauseMs);
      }
    } else {
      if (sub.length > 0) {
        t = window.setTimeout(() => setSub(full.slice(0, sub.length - 1)), Math.max(typingMs - 15, 20));
      } else {
        setDeleting(false);
        setI((v) => v + 1);
      }
    }

    return () => window.clearTimeout(t);
  }, [list, i, sub, deleting, typingMs, pauseMs]);

  return (
    <span className={className}>
      {sub}
      <span className="inline-block w-[0.6ch] animate-pulse opacity-70">|</span>
    </span>
  );
}
