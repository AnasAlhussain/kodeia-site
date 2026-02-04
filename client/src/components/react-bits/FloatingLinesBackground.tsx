import { useEffect, useRef } from "react";

/**
 * React Bits-style "Floating Lines" background.
 * Lightweight canvas animation (no external deps).
 */
export default function FloatingLinesBackground({
  density = 34,
  speed = 0.55,
  className = "",
}: {
  density?: number;
  speed?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    type Line = {
      x: number;
      y: number;
      len: number;
      angle: number;
      v: number;
      w: number;
      alpha: number;
    };

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const lines: Line[] = Array.from({ length: density }).map(() => ({
      x: rand(-200, window.innerWidth + 200),
      y: rand(-200, window.innerHeight + 200),
      len: rand(120, 320),
      angle: rand(0, Math.PI * 2),
      v: rand(0.2, 1.0) * speed,
      w: rand(0.8, 1.8),
      alpha: rand(0.06, 0.18),
    }));

    const tick = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // subtle vignette
      const g = ctx.createRadialGradient(w * 0.5, h * 0.4, 80, w * 0.5, h * 0.5, Math.max(w, h));
      g.addColorStop(0, "rgba(29, 111, 184, 0.18)");
      g.addColorStop(1, "rgba(10, 21, 34, 0.98)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      for (const l of lines) {
        l.x += Math.cos(l.angle) * l.v;
        l.y += Math.sin(l.angle) * l.v;

        // wrap
        if (l.x < -400) l.x = w + 400;
        if (l.x > w + 400) l.x = -400;
        if (l.y < -400) l.y = h + 400;
        if (l.y > h + 400) l.y = -400;

        const x2 = l.x + Math.cos(l.angle) * l.len;
        const y2 = l.y + Math.sin(l.angle) * l.len;

        const lg = ctx.createLinearGradient(l.x, l.y, x2, y2);
        lg.addColorStop(0, `rgba(73, 181, 255, 0)`);
        lg.addColorStop(0.5, `rgba(73, 181, 255, ${l.alpha})`);
        lg.addColorStop(1, `rgba(73, 181, 255, 0)`);

        ctx.strokeStyle = lg;
        ctx.lineWidth = l.w;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.restore();
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`fixed inset-0 -z-10 ${className}`}
    />
  );
}
