import { FaDiscord } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const HeroSection = () => {
  return (
    <main className="flex my-36 flex-row  justify-center lg:my-48">
      <div className="w-full gap-y-12 px-4  flex flex-col ">
        <h1 className="text-9xl font-bold text-white text-center font-justiceLeague lg:text-8xl sm:text-5xl">
          HACK THE LEAGUE
        </h1>
        <div className="text-center text-5xl font-semibold font-mono flex flex-row justify-evenly place-items-center gap-9">
          <div className="flex-1 h-0.5 rounded-sm bg-white" />
          <span className="text-6xl text-white lg:text-5xl sm:text-2xl ">
            CHAPTER - 3
          </span>
          <div className="flex-1 h-0.5 rounded-sm bg-white" />
        </div>
        <div className="flex flex-row sm:flex-col sm:items-center justify-center gap-4 ">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3XwVfAIzIamPxMRl32ZD9vT2mzKMnkJ6KSSNUKNrLMhKceA/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 py-3 border-[#4652DD] bg-none bg-opacity-20 hover:bg-white hover:text-black ease-in hover:duration-300 border rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center text-white  text-2xl lg:text-xl sm:text-lg">
              <MdOutlineDateRange />
              Pre-Register
            </button>
          </a>
          <a
            href="https://discord.com/invite/fxP5t2w2b9"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 py-3  border-[#4652DD] bg-none bg-opacity-20 hover:bg-white hover:text-black ease-in hover:duration-300 border  rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center text-white text-2xl lg:text-xl sm:text-lg">
              <FaDiscord />
              Join Discord
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
