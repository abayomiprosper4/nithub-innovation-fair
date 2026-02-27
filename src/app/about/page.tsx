import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import { IMAGES } from "@/utils/assets";

export default function AboutPage() {
  return (
    <main className="maindiv bg-linear-to-br from-gray-white via-gray-100 to-white min-h-screen font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:pt-20 lg:pb-50">
        <div className="mt-10">
          <h1 className="text-4xl md:text-5xl mb-8 md:mb-12 font-bold text-gray-900 text-center lg:text-left">
            About Nithub
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-justify lg:text-left">
                <span className="text-black font-semibold">Nithub</span> is the
                official Innovation & Technology Hub of the{" "}
                <span className="text-black font-semibold">
                  University of Lagos
                </span>
                , established to nurture innovation, entrepreneurship, and
                technology-driven solutions within the university and beyond.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-justify lg:text-left">
                Over the past five years, NITHUB has supported{" "}
                <span className="text-black font-semibold">
                  student founders, early-stage startups
                </span>
                , and{" "}
                <span className="text-black font-semibold">researchers</span>,
                enabling them to transform ideas into impactful solutions
                through{" "}
                <span className="text-black font-semibold">
                  incubation, acceleration, mentorship
                </span>
                , and{" "}
                <span className="text-black font-semibold">
                  industry collaboration
                </span>
                .
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-justify lg:text-left">
                By bridging academia, industry, and the startup ecosystem,
                NITHUB has positioned UNILAG as a leading institution for{" "}
                <span className="text-black italic font-semibold">
                  innovation
                </span>{" "}
                and
                <span className="text-black italic font-semibold">
                  {" "}
                  entrepreneurship
                </span>{" "}
                in Nigeria.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
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
