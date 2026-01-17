import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-16">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/nithub-logo.svg"
              alt="Nithub Logo"
              width={120}
              height={40}
            ></Image>
          </Link>
        </div>

        <div className="flex items-center gap-7">
          <Link
            href="/"
            className="lg:text-sm hover:underline underline-offset-4 text-gray-700 ease-in-out duration-200 transition-all"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="lg:text-sm hover:underline underline-offset-4 text-gray-700 ease-in-out duration-200 transition-all"
          >
            About
          </Link>

          <Link
            href="/sponsorships"
            className="lg:text-sm hover:underline underline-offset-4 text-gray-700 ease-in-out duration-200 transition-all"
          >
            Sponsorships
          </Link>
        </div>
        <div>
          <Link
            href="/register-interest"
            className="lg:text-sm px-6 py-2 rounded-full text-white bg-green-500 hover:bg-green-600 ease-in-out duration-200 transition-all"
          >
            Register Interest
          </Link>
        </div>
      </div>
    </nav>
  );
}
