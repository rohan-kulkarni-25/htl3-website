// eslint-disable-next-line react/prop-types
const MentorCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col gap-8 sm:gap-2 flex-wrap sm:mt-4">
      <div className="border-2 rounded-2xl border-pink-500  w-56 h-56  sm:w-24 sm:h-24 sm:rounded-lg">
        <img
          className="w-full h-full p-2 rounded-2xl sm:rounded-xl sm:p-1  "
          src={imgSrc}
          alt={name}
        />
      </div>
      <span className="text-white text-center text-xl font-poppins lg:text-xl sm:text-sm w-56  sm:w-24 ">
        {name}
      </span>
    </div>
  );
};

export default MentorCard;
