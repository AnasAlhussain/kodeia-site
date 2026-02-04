import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoplay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
};

/**
 * Mobile-safe carousel:
 * - Does NOT use drag (avoids scroll lock / rubber banding)
 * - Detects swipe only if gesture is primarily horizontal
 * - Vertical gestures are ignored (page scroll works)
 */
export default function Carousel<T>({
  items,
  renderItem,
  autoplay = true,
  interval = 3200,
  showArrows = true,
  showDots = true,
  className = "",
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const timer = useRef<number | null>(null);

  // Gesture state
  const start = useRef({ x: 0, y: 0 });
  const decided = useRef(false);
  const isHorizontal = useRef(false);
  const moved = useRef(false);

  const count = items.length;

  const stop = () => {
    if (timer.current !== null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  };

  const startAuto = () => {
    stop();
    if (!autoplay || count <= 1) return;
    timer.current = window.setInterval(() => {
      // autoplay without fighting user gestures
      if (!moved.current) next();
    }, interval);
  };

  useEffect(() => {
    startAuto();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, interval, count]);

  const next = () => {
    if (!count) return;
    setDir(1);
    setIndex((prev) => (prev + 1) % count);
  };

  const prev = () => {
    if (!count) return;
    setDir(-1);
    setIndex((prev) => (prev - 1 + count) % count);
  };

  const go = (nextIndex: number) => {
    if (!count) return;
    setDir(nextIndex > index ? 1 : -1);
    setIndex((nextIndex + count) % count);
  };

  const current = useMemo(() => items[index], [items, index]);

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0];
    start.current = { x: t.clientX, y: t.clientY };
    decided.current = false;
    isHorizontal.current = false;
    moved.current = false;
    stop();
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0];
    const dx = t.clientX - start.current.x;
    const dy = t.clientY - start.current.y;

    const adx = Math.abs(dx);
    const ady = Math.abs(dy);

    // Decide once: horizontal vs vertical gesture
    if (!decided.current) {
      // Add a small deadzone so tiny moves don't decide
      if (adx < 6 && ady < 6) return;

      decided.current = true;
      // Only treat as horizontal if it's clearly more horizontal
      isHorizontal.current = adx > ady * 1.2;
    }

    // If it's a horizontal swipe, prevent page scroll (only then)
    if (isHorizontal.current) {
      moved.current = true;
      // IMPORTANT: This prevents the browser from scrolling during a horizontal swipe
      // but DOES NOT run for vertical gestures.
      e.preventDefault();
    }
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    // If user was not swiping horizontally, do nothing (page scroll handled it)
    if (!isHorizontal.current) {
      startAuto();
      return;
    }

    const changed = e.changedTouches[0];
    const dx = changed.clientX - start.current.x;

    // Swipe threshold
    if (dx <= -50) next();
    else if (dx >= 50) prev();

    startAuto();
  };

  if (count === 0) return null;

  return (
    <div
      className={`relative ${className}`}
      style={{
        // Let vertical scroll happen naturally; we only preventDefault when gesture is horizontal.
        touchAction: "pan-y",
      }}
      onMouseEnter={stop}
      onMouseLeave={startAuto}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir > 0 ? 30 : -30, scale: 0.985 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: dir > 0 ? -30 : 30, scale: 0.985 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="w-full"
          >
            {renderItem(current, index)}
          </motion.div>
        </AnimatePresence>
      </div> */}
      <div className="relative overflow-hidden rounded-2xl">
  {/* ✅ Stabil höjd så inget hoppar */}
  <div className="relative min-h-[360px]">
    <AnimatePresence initial={false} custom={dir}>
      <motion.div
        key={index}
        custom={dir}
        initial={{ opacity: 0, x: dir > 0 ? 30 : -30, scale: 0.985 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: dir > 0 ? -30 : 30, scale: 0.985 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="absolute inset-0 w-full"   // ✅ overlay - påverkar inte layouten
      >
        {renderItem(current, index)}
      </motion.div>
    </AnimatePresence>
  </div>
</div>


      {showArrows && count > 1 && (
        <>
          <button
            type="button"
            aria-label="Föregående"
            onClick={() => {
              stop();
              prev();
              startAuto();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/90 backdrop-blur hover:bg-white/10"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Nästa"
            onClick={() => {
              stop();
              next();
              startAuto();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/90 backdrop-blur hover:bg-white/10"
          >
            ›
          </button>
        </>
      )}

      {showDots && count > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Gå till slide ${i + 1}`}
              onClick={() => {
                stop();
                go(i);
                startAuto();
              }}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
