import Link from "next/link";

type PrimaryBtnProps = {
  label: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function PrimaryBtn({
  label,
  href,
  type = "button",
  disabled = false,
}: PrimaryBtnProps) {
  const baseClasses =
    "inline-flex items-center justify-center lg:text-md px-6 py-2 rounded-full text-white bg-[#62CF3A] hover:bg-[#4b9e2d] transition-all transform hover:scale-105 active:scale-95 duration-200 ease-in-out";

  const disabledClasses = disabled
    ? "opacity-60 cursor-not-allowed hover:scale-100 active:scale-100"
    : "";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${disabledClasses}`}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${disabledClasses}`}
    >
      {label}
    </button>
  );
}
