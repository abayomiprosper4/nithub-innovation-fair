"use client";

import Image from "next/image";
import PrimaryBtn from "@/Components/PrimaryBtn";
import { IMAGES } from "@/utils/assets";
import SecondaryBtn from "@/Components/SecondaryBtn";
import { motion } from "framer-motion";

const fallOrder = [
  "Industry leaders",
  "Students",
  "Developers",
  "Designers",
  "Creators",
  "Policy makers",
  "Startup founders",
  "Investors",
  "Researchers",
];

const getDelay = (label: string): number => fallOrder.indexOf(label) * 0.85;
const tags = [
  {
    label: "Researchers",
    color: "bg-[#D8F9FF]",
    rotate: "rotate-12 lg:rotate-15",
    position: "top-[15%] left-[5%] lg:top-[16%] lg:left-[5%]",
  },
  {
    label: "Investors",
    color: "bg-[#EBD8FF]",
    rotate: "rotate-12 lg:rotate-15",
    position: "top-[15%] left-[52%] lg:top-[16%] lg:left-[45%]",
  },
  {
    label: "Startup founders",
    color: "bg-[#D8F9FF]",
    rotate: "-rotate-6 lg:-rotate-10",
    position: "top-[30%] left-[5%] lg:top-[28%] lg:left-[5%]",
  },
  {
    label: "Policy makers",
    color: "bg-[#F9FFD8]",
    rotate: "-rotate-6 lg:-rotate-10",
    position: "top-[35%] left-[45%] lg:top-[30%] lg:left-[42%]",
  },
  {
    label: "Creators",
    color: "bg-[#D8ECFF]",
    rotate: "rotate-12 lg:rotate-15",
    position: "top-[58%] left-[5%] lg:top-[45%] lg:left-[3%]",
  },
  {
    label: "Designers",
    color: "bg-[#D8DAFF]",
    rotate: "-rotate-35 lg:-rotate-35",
    position: "top-[55%] left-[30%] lg:top-[45%] lg:left-[25%]",
    z: "z-10",
  },
  {
    label: "Developers",
    color: "bg-[#FFD8D8]",
    rotate: "rotate-12",
    position: "top-[65%] left-[50%] lg:top-[45%] lg:left-[50%]",
  },
  {
    label: "Students",
    color: "bg-[#FFD8F8]",
    rotate: "-rotate-12",
    position: "top-[82%] left-[5%] lg:top-[60%] lg:left-[8%]",
  },
  {
    label: "Industry leaders",
    color: "bg-[#E0FFD8]",
    rotate: "-rotate-15",
    position: "top-[85%] left-[35%] lg:top-[60%] lg:left-[35%]",
  },
];

export default function Attendee() {
  return (
    <section className="bg-[#F3F4F6] py-12 px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center lg:text-left font-medium tracking-tight text-gray-900 mb-1">
          Who can attend?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 sm:h-125 lg:h-150 w-full flex justify-center lg:block">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className={`
        absolute px-4 py-1.5 lg:px-8 lg:py-2 rounded-full 
        text-xl sm:text-base lg:text-[30px] font-medium text-gray-800 
        cursor-default whitespace-nowrap shadow-sm
        ${tag.color} ${tag.rotate} ${tag.z || "z-0"} ${tag.position}
      `}
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  ease: [0.21, 1.02, 0.49, 1],
                  delay: getDelay(tag.label),
                }}
              >
                {tag.label}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-xl overflow-hidden mb-8 w-full">
              <Image
                src={IMAGES.attendee}
                alt="People networking"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <SecondaryBtn label="Become a Sponsor" href="/sponsorship" />
              <PrimaryBtn label="Register Interest" href="/interest" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
