import Link from "next/link";

type PrimaryBtnProps = {
  label: string;
  href: string;
};

export default function PrimaryBtn({ label, href }: PrimaryBtnProps) {
  return (
    <Link
      href={href}
      className="inline-block lg:text-md px-6 py-2 rounded-full text-white bg-[#62CF3A] hover:bg-[#4b9e2d] transition-all transform hover:scale-105 active:scale-95 duration-200 ease-in-out"
    >
      {label}
    </Link>
  );
}
