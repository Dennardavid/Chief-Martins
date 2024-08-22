import Link from "next/link";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="text-white">
      <nav className="flex justify-between items-center lg:hover:bg-slate-50 lg:hover:backdrop-filter lg:hover:bg-opacity-15 lg:hover:backdrop-blur-md px-2 md:px-8 lg:px-10 ease-in-out duration-500">
        <div className="logo">
          <img src="/logo.webp" alt="logo" className="w-14 md:w-20" />
        </div>
        <ul className="hidden lg:flex xl:gap-10 text-xl">
          <li>
            <Link href="/direction">Order of Events</Link>
          </li>
          <li>
            <Link href="/direction">Direction</Link>
          </li>
          <li>
            <Link href="/accomodation">Accomodation</Link>
          </li>
          <li>
            <Link href="/logistics">Logistics</Link>
          </li>
          <li>
            <Link href="/asoebi">Asoebi</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/donatihref">Donation</Link>
          </li>
        </ul>
        <IoMenuSharp size={35} className="flex lg:hidden"/>
      </nav>
    </header>
  );
}
