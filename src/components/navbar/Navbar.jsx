import LOGO from "../../assets/compressed/logo.png";
import MLH from "../../assets/compressed/MLH.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky z-10 h-20 flex flex-row justify-between bg-opacity-90 top-10 bg-white mx-24 lg:h-12 sm:mx-8">
      <NavLink to='/'><img src={LOGO} className="w-36 h-fit -ml-4 lg:w-24 sm:h-20" alt="img" /></NavLink>
      <ul className="flex flex-row justify-center place-items-center gap-12 text-2xl lg:text-xl font-semibold sm:text-sm sm:gap-2 ">
        <li className="">
          <a className="hover:text-white" href="#about">
            About
          </a>
        </li>
        <li>
          <a
            className="hover:text-white"
            href="https://chapter2-htl.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Chapter-2
          </a>
        </li>
        <li>
          <NavLink to="/meetups"
            className="hover:text-white"
          >
            Meetups
          </NavLink>
        </li>
        <li>
          <a className="hover:text-white" href="#footer">
            Contact
          </a>
        </li>
      </ul>

      <img src={MLH} className="w-24 h-fit -mr-4 lg:w-20 sm:w-16 sm:h-32" alt="img" />
    </nav>
  );
};

export default Navbar;
