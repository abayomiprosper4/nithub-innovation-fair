import { FaWhatsapp } from "react-icons/fa6";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] py-12 md:py-16 mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="w-full pr-30 lg:max-w-xl">
            <div className="mb-6 md:mb-8">
              <img 
                src="/Images/nithub-logo.svg" 
                alt="Logo" 
                className="h-8 md:h-10 w-auto" 
              />
            </div>
            <p className="text-[18px] sm:text-[22px] text-justify md:text-[28px] text-[#1F2937] leading-[1.3] font-medium tracking-tight">
              Nithub is the official Innovation & Technology Hub of the University
              of Lagos, committed to nurturing innovation, entrepreneurship, and
              impact-driven solutions.
            </p>
          </div>

          {/* Links and Socials Container */}
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-8 md:gap-16 lg:gap-24 pt-2 lg:pt-4 w-full lg:w-auto">
            
            <div className="flex flex-row pt-16 gap-12 sm:gap-16 lg:gap-24">
              <ul className="space-y-4 -mx-6 md:space-y-5 text-[15px] text-[#6B7280]">
                <li>
                  <a href="/about" className="hover:text-[#62CF3A] transition block">
                    About Nithub
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#62CF3A] transition block">
                    Event Overview
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#62CF3A] transition block">
                    Contact Us
                  </a>
                </li>
              </ul>

              <ul className="space-y-4 md:space-y-5 text-[15px] text-[#6B7280]">
                <li>
                  <a href="/interest" className="hover:text-[#62CF3A] transition block">
                    Register Interest
                  </a>
                </li>
                <li>
                  <a href="/sponsorship" className="hover:text-[#62CF3A] transition block">
                    Sponsorship
                  </a>
                </li>
                <li>
                  <a href="/exhibitor" className="hover:text-[#62CF3A] transition block">
                    Exhibit
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons - Adjusted for mobile touch targets */}
            <div className="flex items-center gap-6 sm:gap-5 text-[#6B7280]">
              <a href="#" className="hover:text-[#62CF3A] md:w-4.5 md:h-4.5 transition p-1" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-[#62CF3A] md:w-4.5 md:h-4.5 transition p-1" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-[#62CF3A] md:w-4.5 md:h-4.5 transition p-1" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="hover:text-[#62CF3A] md:w-4.5 md:h-4.5 transition p-1" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="hover:text-[#62CF3A] md:w-4.5 md:h-4.5 transition p-1" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="mt-12 md:mt-20 mb-8 md:mb-10 border-gray-200" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[#6B7280] text-center md:text-left">
            &copy; {new Date().getFullYear()} Nithub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}