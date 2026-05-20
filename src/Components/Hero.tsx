"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/utils/assets";
import PrimaryBtn from "./PrimaryBtn";
import Image from "next/image";
import SecondaryBtn from "./SecondaryBtn";
import "./HeroModule.css";

const Hero = () => {
  const originalImages = [
    IMAGES.hero1,
    IMAGES.hero2,
    IMAGES.hero3,
  ];

  const images = [...originalImages, originalImages[0]];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section className="mainhero z-1 px-6 md:px-[5.25vw] 2xl:mx-auto max-w-8xl mx-auto my-28 overflow-hidden">
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[10vh]">
          <div className="w-full lg:basis-[45%] relative mt-8 lg:mt-0 text-center lg:text-left">
            <div
              className="absolute top-[5%] -left-[10%] w-[50vw] lg:w-[20vw] h-[50vw] lg:h-[20vw] rounded-full blur-[30px] -z-10"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(25, 231, 54, 0.7) 0%, rgba(0,0, 0, 0) 80%)",
              }}
            ></div>
            <motion.div
              className="mb-0 text-4xl lg:text-5xl lg:text-[63px] tracking-tight lg:tracking-[-3px] font-medium w-full lg:w-[200%] lg:-mr-12.5 relative z-20"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="mb-4 lg:mb-2.5 leading-tight font-semibold font-dm-sans">
                Nithub at 5: <br />
                Celebrating{" "}
                <span className="inline-flex flex-col font-semibold h-[1.32em] overflow-hidden text-[#62CF3A] align-bottom">
                  <span className="rotateWrapper italic">
                    <span>Collaboration</span>
                    <span>Innovation</span>
                    <span>Creation</span>
                    <span>Collaboration</span>
                  </span>
                </span>
                <br />
                Shaping the future
              </h1>
            </motion.div>
            <motion.p
              className="m-0 text-lg sm:text-xl lg:text-[28px] leading-relaxed lg:leading-9 font-normal lg:tracking-[-1px] whitespace-normal"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Join founders, investors, corporates and policy makers
              as we mark five years of innovation at the University of Lagos and
              unveil the next phase of impact.
            </motion.p>
          </div>
          <motion.div
            className="w-full lg:basis-[55%] relative"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-full bg-[#62CF3A] rounded-[15px] aspect-3/2"></div>
            <div className="aspect-3/2 absolute top-0 left-0 z-10 w-full overflow-hidden rounded-[15px] containerSnap bg-white">
              <div
                className="imageReel"
                style={{ "--count": images.length } as React.CSSProperties}
              >
                {images.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    width={700}
                    height={500}
                    alt={`Slide ${index}`}
                    className="slide object-cover w-full h-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-4 lg:mt-2 mb-7.5 flex flex-col items-center lg:items-start">
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start mt-6 mb-6 gap-4 sm:gap-9"
            initial="initial"
            animate="animate"
            variants={fadeInLeft}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex text-base lg:text-lg tracking-[-1px] text-[#232323] font-normal items-center">
              <img
                src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597468/location_uszdxu.jpg?_s=public-apps"
                alt="Location"
                className="mr-2 w-6 lg:w-7"
              />
              <span>University of Lagos</span>
            </div>
            <div className="flex text-base lg:text-lg tracking-[-1px] text-[#232323] font-normal items-center">
              <img
                src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597460/calendar-2_zuhfby.jpg?_s=public-apps"
                alt="Date"
                className="mr-2 w-6 lg:w-7"
              />
              <span>29 &ndash; 31st July 2026</span>
            </div>
            <div className="flex text-base lg:text-lg tracking-[-1px] text-[#232323] font-normal items-center">
              <img
                src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597463/clock_dmlhgc.jpg?_s=public-apps"
                alt="Time"
                className="mr-2 w-6 lg:w-7"
              />
              <span>10:00 AM - 4:00 PM (Daily)</span>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
            initial="initial"
            animate="animate"
            variants={fadeInLeft}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <SecondaryBtn label="Become a Sponsor" href="/sponsorship" />
            <PrimaryBtn label="Register as Exhibitor" href="/exhibitor" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
