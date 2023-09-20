import IMG1 from "../../assets/compressed/events/1.webp";
import IMG2 from "../../assets/compressed/events/2.webp";
import IMG3 from "../../assets/compressed/events/3.webp";
import IMG4 from "../../assets/compressed/events/4.webp";
import IMG5 from "../../assets/compressed/events/5.webp";
import IMG6 from "../../assets/compressed/events/6.webp";

const PreviousEvents = () => {
  return (
    <section className="mx-48 flex flex-col gap-24 lg:mx-24 lg:gap-4 sm:mx-8">
      <div className="flex flex-row gap-7 place-items-center ">
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <h2 className="text-6xl font-bold text-white lg:text-5xl sm:text-3xl">
          Previous Events
        </h2>
      </div>

      <div className="flex flex-row  justify-center place-items-center  w-full h-full  gap-6 my-24 lg:flex-wrap lg:my-16 sm:gap-2 ">
        {/* <div className="min-w-80 md:w-48 sm:w-40">
          <img alt="logo" src={IMG1} className=" rounded-lg shadow-2xl" />
        </div> */}

        <div className="flex flex-col items-center gap-4 ">
          <div className="min-w-96 md:w-48 sm:w-40">
            <img
              alt="logo"
              src={IMG2}
              className="my-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="min-w-96 md:w-48 sm:w-40">
            <img alt="logo" src={IMG3} className="rounded-lg shadow-2xl" />
          </div>
        </div>
        <div className="flex  flex-col place-content-end gap-4 ">
          <div className="min-w-96 md:w-48 sm:w-40">
            <img alt="logo" src={IMG4} className="rounded-lg shadow-2xl" />
          </div>
          <div className="min-w-96 md:w-48 sm:w-40">
            <img alt="logo" src={IMG5} className=" rounded-lg shadow-2xl" />
          </div>
        </div>

        {/* <div className="min-min-w-96 md:w-48 sm:w-40">
          <img
            alt="logo"
            src={IMG6}
            className="my-auto rounded-lg shadow-2xl"
          />
        </div> */}
      </div>

      <div className=" h-36 bg-black rounded-lg bg-opacity-30 backdrop-filter backdrop-blur-lgp-6 flex flex-row  justify-evenly place-items-center  lg:flex-wrap lg:h-full lg:p-8 sm:gap-4 p-8 gap-4">
        <p className="flex flex-row place-items-center gap-4 ">
          <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 sm:text-2xl">
            3.2K+
          </span>
          <span className="text-white font-medium text-3xl sm:text-xl">
            Developer Community
          </span>
        </p>
        <p className="flex flex-row place-items-center gap-4">
          <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 sm:text-3xl">
            10+
          </span>
          <span className="text-white font-medium text-3xl sm:text-xl">
            Cities
          </span>
        </p>
        <p className="flex flex-row place-items-center gap-4">
          <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 sm:text-3xl">
            20+
          </span>
          <span className="text-white font-medium text-3xl sm:text-xl">
            Sessions
          </span>
        </p>
        <p className="flex flex-row place-items-center gap-4">
          <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 sm:text-3xl">
            200+
          </span>
          <span className="text-white font-medium text-3xl sm:text-xl">
            Projects
          </span>
        </p>
      </div>
    </section>
  );
};

export default PreviousEvents;
