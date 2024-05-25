import React from "react";

const AgendaRow = ({ current }) => {
  return (
    <div className={`flex items-center gap-24 ${current ? "scale-125 animate-pulse my-2 " : "opacity-20"}` }>
      <div className="flex flex-row items-center gap-2">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 w-4 rounded-full"></div>
        <div className="flex flex-col text-white text-xs">
          <p className="text-xl font-mokoto tracking-widest">08:00</p>
          <p className="font-mokoto tracking-widest">25th May</p>
        </div>
      </div>
      {current ? (
        <p className="font-justiceLeague text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text text-2xl ">
          CHECK IN STARTS
        </p>
      ) : (
        <p className="text-white font-justiceLeague text-2xl">
          CHECK IN STARTS
        </p>
      )}
    </div>
  );
};

export default AgendaRow;
