import TEAM from "./../../assets/Team_ill.png";

const AboutUs = () => {
  return (
    <section className=" mx-52 flex flex-col gap-24">
      <div className="flex flex-row gap-16 place-items-center ">
        <h2 className="text-6xl font-bold">About Us</h2>
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>
      <div className="flex flex-row place-items-center">
        <p className="w-1/2 text-2xl leading-relaxed text-justify font-mono">
          Hack The League envisions the empowering combination of technology and
          opportunities to generate practical solutions for real-world problems
          and produce an ever-increasing impact. HTL 1.0 witnessed 2200+
          members, 180+ projects, 10+ workshops and sessions and increased
          professional creativity and self-expression by using the most
          innovative and modern technological solutions with the spirit of
          impact driven community.
        </p>
        <img src={TEAM} className="flex-1" />
      </div>
    </section>
  );
};

export default AboutUs;
