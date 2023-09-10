import React from "react";
const TeamCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-purple-600 p-2">
      <div
          className="rounded-full h-36 w-36 overflow-hidden"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <span className="text-white text-center font-medium text-xl">{name}</span>
    </div>
  );
};

export default TeamCard;
