import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/utils/assets";

export default function Footer() {
  const generalLinks = [
    { name: "Nithub", href: "/about" },
    { name: "Event Overview", href: "/#about-section" },
  ];

  const engagementLinks = [
    { name: "Register Interest", href: "/interest" },
    { name: "Sponsorship", href: "/sponsorship" },
    { name: "Exhibit", href: "/exhibitor" },
  ];

  return (
    <footer className="w-full bg-[#F2F2F7] pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-x-4">
<div className="lg:col-span-2 max-w-md flex flex-col">
<div className="mb-8 w-auto h-auto">
              <Image
                src={IMAGES.nithubLogo}
                alt="Nithub Logo"
                width={120}
                height={40}
                className="object-contain"
                loading="eager"
              />
            </div>
<div className="mt-6">
  <p className="text-[20px] md:text-[24px] text-justify text-[#1F2937] leading-normal font-medium tracking-tight">
    Nithub is the official Innovation & Technology Hub of the
    University of Lagos, committed to nurturing innovation,
    entrepreneurship, and impact-driven solutions.
  </p>
</div>
          </div>
<div className="lg:pt-26 lg:pl-10">
            <h4 className="text-black font-semibold mb-4 text-[17px] tracking-wide">
              About
            </h4>
            <ul className="space-y-5 text-[16px] text-[#909092]">
              {generalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group relative font-normal block w-fit transition-colors hover:text-[#62CF3A]"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 h-[2.5px] w-0 bg-[#62CF3A] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<div className="lg:pt-26">
            <h4 className="text-black font-medium mb-4 text-[17px] tracking-wide">
              Register
            </h4>
            <ul className="space-y-5 text-[16px] text-[#909092]">
              {engagementLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group relative font-normal block w-fit transition-colors hover:text-[#62CF3A]"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 h-[2.5px] w-0 bg-[#62CF3A] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<div className="lg:pt-26">
            <h4 className="text-black font-semibold mb-4 text-[17px] tracking-wide">
              Contact
            </h4>
            <div className="space-y-5 text-[15px] text-[#8E8E93] mb-6">
              <p className="hover:text-[#62CF3A] font-normal transition-colors cursor-pointer break-all">
                info-nitdahub@unilag.edu.ng
              </p>
              <p className="hover:text-[#62CF3A] font-normal transition-colors cursor-pointer break-all">
                community-nithub@unilag.edu.ng
              </p>
            </div>

            <div className="flex items-center gap-5 text-[#8E8E93]">
              <a
                href="https://www.linkedin.com/company/nithub/posts/?feedView=all"
                className="hover:text-[#62CF3A] transition-transform hover:-translate-y-1"
              >
                <FiLinkedin size={22} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555262481803"
                className="hover:text-[#62CF3A] transition-transform hover:-translate-y-1"
              >
                <FiFacebook size={22} />
              </a>
              <a
                href="#"
                className="hover:text-[#62CF3A] transition-transform hover:-translate-y-1"
              >
                <FaWhatsapp size={22} />
              </a>
              <a
                href="https://x.com/nithub_lag"
                className="hover:text-[#62CF3A] transition-transform hover:-translate-y-1"
              >
                <FaXTwitter size={22} />
              </a>
              <a
                href="https://www.instagram.com/nithub_unilag/a"
                className="hover:text-[#62CF3A] transition-transform hover:-translate-y-1"
              >
                <FiInstagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-18 mb-10 border-gray-200" />

        <div className="pb-15">
          <p className="text-[15px] font-normal text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} Nithub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
