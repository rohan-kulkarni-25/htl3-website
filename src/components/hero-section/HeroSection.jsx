import HEROIMAGE from "./../../assets/hero-img.png";
import HEROIMAGEFLIP from "./../../assets/hero-img-flip.png";
import { FaDiscord } from "react-icons/fa6";
import { BsCalendarEvent } from "react-icons/bs";

const HeroSection = () => {
  return (
    <main className="flex my-44 flex-row  justify-normal">
      <div className="w-1/5 ">
        <img className="" src={HEROIMAGE} />
      </div>
      <div className="w-3/5 gap-y-12 classname='px-4' flex flex-col ">
        <h1 className="text-9xl font-bold  text-center  ">HACK THE LEAGUE</h1>
        <div className="text-center text-5xl font-semibold font-mono flex flex-row justify-evenly place-items-center gap-9">
          <div className="flex-1 h-1 bg-white" />
          <span>CHAPTER-3</span>
          <div className="flex-1 h-1 bg-white" />
        </div>
        <div className="flex flex-row justify-center gap-4">
          <button className="px-6 py-4 border-purple-800 border rounded-lg text-2xl font-semibold font-mono flex flex-row justify-center gap-4 items-center">
            <BsCalendarEvent />
            Pre-Register
          </button>
          <button className="px-6 py-4 border-purple-800 border rounded-lg text-2xl font-semibold font-mono flex flex-row justify-center gap-4 items-center">
            <FaDiscord />
            Join Discord
          </button>
        </div>
      </div>
      <div className="w-1/5">
        <img className="" src={HEROIMAGEFLIP} />
      </div>
    </main>
  );
};

export default HeroSection;
