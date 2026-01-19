import LogoMarquee from "@/Components/LogoMarquee";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import PrimaryBtn from "@/Components/PrimaryBtn";
import Attendee from "@/Components/Attendee";
import Persons from "@/Components/Persons";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <Navbar />
      <div className="mt-10">
        <Hero />
      </div>
      <LogoMarquee />
      <div className="mx-auto h-200 pt-15 max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl pl-6 mt-6 space-y-6 font-bold text-black leading-tight">
              About the Event
            </h2>

            <div className="mt-6 text-justify space-y-4 leading-loose text-black text-2xl list-disc pl-6">
              The NITHUB 5th Year Anniversary & Innovation Fair is a two-day
              innovation festival celebrating five years of impact by the
              University of Lagos’ official innovation and technology hub.
            </div>

            <div className="mt-6 text-justify space-y-4 leading-loose text-black text-2xl list-disc pl-6">
              The event brings together student innovators, startups,
              researchers, corporates, investors, and policymakers to explore
              ideas, showcase solutions, and unlock new partnerships shaping the
              future of technology and entrepreneurship in Nigeria.
            </div>

            <div className="mt-10 inline-flex items-center rounded-full px-6 py-3 text-white font-semibold transition">
              <PrimaryBtn label={"Download Sponsorship Deck"} href={""} />
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/Images/DSC07811.png"
                alt="NITHUB Innovation Fair"
                width={700}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-40 left-6 right-6 mx-15 bg-white rounded-xl shadow-2xl p-6">
              <ul className="space-y-3 text-gray-800 text-base">
                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>2 days of innovation, ideas and impact</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>
                      Live Hackathon with real-world problem statements
                    </span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Startup exhibitions and demo days</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Investor Deal Room with real capital intent</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Keynotes, panels, and breakout sessions</span>
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#62CF3A]">✦</span>
                  <span className="text-sm">
                    <span>Strategic partnerships and talent discovery</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-100 mt-20">
        <Image
          src="/Images/Event overview section.svg"
          alt="Event Overview"
          width={1920}
          height={1080}
          className="w-full"
        />
      </div>
      <Attendee />
      <Persons />
      <Footer />
    </main>
  );
}
