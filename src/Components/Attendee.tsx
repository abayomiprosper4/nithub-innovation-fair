import Image from "next/image";
import PrimaryBtn from "@/Components/PrimaryBtn";
import SecondaryBtn from "@/Components/SecondaryBtn";

const tags = [
  {
    label: "Researchers",
    color: "bg-cyan-100",
    rotate: "-rotate-12",
    top: "0",
    left: "10%",
  },
  {
    label: "Investors",
    color: "bg-purple-100",
    rotate: "rotate-12",
    top: "10%",
    left: "55%",
  },
  {
    label: "Startup founders",
    color: "bg-green-100",
    rotate: "-rotate-3",
    top: "25%",
    left: "5%",
  },
  { 
    label: "Policy makers",
    color: "bg-yellow-100",
    rotate: "rotate-6",
    top: "35%",
    left: "45%",
  },
  {
    label: "Creators",
    color: "bg-blue-100",
    rotate: "-rotate-6",
    top: "50%",
    left: "0%",
  },
  {
    label: "Designers",
    color: "bg-indigo-200",
    rotate: "-rotate-12",
    top: "55%",
    left: "25%",
    z: "z-10",
  },
  {
    label: "Developers",
    color: "bg-red-100",
    rotate: "rotate-12",
    top: "60%",
    left: "55%",
  },
  {
    label: "Students",
    color: "bg-pink-100",
    rotate: "-rotate-12",
    top: "75%",
    left: "5%",
  },
  {
    label: "Industry leaders",
    color: "bg-green-200",
    rotate: "rotate-6",
    top: "85%",
    left: "35%",
  },
];

export default function Attendee() {
  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl sm:text-center md:text-center lg:text-left font-bold text-gray-900 mb-12">
          Who can attend?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center">
          {/* Left Side: Tag Cloud */}
          <div className="relative h-[400px] w-full">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`absolute px-4 py-2 rounded-full text-lg md:text-xl font-medium text-gray-800 shadow-sm transition-transform hover:scale-105 cursor-default ${tag.color} ${tag.rotate} ${tag.z || "z-0"}`}
                style={{ top: tag.top, left: tag.left }}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <Image
                src="/Images/SC07843111.png"
                alt="People networking"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex justify-center items-center flex-wrap gap-4">
              <SecondaryBtn label="Become a Sponsor" href="/sponsorship" />
              <PrimaryBtn label="Register Interest" href="/interest" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
