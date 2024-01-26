import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky z-40 h-20 flex flex-row justify-between p-4">
      <NavLink to="/">
        <img
          src={
            "https://res.cloudinary.com/dw58xmffd/image/upload/v1706290493/hacktheleague/logo_vukuk2.png"
          }
          className="w-36 h-fit lg:w-24 sm:h-20 sm:w-28 "
          alt="htl-logo"
        />
      </NavLink>
      <ul className="flex flex-row  justify-center place-items-center gap-16 text-2xl lg:text-xl font-semibold sm:text-sm sm:gap-8 text-white">
        <li className="">
          <a className="hover:underline" href="/">
            Home
          </a>
        </li>

        <li>
          <NavLink to="/leagueHeroes" className="hover:underline">
            League Heroes
          </NavLink>
        </li>
        <li>
          <a href="/#sponsors" className="hover:underline">
            Sponsors
          </a>
        </li>
        <li className="sm:hidden">
          <a
            className="hover:underline"
            href="https://chapter2-htl.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Chapter-2
          </a>
        </li>
        <li>
          <NavLink to="/team" className="hover:underline">
            Team
          </NavLink>
        </li>
      </ul>

      <img
        src={
          "https://res.cloudinary.com/dw58xmffd/image/upload/v1706290497/hacktheleague/MLH_vv6xor.png"
        }
        className="w-30 h-fit lg:w-24 sm:h-20 sm:w-28 "
        alt="mlh-logo"
      />
    </nav>
  );
};

export default Navbar;
