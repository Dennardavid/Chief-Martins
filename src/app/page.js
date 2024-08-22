import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <main className="w-dvw bg-[url('/mobile.jpeg')] md:bg-[url('/tablet.jpeg')] lg:bg-[url('/laptop.jpeg')] min-h-screen full bg-cover bg-no-repeat pb-1">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
