import Link from "next/link";

type PrimaryBtnProps = {
  label: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  download?: string | boolean;
};

export default function PrimaryBtn({
  label,
  href,
  type = "button",
  disabled = false,
  download, 
}: PrimaryBtnProps) {
  const baseClasses =
    "inline-flex items-center text-[16px] cursor-pointer justify-center lg:text-md px-9 py-2 rounded-full text-white bg-[#62CF3A] hover:bg-black transition-all transform hover:scale-105 active:scale-95 duration-200 ease-in-out";

  const disabledClasses = disabled
    ? "opacity-60 cursor-not-allowed hover:scale-100 active:scale-100"
    : "";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${disabledClasses}`} download={download}>
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
