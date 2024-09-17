import Navbar from "../components/navbar";

export default function DirectionPage() {
  return (
    <div className="bg-[#e3e3e3] min-h-screen">
      <Navbar />

      <div className="flex justify-center items-center mt-5">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1wAgqkNFAFKe4JEJPG4z0LqNzaL4VS0Y&ehbc=2E312F&noprof=1"
          width="1048"
          height="470"
        ></iframe>
      </div>
    </div>
  );
}
