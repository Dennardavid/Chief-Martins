"use client";

import Navbar from "../components/navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function OrderOfEvents() {
  useGSAP(() => {
    gsap.from(".header", {
      duration: 1,
      y: -40,
      opacity: 0,
    });

    gsap.from(".header2", {
      duration: 1,
      y: -30,
      opacity: 0,
      delay: 0.8,
      stagger: 1.2,
    });

    gsap.from(".Intro", {
      duration: 3,
      y: -20,
      opacity: 0,
      delay: 0.9,
      stagger: 0.3,
    });
  });

  return (
    <>
      <main className="w-dvw bg-[url('/Chief-martins-small.png')] md:bg-[url('/Chief-martins-tab.png')] lg:bg-[url('/Chief-martins.png')] h-screen bg-[length:100%_100%] bg-no-repeat pb-1">
        <div className="fixed inset-0 bg-black bg-opacity-10 z-0">
          <Navbar />

          <div className="fixed inset-0 -z-50 w-[100%] min-h-screen bg-gradient-to-r from-black xl:from-5% ">
            <div className="text-white m-auto lg:ml-10 p-3 xl:p-5 w-[95%] lg:w-[600px] 2xl:w-[800px] bg-black backdrop-filter bg-opacity-30 backdrop-blur rounded-xl shadow-md shadow-white/20 text-justify relative top-[50%] md:top-[60%] lg:top-[45%] xl:top-[35%] 2xl:top-[40%]">
              <h1 className="header font-extrabold text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl">
                Order Of Events
              </h1>
              <h2 className="header2 font-extrabold text-base md:text-lg lg:text-xl 2xl:text-2xl lg:mt-2">
                Friday 6th September 2024
              </h2>
              <p className="Intro text-sm md:text-base 2xl:text-xl mt-1">
                8:00am: Body leaves Aro Mortuary in a Motorcade to her Father's
                compound in Arochukwu for lying state
              </p>

              <p className="Intro text-sm md:text-base 2xl:text-xl mt-1">
                10:00am - 11:00am: Funeral Service (to be coordinated by Bishop
                Chijioke Okoro)
              </p>
              <p className="Intro text-sm md:text-base 2xl:text-xl mt-1">
                12:00am: Interment
              </p>
              <p className="Intro text-sm md:text-base 2xl:text-xl mt-1">
                1:00pm: Social Activities/Entertainment of Guest @ White House
                Compound Arochukwu
              </p>

              <h2 className="header2 font-extrabold text-base md:text-lg lg:text-xl 2xl:text-2xl lg:mt-2">
                Sunday 6th September 2024
              </h2>
              <p className="Intro text-sm md:text-base 2xl:text-xl mt-1">
                Outing/Thanksgiving Service
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
