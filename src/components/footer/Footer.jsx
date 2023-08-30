import LOGO from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg pt-12 flex flex-col gap-6">
      <div className="mx-52 flex flex-row justify-evenly mb-4">
        <img src={LOGO} />
        <div className="flex flex-col text-xl font-medium justify-evenly text-white">
          <a>About</a>
          <a>Chapter-1</a>
          <a>Chapter-2</a>
          <a>Code of Conduct</a>
        </div>
        <div className="flex flex-col text-xl font-medium justify-evenly text-white">
          <a>Explore</a>
          <a>Previous Events</a>
          <a>Upcoming Events</a>
          <a>Sponsor Us</a>
        </div>
        <div className="flex flex-row justify-evenly gap-2 text-3xl place-self-end">
          <FaInstagram color="white"/>
          <FaInstagram color="white"/>
          <FaInstagram color="white"/>
          <FaInstagram color="white"/>
          <FaInstagram color="white"/>
        </div>
      </div>
      <div className="h-1 bg-white" />
      <span className="text-center mb-4 text-gray-100 text-xl font-medium font-mono">
        Copyright @hacktheleague 2023
      </span>
    </div>
  );
};

export default Footer;
