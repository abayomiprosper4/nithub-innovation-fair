"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import SpeakersHeader from "./SpeakersHeader";

export default function Persons() {
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
      title1: "Vice Chancellor",
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
      title1: "Head of Department Computer Science",
      title2: "University of Lagos",
    },
  ];

  return (
    <div className="bg-[#d9ffc6] min-h-screen">
      <section className="relative w-full font-sans overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          <img 
            src="/Images/Banner full page.png" 
            alt="banner background" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="pt-10 pb-6 sm:pt-16 sm:pb-10">
            <SpeakersHeader />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group relative h-105 sm:h-100 w-full rounded-[2.5rem] border-2 border-black overflow-hidden bg-[#D6FBC4] transition-transform duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 h-[80%] w-full flex items-end justify-center overflow-hidden z-0">
                  <Image
                    src={speaker.src}
                    alt={speaker.alt}
                    width={400}
                    height={400}
                    className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 w-full h-[25%] bg-white border-t border-gray-100 flex flex-col items-center justify-center px-4 text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="font-bold text-base sm:text-lg italic text-black leading-tight mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 leading-snug">
                    <span className="block">{speaker.title1}</span>
                    <span className="block">{speaker.title2}</span>
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-2/5 transition-transform duration-500 ease-in-out z-20 flex flex-col items-center justify-end pb-45 px-4 text-center">
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"></div>

                  <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                    <div className="px-2">
                      <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl italic text-black leading-tight mb-2">
                        {speaker.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">
                        <span className="block">{speaker.title1}</span>
                        <span className="block">{speaker.title2}</span>
                      </p>
                    </div>

                    <button className="bg-[#62CF3A] hover:bg-[#50b02e] text-white text-xs font-bold px-8 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all active:scale-95 hover:scale-105">
                      View Bio <FiArrowUpRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}