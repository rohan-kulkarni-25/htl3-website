import TeamCard from "./TeamCard";

const Chapter2Team = () => {
  return (
    <section className="mx-7  md:mx-12 2xl:mx-48 flex flex-col gap-24">
      <div className="flex flex-row gap-7 place-items-center ">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">Chapter-2 Team</h2>
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>
  
      <span className=" text-white text-2xl font-medium -mt-12 font-mono">
        The team consists of passionate developers who desire to create a change
        with the power of technology! The team is the soul of this hackathon!
      </span>
      <div className="flex flex-wrap justify-evenly flex-row place-items-center gap-8 gap-y-8">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />

        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </section>
  );
};

export default Chapter2Team;
