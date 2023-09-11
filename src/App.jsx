import HTLStrips from "./components/HTLStrips/HTLStrips";
import AboutUs from "./components/aboutus-section/AboutUs";
// import Chapter2Team from "./components/chapter2Team/Chapter2Team";
import Chapter3Team from "./components/chapter2Team/Chapter3Team";
import PreviousEvents from "./components/previous-events-section/PreviousEvents";
import PreviousMentors from "./components/previousMentors-section/PreviousMentors";
// import Mentors from "./components/previousMentors-section/Mentors";

import PreviousSponsors from "./components/previousSponsors-section/PreviousSponsors";
import HeroSection from "./components/hero-section/HeroSection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// bg-[url('./assets/bg2.svg')]
const App = () => {
  return (
    <section className="bg-black bg-gradients  bg-no-repeat bg-cover overflow-x-hidden h-screen ">
      <Navbar />
      <HeroSection />
      <HTLStrips />
      <div className="h-48" />
      <AboutUs />
      <div className="h-48" />
      <PreviousEvents />
      <div className="h-48" />
      {/* <Mentors /> */}
      <PreviousMentors />
      <div className="h-48" />

      <PreviousSponsors />
      <div className="h-48" />
      <Chapter3Team />
      <div className="h-48" />
      {/* <HTLStrips /> */}
      {/* <div className="h-48" /> */}
      {/* <Chapter2Team /> */}
      {/* <div className="h-48" /> */}
      {/* <Feedback /> */}
      {/* <div className="h-48" /> */}

      {/* <div className="h-48" /> */}
      <Footer />
    </section>
  );
};

export default App;
