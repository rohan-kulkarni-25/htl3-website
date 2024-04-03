import { FaDiscord, FaHeart } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import pin from "../../assets/pin.svg"
import calendar from "../../assets/calendar.svg"

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
    <main className="flex mt-24 flex-row  justify-center  sm:mt-24 sm:my-0">
      <div className="w-full px-4 flex flex-col ">
        <div className="gap-y-4 sm:gap-y-2 flex flex-col">
          <h1 className="text-9xl text-white text-center font-justiceLeague  sm:text-6xl">
            HACK THE LEAGUE
          </h1>
          {/* Chapter-3 Text */}
          <div className="text-center flex flex-row  place-items-center mx-96 sm:mx-5 gap-2">
            <div className="flex-1 h-0.5 rounded-sm bg-white" />
            <span className="text-6xl text-white  sm:text-4xl font-justiceLeague">
              CHAPTER-3
            </span>
            <div className="flex-1 h-0.5 rounded-sm bg-white" />
          </div>
          {/* Venue & Date */}
          <div className="flex gap-4 justify-center">
            {/* Venue */}
            <a href="https://maps.app.goo.gl/nTeQAawas7DR4rNQ6" target="_blank" rel="noreferrer" className="flex gap-1 items-center justify-center">
              <img src={pin} alt="pin" className="w-8 h-8 sm:w-6" />
              <span className="text-white text-3xl sm:text-2xl font-justiceLeague">JECRC UNIVERSITY</span>
            </a>
            {/* Partition */}
            <div className="w-0.5 sm:w-px rounded-lg h-8 bg-white" />
            {/* Date */}
            <div className="flex gap-1  items-center justify-center">
              <img src={calendar} alt="pin" className="w-8 h-8 sm:w-6" />
              <span className="text-white text-3xl sm:text-2xl font-justiceLeague">18th - 19th may</span>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col sm:items-center justify-center gap-4  ">
            <a
              href="https://hack2skill.com/hack/hacktheleague3?utm_source=htlwebsite&utm_medium=htl"
              rel="noreferrer"
            >
              <button className="px-6 py-3  border-[#4652DD] bg-none bg-opacity-20 hover:bg-white hover:text-black ease-in hover:duration-300 border rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center text-white  text-2xl  sm:text-lg">
                <MdOutlineDateRange />
                Register
              </button>
            </a>
            <a
              href="https://discord.com/invite/fxP5t2w2b9"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-6 py-3  border-[#4652DD] bg-none bg-opacity-20 hover:bg-white hover:text-black ease-in hover:duration-300 border  rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center text-white text-2xl  sm:text-lg">
                <FaDiscord />
                Join Discord
              </button>
            </a>
          </div>
        </div>
        <div className="mx-128 lg:mx-72 my-8 sm:mx-8">
          <img src="https://res.cloudinary.com/dw58xmffd/image/upload/v1706334583/hacktheleague/Frame26_1_edqiow.png" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

{
  /* <div className="mx-auto "> */
}
{
  /* <button
            className="px-6 py-3 gap-4 border-[#4652DD] bg-none bg-white text-black ease-in hover:duration-300 border hover:text-red-500 rounded-2xl font-medium font-poppins flex flex-row justify-center  items-center text-2xl lg:text-xl sm:text-lg"
            onClick={() => {
              setValue(value + 1);
              setSnackBar(true), showSomeLove();
            }}
          >
            <FaHeart className="animate-pulse " color="red" />
            <span className="text-lg">{value}</span>
          </button> */
}

{
  /* </div> */
}
