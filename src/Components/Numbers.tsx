import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
}

function Counter({ value }: CounterProps) {
const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-20px",
    amount: "some" 
  });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2.9,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Numbers() {
  const emptyBoxClass =
    "bg-[#F2F6FF] w-full p-6 h-44 md:h-55 flex flex-col justify-end transition-all shadow-lg";

  const stats = [
    {
      number: 25,
      suffix: "+",
      label: "Ecosystem, Corporate & Government Partners",
    },
    { number: 100, suffix: "+", label: "Supported Startups" },
    { number: 500, suffix: "+", label: "Innovators Trained" },
    { number: 20, suffix: "k+", label: "Trained Talents" },
    { number: 500, prefix: "₦", suffix: "m+", label: "Funding Support" },
  ];

  return (
    <section className="w-full bg-[#F2F2F7] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-normal mb-10 text-black">
          Nithub In Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className={emptyBoxClass}>
              <div className="font-medium text-6xl md:text-7xl mb-2 flex items-baseline">
                {stat.prefix && <span>{stat.prefix}</span>}
                <Counter value={stat.number} />
                {stat.suffix}
              </div>
              <div className="h-14 md:h-16 flex items-start">
                <p className="text-gray-400 pt-2 text-lg leading-relaxed tracking-wide font-medium max-w-80">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}

          <motion.div
            whileHover={{ scale: 0.98 }}
            className="bg-[#62CF3A] w-full h-44 md:h-55 flex items-center justify-center text-white text-5xl lg:text-6xl font-bold cursor-pointer hover:bg-black transition-colors duration-500 group"
          >
            <a href="/interest" className="flex">
              Register
              <FiArrowUpRight className="ml-2 group-hover:animate-[arrowBounce_0.5s_ease-out_2]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
