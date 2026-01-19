"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PrimaryBtn from "./PrimaryBtn";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const isActive = pathname === href;

    return `
      lg:text-md
      underline-offset-4
      transition-all duration-200 ease-in-out
      ${
        isActive
          ? "text-black underline"
          : "text-gray-400 hover:text-black hover:underline"
      }
    `;
  };

  return (
    <nav className="bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/nithub-logo.svg"
              alt="Nithub Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-7 mr-45">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link href="/sponsorship" className={linkClass("/sponsorship")}>
            Sponsorships
          </Link>
        </div>
        <div>
          <PrimaryBtn label="Register Interest" href="/interest" />
        </div>
      </div>
    </nav>
  );
}
