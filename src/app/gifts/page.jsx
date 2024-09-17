import Navbar from "../components/navbar";

export default function DonationPage() {
  return (
    <main>
      <div className="w-dvw bg-[url('/gifts-mobile-bg.jpeg')] md:bg-[url('/gifts-tablet-bg.jpeg')] lg:bg-[url('/gifts-bg.jpeg')] h-screen full bg-cover bg-no-repeat pb-1">
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" id="wrapper">
          <Navbar />
          <section className="relative lg:top-[20%] lg:left-[2.5%] flex flex-col gap-3 px-2 md:px-8 lg:px-10 justify-center items-center mt-7 text-white backdrop-blur-md backdrop-filter bg-white/10 w-[650px] p-7 rounded-md shadow-md shadow-white/20">
            <p className="text-sm md:text-base 2xl:text-xl w-[600px]">
              We sincerely appreciate your thoughts, prayers, and support during
              this difficult time. Your kind words and prayers have brought us
              great comfort, and we are deeply grateful. For those who would
              like to give a gift in memory, we kindly ask that you use the
              designated channel below. Thank you for your love and support.
            </p>
            <div className="flex items-center gap-4 bg-amber-950/30 p-2 rounded-md shadow-md w-[600px]">
              <img
                src="/wema.png"
                alt="wema bank"
                className="w-16 p-1 rounded-md bg-white/30"
              />
              <p className="text-sm md:text-base 2xl:text-xl">
                Account Number: 0231594918 <br />
                <span>Wema bank Naira account</span>
              </p>
            </div>
            <div className="flex items-center gap-4 bg-amber-950/30 p-2 rounded-md shadow-md w-[600px]">
              <img
                src="/wema.png"
                alt="wema bank"
                className="w-16 p-1 rounded-md bg-white/30"
              />
              <p className="text-sm md:text-base 2xl:text-xl">
                Account Number: 0620805548 <br />
                <span>Wema bank Dollar account</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
