import React from "react";

const TrackCard = ({ title, image, trackno, content }) => {
  return (
    <div className="w-96 bg-black/20 my-8 mx-4 h-60 p-4  cut-div  ">
      <div className="flex flex-col justify-between h-full  bg-contain bg-center bg-no-repeat ">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit  rounded-sm px-2 py-1 z-30">
          <p className="text-white font-bold  text-xs ">TRACK 1</p>
        </div>

        <div className="flex flex-col gap-4 z-30">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            <p className="  font-bold font-mokoto tracking-wider text-xl">
              Environment & Climate Change
            </p>
          </div>

          <p className="text-white tracking-wider text-sm ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            dicta harum iusto atque ea, cupiditate unde nihil culpa voluptates
            sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
