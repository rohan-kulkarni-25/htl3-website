// eslint-disable-next-line react/prop-types
const MentorCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col gap-8 animate-mentors">
      <div className="border-4 border-pink-500 rounded-lg w-52 h-52 overflow-hidden">
        <img className="rounded-lg" src={imgSrc} alt={name} />
      </div>
      <span className="text-white text-center text-xl font-mono">{name}</span>
    </div>
  );
};

export default MentorCard;
