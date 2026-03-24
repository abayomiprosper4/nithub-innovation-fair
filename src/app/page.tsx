"use client";

import { motion } from "framer-motion";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Programme from "@/Components/Programme"
import PrimaryBtn from "@/Components/PrimaryBtn";
import Attendee from "@/Components/Attendee";
import Persons from "@/Components/Persons";
import Sponsors from "@/Components/Sponsors";
import { IMAGES } from "@/utils/assets";
import Numbers from "@/Components/Numbers";
import Gallery from "@/Components/Gallery";

export default function Home() {
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

  return (
    <main className="maindiv min-h-screen mx-auto overflow-x-hidden">
      <Navbar />

      <div className="mt-6 lg:mt-10">
        <Hero />
      </div>
      <div id="about-event">
        <About />
        </div>
      <motion.div
      id="programme"
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Programme />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Attendee />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* <Persons /> */}
      </motion.div>
      <Gallery />
      <Sponsors />
      <Numbers />
      <Footer />
    </main>
  );
}
