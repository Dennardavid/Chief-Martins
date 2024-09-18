"use client";

import Navbar from "../components/navbar";
import Accomodation from "../components/accomdation";
import { useState } from "react";

export default function AccomodationPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#e3e3e3] min-h-screen z-0">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Accomodation />
    </main>
  );
}
