import HeroSection from "../components/hero-section/HeroSection";
import HTLStrips from "../components/HTLStrips/HTLStrips";
import AboutUs from "../components/aboutus-section/AboutUs";
import PreviousEvents from "../components/previous-events-section/PreviousEvents";
import PreviousMentors from "../components/previousMentors-section/PreviousMentors";
import PreviousSponsors from "../components/previousSponsors-section/PreviousSponsors";
import Chapter3Team from "../components/chapter3Team/Chapter3Team";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="bg-frame -my-40 bg-contain sm:-my-44  bg-no-repeat bg-center lg:bg-contain sm:bg-contain ">
        <div className="h-96 sm:h-80" />
      </div>
      <HTLStrips />
      <AboutUs />
      <div className="h-48 lg:h-24 sm:h-20" />
      <PreviousEvents />
      <div className="h-48 lg:h-24 sm:h-20" />
      <PreviousMentors />
      <div className="h-48 lg:h-24 sm:h-20" />
      <PreviousSponsors />
      <div className="h-48 lg:h-24 sm:h-20" />
      <Chapter3Team />
      <HTLStrips />
    </div>
  );
};

export default Home;
