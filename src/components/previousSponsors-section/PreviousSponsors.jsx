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
      <div className="flex flex-row gap-7 mx-7 md:mx-48 place-items-center ">
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          Previous Sponsers
        </h2>
      </div>
      <div className="flex overflow-hidden overflow-x-clip items-center mb-8  h-48 bg-black rounded-lg bg-opacity-30 backdrop-filter backdrop-blur-lg ">
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={Zeeve} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={fire} />
        </div>

        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={Appwrite} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={CNCF} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={DigitalOcean} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={Dojima} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={Github} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={Interswap} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={Azure} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={MLH} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={Polygon} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={Postman} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={Telos} />
        </div>
        <div className="flex-none w-32  mr-8 animate-sponsors">
          <img loading="lazy" src={WallectConnect} />
        </div>
      </div>
    </section>
  );
};

export default PreviousSponsors;
