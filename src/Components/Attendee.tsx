"use client";

import Image from "next/image";
import PrimaryBtn from "@/Components/PrimaryBtn";
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

const getDelay = (label: string): number => fallOrder.indexOf(label) * 0.65;

const tags = [
  {
    label: "Researchers",
    color: "bg-cyan-100",
    rotate: "rotate-12 lg:rotate-15",
    top: "15%",
    left: "5%",
    mTop: "2%",
    mLeft: "5%",
  },
  {
    label: "Investors",
    color: "bg-purple-100",
    rotate: "rotate-12 lg:rotate-15",
    top: "15%",
    left: "45%",
    mTop: "12%",
    mLeft: "50%",
  },
  {
    label: "Startup founders",
    color: "bg-green-100",
    rotate: "-rotate-6 lg:-rotate-10",
    top: "30%",
    left: "5%",
    mTop: "25%",
    mLeft: "2%",
  },
  {
    label: "Policy makers",
    color: "bg-yellow-100",
    rotate: "-rotate-6 lg:-rotate-10",
    top: "30%",
    left: "42%",
    mTop: "38%",
    mLeft: "40%",
  },
  {
    label: "Creators",
    color: "bg-blue-100",
    rotate: "rotate-12 lg:rotate-15",
    top: "45%",
    left: "5%",
    mTop: "52%",
    mLeft: "5%",
  },
  {
    label: "Designers",
    color: "bg-indigo-200",
    rotate: "-rotate-12 lg:-rotate-25",
    top: "45%",
    left: "30%",
    z: "z-10",
    mTop: "65%",
    mLeft: "25%",
  },
  {
    label: "Developers",
    color: "bg-red-100",
    rotate: "rotate-12",
    top: "45%",
    left: "55%",
    mTop: "55%",
    mLeft: "55%",
  },
  {
    label: "Students",
    color: "bg-pink-100",
    rotate: "-rotate-12",
    top: "60%",
    left: "5%",
    mTop: "80%",
    mLeft: "2%",
  },
  {
    label: "Industry leaders",
    color: "bg-green-200",
    rotate: "-rotate-15",
    top: "60%",
    left: "35%",
    mTop: "85%",
    mLeft: "45%",
  },
];

export default function Attendee() {
  return (
    <section className="maindiv bg-[#ffffff] mt-5 py-10 px-6 md:px-12 lg:px-24 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center lg:text-left font-bold text-gray-900">
          Who can attend?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-120 sm:h-137.5 lg:h-150 w-full">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className={`
    absolute px-4 py-2 lg:px-8 lg:py-3 rounded-full 
    text-sm sm:text-lg lg:text-2xl font-medium text-gray-800 
    shadow-sm transition-transform hover:scale-105 cursor-default 
    whitespace-nowrap 
    ${tag.color} ${tag.rotate} ${tag.z || "z-0"}
  `}
                initial={{
                  y: -200,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: getDelay(tag.label),
                }}
                style={{
                  top:
                    typeof window !== "undefined" && window.innerWidth < 1024
                      ? tag.mTop
                      : tag.top,
                  left:
                    typeof window !== "undefined" && window.innerWidth < 1024
                      ? tag.mLeft
                      : tag.left,
                }}
              >
                {tag.label}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full border border-gray-100">
              <Image
                src="/Images/WhatsApp Image 2026-01-21 at 12.18.34(6).jpeg"
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
