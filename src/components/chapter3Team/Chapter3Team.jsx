import TeamCard from "../chapter2Team/TeamCard";
import JatinImage from "../../assets/teamm3/jatin-pandya.webp";
import SakshamImage from "../../assets/teamm3/saksham.webp";
import ShreyanshImage from "../../assets/teamm3/shreyansh.webp";
import RohanImage from "../../assets/teamm3/rohan.webp";
import KartikeyImage from "../../assets/teamm3/kartikey-garg.webp";
import AdityaImage from "../../assets/teamm3/aastha-shah.webp";
import AasthaImage from "../../assets/teamm3/aastha-shah.webp";
import HarshImage from "../../assets/teamm3/harsh.webp";
import JyotiImage from "../../assets/teamm3/jyoti-mondal.webp";
import NisargImage from "../../assets/teamm3/nisarg-thakkar.webp";
import PrashantImage from "../../assets/teamm3/prashant-bhavsar.webp";
import ShivangImage from "../../assets/teamm3/shivang-parmar.webp";
import LaveenaImage from "../../assets/teamm3/laveena-chetwani.webp";
import NeelImage from "../../assets/teamm3/neel-shah.webp";
import ParulImage from "../../assets/teamm3/parul-yaduvanshi.webp";
import PriyanshiImage from "../../assets/teamm3/priyanshi-rai.webp";
import ShraavaniImage from "../../assets/teamm3/shraavani-tople.webp";
import VaishnaviImage from "../../assets/teamm3/vaishnavi-joshi.webp";
import KhushalImage from "../../assets/teamm3/khushal-ghathalia.webp";
import HarshitImage from "../../assets/teamm3/harshit-goyal.webp";
import VinayakImage from "../../assets/teamm3/vinayak-kesharwani.webp";

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
    <section className="mx-48 flex flex-col gap-24 lg:mx-24 sm:mx-8">
      <div className="flex flex-row gap-7 place-items-center ">
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          Chapter-3 Team
        </h2>
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>

      <span className=" text-white text-xl font-poppins font-normal -mt-12 font-mono lg:text-xl sm:text-lg">
        The team consists of passionate developers who desire to create a change
        with the power of technology! The team is the soul of this hackathon!
      </span>
      <div className="flex flex-wrap justify-evenly flex-row place-items-center gap-8 gap-y-8 sm:gap-3">
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
