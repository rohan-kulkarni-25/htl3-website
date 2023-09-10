import IMG1 from "../../assets/1.jpg";
import IMG2 from "../../assets/2.jpg";
import IMG3 from "../../assets/3.jpg";
import IMG4 from "../../assets/4.jpg";
import IMG5 from "../../assets/5.jpg";

const PreviousEvents = () => {
  return (
    <section className="mx-7  md:mx-12 2xl:mx-48 flex flex-col gap-24">
      
      <div className="flex flex-row gap-7 place-items-center ">
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">Previous Events</h2>
      </div>


      <div className="flex flex-col md:flex-row  justify-center  w-full h-auto md:h-96 md:gap-6">
        <img src={IMG1} className="w-full  md:w-72  rounded-lg" />
        <div className="flex flex-col place-content-end gap-4">
          <img src={IMG2} className="w-full h-full md:w-96 md:h-48 rounded-lg " />
          <img src={IMG3} className="w-full h-full md:w-96 md:h-48 rounded-lg" />
        </div>
        <img src={IMG4} className="w-full md:w-64 place-self-end rounded-lg " />
        <img src={IMG5} className="w-full md:w-72 rounded-lg pt-4" />
      </div>




      <div className="flex flex-col h-full w-full bg-black rounded-lg bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div className=" h-36 flex flex-row justify-evenly place-items-center ">
          <p className="flex flex-row place-items-center gap-4">
            <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
              3.2K+
            </span>
            <span className="text-white font-medium text-3xl">Developer Community</span>
          </p>
          <p className="flex flex-row place-items-center gap-4">
            <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
              10+
            </span>
            <span className="text-white font-medium text-3xl">Cities</span>
          </p>
          <p className="flex flex-row place-items-center gap-4">
            <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
              20+
            </span>
            <span className="text-white font-medium text-3xl">Sessions</span>
          </p>
          <p className="flex flex-row place-items-center gap-4">
            <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
              200+
            </span>
            <span className="text-white font-medium text-3xl">Projects</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;
