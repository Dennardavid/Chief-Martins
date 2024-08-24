import Navbar from "../components/navbar";

export default function OrderOfEvents() {
  return (
    <>
      <main className="w-dvw bg-[url('/mobile.jpeg')] md:bg-[url('/tablet.jpeg')] lg:bg-[url('/Chief-martins.png')] h-screen bg-[length:1720px_900px] bg-no-repeat pb-1">
        <div className="fixed inset-0 bg-black bg-opacity-30 z-0">
          <Navbar />

          <div className="fixed inset-0 -z-50 w-[70%] min-h-screen bg-gradient-to-r from-black to-transparent"></div>
        </div>
      </main>
    </>
  );
}
