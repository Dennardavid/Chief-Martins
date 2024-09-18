"use client"

import Navbar from "../components/navbar";
import Direction from "../components/direction";
import { useState } from "react";

export default function DirectionPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#e3e3e3] min-h-screen">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Direction />
    </div>
  );
}
