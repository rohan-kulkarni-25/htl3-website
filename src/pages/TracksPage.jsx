import React from "react";
import TrackCard from "../components/tracks/TrackCard";

const TracksPage = () => {
  return (
    <div className="h-full flex flex-col w-full  items-center mx-auto py-12 overflow-y-scroll ">
      <div className="flex flex-row items-center w-3/4 justify-center  mx-auto gap-8">
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
          <p className=" font-mokoto text-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            [Tracks]
          </p>
        </div>
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/3"></p>
      </div>
      <div className="flex flex-row flex-wrap w-full mx-auto justify-center items-center py-12 gap-4 mt-4">
        <TrackCard title={"ENVIRONMENT & CLIMATE CHANGE"} />
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
      </div>
    </div>
  );
};

export default TracksPage;
