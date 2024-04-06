import React from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaVoicemail,
} from "react-icons/fa";

const StripFooter = () => {
  return (
    <div className="absolute bottom-0 w-screen flex flex-row items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-12 px-4 z-auto">
      <p className="font-mokoto text-white text-xl ">HACK THE LEAGUE</p>
      <p className="font-sans  text-white text-sm tracking-wider">
        Intrested In Sponsoring Or Hosting Workshop ? Reach out to us
      </p>

      <div className="flex flex-row gap-8">
        <FaInstagram color="white" />
        <FaDiscord color="white" />
        <FaLinkedin color="white" />
        <FaEnvelope color="white" />
      </div>
    </div>
  );
};

export default StripFooter;
