"use client"

import Navbar from "../components/navbar";
import Direction from "../components/direction";
import { useState } from "react";

export default function DirectionPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayClick = () => {
    console.log("Overlay clicked, menuOpen:", menuOpen);
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#e3e3e3] min-h-screen">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={handleOverlayClick}
        ></div>
      )}
      <Direction />
    </div>
  );
}
