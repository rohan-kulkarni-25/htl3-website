import MentorCard from "./MentorCard";

const PreviousMentors = () => {
  return (
    <section className=" flex flex-col gap-24">
      <div className="flex flex-row gap-16 place-items-center mx-52">
        <h2 className="text-6xl text-white font-bold">Previous Mentors</h2>
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>
      <div className="flex overflow-hidden overflow-x-clip items-start mb-8 ">
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
