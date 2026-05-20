"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

interface Sponsor {
  src: string;
  alt: string;
}

const RotatingTrophy = ({ gradient }: { gradient: string }) => (
  <motion.span
    className="relative overflow-hidden inline-flex items-center justify-center ml-4 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg border border-white/30"
    style={{ background: gradient }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ x: "-150%", skewX: -20 }}
      animate={{ x: "150%" }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
      }}
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      }}
    />

    <span className="relative z-10 text-[24px] md:text-[28px] drop-shadow-md">
      🏆
    </span>
  </motion.span>
);

const SponsorCard = ({
  src,
  alt,
  index,
  isPlaceholder = false,
}: {
  src?: string;
  alt?: string;
  index: number;
  isPlaceholder?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className={`flex items-center justify-center h-32 border p-6 transition-all duration-300 ${
      isPlaceholder
        ? "bg-gray-50/40 border-dashed border-gray-200"
        : "bg-white border-gray-100 hover:scale-105 shadow-sm hover:shadow-md"
    }`}
  >
    {!isPlaceholder && src ? (
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
      />
    ) : (
      <span className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em]">
        Coming Soon
      </span>
    )}
  </motion.div>
);

export default function Sponsors() {
  const [openTiers, setOpenTiers] = useState<Record<string, boolean>>({
    "Platinum Sponsors": true,
  });

  const toggleTier = (title: string) => {
    setOpenTiers((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const tierGradients: Record<string, string> = {
    "Platinum Sponsors":
      "linear-gradient(135deg, #CFD1D3 0%, #FFFFFF 50%, #A2A7AB 100%)",
    "Diamond Sponsors":
      "linear-gradient(135deg, #B9F2FF 0%, #FFFFFF 50%, #61D2F5 100%)",
    "Gold Sponsors":
      "linear-gradient(135deg, #FFD700 0%, #FFF9C4 50%, #D4AF37 100%)",
    "Silver Sponsors":
      "linear-gradient(135deg, #C0C0C0 0%, #F5F5F5 50%, #909090 100%)",
  };

  const sponsorTiers = [
    { title: "Platinum Sponsors", data: [] },
    { title: "Diamond Sponsors", data: [] },
    { title: "Gold Sponsors", data: [] },
    { title: "Silver Sponsors", data: [] },
  ];

  return (
    <section className="w-full bg-[#F3F4F6] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-4">
        {sponsorTiers.map((tier, tierIdx) => {
          const isOpen = openTiers[tier.title];
          const displayData =
            tier.data.length > 0 ? tier.data : Array(6).fill(null);

          return (
            <div
              key={tierIdx}
              className="border-b border-gray-200/60 last:border-0 pb-4"
            >
              <button
                onClick={() => toggleTier(tier.title)}
                className="w-full flex items-center justify-between group py-6 focus:outline-none"
              >
                <div className="flex items-center">
                  <h2 className="text-2xl md:text-5xl font-normal tracking-tight transition-colors group-hover:text-[#62CF3A]">
                    {tier.title}
                  </h2>
                  <RotatingTrophy gradient={tierGradients[tier.title]} />
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  className="text-2xl md:text-3xl text-gray-400 group-hover:text-[#62CF3A] transition-colors"
                >
                  <FiChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 pt-4 pb-10">
                      {displayData.map((logo, index) => (
                        <SponsorCard
                          key={index}
                          index={index}
                          src={logo?.src}
                          alt={logo?.alt}
                          isPlaceholder={!logo}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        <div className="flex justify-between items-center rounded-[30px] p-10 bg-[#62CF3A] mt-20">
          <p className="text-[20px] text-white font-bold uppercase tracking-[0.2em]">
            Want to become a Sponsor?
          </p>
          <Link
            href="/sponsorship"
            className="group relative overflow-hidden bg-[#0A1900] text-white rounded-lg font-bold py-4 px-16 transition-all duration-300 ease-out hover:scale-105 inline-flex items-center justify-center"
          >
            <span className="absolute top-0 -left-[20%] w-[140%] h-full bg-white skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10 text-white group-hover:text-[#0A1900] transition-colors duration-300 ease-out">
              Click Here!
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
