// eslint-disable-next-line react/prop-types
const MentorCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col gap-8 animate-mentors">
      <div className="border-2 rounded-2xl border-pink-500  w-56 h-56">
        <img className="w-full h-56 p-2 rounded-2xl " src={imgSrc} alt={name} />
      </div>
      <span className="text-white text-center text-xl font-poppins lg:text-xl">
        {name}
      </span>
    </div>
  );
};

export default MentorCard;
