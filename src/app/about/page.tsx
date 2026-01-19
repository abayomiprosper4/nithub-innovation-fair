import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen space-y-10">
      <Navbar />
      <div className="mx-10">
      <h1 className="text-5xl mb-10 font-semibold">About Nithub</h1>
      <div className="gap-20 flex">
        <div>
          <p className="text-2xl md:text-2xl text-justify text-gray-800 max-w-xl leading-loose">
            NITHUB is the official Innovation & Technology Hub of the University
            of Lagos, established to nurture innovation, entrepreneurship, and
            technology-driven solutions within the university and beyond.
          </p>
          <p className="text-2xl md:text-2xl text-justify text-gray-800 max-w-xl leading-loose">
            Over the past five years, NITHUB has supported student founders,
            early-stage startups, and researchers, enabling them to transform
            ideas into impactful solutions through incubation, acceleration,
            mentorship, and industry collaboration.
          </p>
          <p className="text-2xl md:text-2xl text-justify text-gray-800 max-w-xl leading-loose">
            By bridging academia, industry, and the startup ecosystem, NITHUB
            has positioned UNILAG as a leading institution for innovation and
            entrepreneurship in Nigeria.
          </p>
        </div>
        <div className="relative inline-block">
          <div className="absolute top-5 left-5 shadow-2xl bg-[#62CF3A]" />
          <div className="relative z-10">
            <Image
              src="/Images/aboutimage.png"
              alt="Nithub Demo Day presentation"
              width={700}
              height={500}
              className="object-cover w-140 h-150 rounded-4xl"
              priority
            />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  );
}
