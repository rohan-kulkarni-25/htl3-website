import PageHeading from "../components/PageHeading";
import TeamCard from "../components/TeamCard";

const Team = () => {
  const teamMembers = [
    {
      name: "Jatin Pandya",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289910/hacktheleague/team/jatin-pandya_tyfyzr.webp",
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
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706289910/hacktheleague/team/harsh_r5mrmj.webp",
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
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1706363802/hacktheleague/team/Prashant_PNG-min_rq9vbb.png",
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
    <section className=" flex flex-col gap-8  mt-8  mx-24 sm:mx-4 sm:gap-12 overflow-hidden">
      <PageHeading title={"[TEAM]"} />

      <div className="flex flex-row flex-wrap gap-12  pb-24 justify-center sm:gap-3 h-full overflow-y-scroll">
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
