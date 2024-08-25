import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <main className="w-dvw bg-[url('/mobile.jpeg')] md:bg-[url('/tablet.jpeg')] lg:bg-[url('/laptop.jpeg')] h-screen full bg-cover bg-no-repeat pb-1">
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          id="wrapper"
        >
          <Navbar />
          <Hero />
        </div>
      </main>
    </>
  );
}