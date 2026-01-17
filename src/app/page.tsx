import LogoMarquee from "@/Components/LogoMarquee";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7f8]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        <div className="relative container mx-auto px-6 lg:px-16 max-w-7xl">
          {/* TEXT + IMAGE */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* LEFT — TEXT */}
            <div className="relative text-left space-y-6">
              <h1 className="text-[3.2rem] md:text-[3.8rem] lg:text-[4.2rem] font-extrabold leading-tight tracking-tight text-black">
                Nithub at 5:
                <br />
                <span className="relative inline-block">
                  Celebrating
                  <span className="absolute left-full ml-4 -top-1 text-green-500 italic font-extrabold text-[3.5rem] md:text-[4.2rem] lg:text-[4.8rem] z-20 whitespace-nowrap">
                    Innovation
                  </span>
                </span>
              </h1>

              <h2 className="text-[2.8rem] md:text-[3.3rem] lg:text-[3.8rem] font-bold text-black leading-tight">
                Shaping the future
              </h2>

              <p className="text-2xl md:text-2xl text-gray-800 max-w-xl leading-loose pt-2">
                Join founders, students, investors, corporates, and policymakers
                as we mark five years of innovation at the University of Lagos
                and unveil the next phase of impact.
              </p>

              {/* Event Details */}
              <div className="lg:text-lg flex gap-2 pt-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span>University of Lagos</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span>March 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span>10:00 AM – 4:00 PM (Daily)</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="px-6 py-2 rounded-full border border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition"
                >
                  Become a Sponsor
                </Link>

                <Link
                  href="#"
                  className="px-6 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                >
                  Register as Exhibitor
                </Link>
              </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative">
              <div className="relative rounded-4xl overflow-hidden shadow-xl border-b-10 border-r-10 border-green-500">
                <Image
                  src="/Images/Image card2.png"
                  alt="Nithub Demo Day presentation"
                  width={780}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoMarquee />
      <div className="grid lg:grid-cols-2 gap-10 mx-auto my-5">
        <div className="">
          <span className="text-6xl font-semibold">About the Event</span>
          <p className="text-2xl py-5">
            The NITHUB 5th Year Anniversary & Innovation Fair is a two-day
            innovation festival celebrating five years of impact by the
            University of Lagos’ official innovation and technology hub.
          </p>

          <p className="text-2xl py-5">
            The event brings together student innovators, startups, researchers,
            corporates, investors, and policymakers to explore ideas, showcase
            solutions, and unlock new partnerships shaping the future of
            technology and entrepreneurship in Nigeria.
          </p>
        </div>
        <div>
          <Image
            src="/Images/DSC07811.png"
            alt="About the event"
            width={800}
            height={400}
            className="rounded-4xl"
          ></Image>
        </div>
      </div>
    </main>
  );
}
