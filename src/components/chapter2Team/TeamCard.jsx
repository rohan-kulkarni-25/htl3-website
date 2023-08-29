const TeamCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-full bg-purple-600 p-3">
        <img
          className="rounded-full h-36"
          src="https://github.com/rohan-kulkarni-25.png"
        />
      </div>
      <span className="text-center font-medium text-xl">Rohan Kulkarni</span>
    </div>
  );
};

export default TeamCard;
