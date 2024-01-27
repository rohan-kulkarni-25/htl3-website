const PreviousEvents = () => {
  return (
    <section className="mx-48 flex flex-col gap-24 lg:mx-24  lg:py-24 lg:gap-12 sm:mx-8">
      <div className="flex flex-row gap-7 place-items-center ">
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          Previous Events
        </h2>
      </div>
      <div className="flex flex-wrap flex-row  justify-evenly  gap-12 mx-24 lg:mx-52 sm:hidden">
        <img src="https://res.cloudinary.com/dw58xmffd/image/upload/v1706329922/hacktheleague/Profile_Card_-_Container_1_-min_aeapsi.png" />
      </div>
      <div className="  justify-evenly  gap-12 mx-24 lg:mx-52 sm:mx-0 sm:block hidden">
        <img src="https://res.cloudinary.com/dw58xmffd/image/upload/v1706338297/hacktheleague/prev_events-min_ts3e2n.png" />
      </div>

      <div className=" h-36 bg-black rounded-3xl bg-opacity-30 backdrop-filter backdrop-blur-lgp-6 flex flex-row justify-evenly place-items-center  gap-y-4 lg:flex-wrap lg:h-full lg:p-8 sm:gap-4">
        <p className="flex flex-row place-items-center gap-4 m-4">
          <span className="font-semibold font-poppins text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 sm:text-3xl">
            3.2K+
          </span>
          <span className="text-white font-medium font-poppins text-2xl sm:text-md">
            Hackers
          </span>
        </p>
        <p className="flex flex-row place-items-center gap-4 m-4">
          <span className="font-semibold font-poppins text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 sm:text-3xl">
            10+
          </span>
          <span className="text-white font-medium font-poppins text-2xl sm:text-xl">
            Cities
          </span>
        </p>
        <p className="flex flex-row place-items-center gap-4 m-4">
          <span className="font-semibold font-poppins text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 sm:text-3xl">
            20+
          </span>
          <span className="text-white font-medium font-poppins text-2xl sm:text-xl">
            Sessions
          </span>
        </p>
        <p className="flex flex-row place-items-center gap-4 m-4">
          <span className="font-semibold font-poppins text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 sm:text-3xl">
            200+
          </span>
          <span className="text-white font-medium font-poppins text-2xl sm:text-xl">
            Projects
          </span>
        </p>
      </div>
    </section>
  );
};

export default PreviousEvents;
