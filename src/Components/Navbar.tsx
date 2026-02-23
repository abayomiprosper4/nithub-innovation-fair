"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryBtn from "./PrimaryBtn";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sponsorships", href: "/sponsorship" },
  ];

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    return `
      group relative block w-fit
      lg:text-md py-2 lg:py-0
      transition-colors duration-200 ease-in-out
      ${isActive ? "text-black" : "text-gray-500 hover:text-black"}
    `;
  };

  return (
    <nav className="maindiv bg-[#fafafa]/70 backdrop-blur-xs border-b border-white/20 fixed w-full z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597480/nithub-logo_yme9a6.jpg?_s=public-apps"
              alt="Nithub Logo"
              width={120}
              height={40}
            />
          </Link>
        </div>

        {/* Desktop Links */}
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
          <PrimaryBtn label="Register Interest" href="/interest" />
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-black">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 lg:hidden border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={linkClass(link.href)}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#62CF3A] transition-all duration-300 group-hover:w-full ${
                  pathname === link.href ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
          <div className="pt-4">
            <PrimaryBtn label="Register Interest" href="/interest" />
          </div>
        </div>
      )}
    </nav>
  );
}