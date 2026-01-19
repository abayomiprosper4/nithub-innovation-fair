import Image from "next/image";

export default function Persons() {
  // Four speakers with distinct images and info
  const speakers = [
    {
      src: "/Images/image 16.png",
      alt: "Dr Odumuyiwa Victor",
      name: "Dr Odumuyiwa Victor",
      title1: "Chairperson MIRG.",
      title2: "University of Lagos",
    },
    {
      src: "/Images/Dr Chika 1.png",
      alt: "Dr Chika",
      name: "Dr Chika",
      title1: "Research Lead",
      title2: "Tech Institute",
    },
    {
      src: "/Images/Adewole-Adetunji 1 1.png",
      alt: "Prof Adewole",
      name: "Prof Adewole Adetunji",
      title1: "Keynote Speaker",
      title2: "Innovation Lab",
    },
    {
      src: "/Images/Prof 3.png",
      alt: "Prof Jane",
      name: "Prof Jane Omotoso",
      title1: "Panelist",
      title2: "University of Lagos",
    },
  ];

  return (
    <main className="min-h-screen bg-white py-12 px-4 font-['DM_Sans',_sans-serif]">
      <div className="my-10"><span className="text-5xl font-semibold text-left">Speakers</span></div>
      <div className="flex flex-wrap items-center justify-evenly gap-y-8 lg:flex-nowrap">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex basis-full flex-col items-center sm:basis-[48%] lg:basis-[24%]"
          >
            <div
              className="relative flex aspect-square w-full items-end justify-center 
                         bg-[radial-gradient(circle_at_center,_white_0%,_rgb(85,163,54)_70%)] 
                         [clip-path:polygon(50%_0%,_100%_38%,_82%_100%,_18%_100%,_0%_38%)]"
            >
              <div className="relative h-[70%] w-[70%]">
                <Image
                  src={speaker.src}
                  alt={speaker.alt}
                  width={280}
                  height={280}
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            {/* Person Info Section */}
            <div className="w-full rounded-[5px] bg-[linear-gradient(white_0%,_rgba(85,163,54,0.8)_50%)] py-4 text-center">
              <p className="mb-1 text-[20px] font-normal tracking-[-1px] text-[rgb(0,117,0)]">
                {speaker.name}
              </p>
              <p className="text-[16px] leading-[17px] tracking-[-1px] text-black">
                <span className="block">{speaker.title1}</span>
                <span className="block">{speaker.title2}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
