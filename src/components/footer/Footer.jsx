import LOGO from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-black rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg pt-12 flex flex-col gap-6 "
    >
      <div className="mx-52 flex flex-row justify-around font-poppins items-center lg:mx-12 sm:flex-col sm:mx-4 ">
        <img src={LOGO} alt="logo" className=" w-32 my-4" />
        <div className="flex flex-col text-xl sm:text-lg font-medium text-left sm:text-center text-white gap-3">
          <h1 className=" font-semibold">About</h1>
          <a
            rel="noreferrer"
            href="https://www.hacktheleague.com/hacktheleague.html"
            className="font-light"
            target="_blank"
          >
            Chapter-1
          </a>
          <a
            rel="noreferrer"
            href="https://www.hacktheleague.com/"
            className=" font-light"
            target="_blank"
          >
            Chapter-2
          </a>
          <a
            rel="noreferrer"
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            className=" font-light"
            target="_blank"
          >
            Code of Conduct
          </a>
        </div>
        <div className="flex flex-col text-xl font-medium text-left sm:text-center text-white gap-3 my-4 sm:text-lg">
          <h1 className=" font-semibold">Explore</h1>
          <a
            className=" font-light"
            href="https://chapter2-htl.vercel.app/meetups.html"
            target="_blank"
            rel="noreferrer"
          >
            Previous Events
          </a>
          {/* <a className=" font-light ">Upcoming Events</a> */}
          <a className=" font-light" href="/">
            Sponsor Us
          </a>
        </div>
        <div className="flex flex-row justify-evenly text-3xl place-self-end sm:place-self-center gap-4 my-4">
          <a href="mailto:support@hacktheleague.tech">
            <FontAwesomeIcon icon={faEnvelope} color="white" />
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/HackTheLeague"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} color="white" />
          </a>
          <a
            rel="noreferrer"
            href="https://instagram.com/hack_the_league"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} color="white" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/company/hack-the-league/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} color="white" />
          </a>
        </div>
      </div>
      <div className="h-[0.5px] bg-white" />
      <span className="text-center mb-4 text-gray-400  text-lg font-medium font-poppins sm:text-sm">
        Copyright @hacktheleague 2023
      </span>
    </div>
  );
};

export default Footer;
