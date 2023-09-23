import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <main className="flex mt-36 flex-row  justify-center lg:mt-48 sm:mt-40 mb-8">
      <div className="w-full gap-y-8 px-4  flex flex-col ">
        <h1 className="text-8xl font-bold text-white text-center font-justiceLeague lg:text-8xl sm:text-4xl">
          HACK THE LEAGUE
        </h1>
        <div className="text-center text-5xl font-semibold font-mono flex flex-row justify-evenly place-items-center gap-9">
          <div className="flex-1 h-1 bg-white" />
          <span className="text-5xl text-white lg:text-5xl sm:text-xl">
            CHAPTER - 3
          </span>
          <div className="flex-1 h-1 bg-white" />
        </div>
        <div className="flex flex-row justify-center gap-4 ">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3XwVfAIzIamPxMRl32ZD9vT2mzKMnkJ6KSSNUKNrLMhKceA/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-3 border-[#4652DD] bg-white bg-opacity-20 hover:bg-white hover:text-black ease-in hover:duration-300 border rounded-2xl font-semibold font-mono flex flex-row justify-center gap-4 items-center text-white  text-2xl lg:text-xl sm:text-sm">
              <FontAwesomeIcon icon={faCalendar} />
              Pre-Register
            </button>
          </a>
          <a
            href="https://discord.com/invite/fxP5t2w2b9"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-3  border-[#4652DD] bg-white bg-opacity-20 hover:bg-white hover:text-black ease-in hover:duration-300 border  rounded-2xl font-semibold font-mono flex flex-row justify-center gap-4 items-center text-white text-2xl lg:text-xl sm:text-sm">
              <FontAwesomeIcon icon={faDiscord} />
              Join Discord
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
