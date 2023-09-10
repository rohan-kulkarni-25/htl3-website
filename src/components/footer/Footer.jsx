import LOGO from "../../assets/logo.png";
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { CiMail, CiInstagram } from "react-icons/ci"
import x from "../../assets/x.png"
const Footer = () => {
  return (
    <div className="bg-black rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg pt-12 flex flex-col gap-6">
      <div className=" xl:mx-52 xl:mb-4 flex flex-col md:flex-row justify-center md:justify-around  items-center ">
        <img src={LOGO} className=" w-32 my-4" />
        <div className="flex flex-col text-xl font-medium text-center md:text-left   text-white gap-3">
          <h1 className=" font-semibold" >About</h1>
          <a className=" font-light">Chapter-1</a>
          <a className=" font-light">Chapter-2</a>
          <a className=" font-light">Code of Conduct</a>
        </div>
        <div className="flex flex-col text-xl font-medium text-center md:text-left  text-white gap-3 my-4" >
          <h1 className=" font-semibold">Explore</h1>
          <a className=" font-light">Previous Events</a>
          <a className=" font-light">Upcoming Events</a>
          <a className=" font-light">Sponsor Us</a>
        </div>
        <div className="flex flex-row justify-evenly text-3xl md:place-self-end gap-4 my-4">
          <a href="mailto:support@hacktheleague.tech"><CiMail color="white"/></a>
          <a href="https://twitter.com/HackTheLeague" target="_blank"><img src={x} className=" w-7 h-7" color="white"/></a>
          <a href="https://instagram.com/hack_the_league" target="_blank"><CiInstagram color="white"/></a>
          <a href="https://www.linkedin.com/company/hack-the-league/" target="_blank"><FaLinkedin color="white"/></a>
        </div>
      </div>
      <div className="h-1 bg-white" />
      <span className="text-center mb-4 text-gray-400  text-base sm:text-xl font-medium font-mono">
        Copyright @hacktheleague 2023
      </span>
    </div>
  );
};

export default Footer;
