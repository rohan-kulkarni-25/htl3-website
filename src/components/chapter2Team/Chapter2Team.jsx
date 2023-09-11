import TeamCard from "./TeamCard";

import JatinImage from "../../assets/team2/1.Jatin_Pandya.png";
import SakshamImage from "../../assets/team2/2.Saksham_Taneja.jpg";
import DheerajImage from "../../assets/team2/3.Dheeraj_Ghosh.jpg";
import AditiImage from "../../assets/team2/4.Aditi_Gupta.png";
import ShreyanshImage from "../../assets/team2/5.Shreyansh_Rai.jpg";
import AabhashImage from "../../assets/team2/6.Aabhash_Kesharwani.jpeg";
import ManjeetImage from "../../assets/team2/7.Manjeet_Kumar.jpg";
import HarshitImage from "../../assets/team2/8.Harshit_Goyal.png";
import RohanImage from "../../assets/team2/9.Rohan_Kulkarni.jpg";
import ShubhamImage from "../../assets/team2/10.Shubham_suduh.jpg";
import RiyaImage from "../../assets/team2/11.Riya_Sambhwani.png";
// import ShubhangiImage from "../../assets/team2/12.Shubhangi_sharma.jpg";
import RiddhiImage from "../../assets/team2/13.Riddhi_desai.jpg";
import MansiImage from "../../assets/team2/14.Mansi_Valiramani.jpg";
// import SmritiImage from "../../assets/team2/15.Smriti_Sharma.jpg";
import ManishiImage from "../../assets/team2/16.Manishi_Bhatnagar.jpg";
import JeevanshiImage from "../../assets/team2/17.Jeevanshi_Bansal.jpg";

const Chapter2Team = () => {
  const teamMembers = [
    { name: "Jatin Pandya", imgSrc: JatinImage },
    { name: "Saksham Taneja", imgSrc: SakshamImage },
    { name: "Dheeraj Ghosh", imgSrc: DheerajImage },
    { name: "Aditi Gupta", imgSrc: AditiImage },
    { name: "Shreyansh_Rai", imgSrc: ShreyanshImage },
    { name: "Aabhash Kesharwani", imgSrc: AabhashImage },
    { name: "Manjeet Kumar", imgSrc: ManjeetImage },
    { name: "Harshit Goyal", imgSrc: HarshitImage },
    { name: "Rohan Kulkarni", imgSrc: RohanImage },
    { name: "Shubham Suduh", imgSrc: ShubhamImage },
    { name: "Riya Sambhwani", imgSrc: RiyaImage },
    // { name: "Shubhangi Sharma", imgSrc: ShubhangiImage },
    { name: "Riddhi Desai", imgSrc: RiddhiImage },
    { name: "Mansi Valiramani", imgSrc: MansiImage },
    // { name: "Smriti Sharma", imgSrc: SmritiImage },
    { name: "Manishi Bhatnagar", imgSrc: ManishiImage },
    { name: "Jeevanshi Bansal", imgSrc: JeevanshiImage },
  ];
  return (
    <section className="mx-7  md:mx-12 2xl:mx-48 flex flex-col gap-24">
      <div className="flex flex-row gap-7 place-items-center ">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          Chapter-2 Team
        </h2>
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>
      {/* 
      <span className=" text-white text-2xl font-medium -mt-12 font-mono">
        The team consists of passionate developers who desire to create a change
        with the power of technology! The team is the soul of this hackathon!
      </span> */}
      <div className="flex flex-wrap justify-evenly flex-row place-items-center gap-8 gap-y-8">
        {teamMembers.map((member) => (
          <TeamCard
            name={member.name}
            imgSrc={member.imgSrc}
            key={`2-${member.name}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Chapter2Team;
