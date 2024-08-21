import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <main className="w-dvw bg-[url('/mobile.jpg')] md:bg-[url('/tablet.jpeg')] lg:bg-[url('/pixelcut-export.jpeg')] h-screen full bg-cover bg-no-repeat">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
