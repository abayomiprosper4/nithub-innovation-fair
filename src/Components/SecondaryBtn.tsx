import Link from "next/link";

type PrimaryBtnProps = {
  label: string;
  href: string;
};

export default function PrimaryBtn({ label, href }: PrimaryBtnProps) {
  return (
    <Link
      href={href}
      className="px-6 py-1.25 rounded-full border transition-all transform hover:scale-105 active:scale-95 border-[#62CF3A] text-[#62CF3A] font-semibold hover:bg-[#62CF3A] hover:text-white duration-200 ease-in-out"
    >
      {label}
    </Link>
  );
}
