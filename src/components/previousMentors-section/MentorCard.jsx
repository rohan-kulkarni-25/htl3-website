const MentorCard = () => {
  return (
    <div className="flex flex-col gap-8 animate-mentors">
      <div className="border-4 border-pink-500 p-3 rounded-lg ">
        <img
          className="rounded-lg w-52"
          src="https://github.com/rohan-kulkarni-25.png"
        />
      </div>
      <span className="text-white text-center text-xl font-mono">Rohan Kulkarni</span>
    </div>
  );
};

export default MentorCard;
