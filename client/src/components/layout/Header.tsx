import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
<header className="sticky top-0 z-40 border-b border-white/10 bg-kodeia-ink/90 md:bg-kodeia-ink/70 md:backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/kodeia-logo.png" alt="KODEIA logo" className="h-9 w-auto" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-widest text-white">
              {"{ KODEIA }"}
            </div>
            <div className="text-xs text-white/70">Konsult & utbildning</div>
          </div>
        </Link>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition"
          onClick={() => setOpen(true)}
          aria-label="Öppna meny"
        >
          <span className="mr-2">Meny</span>
          <span className="block h-[2px] w-5 bg-white/80" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm border-l border-white/10 bg-kodeia-ink p-6 shadow-soft will-change-transform translate-z-0"
              initial={{ x: 420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold tracking-widest text-white">
                  {"{ KODEIA }"}
                </div>
                <button
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  Stäng
                </button>
              </div>

              <div className="mt-8 ">
                <NavLinks onClick={() => setOpen(false)} />
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                <div className="font-medium text-white/90">Snabb kontakt</div>
                <div className="mt-2">info@kodeia.se</div>
                <div className="mt-1">+46 73 029 66 44</div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
