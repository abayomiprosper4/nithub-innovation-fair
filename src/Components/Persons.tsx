import Image from "next/image";

export default function Persons() {
  // Four speakers with distinct images and info
  const speakers = [
    {
      src: "/Images/Prof 3.png",
      alt: "Prof. Ogunsola Folashade r",
      name: "Prof. Ogunsola Folashade ",
      title1: "Vice Chancellor",
      title2: "University of Lagos",
    },
    {
      src: "/Images/image 16.png",
      alt: "Dr. Odumuyiwa Victor",
      name: "Dr. Odumuyiwa Victor",
      title1: "Chairperson, MIRG.",
      title2: "University of Lagos",
    },
    {
      src: "placeholder.svg",
      alt: "",
      name: "Mr. John doe",
      title1: "Speaker",
      title2: "Lorem Ipsum College",
    },
    {
      src: "placeholder.svg",
      alt: "",
      name: "Mrs. Jane Doe",
      title1: "Speaker",
      title2: "Lorem Ipsum College",
    },
  ];

  return (
    <main className="maindiv min-h-screen bg-white py-12 px-4 font-['DM_Sans',sans-serif]">
      <div className="my-10 ml-10"><div className="maindiv text-5xl font-medium text-left">Speakers</div></div>
      <div className="flex flex-wrap items-center justify-evenly gap-y-8 lg:flex-nowrap">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex basis-full flex-col items-center sm:basis-[48%] lg:basis-[24%]"
          >
            <div
              className="relative flex aspect-square w-full items-end justify-center 
                         bg-[radial-gradient(circle_at_center,white_0%,rgb(85,163,54)_70%)] 
                         [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]"
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
            <div className="w-full rounded-[5px] bg-[linear-gradient(white_0%,rgba(85,163,54,0.8)_50%)] py-4 text-center">
              <p className="mb-1 text-[20px] font-dm-sans font-normal tracking-[-1px] text-[rgb(0,117,0)]">
                {speaker.name}
              </p>
              <p className="maindiv tracking-wide font-medium text-[16px] font-dm-sans leading-4.25 text-black">
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
