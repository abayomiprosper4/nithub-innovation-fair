import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import { IMAGES } from "@/utils/assets";

export default function AboutPage() {
  return (
    <main className="maindiv bg-linear-to-br from-transparent via-gray-100/40 to-gray-100/10 min-h-screen font-sans">
      <Navbar />

      <div className="relative overflow-hidden max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:pt-20 lg:pb-50">
        
        <div className="absolute inset-0 lg:hidden -z-10">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <Image
            src={IMAGES.abtpage}
            alt="Mobile Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-10 relative z-20">
          <h1 className="text-4xl lg:text-5xl mb-8 md:mb-12 font-bold text-white lg:text-gray-900 text-center lg:text-left">
            About Nithub
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-white lg:text-gray-700 leading-relaxed text-justify lg:text-left">
                <span className="text-[#62CF3A] lg:text-black font-semibold">NITHUB</span> is the
                official Innovation & Technology Hub of the
                University of Lagos, established to nurture innovation, entrepreneurship, and
                technology-driven solutions within the university and beyond.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white lg:text-gray-700 leading-relaxed text-justify lg:text-left">
                Over the past five years, NITHUB has supported
                student founders, early-stage startups, and researchers,
                enabling them to transform ideas into impactful solutions
                through incubation, acceleration, mentorship, and industry collaboration.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white lg:text-gray-700 leading-relaxed text-justify lg:text-left">
                By bridging academia, industry, and the startup ecosystem,
                NITHUB has positioned UNILAG as a leading institution for innovation
                and entrepreneurship in Nigeria.
              </p>
            </div>
            <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end">
              <div className="relative inline-block">
                <div className="relative">
                  <div className="relative z-10 rounded-4xl overflow-hidden shadow-lg">
                    <Image
                      src={IMAGES.abtpage}
                      alt="Nithub Demo Day presentation"
                      width={700}
                      height={900}
                      className="object-cover w-full aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}