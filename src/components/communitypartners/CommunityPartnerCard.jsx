import React from "react";

const CommunityPartnerCard = ({ imgSrc }) => {
  return (
    <div className="flex sm:gap-2 h-20 sm:mt-4 shadow-sm shadow-white  rounded-md">
      <img className="aspect-auto p-1 flex-1 " src={imgSrc} alt={name} />
    </div>
  );
};

export default CommunityPartnerCard;
