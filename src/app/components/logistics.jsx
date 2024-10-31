import Link from "next/link";

export default function Logistics() {
  const transportationOut = [
    {
      name: "Air Peace",
      image: "/air-peace.png",
      website: "https://flyairpeace.com/",
    },
    {
      name: "Arik Air",
      image: "/arik.png",
      website: "https://www.arikair.com/",
    },
    {
      name: "United Airlines",
      image: "/united-air.png",
      website: "https://www.united.com/en/us",
    },
    {
      name: "Green Africa",
      image: "/green-africa.png",
      website: "https://www.greenafrica.com/",
    },
    {
      name: "God is Good Motors",
      image: "/gig.png",
      website: "https://gigm.com/",
    },
  ];
  const transportationIn = [
    
    {
      name: "Ayo Logistics",
      image: "/ayo-logistics.webp",
      contact: "0703 914 3774",
    },
    {
      name: "Bolt App",
      image: "/bolt.png",
      website: "https://play.google.com/store/apps/details?id=ee.mtakso.client",
    },
  ];
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between py-2 pb-5 max-w-[1900px] mx-auto">
      <div className="flex flex-col gap-3 mx-2 lg:mx-10 lg:w-2/4">
        <h1 className="text-center mt-5 lg:my-4 font-semibold text-xl">
          Out of state Logistics Services
        </h1>
        {transportationOut.map((means) => (
          <div
            className="Intro bg-white flex p-2 rounded-md shadow-md gap-5"
            key={means.name}
          >
            <div className="bg-[#e3e3e3] p-1 rounded-md w-24 h-24 flex justify-center items-center">
              <img src={means.image} alt={means.name} />
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="font-medium">{means.name}</p>
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
      </div>

      <div className="flex flex-col gap-3 mx-2 lg:mx-10 lg:w-2/4">
        <h1 className="text-center mt-5 lg:my-4 font-semibold text-xl">
          Within state Logistics Services
        </h1>
        {transportationIn.map((means) => (
          <div
            className="bg-white flex p-2 rounded-md shadow-md gap-5"
            key={means.name}
          >
            <div className="bg-[#e3e3e3] p-1 rounded-md w-24 h-24 flex justify-center items-center">
              <img src={means.image} alt={means.name} />
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="font-medium">{means.name}</p>
              {means.name === "Bolt App" ? (
                <Link
                  href={means.website}
                  target="_blank"
                  className="bg-amber-950/90 text-center text-white w-28 p-1 rounded-md"
                >
                  Book Now
                </Link>
              ) : (
                <p>Contact: {means.contact}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
