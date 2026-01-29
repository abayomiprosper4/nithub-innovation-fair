import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link"; // Use Next.js Link for better performance

export default function Footer() {
  // Group 1: General Info
  const generalLinks = [
    { name: "About Nithub", href: "/about" },
    { name: "Event Overview", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Group 3: Engagement
  const engagementLinks = [
    { name: "Register Interest", href: "/interest" },
    { name: "Sponsorship", href: "/sponsorship" },
    { name: "Exhibit", href: "/exhibitor" },
  ];

  return (
    <footer className="maindiv tracking-wide bg-[#F3F4F6] py-12 md:py-16 mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-4">
          
          {/* Brand Section */}
          <div className="w-full lg:w-[35%]">
            <div className="mb-6 md:mb-8">
              <img
                src="/Images/nithub-logo.svg"
                alt="Logo"
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <p className="maindiv text-[18px] sm:text-[22px] text-justify md:text-[28px] text-[#1F2937] leading-[1.3] font-medium tracking-tight">
              Nithub is the official Innovation & Technology Hub of the
              University of Lagos, committed to nurturing innovation,
              entrepreneurship, and impact-driven solutions.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-row gap-12 sm:gap-16 lg:gap-24 lg:pb-1">
            <ul className="space-y-4 text-[15px] text-[#6B7280]">
              {generalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group relative block w-fit transition hover:text-[#62CF3A]">
                    {link.name}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#62CF3A] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 text-[15px] text-[#6B7280]">
              {engagementLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group relative block w-fit transition hover:text-[#62CF3A]">
                    {link.name}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#62CF3A] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="w-full lg:w-auto lg:pb-1">
            <div className="flex items-center gap-6 sm:gap-5 text-[#6B7280] flex-wrap lg:justify-end">
              <a href="https://linkedin.com" target="_blank" className="hover:text-[#62CF3A] hover:scale-110 transition p-1"><FiLinkedin size={24} /></a>
              <a href="https://facebook.com" target="_blank" className="hover:text-[#62CF3A] hover:scale-110 transition p-1"><FiFacebook size={24} /></a>
              <a href="https://wa.me/yournumber" target="_blank" className="hover:text-[#62CF3A] hover:scale-110 transition p-1"><FaWhatsapp size={24} /></a>
              <a href="https://twitter.com" target="_blank" className="hover:text-[#62CF3A] hover:scale-110 transition p-1"><FiTwitter size={24} /></a>
              <a href="https://instagram.com" target="_blank" className="hover:text-[#62CF3A] hover:scale-110 transition p-1"><FiInstagram size={24} /></a>
              <a href="https://tiktok.com" target="_blank" className="hover:text-[#62CF3A] hover:scale-110 transition p-1"><FaTiktok size={24} /></a>
            </div>
          </div>

        </div>

        <hr className="mt-12 md:mt-20 mb-8 md:mb-10 border-gray-300" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[#6B7280] text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} Nithub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}