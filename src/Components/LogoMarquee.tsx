import Image from "next/image";

const logos = [
  { src: "/Images/nigerian-ai.png", alt: "Nigeria AI" },
  { src: "/Images/cropped-Screenshot.png", alt: "Moniepoint" },
  { src: "/Images/SWIFT-logo.png", alt: "Swift Logistics" },
  { src: "/Images/Galaxybackbone 2.png", alt: "Galaxy Backbone" },
  { src: "/Images/AI4D1.png", alt: "AI4D" },
  { src: "/Images/image 43.png", alt: "Afretec Network" },
  { src: "/Images/Vector.png", alt: "UNDP" },
  { src: "/Images/NITHUB-768x431-removebg-preview 1.png", alt: "nithub" },
    { src: "/Images/cardss.png", alt: "nithub" },
];

export default function LogoMarquee() {
  return (
    <section className="w-full bg-[#fcfaef] py-20 my-10 overflow-hidden">
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-[#f6f8f3] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-[#f6f8f3] to-transparent z-10" />

        {/* Marquee track */}
        <div className="flex w-max animate-marquee gap-20 px-20">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-40"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="object-contain h-14 opacity-80 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
