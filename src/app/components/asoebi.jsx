"use client";

import Cart from "./icons/cart";
import Close from "./icons/close";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Asoebi() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [animationDone, setAnimationDone] = useState(true);
  const checkoutRef = useRef(null);

  useEffect(() => {
    setAnimationDone(false);

    if (checkoutOpen) {
      gsap.to(checkoutRef.current, {
        width: "35%",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => setAnimationDone(true),
      });
      gsap.to("#content-section", {
        width: "65%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(checkoutRef.current, {
        width: "0%",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => setAnimationDone(true),
      });
      gsap.to("#content-section", {
        width: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [checkoutOpen]);

  const toggleCheckout = () => {
    setCheckoutOpen(!checkoutOpen);
  };

  return (
    <section className="flex justify-between min-h-screen w-full">
      <section
        id="content-section"
        className="flex gap-5 items-center justify-evenly w-full transition-all duration-500"
      >
        <div className="w-1/4 p-4 rounded-lg">
          <h1>UE WAX</h1>
          <img src="material1.png" alt="asoebi material" />
          <div className="flex flex-col gap-y-2">
            <span>&#8358;20,000</span>
            <button className="bg-amber-950/90 py-2 px-8 text-white rounded-sm shadow-md">
              Order Now
            </button>
          </div>
        </div>
        <div className="w-1/4 p-4 rounded-lg">
          <h1>CIHIGAVY</h1>
          <img
            src="material2.png"
            alt="asoebi material"
            className="w-[335px] mx-auto"
          />
          <div className="flex flex-col gap-y-2">
            <span>&#8358;20,000</span>
            <button className="bg-amber-950/90 py-2 px-8 text-white rounded-sm shadow-md">
              Order Now
            </button>
          </div>
        </div>
      </section>
      <section
        ref={checkoutRef}
        className="bg-amber-950/50 w-0 overflow-hidden transition-all duration-500 z-40"
      >
        <div className="flex w-full justify-between px-2">
          <h1 className="p-4">Checkout</h1>
          <button onClick={toggleCheckout} className="">
            <Close />
          </button>
        </div>
      </section>
      { animationDone && !checkoutOpen &&  (
        <button
          onClick={toggleCheckout}
          className="absolute top-32 right-5 bg-amber-950/90 text-white p-4 rounded-full"
        >
          <Cart />
        </button>
      )}
    </section>
  );
}
