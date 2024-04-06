import CommunityPartnerCard from "../components/communitypartners/CommunityPartnerCard";
import PageHeading from "../components/PageHeading";

const CommunityPartner = () => {
  const Mentors = [
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
    {
      name: "HACK THE LEAGUE",
      imgSrc:
        "https://res.cloudinary.com/dw58xmffd/image/upload/v1712436318/k2dijlbzecceww9fnjaq.png",
    },
  ];
  return (
    <div className=" flex flex-col gap-8  mt-8  mx-24 sm:mx-4 sm:gap-12 overflow-hidden">
      <PageHeading title={"[COMMUNITY PARTNERS]"} />
      <div className="flex flex-row flex-wrap gap-12  pb-24 justify-center sm:gap-3 h-full overflow-y-scroll ">
        {Mentors.map((mentor) => (
          <CommunityPartnerCard
            imgSrc={mentor.imgSrc}
            name={mentor.name}
            key={mentor.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityPartner;
