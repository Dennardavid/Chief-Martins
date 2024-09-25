"use client";

import Navbar from "../components/navbar";
import Direction from "../components/direction";
import { useState } from "react";

export default function DirectionPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#e3e3e3] min-h-screen">
      <div className="absolute top-0 left-0 w-full">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Direction />
    </div>
  );
}
