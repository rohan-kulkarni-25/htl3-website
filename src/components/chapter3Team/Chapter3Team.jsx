import { NavLink } from "react-router-dom";
const Chapter3Team = () => {
  return (
    <section className="mx-48 flex flex-col gap-24 lg:mx-24 sm:mx-8 sm:gap-12">
      <div className="flex flex-row gap-7 place-items-center ">
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          HTL Team
        </h2>
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>

      <span className=" text-white text-xl font-poppins font-normal -mt-12 sm:-mt-0 font-mono lg:text-xl sm:text-lg">
        The team consists of passionate developers who desire to create a change
        with the power of technology! The team is the soul of this hackathon!
      </span>
      <div className="bg-white p-4 w-1/2 rounded-2xl mx-auto sm:w-full sm:p-1">
        <img
          src={
            "https://res.cloudinary.com/dw58xmffd/image/upload/v1706287848/hacktheleague/htlteam.jpg"
          }
          className="mx-auto rounded-2xl"
        />
      </div>
      <div className="flex justify-center flex-row mx-auto gap-8">
        <NavLink
          className="w-fit mx-auto px-6 py-3 border-[#4652DD] bg-white bg-opacity-20 hover:bg-white hover:text-black ease-in hover:duration-300 border rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center text-white  text-2xl lg:text-xl sm:text-lg"
          to={"/team"}
        >
          Check Team
        </NavLink>
      </div>
    </section>
  );
};

export default Chapter3Team;
