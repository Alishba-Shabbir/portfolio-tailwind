import Link from "next/link";

export default function Header() {
  return (
    <div className="h-[15vh] w-full bg-[#262525]  ">
      <ul className="flex flex-col sm:flex-row list-none gap-4 sm:gap-[3.5rem] uppercase justify-center items-center py-[20px] sm:py-[35px] text-white text-[1rem] sm:text-[1.2rem]">
        <li>
          <Link href="/" className="underline">Portfolio</Link>
        </li>
        <li>
          <Link href="/about-us">About Me</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Me</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
      </ul>
    </div>
  );
}
