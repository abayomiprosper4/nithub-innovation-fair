"use client";

import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import "./HeroModule.css";

const Hero = () => {
  const images = [
    "/Images/Image card1.png",
    "/Images/Image card2.png",
    "/Images/Image card3.png",
    "/Images/Image card4.png",
    "/Images/Image card5.png",
    "/Images/Image card1-copy.png", // Duplicate of first for loop
  ];

  return (
    <section className="mx-[6.25vw] 2xl:mx-auto max-w-480">
      <div>
        {/* Landing Container */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[10vh]">
          {/* Landing Text */}
          <div className="basis-[45%] relative">
            {/* Blurry Dot Background */}
            <div
              className="absolute top-[5%] -left-[10%] w-[20vw] h-[20vw] rounded-full blur-[30px] -z-10"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(25, 231, 54, 0.7) 0%, rgba(0,0, 0, 0) 80%)",
              }}
            ></div>

            <div className="mb-5 text-[63px] tracking-[-3px] font-medium w-[200%] -mr-12.5 relative z-20">
              <h1 className="mb-8.5 leading-tight font-dm-sans">
                Nithub at 5: <br />
                Celebrating{" "}
                <span className="inline-flex flex-col h-21.25 overflow-hidden text-[#19E736] align-bottom">
                  <span className="block rotateText italic">Collaboration</span>
                  <span className="block rotateText italic">Innovation</span>
                  <span className="block rotateText italic">Creation</span>
                </span>{" "}
                <br />
                Shaping the future
              </h1>
            </div>

            <p className="m-0 text-[28px] leading-9 text-justify font-normal tracking-[-1px] whitespace-normal md:word-spacing-[6px]">
              Join founders, students, investors, corporates and policy makers
              as we mark five years of innovation at the University of Lagos and
              unveil the next phase of impact.
            </p>
          </div>

          {/* Landing Image */}
          <div className="basis-[55%] relative w-full">
            {/* Image Underlay (Green Box) */}
            <div className="w-full bg-[#19E736] rounded-[15px] aspect-3/2"></div>

            {/* Image Container (Snapping Animation) */}
            <div className="aspect-3/2 absolute top-0 left-0 z-10 w-full overflow-hidden rounded-[15px] containerSnap bg-white">
              {/* Image Reel (Sliding Animation) */}
              <div className="imageReel">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Slide ${index}`}
                    className="w-[calc(100%/6)] h-full object-cover block"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 mb-7.5">
          <div className="flex flex-wrap items-center mt-6 mb-7.5">
            <div className="flex text-lg tracking-[-1px] text-[#232323] font-normal mr-9 items-center justify-center">
              <img
                src="/Images/location.svg"
                alt="Location"
                className="mr-1 w-7"
              />
              <span>University of Lagos</span>
            </div>
            <div className="flex text-lg tracking-[-1px] text-[#232323] font-normal mr-9 items-center justify-center">
              <img
                src="/Images/calendar-2.svg"
                alt="Date"
                className="mr-1 w-7"
              />
              <span>March 2026</span>
            </div>
            <div className="flex text-lg tracking-[-1px] text-[#232323] font-normal mr-9 items-center justify-center">
              <img src="/Images/clock.svg" alt="Time" className="mr-1 w-7" />
              <span>10:00 AM - 4:00 PM (Daily)</span>
            </div>
          </div>

          <div className="block space-x-4">
            <SecondaryBtn label="Become a Sponsor" href="/sponsorship" />
            <PrimaryBtn label="Register as Exhibitor" href="/exhibitor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
