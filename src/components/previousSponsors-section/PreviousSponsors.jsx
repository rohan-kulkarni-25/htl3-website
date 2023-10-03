import Zeeve from "../../assets/sponsors/Zeeve.png";
import fire from "../../assets/sponsors/5ire.webp";
import Appwrite from "../../assets/sponsors/AppWrite.png";
import CNCF from "../../assets/sponsors/cncf.png";
import DigitalOcean from "../../assets/sponsors/DigitalOcean.png";
import Dojima from "../../assets/sponsors/Dojima.png";
import Github from "../../assets/sponsors/github.png";
import Interswap from "../../assets/sponsors/Interswap.png";
import Azure from "../../assets/sponsors/Azure.png";
import MLH from "../../assets/sponsors/mlh.png";
import Polygon from "../../assets/sponsors/Polygon.png";
import Postman from "../../assets/sponsors/postman.png";
import Telos from "../../assets/sponsors/Telos 2.jpg";
import WallectConnect from "../../assets/sponsors/WallectConnect.png";

const PreviousSponsors = () => {
  return (
    <section className=" flex flex-col gap-24">
      <div className="flex flex-row gap-7 mx-48 place-items-center lg:mx-24 sm:mx-12 ">
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          Previous Sponsors
        </h2>
      </div>
      <div className="flex flex-wrap justify-evenly items-center p-8 bg-white rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg mx-48 lg:mx-24 sm:mx-12">
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={Zeeve} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={fire} />
        </div>

        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={Appwrite} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={CNCF} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={DigitalOcean} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={Dojima} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={Github} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={Interswap} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={Azure} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={MLH} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={Polygon} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={Postman} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={Telos} />
        </div>
        <div className="flex-none w-32  mr-8 sm:w-24">
          <img alt="logo" src={WallectConnect} />
        </div>
      </div>
    </section>
  );
};

export default PreviousSponsors;
