"use client";

import Navbar from "../components/navbar";
import Asoebi from "../components/asoebi";
import { useState } from "react";

export default function AsoebiPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#e3e3e3] min-h-screen z-0">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Asoebi />
    </main>
  );
}
