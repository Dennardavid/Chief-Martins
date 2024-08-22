"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(() => {
    gsap.from(".header", {
      duration: 1.5,
      x: -120,
      opacity: 0,
      stagger: 0.3,
    });

    gsap.from(".title", { duration: 1.5, x: -120, opacity: 0, delay: 0.5 });
    gsap.from(".Intro", {
      duration: 1.5,
      y: -40,
      opacity: 0,
      stagger: 0.4,
    });
  });

  return (
    <section className="absolute px-4 md:px-8 lg:px-10 top-[50%] md:top-[40%] xl:top-[50%] flex flex-col lg:flex-row  gap-2 justify-between text-white">
      <div>
        <h1 className="header font-extrabold text-2xl md:text-3xl xl:text-7xl xl:w-[850px]">
          Chief Martins Dafe Abu
        </h1>
        <h2 className="header font-extrabold text-2xl md:text-3xl xl:text-6xl lg:mt-2">
          Akehro of Olomu Kingdom
        </h2>
        <h2 className="title font-medium text-base md:text-xl lg:text-3xl lg:mt-2">
          UN Peace Ambassador, Legend of Niger Delta.
        </h2>
      </div>
      <div className="xl:w-[500px] flex flex-col gap-2 md:gap-4 p-4 md:p-5 bg-amber-950 backdrop-filter bg-opacity-30 backdrop-blur xl:absolute xl:right-10 xl:bottom-16 rounded-xl shadow-md shadow-white/30 text-justify">
        <p className="Intro text-base md:text-xl font-bold lg:self-center">
          Honoring a Life of Love and Fulfillment
        </p>
        <p className="Intro text-sm">
          Celebrate the life and legacy of Chief Martins Dafe Abu, a beloved
          leader and cherished soul, through this memorial site, you can find
          burial details, offer support, and share messages of remembrance.
        </p>
      </div>
    </section>
  );
}
