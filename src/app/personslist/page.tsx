"use client";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Persons() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };
  
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 0.8 },
  }
   const speakers = [
    {
      src: "/Images/image 16.png",
      alt: "Dr. Odumuyiwa Victor",
      name: "Dr. Odumuyiwa Victor",
      title1: "Chairperson MIRG,",
      title2: "University of Lagos",
    },
    {
      src: "/Images/Prof 3.png",
      alt: "Prof. Ogunsola Folashade",
      name: "Prof. Ogunsola Folashade",
      title1: "Head of Department Computer Science",
      title2: "University of Lagos",
    },
    {
      src: "/Images/prof-adewole.png",
      alt: "Prof. Adewole Philip Adetunji",
      name: "Prof. Adewole Philip Adetunji",
      title1: "Dean of Faculty of Computing and",
      title2: "Informatics University of Lagos",
    },
    {
      src: "/Images/prof-ogunsola.png",
      alt: "Dr. Chika Yinka-Banjo",
      name: "Dr. Chika Yinka-Banjo",
      title1: "Vice Chancellor",
      title2: "University of Lagos",
    },
    {
      src: "/Images/image 16.png",
      alt: "Dr. Odumuyiwa Victor",
      name: "Dr. Odumuyiwa Victor",
      title1: "Chairperson MIRG,",
      title2: "University of Lagos",
    },
    {
      src: "/Images/Prof 3.png",
      alt: "Prof. Ogunsola Folashade",
      name: "Prof. Ogunsola Folashade",
      title1: "Head of Department Computer Science",
      title2: "University of Lagos",
    },
    {
      src: "/Images/prof-adewole.png",
      alt: "Prof. Adewole Philip Adetunji",
      name: "Prof. Adewole Philip Adetunji",
      title1: "Dean of Faculty of Computing and",
      title2: "Informatics University of Lagos",
    },
    {
      src: "/Images/prof-ogunsola.png",
      alt: "Dr. Chika Yinka-Banjo",
      name: "Dr. Chika Yinka-Banjo",
      title1: "Vice Chancellor",
      title2: "University of Lagos",
    },
    {
      src: "/Images/image 16.png",
      alt: "Dr. Odumuyiwa Victor",
      name: "Dr. Odumuyiwa Victor",
      title1: "Chairperson MIRG,",
      title2: "University of Lagos",
    },
    {
      src: "/Images/Prof 3.png",
      alt: "Prof. Ogunsola Folashade",
      name: "Prof. Ogunsola Folashade",
      title1: "Head of Department Computer Science",
      title2: "University of Lagos",
    },
    {
      src: "/Images/prof-adewole.png",
      alt: "Prof. Adewole Philip Adetunji",
      name: "Prof. Adewole Philip Adetunji",
      title1: "Dean of Faculty of Computing and",
      title2: "Informatics University of Lagos",
    },
    {
      src: "/Images/prof-ogunsola.png",
      alt: "Dr. Chika Yinka-Banjo",
      name: "Dr. Chika Yinka-Banjo",
      title1: "Vice Chancellor",
      title2: "University of Lagos",
    },
    {
      src: "/Images/image 16.png",
      alt: "Dr. Odumuyiwa Victor",
      name: "Dr. Odumuyiwa Victor",
      title1: "Chairperson MIRG,",
      title2: "University of Lagos",
    },
    {
      src: "/Images/Prof 3.png",
      alt: "Prof. Ogunsola Folashade",
      name: "Prof. Ogunsola Folashade",
      title1: "Head of Department Computer Science",
      title2: "University of Lagos",
    },
    {
      src: "/Images/prof-adewole.png",
      alt: "Prof. Adewole Philip Adetunji",
      name: "Prof. Adewole Philip Adetunji",
      title1: "Dean of Faculty of Computing and",
      title2: "Informatics University of Lagos",
    },
    {
      src: "/Images/prof-ogunsola.png",
      alt: "Dr. Chika Yinka-Banjo",
      name: "Dr. Chika Yinka-Banjo",
      title1: "Vice Chancellor",
      title2: "University of Lagos",
    },
  ];
 return (
  <div className="flex flex-col min-h-screen bg-[#d9ffc6]">
    <Navbar />
    
    <motion.section
      className="grow relative font-sans pt-10 overflow-hidden"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none" 
        variants={fadeIn}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img 
          src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597491/Banner_full_page_k4kvjd.jpg?_s=public-apps" 
          alt="banner" 
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 pb-20">
        <div className="mb-8 pt-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-black flex items-center gap-2">
            Speakers <span className="font-light">→</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative h-112.5 w-full rounded-[2.5rem] border-2 border-black overflow-hidden bg-[#D6FBC4] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 h-[80%] w-full flex items-end justify-center overflow-hidden z-0">
                <img
                  src={speaker.src}
                  alt={speaker.alt}
                  width={400}
                  height={400}
                  className="object-cover object-top w-full h-full"
                />
              </div>

              <div className="absolute bottom-0 w-full h-[25%] bg-white border-t-2 border-black flex flex-col items-center justify-center px-4 text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-bold text-lg italic text-black leading-tight mb-1">
                  {speaker.name}
                </h3>
                <p className="text-xs text-gray-600 leading-snug font-medium">
                  <span className="block">{speaker.title1}</span>
                  <span className="block">{speaker.title2}</span>
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[55%] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20 flex flex-col items-center justify-center px-4 text-center">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div>
                    <h3 className="font-bold text-2xl italic text-black leading-tight mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-gray-700 leading-snug font-medium">
                      <span className="block">{speaker.title1}</span>
                      <span className="block">{speaker.title2}</span>
                    </p>
                  </div>
                    <button className="bg-[#62CF3A] hover:bg-[#50b02e] text-white text-xs font-bold px-6 py-2 rounded-full flex hover:scale-110 gap-1 shadow-lg transition-all">
                      View Bio <FiArrowUpRight className="text-sm" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>

    <Footer />
  </div>
);
}