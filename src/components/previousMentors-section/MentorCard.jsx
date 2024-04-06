// eslint-disable-next-line react/prop-types
const MentorCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-2 flex-wrap sm:mt-4 shadow-sm shadow-white  rounded-md">
      <div className=" rounded-2xl   w-36 h-36  sm:w-24 sm:h-24 sm:rounded-lg">
        <img
          className="w-full h-full p-1  sm:rounded-xl sm:p-1  "
          src={imgSrc}
          alt={name}
        />
      </div>
      <span className="text-white text-center text-sm font-poppins lg:text-sm sm:text-sm w-36  sm:w-24 ">
        {name}
      </span>
    </div>
  );
};

export default MentorCard;
