"use client";

import { motion } from "framer-motion";
import LogoMarquee from "@/Components/LogoMarquee";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import PrimaryBtn from "@/Components/PrimaryBtn";
import Attendee from "@/Components/Attendee";
import Persons from "@/Components/Persons";

export default function Home() {
  // Shared Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true }
  };

  return (
    <main className="maindiv min-h-screen mx-auto overflow-x-hidden">
      <Navbar />
      
      <div className="mt-6 lg:mt-10">
        <Hero />
      </div>

      {/* About Section */}
      <section className="mx-auto pt-15 max-w-7xl px-6 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start lg:items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* 1. Heading Fades in First */}
            <motion.h2 
              className="text-4xl md:text-center lg:text-left sm:text-center lg:text-5xl lg:pl-6 mt-6 space-y-6 font-bold text-black leading-tight"
              {...fadeInUp}
              transition={{ duration: 0.7 }}
            >
              About the Event
            </motion.h2>

            {/* 3. Text details fade in third */}
            <motion.div 
              className="mt-6 space-y-4 leading-normal text-black text-lg lg:text-2xl lg:pl-6"
              {...fadeInUp}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              The NITHUB 5th Year Anniversary & Innovation Fair is a two-day
              innovation festival celebrating five years of impact by the
              University of Lagos’ official innovation and technology hub.
            </motion.div>

            <motion.div 
              className="mt-2 space-y-4 leading-normal text-black text-lg lg:text-2xl lg:pl-6"
              {...fadeInUp}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              The event brings together student innovators, startups,
              researchers, corporates, investors, and policymakers to explore
              ideas, showcase solutions, and unlock new partnerships shaping the
              future of technology and entrepreneurship in Nigeria.
            </motion.div>

            {/* 5. Buttons fade from left last */}
            <motion.div 
              className="mt-10 inline-flex items-center rounded-full px-0 lg:px-6 py-3 text-white font-semibold transition"
              {...fadeInLeft}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <PrimaryBtn label={"Download Sponsorship Deck"} href={""} />
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
            {/* 2. Main Image Fades in Second */}
            <motion.div 
              className="overflow-hidden rounded-2xl shadow-xl aspect-video lg:aspect-auto"
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/Images/DSC07811.png"
                alt="NITHUB Innovation Fair"
                width={700}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>

            {/* 4. White card with list fades in fourth */}
            <motion.div 
              className="maindiv tracking-wide relative mt-6 lg:absolute lg:-bottom-40 lg:left-6 lg:right-6 lg:mx-15 bg-white rounded-xl shadow-2xl px-6 py-6 z-20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ul className="space-y-3 text-gray-800 text-base">
                {[
                  "2 days of innovation, ideas and impact",
                  "Live Hackathon with real-world problem statements",
                  "Startup exhibitions and demo days",
                  "Investor Deal Room with real capital intent",
                  "Keynotes, panels, and breakout sessions",
                  "Strategic partnerships and talent discovery"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#62CF3A]">✦</span>
                    <span className="text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full width image - Entrance Animation */}
      <motion.div 
        className="mt-10 lg:mt-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Images/Event overview section.svg"
          alt="Event Overview"
          width={1920}
          height={1080}
          className="w-full"
        />
      </motion.div>
      
      {/* Attendee section reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Attendee />
      </motion.div>

      <Footer />
    </main>
  );
}