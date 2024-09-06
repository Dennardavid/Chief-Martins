"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const navItemsRef = useRef([]);
  const pathname = usePathname();

  const isAsoebiPage = pathname === "/asoebi";
  const isAccommodationPage = pathname === "/accomodation";

  useEffect(() => {
    if (menuOpen) {
      gsap.to(navbarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        navItemsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.inOut",
        }
      );
    } else {
      gsap.to(navbarRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(navItemsRef.current, {
        x: -50,
        opacity: 0,
        stagger: -0.1,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${isAsoebiPage ? "text-black" : "text-white"} sticky top-0`}
    >
      <nav
        className={`flex justify-between items-center  ${
          isAsoebiPage || isAccommodationPage
            ? `lg:bg-amber-950/50 text-white`
            : `lg:hover:bg-white/20`
        }  lg:hover:backdrop-filter lg:hover:bg-opacity-15 lg:hover:backdrop-blur-md px-2 py-1 md:px-8 lg:px-10 ease-in-out duration-500`}
      >
        <Link href="/">
          <img src="/logo.webp" alt="logo" className="w-14 md:w-16 lg:w-20" />
        </Link>

        {/* Mobile Menus */}
        <div
          ref={navbarRef}
          className="fixed top-0 right-0 text-white bg-amber-950 backdrop-filter bg-opacity-30 backdrop-blur z-50 w-[80%] h-[55%] flex flex-col justify-center items-center gap-5 p-8 lg:hidden md:gap-5 xl:gap-10 md:text-base 2xl:text-xl"
          style={{ transform: "translateX(100%)" }}
        >
          <ul className="list-none w-full flex flex-col gap-4 items-center">
            {[
              "/order-of-events",
              "/direction",
              "/accomodation",
              "/logistics",
              "/asoebi",
              "/donation",
            ].map((href, index) => (
              <li
                key={index}
                ref={(el) => (navItemsRef.current[index] = el)}
                className="capitalize"
              >
                <Link href={href}>{href.split("/")[1].replace(/-/g, " ")}</Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMenu}
            className="flex lg:hidden absolute top-3 right-3 ease-in-out duration-500"
          >
            <IoCloseSharp size={35} />
          </button>
        </div>

        {/* Desktop Menus */}
        <ul className="hidden lg:flex md:gap-5 xl:gap-10 md:text-base 2xl:text-xl">
          <li>
            <Link href="/order-of-events">Order Of Events</Link>
          </li>
          <li>
            <Link href="/direction">Direction</Link>
          </li>
          <li>
            <Link href="/accomodation">Accommodation</Link>
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
        </ul>

        <button onClick={toggleMenu} className="flex lg:hidden">
          <IoMenuSharp size={35} />
        </button>
      </nav>
    </header>
  );
}
