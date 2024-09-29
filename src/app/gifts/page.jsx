"use client";

import Navbar from "../components/navbar";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function DonationPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".title", { duration: 1, y: -40, opacity: 0 });
    gsap.from(".Intro", {
      duration: 1,
      y: -40,
      opacity: 0,
      stagger: 0.4,
      delay: 0.5,
    });
  });

  return (
    <main>
      <div className="w-dvw bg-[url('/gifts-mobile.webp')] md:bg-[url('/gifts-tablet.webp')] lg:bg-[url('/gifts-bg.webp')] h-screen full bg-cover bg-no-repeat">
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="relative top-[30%] lg:top-[29%] max-w-[1600px] mx-auto px-2 md:px-8 lg:px-10">
          <section className=" flex flex-col mx-auto lg:mx-0 gap-3  justify-center items-center mt-7 text-white backdrop-blur-md backdrop-filter bg-amber-950/20 w-[96%] md:w-[650px] p-4 rounded-md shadow-md shadow-white/20">
            <p className="title text-sm md:text-base 2xl:text-xl w-[96%] md:w-[600px]">
              We sincerely appreciate your thoughts, prayers, and support during
              this difficult time. Your kind words and prayers have brought us
              great comfort, and we are deeply grateful. For those who would
              like to give a gift in memory, we kindly ask that you use the
              designated channel below. Thank you for your love and support.
            </p>
            <div className="Intro flex items-center gap-4 bg-white/20 p-2 rounded-md shadow-md w-[96%] md:w-[600px]">
              <img
                src="/wema.png"
                alt="wema bank"
                className="w-16 p-1 rounded-md bg-white/30"
              />
              <p className="text-sm md:text-base 2xl:text-xl">
                Account Number: 0231594918 <br />
                <span>Wema bank Naira account</span>
              </p>
            </div>
            <div className="Intro flex items-center gap-4 bg-white/20 p-2 rounded-md shadow-md w-[96%] md:w-[600px]">
              <img
                src="/wema.png"
                alt="wema bank"
                className="w-16 p-1 rounded-md bg-white/30"
              />
              <p className="text-sm md:text-base 2xl:text-xl">
                Account Number: 0620805548 <br />
                <span>Wema bank Dollar account</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
