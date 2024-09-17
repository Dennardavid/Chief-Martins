"use client"

import Navbar from "../components/navbar";
import { useState } from "react";

export default function DonationPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayClick = () => {
    console.log("Overlay clicked, menuOpen:", menuOpen);
    setMenuOpen(false);
  };
  return (
    <main>
      <div className="w-dvw bg-[url('/gifts-mobile-bg.jpeg')] md:bg-[url('/gifts-tablet-bg.jpeg')] lg:bg-[url('/gifts-bg.jpeg')] h-screen full bg-cover bg-no-repeat">
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" id="wrapper">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {menuOpen && (
            <div
              className="fixed inset-0 z-40 lg:hidden"
              onClick={handleOverlayClick}
            ></div>
          )}
          <section className="relative top-[30%] lg:top-[29%] lg:left-[2.5%] flex flex-col mx-auto lg:mx-0 gap-3 px-2 md:px-8 lg:px-10 justify-center items-center mt-7 text-white backdrop-blur-md backdrop-filter bg-amber-950/20 w-[96%] md:w-[650px] p-4 rounded-md shadow-md shadow-white/20">
            <p className="text-sm md:text-base 2xl:text-xl w-[96%] md:w-[600px]">
              We sincerely appreciate your thoughts, prayers, and support during
              this difficult time. Your kind words and prayers have brought us
              great comfort, and we are deeply grateful. For those who would
              like to give a gift in memory, we kindly ask that you use the
              designated channel below. Thank you for your love and support.
            </p>
            <div className="flex items-center gap-4 bg-white/20 p-2 rounded-md shadow-md w-[96%] md:w-[600px]">
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
            <div className="flex items-center gap-4 bg-white/20 p-2 rounded-md shadow-md w-[96%] md:w-[600px]">
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
