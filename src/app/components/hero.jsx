"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(() => {
    gsap.from(".header", {
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.3,
    });

    gsap.from(".title", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from(".Intro", {
      duration: 1,
      y: -40,
      opacity: 0,
      stagger: 0.4,
    });
  });

  return (
    <section className="absolute px-4 md:px-8 lg:px-10 top-[50%] md:top-[40%] xl:top-[37%] 2xl:top-[40%] flex flex-col md:block lg:flex-row  gap-2 justify-between text-white">
      <div>
        <h1 className="header font-extrabold text-base md:text-xl lg:text-3xl 2xl:text-4xl">
          Join us as we celebrate the life of
        </h1>
        <h1 className="header font-extrabold text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl lg:mt-2">
          Chief Martins Dafe Abu,
        </h1>
        <h2 className="header font-semibold text-xl md:text-3xl lg:text-5xl lg:mt-2">
          Akhero of Olomu Kingdom,
        </h2>
        <h2 className="header font-semibold text-xl md:text-3xl lg:text-5xl lg:mt-2">
          Jesu Ovie of Olomoro Kingdom.
        </h2>

        <h2 className="title font-medium text-base md:text-xl lg:text-2xl lg:mt-2 2xl:text-3xl">
          UN Peace Ambassador, Legend of Niger Delta.
        </h2>
      </div>
      <div className="md:w-[500px] lg:w-[600px] 2xl:w-[800px] flex flex-col gap-2 md:mt-2 md:gap-3 p-3 md:p-4 bg-amber-950 backdrop-filter bg-opacity-30 backdrop-blur rounded-xl shadow-md shadow-white/20 text-justify">
        <p className="Intro text-sm md:text-base 2xl:text-xl">
          Celebrating the life and legacy of Chief Martins Dafe Abu, a beloved
          leader and cherished soul, through this memorial site, you can find
          burial details, offer support, and share messages of remembrance.
        </p>
        <p className="Intro text-sm md:text-xl base:text-xl font-bold">
          November 21st and 22nd, 2024
        </p>
      </div>
    </section>
  );
}
