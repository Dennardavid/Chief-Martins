"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-white">
      <nav className="flex justify-between items-center lg:hover:bg-slate-50 lg:hover:backdrop-filter lg:hover:bg-opacity-15 lg:hover:backdrop-blur-md px-2 py-1 md:px-8 lg:px-10 ease-in-out duration-500">
        <Link href="/">
          <img src="/logo.webp" alt="logo" className="w-14 md:w-16 lg:w-20" />
        </Link>

        {/* Mobile Menus */}
        {menuOpen && (
          <div>
            <ul className="fixed top-0 right-0 text-white bg-amber-950 backdrop-filter bg-opacity-30 backdrop-blur z-50 w-[80%] h-2/4 flex flex-col justify-center items-center gap-5 p-8 lg:hidden md:gap-5 xl:gap-10 md:text-base 2xl:text-xl">
              <li>
                <Link href="/order-of-events">Order of Events</Link>
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
                <Link href="/donation">Donation</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <button onClick={toggleMenu} className="flex lg:hidden absolute top-4 right-4">
              {menuOpen ? (
                <IoCloseSharp size={35} />
              ) : (
                <IoMenuSharp size={35} />
              )}
            </button>
            </ul>
           
          </div>
        )}

        {/* Desktop Menus */}
        <ul className="hidden lg:flex md:gap-5 xl:gap-10 md:text-base 2xl:text-xl">
          <li>
            <Link href="/order-of-events">Order of Events</Link>
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
            <Link href="/donation">Donation</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="flex lg:hidden">
          {menuOpen ? <IoCloseSharp size={35} /> : <IoMenuSharp size={35} />}
        </button>
        {/* <IoMenuSharp size={35} className="flex lg:hidden" /> */}
      </nav>
    </header>
  );
}
