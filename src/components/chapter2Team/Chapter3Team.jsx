import TeamCard from "./TeamCard";
import JatinImage from "../../assets/team3/Jatin_Pandya.png";
import SakshamImage from "../../assets/team3/Saksham.jpg";
import ShreyanshImage from "../../assets/team3/Shreyansh.jpg";
import RohanImage from "../../assets/team3/Rohan.jpeg";
import KartikeyImage from "../../assets/team3/Kartikey_Garg.jpg";
import AdityaImage from "../../assets/team3/Aditya_Joshi.jpg";
import AasthaImage from "../../assets/team3/Aastha_Shah.jpg";
import HarshImage from "../../assets/team3/Harsh.jpeg";
import JyotiImage from "../../assets/team3/Jyoti_Mondal.jpg";
import NisargImage from "../../assets/team3/Nisarg_Thakkar.png";
import PrashantImage from "../../assets/team3/Prashant_Bhavsar.jpg";
import ShivangImage from "../../assets/team3/Shivang_Parmar.jpg";
import LaveenaImage from "../../assets/team3/Laveena_Chetwani.jpg";
import NeelImage from "../../assets/team3/Neel_Shah.jpeg";
import ParulImage from "../../assets/team3/Parul_Yaduvanshi.jpg";
import PriyanshiImage from "../../assets/team3/Priyanshi_Rai.webp";
import ShraavaniImage from "../../assets/team3/Shraavani_Tople.jpg";
import VaishnaviImage from "../../assets/team3/Vaishnavi_Joshi.jpg";
import KhushalImage from "../../assets/team3/Khushal_Ghathalia.jpg";
import HarshitImage from "../../assets/team2/8.Harshit_Goyal.png";
import VinayakImage from "../../assets/team3/Vinayak_Kesharwani.jpeg";

const Chapter3Team = () => {
  const teamMembers = [
    { name: "Jatin Pandya", imgSrc: JatinImage },
    { name: "Saksham Taneja", imgSrc: SakshamImage },
    { name: "Shreyansh Rai", imgSrc: ShreyanshImage },
    { name: "Harshit Goyal", imgSrc: HarshitImage },
    { name: "Rohan Kulkarni", imgSrc: RohanImage },
    { name: "Kartikey Garg", imgSrc: KartikeyImage },
    { name: "Aditya Joshi", imgSrc: AdityaImage },
    { name: "Aastha Shah", imgSrc: AasthaImage },
    { name: "Harsh Pal", imgSrc: HarshImage },
    { name: "Jyoti Mondal", imgSrc: JyotiImage },
    { name: "Nisarg Thakkar", imgSrc: NisargImage },
    { name: "Prashant Bhavsar", imgSrc: PrashantImage },
    { name: "Shivang Parmar", imgSrc: ShivangImage },
    { name: "Laveena Chetwani", imgSrc: LaveenaImage },
    { name: "Neel Shah", imgSrc: NeelImage },
    { name: "Parul Yaduvanshi", imgSrc: ParulImage },
    { name: "Priyanshi Rai", imgSrc: PriyanshiImage },
    { name: "Shraavani Tople", imgSrc: ShraavaniImage },
    { name: "Vaishnavi Joshi", imgSrc: VaishnaviImage },
    { name: "Khushal Ghathalia", imgSrc: KhushalImage },
    { name: "Vinayak Kesharwani", imgSrc: VinayakImage },
  ];
  return (
    <section className="mx-7  md:mx-12 2xl:mx-48 flex flex-col gap-24">
      <div className="flex flex-row gap-7 place-items-center ">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          Chapter-3 Team
        </h2>
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>

      <span className=" text-white text-2xl font-medium -mt-12 font-mono">
        The team consists of passionate developers who desire to create a change
        with the power of technology! The team is the soul of this hackathon!
      </span>
      <div className="flex flex-wrap justify-evenly flex-row place-items-center gap-8 gap-y-8">
        {teamMembers.map((member) => (
          <TeamCard
            name={member.name}
            imgSrc={member.imgSrc}
            key={`3-${member.name}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Chapter3Team;
