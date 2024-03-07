import SponsorCard from "./SponsorCard";

const PreviousSponsors = () => {
  let companies = [
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288334/hacktheleague/Sponsors/Polygon_owkku6.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288334/hacktheleague/Sponsors/WallectConnect_jhspxl.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288333/hacktheleague/Sponsors/github_nmkrkd.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288332/hacktheleague/Sponsors/AppWrite_l2zk9n.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288333/hacktheleague/Sponsors/mlh_q6zr0i.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288334/hacktheleague/Sponsors/postman_ildxky.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288333/hacktheleague/Sponsors/DigitalOcean_rnzrcq.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288333/hacktheleague/Sponsors/Dojima_fpkc4y.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288334/hacktheleague/Sponsors/Telos_2_szopt0.jpg",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288333/hacktheleague/Sponsors/cncf_hsj7ek.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288335/hacktheleague/Sponsors/Zeeve_yb7epp.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288332/hacktheleague/Sponsors/5ire_popsth.webp",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288333/hacktheleague/Sponsors/Interswap_yu8pqa.png",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288333/hacktheleague/Sponsors/Azure_e3pvtu.png",
      link: "",
    },
  ];
  return (
    <section className=" flex flex-col gap-24 sm:gap-12" id="sponsors">
      <div className="flex flex-row gap-7 mx-48 place-items-center lg:mx-24 sm:mx-4 sm:gap-4">
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          Previous Sponsors
        </h2>
      </div>

      <div className="flex flex-wrap justify-evenly items-center p-8  gap-8 rounded-lg bg-opacity-30 backdrop-filter backdrop-blur-lg mx-48 lg:mx-24 sm:mx-4 sm:gap-4 sm:p-2">
        {companies.map((company) => {
          return <SponsorCard key={company} data={company} />;
        })}
      </div>
      <a
        className="w-fit mx-auto px-6 py-3 border-[#4652DD] bg-white bg-opacity-20 hover:bg-white hover:text-black ease-in hover:duration-300 border rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center text-white  text-2xl lg:text-xl sm:text-lg"
        href="https://drive.google.com/file/d/1KJMConV1ebavkI0SQMdl5zcZM3DB1JrX/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Become Sponsor
      </a>
    </section>
  );
};

export default PreviousSponsors;
