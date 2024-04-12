import { NavLink } from "react-router-dom";
import { TbChevronsDown, TbChevronsUp } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [snackbar, setSnackBar] = useState(false);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (snackbar) {
      const timeout = setTimeout(() => snackbarClose(), 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [snackbar]);

  const snackbarClose = () => {
    setSnackBar(false);
  };

  const showSomeLove = async () => {
    let response = await axios.get(
      "https://htl-backend-production.up.railway.app/showhtlsomelove"
    );
    console.log(response);
    setValue(response.data.value);
  };

  useEffect(() => {
    showSomeLove();
  }, []);

  return (
    <nav className="w-3/4 mx-auto mt-4 z-40 h-20 flex cursor-pointer flex-row justify-center font-mokoto  p-4">
      <NavLink to="/" className="z-50 absolute top-0  left-0">
        <img
          src={
            "https://res.cloudinary.com/dw58xmffd/image/upload/v1706290493/hacktheleague/logo_vukuk2.png"
          }
          className="w-36 sm:w-20 "
          alt="htl-logo"
        />
      </NavLink>
      <ul className="flex flex-row   justify-center place-items-center gap-8 tracking-wider font-medium text-2xl lg:text-xl  sm:text-sm sm:gap-8 text-white sm:hidden ">
        <li className="">
          <a className="hover:underline" href="/">
            Home
          </a>
        </li>
        <li>
          <NavLink to="/tracks" className="hover:underline">
            Tracks
          </NavLink>
        </li>
        <li>
          <NavLink to="/prizes" className="hover:underline">
            Prizes
          </NavLink>
        </li>
        <li>
          <NavLink to="/communitypartners" className="hover:underline">
            Community Partners
          </NavLink>
        </li>

        <li>
          <NavLink to="/leagueHeroes" className="hover:underline">
            League Heroes
          </NavLink>
        </li>
        <li>
          <a href="/sponsors" className="hover:underline">
            Sponsors
          </a>
        </li>

        <li>
          <NavLink to="/team" className="hover:underline">
            Team
          </NavLink>
        </li>
      </ul>
      <TbChevronsDown
        color="white"
        size={32}
        className="hidden sm:block animate-bounce"
        onClick={() => setShowNav(true)}
      />
      <div
        className={`absolute  bg-white h-fit w-full mx-auto left-0 top-0 sm:p-4  rounded-br-2xl delay-700 rounded-bl-2xl ${
          showNav ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col  justify-center place-items-center  gap-16 text-2xl lg:text-xl font-semibold sm:text-sm sm:gap-4 text-black">
        <li className="">
          <a className="hover:underline" href="/">
            Home
          </a>
        </li>
        <li>
          <NavLink to="/tracks" className="hover:underline">
            Tracks
          </NavLink>
        </li>
        <li>
          <NavLink to="/prizes" className="hover:underline">
            Prizes
          </NavLink>
        </li>
        <li>
          <NavLink to="/communitypartners" className="hover:underline">
            Community Partners
          </NavLink>
        </li>

        <li>
          <NavLink to="/leagueHeroes" className="hover:underline">
            League Heroes
          </NavLink>
        </li>
        <li>
          <a href="/sponsors" className="hover:underline">
            Sponsors
          </a>
        </li>

        <li>
          <NavLink to="/team" className="hover:underline">
            Team
          </NavLink>
        </li>
          <TbChevronsUp
            color="black"
            size={32}
            onClick={() => setShowNav(false)}
          />
        </ul>
      </div>

      <button
        className="absolute top-2 right-2 px-6 py-3 gap-4 border-[#4652DD] bg-none bg-white text-black ease-in hover:duration-300 border hover:text-red-500 rounded-2xl font-medium font-poppins flex flex-row justify-center  items-center text-2xl lg:text-xl sm:text-lg"
        onClick={() => {
          setValue(value + 1);
          setSnackBar(true), showSomeLove();
        }}
      >
        <FaHeart className="animate-pulse " color="red" />
        <span className="text-lg">{value}</span>
      </button>
    </nav>
  );
};

export default Navbar;
{
  /* {snackbar && (
        <div className=" bg-white p-4   bottom-10 text-2xl animate-bounce rounded-xl w-1/2 sm:text-xs">
          <div className="flex-row text-center">
            <p>Hack The League ❤️ you {value} times !!!</p>
          </div>
        </div>
      )} */
}

{
  /* <NavLink
        target="_blank"
        className="z-50"
        rel="noreferrer"
        to="https://mlh.io/"
      >
        <img
          src={
            "https://res.cloudinary.com/dw58xmffd/image/upload/v1706290497/hacktheleague/MLH_vv6xor.png"
          }
          className="w-30  lg:w-24  sm:w-16 hidden"
          alt="mlh-logo"
        />
      </NavLink> */
}

{
  /* <li className="sm:hidden">
          <a
            className="hover:underline"
            href="https://chapter2-htl.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Chapter-2
          </a>
        </li> */
}
