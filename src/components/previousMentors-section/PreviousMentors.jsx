import { NavLink } from "react-router-dom";

const PreviousMentors = () => {
  return (
    <section className=" flex flex-col gap-24 sm:gap-12 ">
      <div className="mx-48 flex flex-row gap-7 place-items-center lg:mx-24 sm:mx-8">
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          League Heroes
        </h2>
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>
      <div className="flex flex-row gap-16 place-items-center lg:flex-col-reverse mx-48 sm:mx-12">
        <p className=" text-white text-2xl leading-normal text-justify font-poppins lg:w-full sm:text-sm sm:leading-loose">
          Hack The League envisions the empowering combination of technology and
          opportunities to generate practical solutions for real-world problems
          and produce an ever-increasing impact. HTL 1.0 witnessed 2200+
          members, 180+ projects, 10+ workshops and sessions and increased
          professional creativity and self-expression by using the most
          innovative and modern technological solutions with the spirit of
          impact driven community.
        </p>
      </div>
      <div className="flex justify-center flex-row mx-auto gap-8 sm:flex-col">
        <NavLink
          className="w-fit mx-auto px-6 py-3 border-[#4652DD] bg-white bg-opacity-20 hover:bg-white hover:text-black ease-in hover:duration-300 border rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center text-white  text-2xl lg:text-xl sm:text-lg"
          to={"/leagueHeroes"}
        >
          Check League Heroes
        </NavLink>
      </div>
    </section>
  );
};

export default PreviousMentors;
