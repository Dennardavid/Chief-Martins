import Navbar from "../components/navbar";
import Gallerysection from "../components/Gallery";

export default function GalleryPage() {
  return (
    <>
      <main className="bg-[url('/mobile.webp')] md:bg-[url('/tablet.webp')] lg:bg-[url('/laptop.webp')] h-screen full bg-cover bg-no-repeat pb-1">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-40" id="wrapper h-screen">
          <Navbar />
        </div>
      </main>
      <Gallerysection />
    </>
  );
}
