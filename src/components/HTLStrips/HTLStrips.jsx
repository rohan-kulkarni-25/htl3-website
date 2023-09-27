import { useRef, useEffect } from "react";
import AutoScrollText from "./AutoScrollText";
const HTLStrips = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const scrollText = () => {
      if (textRef.current) {
        textRef.current.scrollLeft += 1;
      }
    };

    const interval = setInterval(scrollText, 50); // Adjust the speed as needed

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="my-24 overflow-hidden relative ">
      <div className="bg-black w-full h-20 -rotate-1  sm:h-16"></div>
      <div className="bg-white w-full h-20 rotate-1 absolute bottom-3 flex flex-row text-black  justify-evenly align-middle sm:h-16">
        <div className="flex place-self-center">
          <div className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold whitespace-nowrap py-4 animate-marquee">
            <AutoScrollText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTLStrips;
