import Polygon from "../../assets/sponsor.png";

const PreviousSponsors = () => {
  return (
    <section className=" flex flex-col gap-24">
      <div className="flex flex-row gap-16 place-items-center mx-52">
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <h2 className="text-6xl font-bold">Previous Sponsors</h2>
      </div>
      <div className="flex overflow-hidden overflow-x-clip items-center mb-8 bg-gray-400 h-48">
        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>

        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <img src={Polygon} />
        </div>
      </div>
    </section>
  );
};

export default PreviousSponsors;
