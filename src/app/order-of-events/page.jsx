"use client";

import Navbar from "../components/navbar";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import Events from "../components/events";

export default function OrderOfEvents() {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".header", {
      duration: 1,
      y: -40,
      opacity: 0,
    });

    gsap.from(".header2", {
      duration: 1,
      y: -10,
      opacity: 0,
      delay: 0.3,
    });

    gsap.from(".Intro", {
      duration: 3,
      y: -20,
      opacity: 0,
      delay: 0.7,
      stagger: 0.3,
    });
  });

  return (
    <>
      <main className="w-dvw bg-[url('/Chief-martins-small.webp')] md:bg-[url('/Chief-martins-tab.webp')] lg:bg-[url('/Chief-martins.webp')] h-screen bg-cover bg-no-repeat pb-1">
        <div className="fixed inset-0 bg-black bg-opacity-10 z-0">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="fixed inset-0 -z-50 w-[100%] min-h-screen lg:bg-gradient-to-r lg:from-black xl:from-5%">
            <div className="max-w-[1900px] mx-auto relative lg:top-[45%] xl:top-[35%]">
              <Events />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
