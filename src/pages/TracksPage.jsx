import PageHeading from "../components/PageHeading";
import TrackCard from "../components/tracks/TrackCard";

const TracksPage = () => {
  return (
    <div className="h-full flex flex-col w-full  items-center mx-auto py-12 overflow-y-scroll ">
      <PageHeading title={"[TRACKS]"}/>
      <div className="flex flex-row flex-wrap w-full mx-auto justify-center items-center py-12 gap-4 mt-4">
        <TrackCard title={"ENVIRONMENT & CLIMATE CHANGE"} content={"Climate Crisis Alert! Bring the Green Hero inside you to life and integrate sustainable measures to regulate the latest technologies"} trackno={"TRACK 1"} />
        <TrackCard title={"Web3 & Blockchain"} content={"Become a third-generation superhero by using your powers to create new-gen Web Applications, NFT, DAO, DFI and work with decentralized Blockchain."} trackno={"TRACK 2"}/>
        <TrackCard title={"Developer & Productivity Tools"} content={"Developer tools are one of the major aspects of our builder ecosystem productivity and there's a need to bring more innovation to this sector of our industry."} trackno={"TRACK 3"}/>
        <TrackCard title={"Mental Health & Productivity"} content={"Pull on your capes to develop solutions for people who are wearing a mask to hide mental health challenges. There is strength in admitting you might need help or that something might not be right."} trackno={"TRACK 4"}/>
        <TrackCard title={"Open Innovation"} content={"Pull on your capes to develop solutions for people who are wearing a mask to hide mental health challenges. There is strength in admitting you might need help or that something might not be right."} trackno={"TRACK 5"}/>
      </div>
    </div>
  );
};

export default TracksPage;
