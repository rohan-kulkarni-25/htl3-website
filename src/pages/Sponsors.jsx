import PageHeading from "../components/PageHeading";
import TBAComponent from "../components/TBAComponent";
import SponsorCard from "../components/sponsors/SponsorCard";

const Sponsors = () => {
  return (
    <div className=" flex flex-col gap-8  my-24  mx-24 sm:mx-4 sm:gap-12 overflow-y-scroll">
      <div className="flex flex-col gap-12 ">
        <div className="sm:hidden">
          <PageHeading title={"[ POWERED BY ]"} />
        </div>

        <div className="bg-gradient-to-r sm:flex hidden  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text  justify-center">
          <p className=" font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-2xl">
            WEB3 VC PARTNER
          </p>
        </div>
        <div className="flex justify-center items-center w-fit mx-auto py-8 px-12 rounded-md">
          <SponsorCard
            url="https://res.cloudinary.com/dsdjai01b/image/upload/v1715077791/Polygon_Primary_Light_rllkof.png"
            link="https://polygon.technology"
            size={96}
          />
        </div>
      </div>
      <div className="flex flex-row sm:flex-col sm:items-center justify-evenly gap-8">
        <div className="flex flex-col gap-12 w-1/3 sm:w-full  p-12 rounded-md">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text flex justify-center">
            <p className=" font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-2xl">
              WALLET PARTNER
            </p>
          </div>
          <div className="flex justify-center items-center">
            <SponsorCard
              url="https://res.cloudinary.com/dsdjai01b/image/upload/v1715077979/9f0c375dcd93_vbej5o.png"
              link="https://web3.bitget.com/en"
              size={72}
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 w-1/3 sm:w-full p-12 rounded-md">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text flex justify-center">
            <p className=" font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-2xl">
              WEB3 VC PARTNER
            </p>
          </div>
          <div className="flex justify-center items-center">
            <SponsorCard
              url="https://res.cloudinary.com/dsdjai01b/image/upload/v1715078174/soonami.io_white_green_2x_wkdhlf.png"
              link="https://soonami.io/"
              size={72}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col sm:items-center justify-evenly gap-8">
        <div className="flex flex-col gap-12 w-1/3 sm:w-full  p-12 rounded-md mx-auto">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text flex justify-center">
            <p className=" font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-2xl">
              EDUCATION PARTNER
            </p>
          </div>
          <div className="flex justify-center items-center">
            <SponsorCard
              url="https://res.cloudinary.com/dsdjai01b/image/upload/v1715189416/github-logo_anyumd_uasfj1_1_egrtxz.png"
              link="https://github.com/"
              size={72}
            />
          </div>
        </div>
        <div className="flex flex-col gap-12 w-1/3 sm:w-full  p-12 rounded-md mx-auto">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text flex justify-center">
            <p className=" font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-2xl">
              IMPACT PARTNER
            </p>
          </div>
          <div className="flex justify-center items-center">
            <SponsorCard
              url="https://res.cloudinary.com/dsdjai01b/image/upload/v1715603016/DablClubLogo-White_owvhmx.png"
              link="https://github.com/"
              size={72}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
