// eslint-disable-next-line react/prop-types
const TeamCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-full bg-purple-600 p-1 ">
        <div className="rounded-full w-48 overflow-hidden lg:w-36 sm:w-20">
          <img
            src={imgSrc}
            alt="img"
            className="w-48 h-48 object-cover lg:h-36 lg:w-36 sm:h-20 sm:w-20"
          />
        </div>
      </div>
      <span className="text-white text-center font-medium text-xl sm:text-sm">
        {name}
      </span>
    </div>
  );
};

export default TeamCard;
