import PageHeading from "../components/PageHeading";
import TBAComponent from "../components/TBAComponent";
import PrizeCard from "../components/prizes/PrizeCard";
import BountiesCard from "../components/tracks/BountiesCard";
import TrackCard from "../components/tracks/TrackCard";
import TracksPage from "./TracksPage";

const Prizes = () => {
  return (
    <div className="h-full flex flex-col w-full  items-center mx-auto py-12 overflow-y-scroll ">
      <div className="w-full mb-12">
        <PageHeading title={"[ BOUNTIES ]"} />
        <div className="flex flex-row flex-wrap justify-center  items-center">
          <BountiesCard
            title={"Best MVP of Polygon Cardona"}
            content={
              "The Cardona zkEVM Testnet represents the forefront of blockchain scalability and compatibility. We're looking for groundbreaking projects that leverage this technology."
            }
            trackno={"POLYGON"}
          />
          <BountiesCard
            title={"Best Use of ChainGPT"}
            content={
              "To be eligible, the team must embed our AI solution into the product using the ChainGPT API/SDK. The top 2 winners will get $700 and $300, respectively."
            }
            trackno={"CHAINGPT"}
          />
          <BountiesCard
            title={"Best Use of GitHub"}
            content={
              "Win Hack This League’s Best Use of GitHub prize category, first by signing up for GitHub Global Campus and second by using a GitHub repository to host your hackathon project’s code!"
            }
            trackno={"CHAINGPT"}
          />
        </div>
      </div>
      <div className="mb-12 ">
        <PageHeading title={"[HACKATHON PRIZES]"} />
        <div className="flex flex-row flex-wrap justify-center  items-center">
          <PrizeCard amount={"35,000"} title={"Winner"} />
          <PrizeCard amount={"25,000"} title={"First Runner Up"} />{" "}
          <PrizeCard amount={"15,000"} title={"Second Runner Up"} />
          <PrizeCard amount={"5,000"} title={"Best All Beginners Team"} />{" "}
          <PrizeCard amount={"5,000"} title={"Best HTL Pick"} />
        </div>
      </div>
      <div className="w-full mb-12">
        <PageHeading title={"[ TRACKS / THEMES ]"} />
        <div className="flex flex-row flex-wrap justify-center  items-center">
          <TrackCard
            title={"Web3 & Blockchain"}
            content={
              "Become a third-generation superhero by using your powers to create new-gen Web Applications, NFT, DAO, DFI and work with decentralized Blockchain."
            }
            trackno={"TRACK 1"}
          />
          <TrackCard
            title={"Best use of AI"}
            content={
              "Step into the AI track and unleash your inner superhero! With expertise in machine learning and AI, pioneer new solutions."
            }
            trackno={"TRACK 2"}
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
