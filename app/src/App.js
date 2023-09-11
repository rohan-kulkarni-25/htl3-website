import HTLStrips from "./components/HTLStrips/HTLStrips";
import AboutUs from "./components/aboutus-section/AboutUs";
import Chapter3Team from "./components/chapter2Team/Chapter3Team";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import PreviousEvents from "./components/previous-events-section/PreviousEvents";
import PreviousMentors from "./components/previousMentors-section/PreviousMentors";
import PreviousSponsors from "./components/previousSponsors-section/PreviousSponsors";

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
