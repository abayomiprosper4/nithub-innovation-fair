import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="maindiv min-h-screen font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="mt-10">
        <h1 className="text-4xl md:text-5xl mb-8 md:mb-12 font-bold text-gray-900 text-center lg:text-left">
          About Nithub
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-justify lg:text-left">
              NITHUB is the official Innovation & Technology Hub of the University
              of Lagos, established to nurture innovation, entrepreneurship, and
              technology-driven solutions within the university and beyond.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-justify lg:text-left">
              Over the past five years, NITHUB has supported student founders,
              early-stage startups, and researchers, enabling them to transform
              ideas into impactful solutions through incubation, acceleration,
              mentorship, and industry collaboration.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-justify lg:text-left">
              By bridging academia, industry, and the startup ecosystem, NITHUB
              has positioned UNILAG as a leading institution for innovation and
              entrepreneurship in Nigeria.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative inline-block">
              {/* Decorative Green Box behind image */}
              <div className="absolute top-4 left-4 w-full h-full bg-[#62CF3A] rounded-4xl -z-10" />
              
              {/* Image Container */}
              <div className="relative z-10 bg-white rounded-4xl overflow-hidden shadow-lg">
                <img
                  src="/Images/aboutimage.png"
                  alt="Nithub Demo Day presentation"
                  width={600}
                  height={500}
                  className="object-cover w-full h-auto max-h-100 lg:max-h-125"
                />
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