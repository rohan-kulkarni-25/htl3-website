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
      <ul className="flex flex-row underline-offset-4 underline  justify-center place-items-center gap-6 tracking-wider  font-medium  text-sm lg:text-xl  sm:text-sm sm:gap-8 text-white sm:hidden ">
        <li className=" text-sm hover:scale-105">
          <a className="hover:underline" href="/">
            Home
          </a>
        </li>
        <li className=" text-sm hover:scale-105">
          <a className="hover:underline" href="/about">
            About
          </a>
        </li>
        <li className=" text-sm hover:scale-105">
          <NavLink to="/tracks" className="hover:underline">
            Tracks
          </NavLink>
        </li>
        <li className=" text-sm hover:scale-105">
          <NavLink to="/prizes" className="hover:underline">
            Prizes
          </NavLink>
        </li>
        <li className=" text-sm hover:scale-105">
          <NavLink to="/communitypartners" className="hover:underline">
            Community Partners
          </NavLink>
        </li>

        <li className=" text-sm hover:scale-105">
          <NavLink to="/leagueHeroes" className="hover:underline">
            League Heroes
          </NavLink>
        </li>

        <li className=" text-sm hover:scale-105">
          <a href="/sponsors" className="hover:underline">
            Sponsors
          </a>
        </li>
        {/* <li className=" text-sm hover:scale-105">
          <NavLink to="/evangelists" className="hover:underline">
            EVANGELISTS
          </NavLink>
        </li> */}
        <li className=" text-sm hover:scale-105">
          <NavLink to="/team" className="hover:underline">
            Team
          </NavLink>
        </li>
        <li className=" text-sm hover:scale-105">
          <a href="https://chapter2-htl.vercel.app" className="hover:underline">
            Chapter 2
          </a>
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
        <ul className="flex flex-col  justify-center place-items-center  gap-16 text-xl lg:text-xl font-semibold sm:text-sm sm:gap-4 text-black">
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
        className="absolute top-2 right-2 px-6 py-3 gap-4 border-[#4652DD] bg-none bg-white text-black ease-in hover:duration-300 border hover:text-red-500 rounded-2xl font-medium font-poppins flex flex-row justify-center  items-center text-2xl lg:text-xl sm:text-sm"
        onClick={() => {
          setValue(value + 1);
          setSnackBar(true), showSomeLove();
        }}
      >
        <FaHeart className="animate-pulse " color="red" />
        <span className="text-sm">{value}</span>
      </button>
    </nav>
  );
};

export default Navbar;
