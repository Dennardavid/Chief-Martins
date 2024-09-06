import Link from "next/link";

export default function Accomodation() {
  const hotels = [
    {
      name: "Victory View Hotel",
      location: "Warri",
      contact: "+2348157714333",
      website: "https://victoryviewhotel.com.ng/",
      email: "victoryviewhotel@gmail.com",
      image: "/victory-view.jpg",
    },
    {
      name: "Wetland Hotel",
      location: "Warri",
      contact: "+2348170574979",
      email: "warriwetlandhotel@gmail.com",
      website: "https://wetlandhotelnigeria.com/",
      image: "/wetland.webp",
    },
    {
      name: "D'keys Lodge Spot",
      location: "Warri",
      contact: "+2348101064294",
      website: "www.victoryview.com",
      image: "/dkeys.jpg",
    },
  ];
  return (
    <div className="h-full flex gap-10 justify-center mt-5 ">
      {hotels.map((hotel) => (
        <article className="bg-white p-3 rounded-md shadow-md" key={hotel.contact}>
          <div className="w-[500px] h-[350px]">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold text-center">
            {hotel.name}
          </h3>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-lg">Location: {hotel.location}</p>
            <p className="text-lg">Enquiries/Booking: {hotel.contact}</p>
            <Link
              href={hotel.website}
              className="text-lg text-white text-center bg-amber-950/90 rounded-md py-2"
            >
              Visit Hotel Website
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
