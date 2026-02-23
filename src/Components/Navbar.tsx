"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryBtn from "./PrimaryBtn";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    return `
      lg:text-md
      block py-2 lg:py-0
      underline-offset-4
      transition-all duration-200 ease-in-out
      ${
        isActive
          ? "text-black underline"
          : "text-gray-500 hover:text-black hover:underline"
      }
    `;
  };

  return (
    <nav className="maindiv bg-[#fafafa]/70 backdrop-blur-sm border-b border-white/20 fixed w-full z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
        <div className="flex items-center">
          <a href="/">
            <img
              src="https://res.cloudinary.com/dw3ublxm7/image/upload/fl_preserve_transparency/v1771597480/nithub-logo_yme9a6.jpg?_s=public-apps"
              alt="Nithub Logo"
              width={120}
              height={40}
            />
          </a>
        </div>

        <div className="hidden lg:flex text-sm tracking-wider items-center gap-7 mr-40">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/sponsorship" className={linkClass("/sponsorship")}>Sponsorships</Link>
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

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 lg:hidden border-t">
          <Link href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className={linkClass("/about")} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/sponsorship" className={linkClass("/sponsorship")} onClick={() => setIsOpen(false)}>Sponsorships</Link>
          <div className="pt-4">
            <PrimaryBtn label="Register Interest" href="/interest" />
          </div>
        </div>
      )}
    </nav>
  );
}