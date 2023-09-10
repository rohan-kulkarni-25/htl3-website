import LOGO from "./../../assets/logo.png";
import MLH from "./../../assets/MLH.png";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <nav className="sticky z-10 h-10 sm:h-20 md:h-20  flex flex-row justify-between  top-10  bg-black bg-opacity-30 lg:backdrop-blur mx-2 sm:mx-7 lg:mx-40 xl:mx-60 rounded-lg">
      <img src={LOGO} className="h-24 md:h-40" />

      <div
        onClick={() => setOpen(!open)}
        className="text-4xl sm:text-6xl ml-40 sm:ml-96 md:ml-80 cursor-pointer lg:hidden"
      >
        {open ? (
          <AiOutlineClose className=" text-white" />
        ) : (
          <AiOutlineMenu className=" text-white" />
        )}
      </div>

      <ul
        className={`lg:flex  lg:pb-0 py-10 w-1/2 md:h-fit lg:py-0 left-2/4 space-y-9 lg:space-y-0 text-center    absolute lg:static lg:bg-opacity-0 text-gray-500 bg-black lg:backdrop-blur-none bg-opacity-30 backdrop-blur-2xl  rounded-lg lg:w-auto lg:pl-0 transition-all duration-500 ease-in ${
          open ? " top-36 " : "top-[-490px]"
        } gap-10 lg:pt-6  xl:gap-20 md:text-2xl md:font-semibold`}
      >
        <li>
          <a className="hover:text-white" href="/">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="/">
            Chapter-2
          </a>
        </li>
        {/* <li>
          <a className="hover:text-white" href="/">
            Meetups
          </a>
        </li> */}
        {/* <li>
          <a className="hover:text-white" href="/">
            Team
          </a>
        </li> */}
        <li>
          <a className="hover:text-white" href="#footer">
            Contact
          </a>
        </li>
      </ul>

      <img src={MLH} className="h-32 md:h-48" />
    </nav>
  );
};

export default Navbar;
