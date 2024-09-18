"use client"

import Navbar from "../components/navbar";
import Logistics from "../components/logistics";
import { useState } from "react";

export default function LogisticsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#e3e3e3] min-h-screen">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Logistics />
    </div>
  );
}
