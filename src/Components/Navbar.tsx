"use client";

import { IMAGES } from "@/utils/assets";
import Image from "next/image";
import { useState, useEffect } from "react"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryBtn from "./PrimaryBtn";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  

  const [isProgrammeInView, setIsProgrammeInView] = useState(false);
  const [isAboutEventInView, setIsAboutEventInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {

    const updateSize = () => setIsMobile(window.innerWidth < 1024);
    const handleScroll = () => setIsAtTop(window.scrollY === 0);
    
    window.addEventListener("resize", updateSize);
    window.addEventListener("scroll", handleScroll);
    updateSize();
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "programme") {
            setIsProgrammeInView(entry.isIntersecting);
          }
          if (entry.target.id === "about-event") {
            setIsAboutEventInView(entry.isIntersecting);
          }
        });
      },
      { 
        rootMargin: "-64px 0px -90% 0px", 
        threshold: 0 
      }
    );

    const progTarget = document.getElementById("programme");
    const aboutTarget = document.getElementById("about-event");
    
    if (progTarget) observer.observe(progTarget);
    if (aboutTarget) observer.observe(aboutTarget);

    return () => {
      if (progTarget) observer.unobserve(progTarget);
      if (aboutTarget) observer.unobserve(aboutTarget);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const isDark = 
    (pathname === "/about" && isMobile) || 
    isProgrammeInView || 
    (isAboutEventInView && isMobile);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sponsorships", href: "/sponsorship" },
  ];

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    const textColor = isDark ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-black";
    const activeColor = isDark ? "text-white" : "text-black";

    return `
      group relative block w-fit lg:text-md py-2 lg:py-0
      transition-colors duration-200 ease-in-out
      ${isActive ? activeColor : textColor}
    `;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-xl border-b 
      ${isDark ? "bg-black/10 border-white/10" : "bg-[#F2F2F74D]/30 border-black/5"}
      ${isAtTop ? "shadow-none" : "shadow-md"}`} 
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-16">
        <div className="flex items-center w-auto h-auto">
          <Link href="/">
            <Image
              src={isDark ? IMAGES.nitwhite : IMAGES.nithubLogo}
              alt="Nithub Logo"
              width={100}
              height={100}
              className="transition-opacity duration-300"
              loading="eager"
            />
          </Link>
        </div>


        <div className="hidden lg:flex text-sm tracking-wider items-center gap-7 mr-40">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkClass(link.href)}>
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#62CF3A] transition-all duration-300 group-hover:w-full ${
                  pathname === link.href ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <PrimaryBtn label="Become a Sponsor" href="/sponsorship" />
        </div>

        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`text-2xl transition-colors ${isDark ? "text-white" : "text-black"}`}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 text-center left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-4 lg:hidden border-t border-gray-100"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="block text-lg font-medium text-gray-800 hover:text-[#62CF3A] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div className="pt-4">
              <PrimaryBtn label="Become a Sponsor" href="/sponsorship" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}