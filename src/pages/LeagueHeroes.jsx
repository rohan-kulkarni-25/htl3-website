import PageHeading from "../components/PageHeading";
import MentorCard from "./../components/previousMentors-section/MentorCard";

const LeagueHeroes = () => {
  const Mentors = [
    {
      name: "Harsh Ghodkar",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289165/hacktheleague/mentors/1harsh-ghodkar-6535114c02e5f_qmsria.webp",
    },
    {
      name: "Vraj Desai",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289166/hacktheleague/mentors/2vraj-desai-6535114d01b3e_saff3z.webp",
    },
    {
      name: "Rahul Kulkarni",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289166/hacktheleague/mentors/3rahul-kulkarni-6535114d4455a_s4xixf.webp",
    },
    {
      name: "Vandit Pandya",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289167/hacktheleague/mentors/4vandit-pandya-6535114e3380e_ykfezq.webp",
    },
    {
      name: "Dhiraj Chauhan",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289167/hacktheleague/mentors/5dhiraj-chauhan-6535114e967c9_perddj.webp",
    },
    {
      name: "Wilfred Almeida",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289168/hacktheleague/mentors/6wilfred-almeida-6535114f803a5_wxrlte.webp",
    },
    {
      name: "Jay Patel",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289169/hacktheleague/mentors/7jay-patel-65351151ee7fc_n1slt5.webp",
    },
    {
      name: "Aryan Kaushik",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289169/hacktheleague/mentors/8aryan-kaushik-653511527600e_ghhru5.webp",
    },
    {
      name: "Neel Shah",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289170/hacktheleague/mentors/9neel-shah-65351158a1a79_lzfoee.webp",
    },
    {
      name: "Laksh Samdariya",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289170/hacktheleague/mentors/10laksh-samdariya-6535115a41878_ebjh5g.webp",
    },
    {
      name: "Rishabh Bansal",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289171/hacktheleague/mentors/11rishabh-bansal-6535115adaf36_eoevtf.webp",
    },
    {
      name: "Neel Patel",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289171/hacktheleague/mentors/12neel-patel-6535115db0a9a_omyr8h.webp",
    },
    {
      name: "Rohit Yadav",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289172/hacktheleague/mentors/13rohit-yadav-653511610d2b9_kys3ai.webp",
    },
    {
      name: "Ayush Dubey",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289173/hacktheleague/mentors/14ayush-dubey-653511647678f_s0nnvy.webp",
    },
    {
      name: "Prajakta Kadam",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289173/hacktheleague/mentors/15prajakta-kadam-653511659f822_arrwzn.webp",
    },
    {
      name: "Anam Ansari",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289175/hacktheleague/mentors/16anam-ansari-65351168ee84e_q2ud12.webp",
    },
    {
      name: "Vedant Kakde",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289175/hacktheleague/mentors/17vedant-kakde-653511699b97d_uquqnc.webp",
    },
    {
      name: "Prasan Singh",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289176/hacktheleague/mentors/18prasan-singh-6535116adb7c1_floiu9.webp",
    },
    {
      name: "Vishek Pratap",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289176/hacktheleague/mentors/19vishek-pratap-6535116a79189_rhgzwb.webp",
    },
    {
      name: "Rohit Ranjan",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289177/hacktheleague/mentors/20rohit-ranjan-6535116e217ef_fkxfao.webp",
    },
    {
      name: "Subham Gourisaria",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289178/hacktheleague/mentors/21subham-gourisaria-6535116e84509_ybm1jt.webp",
    },
    {
      name: "Aditya Oberoi",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289179/hacktheleague/mentors/22aditya-oberoi-6535116fbe42f_h7unfb.webp",
    },
    {
      name: "Akanksha Bhasin",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289179/hacktheleague/mentors/23akanksha-bhasin-6535117076bdc_pafuq0.webp",
    },
    {
      name: "Haimantika Mitra",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289180/hacktheleague/mentors/24haimantika-mitra-653511719469a_kdsagi.webp",
    },
    {
      name: "Himanshu Raj",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289180/hacktheleague/mentors/25himanshu-raj-65351171e0506_yqx1rt.webp",
    },
    {
      name: "Kartikey Rawat",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289181/hacktheleague/mentors/26kartikey-rawat-65351172b0ece_w9601t.webp",
    },
    {
      name: "Karuna Tata",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289182/hacktheleague/mentors/27karuna-tata-65351173bba0e_zv6iq6.webp",
    },
    {
      name: "Nandita Gaur",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289183/hacktheleague/mentors/28nandita-gaur-65351173ed8bf_qb7gqa.webp",
    },
    {
      name: "Shubhangi Gupta",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289183/hacktheleague/mentors/29shubhangi-gupta-65351174a9d4e_qk7o2e.webp",
    },
    {
      name: "Siddharth Dayalwal",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289184/hacktheleague/mentors/30siddharth-dayalwal-65351174da4e9_jnxkgv.webp",
    },
    {
      name: "Simran Makhija",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289185/hacktheleague/mentors/31simran-makhija-65351175ca385_yfjsrg.webp",
    },
    {
      name: "Tanay Mehta",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289186/hacktheleague/mentors/32tanay-mehta-653511769cab3_dhuguz.webp",
    },
    {
      name: "Vaishnavi Dwivedi",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289186/hacktheleague/mentors/33vaishnavi-dwivedi-65351177d65a2_yn131v.webp",
    },
    {
      name: "Vivek Sridhar",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289187/hacktheleague/mentors/34vivek-sridhar-65351179612d0_q636d5.webp",
    },
    {
      name: "Yuvank Soni",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289188/hacktheleague/mentors/35.Yuvank_Soni_rxbo1x.jpg",
    },
  ];
  return (
    <section className=" flex flex-col gap-8  mt-8  mx-24 sm:mx-4 sm:gap-12 overflow-hidden">
      <PageHeading title={"[LEAGUE HEROES]"} />
      <div className="flex flex-row flex-wrap gap-12  pb-24 justify-center sm:gap-3 h-full overflow-y-scroll ">
        {Mentors.map((mentor) => (
          <MentorCard
            imgSrc={mentor.imgSrc}
            name={mentor.name}
            key={mentor.name}
          />
        ))}
      </div>
    </section>
  );
};

export default LeagueHeroes;
