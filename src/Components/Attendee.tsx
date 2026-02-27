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
    color: "bg-cyan-100",
    rotate: "rotate-12 lg:rotate-15",
    position: "top-[10%] left-[10%] lg:top-[15%] lg:left-[5%]",
  },
  {
    label: "Investors",
    color: "bg-purple-100",
    rotate: "rotate-12 lg:rotate-15",
    position: "top-[15%] left-[50%] lg:top-[15%] lg:left-[45%]",
  },
  {
    label: "Startup founders",
    color: "bg-green-100",
    rotate: "-rotate-6 lg:-rotate-10",
    position: "top-[28%] left-[8%] lg:top-[30%] lg:left-[5%]",
  },
  {
    label: "Policy makers",
    color: "bg-yellow-100",
    rotate: "-rotate-6 lg:-rotate-10",
    position: "top-[32%] left-[45%] lg:top-[30%] lg:left-[42%]",
  },
  {
    label: "Creators",
    color: "bg-blue-100",
    rotate: "rotate-12 lg:rotate-15",
    position: "top-[48%] left-[5%] lg:top-[45%] lg:left-[5%]",
  },
  {
    label: "Designers",
    color: "bg-indigo-200",
    rotate: "-rotate-12 lg:-rotate-25",
    position: "top-[52%] left-[28%] lg:top-[45%] lg:left-[30%]",
    z: "z-10",
  },
  {
    label: "Developers",
    color: "bg-red-100",
    rotate: "rotate-12",
    position: "top-[50%] left-[58%] lg:top-[45%] lg:left-[55%]",
  },
  {
    label: "Students",
    color: "bg-pink-100",
    rotate: "-rotate-12",
    position: "top-[70%] left-[10%] lg:top-[60%] lg:left-[5%]",
  },
  {
    label: "Industry leaders",
    color: "bg-green-200",
    rotate: "-rotate-15",
    position: "top-[72%] left-[42%] lg:top-[60%] lg:left-[35%]",
  },
];

export default function Attendee() {
  return (
    <section className="bg-white mt-5 py-10 px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center lg:text-left font-bold text-gray-900 mb-5">
          Who can attend?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-112.5 sm:h-125 lg:h-150 w-full flex justify-center lg:block">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className={`
                  absolute px-4 py-2 lg:px-8 lg:py-3 rounded-full 
                  text-sm sm:text-base lg:text-2xl font-medium text-gray-800 
                  shadow-md cursor-default whitespace-nowrap 
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
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 w-full border border-gray-100">
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
