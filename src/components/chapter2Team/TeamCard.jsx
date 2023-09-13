// eslint-disable-next-line react/prop-types
const TeamCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-purple-600 p-2">
        <div className="rounded-full h-36 w-36 overflow-hidden">
          <img src={imgSrc} loading="lazy" />
        </div>
      </div>
      <span className="text-white text-center font-medium text-xl">{name}</span>
    </div>
  );
};

export default TeamCard;
