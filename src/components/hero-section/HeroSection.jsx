import { FaCalendarCheck, FaDiscord, FaMapPin } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [snackbar, setSnackBar] = useState(false);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (snackbar) {
      const timeout = setTimeout(() => snackbarClose(), 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [snackbar]);

  const snackbarClose = () => {
    setSnackBar(false);
  };

  const showSomeLove = async () => {
    let response = await axios.get(
      "https://htl-backend-production.up.railway.app/showhtlsomelove"
    );
    console.log(response);
    setValue(response.data.value);
  };

  useEffect(() => {
    showSomeLove();
  }, []);

  return (
    <main className="flex h-full items-center mt-12 flex-row  justify-center  sm:my-0 overflow-hidden ">
      <div className="h-full w-full px-4 flex flex-col z-10 items-center justify-center ">
        <div className="gap-y-8 flex flex-col ">
          <h1 className="text-8xl font-bold text-white text-center font-justiceLeague  sm:text-4xl ">
            HACK THE LEAGUE
          </h1>
          <div className="text-center text-5xl font-semibold font-mono flex flex-row justify-evenly place-items-center gap-9">
            <div className="flex-1 h-0.5 rounded-sm bg-white" />
            <span className="text-4xl text-white  sm:text-2xl font-mokoto tracking-widest  ">
              Coming Soon
            </span>
            <div className="flex-1 h-0.5 rounded-sm bg-white" />
          </div>
          <div className="flex flex-row sm:flex-row sm:items-center justify-center gap-4  animate-pulse ">
            <a
              href="https://hack2skill.com/hack/hacktheleague3?utm_source=htlwebsite&utm_medium=htl"
              rel="noreferrer"
            >
              <button className="px-6 py-3  border-[#4652DD] bg-none  bg-white hover:text-black ease-in hover:duration-300 border rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center   text-2xl  sm:text-lg">
                <MdOutlineDateRange />
                Projects
              </button>
            </a>
            <a
              href="https://discord.com/invite/fxP5t2w2b9"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-6 py-3  border-[#4652DD] bg-none  bg-white hover:text-black ease-in hover:duration-300 border  rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center  text-2xl  sm:text-lg">
                <FaDiscord />
                Join Discord
              </button>
            </a>
          </div>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/da7oclnod/image/upload/v1727345040/First_uywu5g.png"
        className="aspect-auto flex-1 absolute opacity-50 sm:bottom-10"
      />
    </main>
  );
};

export default HeroSection;

