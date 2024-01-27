import { NavLink } from "react-router-dom";

const PreviousMentors = () => {
  return (
    <section className="mx-48 flex flex-col gap-24 sm:gap-12 lg:mx-24 sm:mx-8">
      <div className=" flex flex-row gap-7 place-items-center  ">
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          League Heroes
        </h2>
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>
      <div className="flex flex-row gap-16 place-items-center lg:flex-col-reverse ">
        <p className=" text-white text-2xl leading-normal text-justify font-poppins lg:w-full sm:text-sm sm:leading-loose">
          "League Heroes" refers to those individuals who actively participate
          in the community and help the hackers in the hackathon, while also
          making a positive impact. We would like to recognize some of the
          heroes who have not only been speakers, mentors, and judges in our
          hackathon but have also made a significant impact.
        </p>
      </div>

      <div className="flex flex-wrap flex-row  justify-evenly  gap-12 w-fit">
        <img src="https://res.cloudinary.com/dw58xmffd/image/upload/v1706329926/hacktheleague/Profile_Card_-_Container-min_wrylmw.png" />
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
