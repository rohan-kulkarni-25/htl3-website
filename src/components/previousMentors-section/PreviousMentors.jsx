import MentorCard from "./MentorCard";

import HarshImage from "../../assets/mentorss/1harsh-ghodkar-6535114c02e5f.webp";
import VrajImage from "../../assets/mentorss/2vraj-desai-6535114d01b3e.webp";
import RahulImage from "../../assets/mentorss/3rahul-kulkarni-6535114d4455a.webp";
import VanditImage from "../../assets/mentorss/4vandit-pandya-6535114e3380e.webp";
import DhirajImage from "../../assets/mentorss/5dhiraj-chauhan-6535114e967c9.webp";
import WilfredImage from "../../assets/mentorss/6wilfred-almeida-6535114f803a5.webp";
import JayImage from "../../assets/mentorss/7jay-patel-65351151ee7fc.webp";
import AryanImage from "../../assets/mentorss/8aryan-kaushik-653511527600e.webp";
import NeelImage from "../../assets/mentorss/9neel-shah-65351158a1a79.webp";
import LakshImage from "../../assets/mentorss/10laksh-samdariya-6535115a41878.webp";
import RishabhImage from "../../assets/mentorss/11rishabh-bansal-6535115adaf36.webp";
import NeelPImage from "../../assets/mentorss/12neel-patel-6535115db0a9a.webp";
import RohitImage from "../../assets/mentorss/13rohit-yadav-653511610d2b9.webp";
import AyushImage from "../../assets/mentorss/14ayush-dubey-653511647678f.webp";
import PrajaktaImage from "../../assets/mentorss/15prajakta-kadam-653511659f822.webp";
import AnamImage from "../../assets/mentorss/16anam-ansari-65351168ee84e.webp";
import VedantImage from "../../assets/mentorss/17vedant-kakde-653511699b97d.webp";
import PrasanImage from "../../assets/mentorss/18prasan-singh-6535116adb7c1.webp";
import VishekImage from "../../assets/mentorss/19vishek-pratap-6535116a79189.webp";
import RohitRImage from "../../assets/mentorss/20rohit-ranjan-6535116e217ef.webp";
import SubhamImage from "../../assets/mentorss/21subham-gourisaria-6535116e84509.webp";
import AdityaImage from "../../assets/mentorss/22aditya-oberoi-6535116fbe42f.webp";
import AkankshaImage from "../../assets/mentorss/23akanksha-bhasin-6535117076bdc.webp";
import HaimantikaImage from "../../assets/mentorss/24haimantika-mitra-653511719469a.webp";
import HimanshuImage from "../../assets/mentorss/25himanshu-raj-65351171e0506.webp";
import KartikeyImage from "../../assets/mentorss/26kartikey-rawat-65351172b0ece.webp";
import KarunaImage from "../../assets/mentorss/27karuna-tata-65351173bba0e.webp";
import NanditaImage from "../../assets/mentorss/28nandita-gaur-65351173ed8bf.webp";
import ShubhangiImage from "../../assets/mentorss/29shubhangi-gupta-65351174a9d4e.webp";
import SiddharthImage from "../../assets/mentorss/30siddharth-dayalwal-65351174da4e9.webp";
import SimranImage from "../../assets/mentorss/31simran-makhija-65351175ca385.webp";
import TanayImage from "../../assets/mentorss/32tanay-mehta-653511769cab3.webp";
import VaishnaviImage from "../../assets/mentorss/33vaishnavi-dwivedi-65351177d65a2.webp";
import VivekImage from "../../assets/mentorss/34vivek-sridhar-65351179612d0.webp";
import YuvankImage from "../../assets/mentorss/35.Yuvank Soni.jpg";

const PreviousMentors = () => {
  const Mentors = [
    { name: "Harsh Ghodkar", imgSrc: HarshImage },
    { name: "Vraj Desai", imgSrc: VrajImage },
    { name: "Rahul Kulkarni", imgSrc: RahulImage },
    { name: "Vandit Pandya", imgSrc: VanditImage },
    { name: "Dhiraj Chauhan", imgSrc: DhirajImage },
    { name: "Wilfred Almeida", imgSrc: WilfredImage },
    { name: "Jay Patel", imgSrc: JayImage },
    { name: "Aryan Kaushik", imgSrc: AryanImage },
    { name: "Neel Shah", imgSrc: NeelImage },
    { name: "Laksh Samdariya", imgSrc: LakshImage },
    { name: "Rishabh Bansal", imgSrc: RishabhImage },
    { name: "Neel Patel", imgSrc: NeelPImage },
    { name: "Rohit Yadav", imgSrc: RohitImage },
    { name: "Ayush Dubey", imgSrc: AyushImage },
    { name: "Prajakta Kadam", imgSrc: PrajaktaImage },
    { name: "Anam Ansari", imgSrc: AnamImage },
    { name: "Vedant Kakde", imgSrc: VedantImage },
    { name: "Prasan Singh", imgSrc: PrasanImage },
    { name: "Vishek Pratap", imgSrc: VishekImage },
    { name: "Rohit Ranjan", imgSrc: RohitRImage },
    { name: "Subham Gourisaria", imgSrc: SubhamImage },
    { name: "Aditya Oberoi", imgSrc: AdityaImage },
    { name: "Akanksha Bhasin", imgSrc: AkankshaImage },
    { name: "Haimantika Mitra", imgSrc: HaimantikaImage },
    { name: "Himanshu Raj", imgSrc: HimanshuImage },
    { name: "Kartikey Rawat", imgSrc: KartikeyImage },
    { name: "Karuna Tata", imgSrc: KarunaImage },
    { name: "Nandita Gaur", imgSrc: NanditaImage },
    { name: "Shubhangi Gupta", imgSrc: ShubhangiImage },
    { name: "Siddharth Dayalwal", imgSrc: SiddharthImage },
    { name: "Simran Makhija", imgSrc: SimranImage },
    { name: "Tanay Mehta", imgSrc: TanayImage },
    { name: "Vaishnavi Dwivedi", imgSrc: VaishnaviImage },
    { name: "Vivek Sridhar", imgSrc: VivekImage },
    { name: "Yuvank Soni", imgSrc: YuvankImage },
  ];
  return (
    <section className=" flex flex-col gap-24 ">
      <div className="mx-48 flex flex-row gap-7 place-items-center lg:mx-24 sm:mx-8">
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          League Heroes
        </h2>
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>
      <div className="flex overflow-hidden overflow-x-clip items-start  ">
        {Mentors.map((mentor) => (
          <div className="flex-none w-fit mr-8">
            <MentorCard imgSrc={mentor.imgSrc} name={mentor.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousMentors;
