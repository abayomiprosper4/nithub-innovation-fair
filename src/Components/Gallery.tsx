"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "@/utils/assets";

export default function Gallery() {
  const [step, setStep] = useState(1);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const images = [
    { src: IMAGES.gallery7, id: "img-1" },
    { src: IMAGES.gallery8, id: "img-2" },
    { src: IMAGES.gallery4, id: "img-3" },
    { src: IMAGES.gallery2, id: "img-4" },
    { src: IMAGES.gallery3, id: "img-5" },
    { src: IMAGES.hero3, id: "img-6" },
    { src: IMAGES.about, id: "img-7" },
    { src: IMAGES.people, id: "img-8" },
  ];

  useEffect(() => {
    if (isInView) {
      const timers = [
        setTimeout(() => setStep(2), 2500),
        setTimeout(() => setStep(3), 4000),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [isInView]);

  const getPos = (index: number) => {
    const isStep1 = step === 1;
    switch (index) {
      case 0: return isStep1 ? "col-start-1 col-span-4 row-start-1" : "col-start-1 col-span-1 row-start-1";
      case 1: return isStep1 ? "col-start-5 col-span-4 row-start-1" : "col-start-2 col-span-1 row-start-1";
      case 2: return isStep1 ? "col-start-9 col-span-4 row-start-1" : "col-start-1 col-span-1 row-start-2";
      case 3: return isStep1 ? "col-start-3 col-span-4 row-start-2 z-20 scale-110" : "col-start-1 col-span-1 row-start-3";
      case 4: return isStep1 ? "col-start-7 col-span-4 row-start-2 z-20 scale-110" : "col-start-2 col-span-1 row-start-3";
      case 5: return isStep1 ? "col-start-1 col-span-4 row-start-3" : "col-start-2 col-span-1 row-start-4";
      case 6: return isStep1 ? "col-start-5 col-span-4 row-start-3" : "col-start-1 col-span-1 row-start-5";
      case 7: return isStep1 ? "col-start-9 col-span-4 row-start-3" : "col-start-2 col-span-1 row-start-5";
      default: return "";
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#F8F9FA] min-h-screen px-6 overflow-hidden">
      
      <div className={`hidden md:grid w-full transition-all duration-1000 ease-in-out mx-auto items-center
          ${step === 1 ? "max-w-4xl grid-cols-12 gap-x-20 gap-y-2" : "max-w-7xl grid-cols-[0.6fr_0.6fr_0.1fr_3fr] gap-x-3 gap-y-2"}`}
      >
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            layout
            initial={{ scale: 0.4, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              layout: { type: "spring", stiffness: 35, damping: 14 },
              opacity: { duration: 1.5, delay: i * 0.1 },
              scale: { duration: 1.5, delay: i * 0.1 },
            }}
            className={`relative rounded-lg overflow-hidden shadow-xl aspect-6/4 w-full bg-gray-200 ${getPos(i)} 
              ${step === 1 && (i < 3 || i > 4) ? "-my-8 z-10" : "z-20"}`}
          >
            <Image src={img.src} alt="Gallery" fill className="object-cover" />
          </motion.div>
        ))}

        <div className="col-start-4 row-start-1 row-span-5 grid grid-rows-5 h-full ml-8">
          {step === 3 && (
            <>
              <TextLine text="Collaboration" delay={0} row="row-start-1" />
              <TextLine text="Innovation" delay={1.2} row="row-start-3" />
              <TextLine text="Creation" delay={2.4} row="row-start-5" />
            </>
          )}
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-12 w-full max-w-sm mx-auto">
        <MobileGroup 
          images={[images[0], images[1]]} 
          text="Collaboration" 
        />
        <MobileGroup 
          images={[images[2], images[3], images[4]]} 
          text="Innovation" 
        />
        <MobileGroup 
          images={[images[5], images[6], images[7]]} 
          text="Creation" 
        />
      </div>
    </section>
  );
}

function MobileGroup({ images, text }: { images: any[]; text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`relative rounded-lg overflow-hidden shadow-lg aspect-6/4 bg-gray-200 
              ${images.length === 3 && i === 2 ? "col-span-2" : "col-span-1"}`}
          >
            <Image src={img.src} alt="Gallery" fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    
      {isInView && (
        <div className="mt-2">
          <TextLine text={text} delay={0.5} row="" isMobile />
        </div>
      )}
    </div>
  );
}

function TextLine({ text, delay, row, isMobile = false }: { text: string; delay: number; row: string; isMobile?: boolean }) {
  const prefix = "Years of ";
  const characters = Array.from(`${prefix}${text}`);

  return (
    <div className={`flex items-center ${row}`}>
      <h2 className={`${isMobile ? "text-3xl" : "text-4xl md:text-7xl"} tracking-tight leading-none whitespace-nowrap overflow-hidden`}>
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.05,
              delay: delay + i * 0.04,
              ease: "easeIn",
            }}
            className={i < prefix.length ? "text-gray-300 font-light" : "text-[#6CCF4B] italic font-bold"}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
    </div>
  );
}