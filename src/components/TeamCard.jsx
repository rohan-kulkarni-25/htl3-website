// eslint-disable-next-line react/prop-types
const TeamCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-2">
      <div className="rounded-full bg-purple-600 p-1 ">
        <div className="rounded-full w-48 h-48 overflow-hidden lg:w-36 lg:h-36 sm:w-16 sm:h-16">
          <img src={imgSrc} alt="img" className="w-full h-full object-cover " />
        </div>
      </div>
      <span className="text-white text-center font-normal font-poppins text-lg sm:text-xs lg:w-36 lg:h-36 sm:w-16 sm:h-16">
        {name}
      </span>
    </div>
  );
};

export default TeamCard;
