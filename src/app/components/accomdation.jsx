import Link from "next/link";

export default function Accomodation() {
  const hotels = [
    {
      name: "De Marvelz Hotel & Coco Lounge",
      location: "Marvelz Street, Ovwian, Delta",
      contact: "0902 691 7278, 0704 337 3618",
      website: "https://www.bedouinhotelsltd.com/",
      image: "/de-marvelz.jpeg",
    },
    {
      name: "Victory View Hotel",
      location: "No. 122 DSC Express Way, Ovwian Axis, Udu, Delta",
      contact: "0810 106 4294",
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
      contact: "0703 336 5998",
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
      name: "The Arians Hotel and Suites",
      location: "Arians crescent off emuobó Ono sorhue Road, Udu, Egini",
      contact: "",
      website: "https://hotels.ng/hotel/1470606-the-arians-hotel-and-suites",
      image: "/arians.jpg",
    },
  ];

  return (
    <>
      <p className="text-center mt-8 font-semibold text-xl">
        All bookings Should be made at least a week before the event to ensure
        smooth process.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mt-5 md:px-8 lg:px-10 md:py-4">
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
    </>
  );
}
