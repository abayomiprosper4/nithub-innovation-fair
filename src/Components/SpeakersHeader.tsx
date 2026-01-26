import { motion, useMotionValue, useSpring, Variants, Transition } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function MagneticHeader() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    mouseX.set((clientX - centerX) / 4);
    mouseY.set((clientY - centerY) / 4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springTransition: Transition = { 
    type: "spring", 
    stiffness: 400, 
    damping: 30 
  } as const;

  const textVariants: Variants = {
    initial: { x: 0, opacity: 1 },
    hover: { x: 150, opacity: 0 }
  };

  const buttonVariants: Variants = {
    initial: { x: -150, opacity: 0 },
    hover: { x: 0, opacity: 1 }
  };

  return (
    <div className="pb-20 pt-20">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x, y }} 
        className="inline-block"
      >
        <Link href="/personslist">
          <motion.div 
            className="relative inline-flex items-center cursor-pointer group"
            initial="initial"
            whileHover="hover"
          >
            <div className="relative overflow-hidden flex items-center h-14 px-2">
              <motion.div
                variants={textVariants}
                transition={springTransition}
                className="flex items-center gap-2 text-3xl md:text-4xl font-semibold text-black whitespace-nowrap"
              >
                Speakers <span className="font-light">→</span>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                transition={springTransition}
                className="absolute inset-y-0 left-0 flex items-center gap-2 bg-white/5 backdrop-blur-sm px-15 py-4 text-xl font-bold text-black whitespace-nowrap border border-black/50"
              >
                View all <span className="font-light">→</span>
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}