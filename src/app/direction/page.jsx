"use client";

import Navbar from "../components/navbar";
import Direction from "../components/direction";
import { useState } from "react";

export default function DirectionPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Direction />
      <div className="relative z-10">
        <div className="sticky top-0 left-0 w-full">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </div>
  );
}
