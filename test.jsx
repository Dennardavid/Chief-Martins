"use client";

import Navbar from "../components/navbar";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";

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
      <main className="w-dvw bg-[url('/gifts-mobile.webp')] md:bg-[url('/gifts-tablet.webp')] lg:bg-[url('/gifts-bg.webp')] h-screen bg-cover bg-no-repeat pb-1">
        <div className="fixed inset-0 bg-black bg-opacity-10 z-0">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <div className="fixed inset-0 -z-50 w-[100%] min-h-screen lg:bg-gradient-to-r lg:from-black xl:from-5%">
            <div className="text-white flex flex-col justify-center items-center lg:block m-auto lg:ml-10 p-3 xl:p-5 w-full h-screen lg:h-[360px] 2xl:h-[420px] lg:w-[600px] 2xl:w-[800px] bg-black backdrop-filter bg-opacity-30 backdrop-blur lg:rounded-xl shadow-md shadow-white/20 lg:text-justify relative lg:top-[45%] xl:top-[35%] 2xl:top-[40%]">
              <div>
                <h1 className="header font-extrabold text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl">
                  Order Of Events
                </h1>
                <h2 className="header2 font-extrabold mt-[6px] text-base md:text-lg lg:text-xl 2xl:text-2xl lg:mt-3">
                  Service of Songs- Thursday 21st November 2024
                </h2>
                <p className="Intro text-base md:text-base 2xl:text-xl">
                  Time: 4:00pm <br />
                  Venue: Saint Peter Catholic Church Ekete Inland, Udu LGA,
                  Delta State. State
                </p>

                <h2 className="header2 font-extrabold text-base md:text-lg lg:text-xl 2xl:text-2xl mt-[6px] lg:mt-3">
                  Funeral Mass- 22nd November 2024
                </h2>
                <p className="Intro text-base md:text-base 2xl:text-xl">
                  Time: 9:00am <br />
                  Venue: Saint Peter Catholic Church Ekete Inland, Udu LGA,
                  Delta State.
                </p>
                <h2 className="header2 font-extrabold text-base md:text-lg lg:text-xl 2xl:text-2xl mt-[6px] lg:mt-3">
                  Burial Reception- 22nd November 2024
                </h2>
                <p className="Intro text-base md:text-base 2xl:text-xl">
                  Time: 12:30pm
                  <br />
                  Venue: Okpare Olomu Primary School. Okpare Olomu, Delta State.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
