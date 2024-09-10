import Link from "next/link";

export default function Logistics() {
  const transportation = [
    { name: "Air Peace", image: "/air-peace.png", website: "#" },
    { name: "Arik Air", image: "/arik.png", website: "#" },
    { name: "United Air", image: "/united-air.png", website: "#" },
    { name: "Green Africa", image: "/green-africa.png", website: "#" },
    { name: "God is Good Motors", image: "/gig.png", website: "#" },
  ];
  return (
    <section className="flex flex-col gap-3 mx-10">
      {transportation.map((means) => (
        <div
          className="bg-white flex p-2 rounded-md shadow-md gap-5"
          key={means.name}
        >
          <div className="bg-[#e3e3e3] p-1 rounded-md w-24 h-24 flex justify-center items-center">
            <img src={means.image} alt={means.name} />
          </div>
          <div className="flex flex-col justify-evenly">
            <p>{means.name}</p>
            <Link
              href={means.website}
              target="_blank"
              className="bg-amber-950/90 text-center text-white w-28 p-1 rounded-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
