"use client";

import Image from "next/image";
import { IMAGES } from "@/utils/assets";
import { motion } from "framer-motion";

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

export default function Programme() {
  const programmeData = [
    {
      title: "2 Keynote Addresses",
      description: "Insightful conversations with industry leaders, innovators, and policymakers.",
    },
    {
      title: "Panel Discussions",
      description: "Engaging discussions across technology, innovation, entrepreneurship, and policy.",
    },
    {
      title: "Live Hackathon",
      description: "A two-day innovation sprint where teams build solutions to real-world challenges.",
    },
    {
      title: "Startup Exhibitions & Demo Days",
      description: "Showcasing promising startups, student ventures, and research-driven innovations.",
    },
    {
      title: "Investor Deal Room",
      description: "Curated startup-investor interactions focused on real deal-flow.",
    },
    {
      title: "Workshops & Masterclasses",
      description: "Deep-dive sessions with industry leaders and technical experts.",
    },
  ];

  return (
    <section id="programme" className="relative overflow-hidden">
      <div className="hidden lg:block">
        <Image
          src={IMAGES.overview}
          alt="Event Overview"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </div>
      <div className="lg:hidden bg-[#020B04] px-6 py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#62CF3A]/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-0 w-40 h-40 bg-[#62CF3A]/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-white text-center mb-12 tracking-tight"
          >
            Programme
          </motion.h2>

          <div className="space-y-4">
            {programmeData.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border-l-4 border-[#62CF3A]"
              >
                <h3 className="text-[#62CF3A] font-bold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}