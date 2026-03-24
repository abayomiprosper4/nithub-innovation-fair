import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// Adjust these imports based on your file structure
import { IMAGES } from '../utils/assets'; 
import PrimaryBtn from './PrimaryBtn'; 

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };
const AboutSection = () => {
  const listItems = [
    "2 days of innovation, ideas and impact",
    "Live Hackathon with real-world problem statements",
    "Startup exhibitions and demo days",
    "Investor Deal Room with real capital intent",
    "Keynotes, panels, and breakout sessions",
    "Strategic partnerships and talent discovery",
  ];

  return (
    <section
      id="about-section"
      className="about-event relative overflow-hidden mx-auto pt-15 max-w-7xl px-6 pb-20 lg:pb-32"
    >
      {/* --- MOBILE BACKGROUND (Dark Overlay) --- */}
      <div className="absolute inset-0 lg:hidden -z-10">
        {/* Dark Overlay for Mobile Readability */}
        <div className="absolute inset-0 bg-black/60 z-10" /> 
        <Image
          src={IMAGES.aboutImg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start lg:items-center relative z-20">
        
        {/* TEXT COLUMN */}
        <div className="order-1 lg:order-1">
          <motion.h2
            /* White on mobile (dark bg), Black on desktop */
            className="text-4xl md:text-center lg:text-left sm:text-center lg:text-5xl lg:pl-6 mt-6 space-y-6 font-bold text-white lg:text-black leading-tight"
            {...fadeInUp}
            transition={{ duration: 0.5 }}
          >
            About the Event
          </motion.h2>

          <motion.div
            className="mt-6 space-y-4 leading-normal text-white lg:text-black text-base lg:text-2xl lg:pl-6"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The NITHUB 5th Year Anniversary & Innovation Fair is a two-day
            innovation festival celebrating five years of impact by the
            University of Lagos’ official innovation and technology hub.
          </motion.div>

          <motion.div
            className="mt-2 space-y-4 leading-normal text-white lg:text-black text-base lg:text-2xl lg:pl-6"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The event brings together student innovators, startups,
            researchers, corporates, investors, and policymakers to explore
            ideas, showcase solutions, and unlock new partnerships shaping the
            future of technology and entrepreneurship in Nigeria.
          </motion.div>

          <motion.div
            className="mt-10 inline-flex items-center rounded-full px-0 lg:px-6 py-3 text-white font-semibold transition"
            {...fadeInLeft}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <PrimaryBtn
              label={"Download Sponsorship Deck"}
              href="/Documents/sponsorship-deck.pdf"
              download="Sponsorship-Deck.pdf"
            />
          </motion.div>
        </div>

        {/* IMAGE & LIST COLUMN */}
        <div className="relative order-2 lg:order-2 mb-10 lg:mb-0">
          
          {/* --- DESKTOP IMAGE (Hidden on Mobile) --- */}
          <motion.div
            className="hidden lg:block overflow-hidden rounded-2xl shadow-xl aspect-video lg:aspect-auto"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={IMAGES.aboutImg}
              alt="NITHUB Innovation Fair"
              width={700}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* THE WHITE LIST CONTAINER (Visible on both) */}
          <motion.div
            className="maindiv tracking-wide relative mt-6 lg:absolute lg:-bottom-30 lg:left-6 lg:right-6 lg:mx-8 bg-white rounded-xl shadow-2xl px-4 py-4 z-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <ul className="space-y-1 text-gray-800 text-base">
              {listItems.map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#62CF3A] text-lg">✦</span>
                  <span className="text-md">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;