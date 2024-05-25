import React from "react";

const Countdown = () => {
  return (
    <div className="bg-white h-1/3 w-full rounded-md p-1 bg-gradient-to-br from-teal-500 to-purple-500">
      <div
        style={{ height: "100%" }}
        className="bg-countdown bg-no-repeat bg-cover my-auto rounded-md from-black  to-gray-500 flex flex-col items-center justify-center "
      >
      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text flex flex-col gap-4">
        <p className=" font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-6xl">
          HACKING STARTS IN
        </p>
        <p className="text-7xl text-center font-mokoto tracking-widest text-white animate-pulse">00:00:00</p>
      </div>
      </div>
    </div>
  );
};

export default Countdown;
