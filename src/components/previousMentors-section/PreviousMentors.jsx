import MentorCard from "./MentorCard";

const PreviousMentors = () => {
  return (
    <section className=" flex flex-col gap-24">
      <div className="mx-7 md:mx-48 flex flex-row gap-7 place-items-center ">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">Previous Mentors</h2>
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>
      <div className="flex overflow-hidden overflow-x-clip items-start  ">
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>

        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
        <div className="flex-none w-fit  mr-8 ">
          <MentorCard />
        </div>
      </div>
    </section>
  );
};

export default PreviousMentors;
