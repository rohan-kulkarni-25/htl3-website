import TeamCard from "../components/TeamCard";

const Team = () => {
  const teamMembers = [
    {
      name: "Jatin Pandya",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289919/hacktheleague/team/saksham_lzrleq.webp",
    },
    {
      name: "Saksham Taneja",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289919/hacktheleague/team/saksham_lzrleq.webp",
    },
    {
      name: "Shreyansh Rai",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289920/hacktheleague/team/shreyansh_v94lxb.webp",
    },
    {
      name: "Harshit Goyal",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289910/hacktheleague/team/harshit-goyal_ytfdjg.webp",
    },
    {
      name: "Rohan Kulkarni",
      imgSrc: "https://github.com/rohan-kulkarni-25.png",
    },
    {
      name: "Kartikey Garg",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289911/hacktheleague/team/kartikey-garg_bm6rpy.webp",
    },
    {
      name: "Aditya Joshi",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706290279/hacktheleague/team/jpeg-optimizer_Aditya_Joshi_dtaraf.jpg",
    },
    {
      name: "Aastha Shah",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289909/hacktheleague/team/aastha-shah_noqklg.webp",
    },
    {
      name: "Harsh Pal",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289911/hacktheleague/team/kartikey-garg_bm6rpy.webp",
    },
    {
      name: "Jyoti Mondal",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289911/hacktheleague/team/jyoti-mondal_oh0teh.webp",
    },
    {
      name: "Nisarg Thakkar",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289914/hacktheleague/team/nisarg-thakkar_tnco2e.webp",
    },
    {
      name: "Prashant Bhavsar",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289916/hacktheleague/team/prashant-bhavsar_g4nryw.webp",
    },
    {
      name: "Shivang Parmar",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289919/hacktheleague/team/shivang-parmar_vvkvgm.webp",
    },
    {
      name: "Laveena Chetwani",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289913/hacktheleague/team/laveena-chetwani_ojn2j4.webp",
    },
    {
      name: "Neel Shah",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289913/hacktheleague/team/neel-shah_h5rwjw.webp",
    },
    {
      name: "Parul Yaduvanshi",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289915/hacktheleague/team/parul-yaduvanshi_v2rgp1.webp",
    },
    {
      name: "Priyanshi Rai",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289917/hacktheleague/team/priyanshi-rai_wbqekd.webp",
    },
    {
      name: "Shraavani Tople",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289920/hacktheleague/team/shraavani-tople_u8gfdc.webp",
    },
    {
      name: "Vaishnavi Joshi",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289921/hacktheleague/team/vaishnavi-joshi_cgflar.webp",
    },
    {
      name: "Khushal Ghathalia",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289912/hacktheleague/team/khushal-ghathalia_leieeo.webp",
    },
    {
      name: "Vinayak Kesharwani",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289922/hacktheleague/team/vinayak-kesharwani_zf4yo7.webp",
    },
  ];
  return (
    <section className="mx-48 flex flex-col gap-24 lg:mx-24 sm:mx-8 my-24 sm:gap-12">
      <div className="flex flex-row gap-7 place-items-center ">
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          HTL Team
        </h2>
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>

      <span className=" text-white text-xl font-poppins font-normal -mt-12 font-mono sm:-mt-0 lg:text-xl sm:text-lg">
        The team consists of passionate developers who desire to create a change
        with the power of technology! The team is the soul of this hackathon!
      </span>
      <div className="flex flex-wrap justify-evenly flex-row place-items-center gap-8 gap-y-8 sm:gap-2">
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

export default Team;
