import HEROIMAGE from "./../../assets/hero-img.png";
import HEROIMAGEFLIP from "./../../assets/hero-img-flip.png";
import { FaDiscord } from "react-icons/fa6";
import { BsCalendarEvent } from "react-icons/bs";

const HeroSection = () => {
  return (
    <main className="flex my-44 flex-row  justify-center">
  
      <div className="w-full md:w-4/5  gap-y-12 px-4  flex flex-col ">
      <h1 className="text-4xl md:text-6xl xl:text-9xl  font-bold text-white text-center sm:text">HACK THE LEAGUE</h1>
        <div className="text-center text-5xl font-semibold font-mono flex flex-row justify-evenly place-items-center gap-9">
          <div className="flex-1 h-1 bg-white" />
          <span className="text-xl md:text-5xl text-white">CHAPTER-3</span>
          <div className="flex-1 h-1 bg-white" />
        </div>
        <div className="flex flex-row justify-center gap-4">
          <button className="px-4 py-3 border-[#4652DD] border rounded-2xl text-sm md:text-2xl font-semibold font-mono flex flex-row justify-center gap-4 items-center text-white ">
            <BsCalendarEvent />
            Pre-Register
          </button>
          <button className="px-3 md:px4  border-[#4652DD] border  rounded-2xl text-sm md:text-2xl font-semibold font-mono flex flex-row justify-center gap-4 items-center text-white">
            <FaDiscord />
            Join Discord
          </button>
        </div>
      </div>
 
    </main>
  );
};

export default HeroSection;
