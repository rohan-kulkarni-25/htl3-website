import LOGO from "./../../assets/logo.png";
import MLH from "./../../assets/MLH.png";

const Navbar = () => {
  return (
    <nav className="sticky  h-20   flex flex-row justify-between top-10 bg-white mx-60 rounded-lg">
      <img src={LOGO} className="h-36" />
      <div className="flex flex-row place-items-center gap-8 font-bold text-2xl">
        <a>About</a>
        <a>Chapter-2</a>
        <a>Meetups</a>
        <a>Team</a>
        <a>Contact</a>
      </div>
      <img src={MLH} className="h-48" />
    </nav>
  );
};

export default Navbar;
