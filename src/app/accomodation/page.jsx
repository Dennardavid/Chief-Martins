"use client"

import Navbar from "../components/navbar";
import Accomodation from "../components/accomdation";
import { useState } from "react";

export default function AccomodationPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayClick = () => {
    console.log("Overlay clicked, menuOpen:", menuOpen);
    setMenuOpen(false);
  };

  return (
    <main className="bg-[#e3e3e3] min-h-screen z-0">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={handleOverlayClick}
        ></div>
      )}
      <Accomodation />
    </main>
  );
}
