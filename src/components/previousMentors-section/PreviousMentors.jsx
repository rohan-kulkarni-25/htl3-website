import MentorCard from "./MentorCard";

import HarshImage from "../../assets/mentors2/1.Harsh Ghodkar.jpg";
import VrajImage from "../../assets/mentors2/2.Vraj Desai.png";
import RahulImage from "../../assets/mentors2/3.Rahul Kulkarni.jpg";
import VanditImage from "../../assets/mentors2/4.Vandit_Pandya.jpg";
import DhirajImage from "../../assets/mentors2/5.Dhiraj Chauhan.png";
import WilfredImage from "../../assets/mentors2/6.Wilfred Almeida.jpg";
import JayImage from "../../assets/mentors2/7.Jay Patel.jpg";
import AryanImage from "../../assets/mentors2/8.Aryan Kaushik.jpg";
import NeelImage from "../../assets/mentors2/9.Neel Shah.jpg";
import LakshImage from "../../assets/mentors2/10.Laksh Samdariya.png";
import RishabhImage from "../../assets/mentors2/11.Rishabh Bansal.jpg";
import NeelPImage from "../../assets/mentors2/12.Neel Patel.jpg";
import RohitImage from "../../assets/mentors2/13.Rohit Yadav.jpg";
import AyushImage from "../../assets/mentors2/14.Ayush Dubey.png";
import PrajaktaImage from "../../assets/mentors2/15.Prajakta Kadam.jpg";
import AnamImage from "../../assets/mentors2/16.Anam Ansari.jpg";
import VedantImage from "../../assets/mentors2/17.Vedant Kakde.png";
import PrasanImage from "../../assets/mentors2/18.Prasan Singh.png";
import VishekImage from "../../assets/mentors2/19.Vishek Pratap.jpg";
import RohitRImage from "../../assets/mentors2/20.Rohit Ranjan.jpg";
import SubhamImage from "../../assets/mentors2/21.Subham Gourisaria.jpg";
import AdityaImage from "../../assets/mentors2/22.Aditya Oberoi.png";
import AkankshaImage from "../../assets/mentors2/23.Akanksha Bhasin.jpg";
import HaimantikaImage from "../../assets/mentors2/24.Haimantika Mitra.png";
import HimanshuImage from "../../assets/mentors2/25.Himanshu Raj.png";
import KartikeyImage from "../../assets/mentors2/26.Kartikey Rawat.png";
import KarunaImage from "../../assets/mentors2/27.Karuna Tata.jpg";
import NanditaImage from "../../assets/mentors2/28.Nandita Gaur.png";
import ShubhangiImage from "../../assets/mentors2/29.Shubhangi Gupta.jpg";
import SiddharthImage from "../../assets/mentors2/30.Siddharth Dayalwal.jpg";
import SimranImage from "../../assets/mentors2/31.Simran Makhija.png";
import TanayImage from "../../assets/mentors2/32.Tanay Mehta.jpg";
import VaishnaviImage from "../../assets/mentors2/33.Vaishnavi Dwivedi.jpg";
import VivekImage from "../../assets/mentors2/34.Vivek Sridhar.png";
import YuvankImage from "../../assets/mentors2/35.Yuvank Soni.jpg";

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
        <h2 className="text-6xl font-bold text-white lg:text-5xl sm:text-3xl">
          League Heroes
        </h2>
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
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
