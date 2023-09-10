import React from "react";

const MentorCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col gap-8 animate-mentors">
      <div className="border-4 border-pink-500 p-3 rounded-lg ">
        <img
          className="rounded-lg w-52 h-52 object-cover"
          src={imgSrc}
          alt={name}
        />
      </div>
      <span className="text-white text-center text-xl font-mono">{name}</span>
    </div>
  );
};

export default MentorCard;
