"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

interface Sponsor {
  src: string;
  alt: string;
}

const RotatingTrophy = ({ bgColor }: { bgColor: string }) => (
  <motion.span
    className="inline-block ml-4 text-[30px] rounded-full py-2 px-1 origin-center"
    style={{ backgroundColor: bgColor }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    🏆
  </motion.span>
);

// 2. Updated SponsorCard to handle empty states (placeholders)
const SponsorCard = ({ src, alt, index, isPlaceholder = false }: { src?: string; alt?: string; index: number; isPlaceholder?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className={`flex items-center justify-center h-32 border p-6 transition-transform ${
      isPlaceholder 
        ? "bg-gray-50/50 border-dashed border-gray-200" // Style for empty boxes
        : "bg-white border-gray-100 hover:scale-105 shadow-sm" // Style for real sponsors
    }`}
  >
    {!isPlaceholder && src ? (
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    ) : (
      <span className="text-gray-300 text-xs font-medium uppercase tracking-widest">Coming Soon</span>
    )}
  </motion.div>
);

export default function Sponsors() {
  const [openTiers, setOpenTiers] = useState<Record<string, boolean>>({
    "Platinum Sponsors": true, // Kept open by default to show the grid
  });

  const toggleTier = (title: string) => {
    setOpenTiers((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // 3. DATA SECTION: Add your sponsors here when available
  const platinumSponsors: Sponsor[] = [
    // Example: { src: "/Images/nithub-logo.svg", alt: "Nithub" },
  ];
  const diamondSponsors: Sponsor[] = [];
  const goldSponsors: Sponsor[] = [];
  const silverSponsors: Sponsor[] = [];

  const tierColors: Record<string, string> = {
    "Platinum Sponsors": "#E5E4E2",
    "Diamond Sponsors": "#E0FBFF",
    "Gold Sponsors": "#FFD700",
    "Silver Sponsors": "#C0C0C0",
  };

  const sponsorTiers = [
    { title: "Platinum Sponsors", data: platinumSponsors },
    { title: "Diamond Sponsors", data: diamondSponsors },
    { title: "Gold Sponsors", data: goldSponsors },
    { title: "Silver Sponsors", data: silverSponsors },
  ];

  return (
    <section className="w-full bg-[#F3F4F6] py-20 mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        
        {sponsorTiers.map((tier, tierIdx) => {
          const isOpen = openTiers[tier.title];
          
          // 4. GRID LOGIC: If data is empty, create an array of 6 placeholders
          const displayData = tier.data.length > 0 
            ? tier.data 
            : Array(6).fill(null); 

          return (
            <div key={tierIdx} className="border-b border-gray-200 pb-6">
              <button 
                onClick={() => toggleTier(tier.title)}
                className="w-full flex items-center justify-between group py-4"
              >
                <h2 className="text-3xl md:text-4xl font-medium flex items-center transition-colors group-hover:text-[#62CF3A]">
                  {tier.title}
                  <RotatingTrophy bgColor={tierColors[tier.title]} />
                </h2>
                
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  className="text-3xl text-gray-400 group-hover:text-[#62CF3A] transition-colors"
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
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {/* The 6-column grid is maintained here */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
                      {displayData.map((logo, index) => (
                        <SponsorCard 
                          key={index} 
                          index={index} 
                          src={logo?.src} 
                          alt={logo?.alt} 
                          isPlaceholder={!logo} // If logo is null, it's a placeholder
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

      </div>
    </section>
  );
}