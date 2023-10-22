import HTLStrips from "../components/HTLStrips/HTLStrips";
import AboutUs from "../components/aboutus-section/AboutUs";
import Chapter3Team from "../components/chapter3Team/Chapter3Team";
import HeroSection from "../components/hero-section/HeroSection";
import PreviousEvents from "../components/previous-events-section/PreviousEvents";
import PreviousMentors from "../components/previousMentors-section/PreviousMentors";
import PreviousSponsors from "../components/previousSponsors-section/PreviousSponsors";



const App = () => {
  return (
    <section >
      <div className="bg-frame bg-contain bg-no-repeat bg-center">
        <HeroSection />
        <div className="h-12 sm:h-12" />
        <HTLStrips />
        <div className="h-64 sm:h-0" />
      </div>
      <AboutUs />
      <div className="h-48 lg:h-24 sm:h-20" />
      <PreviousEvents />
      <div className="h-48 lg:h-24 sm:h-20" />
      <PreviousMentors />
      <div className="h-48 lg:h-24 sm:h-20" />
      <PreviousSponsors />
      <div className="h-48 lg:h-24 sm:h-20" />
      <Chapter3Team />
      <div className="h-48 lg:h-24  sm:h-20" />
      <HTLStrips />
      <div className="h-48 lg:h-24  sm:h-20" />
    </section>
  );
};

export default App;
// {/* <Chapter2Team /> */ }
// {/* <div className="h-48" /> */ }
// {/* <Feedback /> */ }
// {/* <div className="h-48" /> */ }

// {/* <div className="h-48" /> */ }
