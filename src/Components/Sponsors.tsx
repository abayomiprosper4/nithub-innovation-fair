"use client";

import { motion } from "framer-motion";

// 1. Update RotatingTrophy to accept a bgColor prop
// We remove the hardcoded bg-[#e0fbff] class and use an inline style instead.
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

const SponsorCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center justify-center bg-white h-32 border border-gray-100 p-6 transition-transform hover:scale-105">
    <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
  </div>
);

export default function Sponsors() {
  // ... (Your existing sponsor data arrays remain unchanged) ...
  const platinumSponsors = [
    { src: "/Images/nithub-logo.svg", alt: "nithub" },
     { src: "/Images/logo2.png", alt: "sponsor 2" },
     { src: "/Images/logo3.png", alt: "sponsor 3" },
    { src: "/Images/logo4.png", alt: "sponsor 4" },
    { src: "/Images/logo5.png", alt: "sponsor 5" },
    { src: "/Images/logo6.png", alt: "sponsor 6" },
    { src: "/Images/logo7.png", alt: "sponsor 7" },
    { src: "/Images/logo8.png", alt: "sponsor 8" },
    { src: "/Images/logo9.png", alt: "sponsor 9" },
    { src: "/Images/logo10.png", alt: "sponsor 10" },
    { src: "/Images/logo11.png", alt: "sponsor 11" },
    { src: "/Images/logo12.png", alt: "sponsor 12" },
  ];

  const diamondSponsors = [
    { src: "/Images/nithub-logo.svg", alt: "nithub" },
     { src: "/Images/logo2.png", alt: "sponsor 2" },
     { src: "/Images/logo3.png", alt: "sponsor 3" },
    { src: "/Images/logo4.png", alt: "sponsor 4" },
    { src: "/Images/logo5.png", alt: "sponsor 5" },
    { src: "/Images/logo6.png", alt: "sponsor 6" },
    { src: "/Images/logo7.png", alt: "sponsor 7" },
    { src: "/Images/logo8.png", alt: "sponsor 8" },
    { src: "/Images/logo9.png", alt: "sponsor 9" },
    { src: "/Images/logo10.png", alt: "sponsor 10" },
    { src: "/Images/logo11.png", alt: "sponsor 11" },
    { src: "/Images/logo12.png", alt: "sponsor 12" },
  ];

  const goldSponsors = [
    { src: "/Images/nithub-logo.svg", alt: "nithub" },
     { src: "/Images/logo2.png", alt: "sponsor 2" },
     { src: "/Images/logo3.png", alt: "sponsor 3" },
    { src: "/Images/logo4.png", alt: "sponsor 4" },
    { src: "/Images/logo5.png", alt: "sponsor 5" },
    { src: "/Images/logo6.png", alt: "sponsor 6" },
    { src: "/Images/logo7.png", alt: "sponsor 7" },
    { src: "/Images/logo8.png", alt: "sponsor 8" },
    { src: "/Images/logo9.png", alt: "sponsor 9" },
    { src: "/Images/logo10.png", alt: "sponsor 10" },
    { src: "/Images/logo11.png", alt: "sponsor 11" },
    { src: "/Images/logo12.png", alt: "sponsor 12" },
  ];

  const silverSponsors = [
    { src: "/Images/nithub-logo.svg", alt: "nithub" },
      { src: "/Images/logo2.png", alt: "sponsor 2" },
     { src: "/Images/logo3.png", alt: "sponsor 3" },
    { src: "/Images/logo4.png", alt: "sponsor 4" },
    { src: "/Images/logo5.png", alt: "sponsor 5" },
    { src: "/Images/logo6.png", alt: "sponsor 6" },
    { src: "/Images/logo7.png", alt: "sponsor 7" },
    { src: "/Images/logo8.png", alt: "sponsor 8" },
    { src: "/Images/logo9.png", alt: "sponsor 9" },
    { src: "/Images/logo10.png", alt: "sponsor 10" },
    { src: "/Images/logo11.png", alt: "sponsor 11" },
    { src: "/Images/logo12.png", alt: "sponsor 12" },
  ];


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
    <section className="w-full bg-neutral-50 py-20 my-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {sponsorTiers.map((tier, tierIdx) => (
          <div key={tierIdx}>
            <h2 className="text-4xl md:text-5xl font-medium text-left mb-12 flex items-center">
              {tier.title}
              <RotatingTrophy bgColor={tierColors[tier.title]} />
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tier.data.map((logo, index) => (
                <SponsorCard key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}