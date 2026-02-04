import { team } from "../../data/team";
import { motion } from "framer-motion";
import Carousel from "../react-bits/Carousel";

interface TeamMember {
  img: string;
  name: string;
  role: string;
}

export default function TeamCarousel() {
  return (
        <div className="touch-pan-y" style={{ touchAction: "pan-y" }}>
          <Carousel
            items={team}
            autoplay
            interval={3200}
            showArrows
            showDots
            className="touch-pan-y"
            renderItem={(m: TeamMember) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mx-auto max-w-sm rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5"
              >
                <div className="overflow-hidden rounded-xl border border-white/10 ">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    draggable={false}
                    className="h-56 w-full select-none object-fill object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <div className="text-base font-semibold text-white">{m.name}</div>
                  <div className="text-sm text-white/70">{m.role}</div>
                </div>
              </motion.div>
            )}
          />
        </div>
      );
}
