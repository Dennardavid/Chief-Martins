import Link from "next/link";

export default function Accomodation() {
  const hotels = [
    {
      name: "Victory View Hotel",
      location: "No. 122 DSC Express Way, Ovwian Axis, Udu, Delta",
      contact: "+2348157714333",
      website: "https://victoryviewhotel.com.ng/",
      email: "victoryviewhotel@gmail.com",
      image: "/victory-view.jpg",
    },
    {
      name: "Wetland Hotel",
      location: "Mofor junction, Ekete, Warri, Delta",
      contact: "+2348170574979",
      email: "warriwetlandhotel@gmail.com",
      website: "https://wetlandhotelnigeria.com/",
      image: "/wetland.webp",
    },
    {
      name: "D'keys Lodge Spot",
      location: "DSC Express-Way by Oku-Atata, Ugbomro Junction, Effurun",
      contact: "+2348101064294",
      website: "https://hotels.ng/hotel/1012268-dkeys-hotel-delta",
      image: "/dkeys.jpg",
    },
    {
      name: "Clique Court Hotel & Suite",
      location: "Engr Kragha Layout, Okpaka, Warri, Delta",
      contact: "0911 474 7482",
      website: "www.victoryview.com",
      image: "/Clique.jpg",
    },
    {
      name: "Bedouin Hotel & Suites",
      location: "NO 5 Rev. J. Oloye Street, Ugbolokposo, Effurun, Delta",
      contact: "+234 810 665 6662",
      website: "https://www.bedouinhotelsltd.com/",
      image: "/Bedouin.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mt-5 md:px-8 lg:px-10 md:py-8">
      {hotels.map((hotel) => (
        <article
          className="bg-white p-3 rounded-md shadow-md hover:shadow-2xl hover:shadow-black/30 transition-all"
          key={hotel.contact}
        >
          <div className="w-full h-[300px] relative group overflow-hidden rounded-md">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover rounded-md transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold text-center">
            {hotel.name}
          </h3>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-base">Location: {hotel.location}</p>
            <p className="text-base">Enquiries/Booking: {hotel.contact}</p>
            <Link
              target="_blank"
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
