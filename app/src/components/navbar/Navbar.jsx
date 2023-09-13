import LOGO from "../../assets/compressed/logo.png";
import MLH from "../../assets/compressed/MLH.png";

const Navbar = () => {
  return (
    <nav className="sticky z-10 h-10 sm:h-20 md:h-20  flex flex-row justify-between  top-10  bg-black bg-opacity-30 lg:backdrop-blur mx-2 sm:mx-7 lg:mx-40 xl:mx-60 rounded-lg">
      <img src={LOGO} className=" h-20 sm:h-28 xl:h-32 -mx-2 sm:-mx-6" alt="img" />
      <ul
        className={`lg:flex  lg:pb-0 py-10 w-1/2 md:h-fit lg:py-0 left-2/4 space-y-9 lg:space-y-0 text-center    absolute lg:static lg:bg-opacity-0 text-gray-500 bg-black lg:backdrop-blur-none bg-opacity-30 backdrop-blur-2xl  rounded-lg lg:w-auto lg:pl-0 gap-10 lg:pt-6  xl:gap-20 md:text-2xl md:font-semibold`}
        >
        <li>
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

      <img src={MLH} className="h-24 md:h-48 md:w-fit w-fit" alt="img" />
    </nav>
  );
};

export default Navbar;
