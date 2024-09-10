import Navbar from "../components/navbar";

export default function DirectionPage() {
  return (
    <div className="bg-slate-500 min-h-screen">
      <Navbar />
      <h1 className="text-black">Direction Page </h1>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1wAgqkNFAFKe4JEJPG4z0LqNzaL4VS0Y&ehbc=2E312F&noprof=1"
        width="640"
        height="480"
      ></iframe>
    </div>
  );
}
