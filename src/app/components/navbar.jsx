"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const navbarRef = useRef(null);
  const pathname = usePathname();

  const isActiveLink = (path) => pathname === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const URLs = [
    { path: "/", label: "Home" },
    { path: "/order-of-events", label: "Order Of Events" },
    { path: "/direction", label: "Direction" },
    { path: "/accomodation", label: "Accommodation" },
    { path: "/logistics", label: "Logistics" },
    { path: "/asoebi", label: "Asoebi" },
    { path: "/gifts", label: "Gifts" },
  ];

  const isHomePage = pathname === "/";
  const isOrderOfEventsPage = pathname === "/order-of-events";
  const isGiftsPage = pathname === "/gifts";

  return (
    <header
      className={`sticky top-0 z-50 ${
        isHomePage || isOrderOfEventsPage || isGiftsPage
          ? "bg-amber-950/0 backdrop-blur-none lg:hover:bg-white/20 lg:hover:backdrop-filter lg:hover:bg-opacity-15 lg:hover:backdrop-blur-md ease-in-out duration-500"
          : "bg-amber-950/50"
      } ${menuOpen ? "backdrop-blur-none" : "backdrop-blur-md"}`}
    >
      <nav className="flex justify-between items-center lg:items-center relative px-2 md:px-8 lg:px-10">
        <Link href="/" className="">
          <img src="/logo.webp" alt="logo" className="w-14 md:w-16 lg:w-20" />
        </Link>
        <div className="hidden items-center lg:flex">
          <ul className="flex flex-col lg:flex-row items-center lg:gap-8 xl:gap-10 md:text-base lg:text-xl">
            {URLs.map((url, index) => (
              <Link href={url.path} key={index}>
                <li className="group text-white">
                  {url.label}
                  <div
                    className={`bg-white h-[2px] ${
                      isActiveLink(url.path)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    } transition-all duration-500`}
                  ></div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white absolute top-[10px] right-3 md:right-8"
        >
          <IoMenuSharp size={35} />
        </button>
      </nav>
      <div
        ref={navbarRef}
        className={`flex flex-col items-center justify-center w-[80%] h-[55%] z-50 fixed top-0 lg:hidden bg-amber-950 backdrop-filter bg-opacity-50 backdrop-blur-md transition-all duration-500 ease-in-out ${
          menuOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-4">
          {URLs.map((url, index) => (
            <Link href={url.path} key={index}>
              <li className="group text-white">
                {url.label}
                <div
                  className={`bg-white h-[2px] ${
                    isActiveLink(url.path)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  } transition-all duration-500`}
                ></div>
              </li>
            </Link>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white absolute top-[10px] right-3"
        >
          <IoCloseSharp size={35} />
        </button>
      </div>
    </header>
  );
}