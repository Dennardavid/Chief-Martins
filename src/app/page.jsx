"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <main className="w-dvw bg-[url('/mobile.webp')] md:bg-[url('/tabl dvwet.webp')] lg:bg-[url('/laptop.webp')] h-screen full bg-cover bg-no-repeat pb-1">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="fixed inset-0 bg-black bg-opacity-50"> </div>
        <div className="max-w-[1600px] mx-auto">
          <Hero />
        </div>
      </main>
    </>
  );
}
