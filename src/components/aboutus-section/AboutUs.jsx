const AboutUs = () => {
  return (
    <section className="mx-48 flex flex-col gap-24 lg:mx-24 sm:mx-8 " id="about">
      <div className="flex flex-row gap-7 place-items-center ">
        <h2 className="text-5xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
          About Us
        </h2>
        <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      </div>
      <div className="flex flex-row gap-16 place-items-center ">
        <p className="w-1/2 text-white text-2xl leading-loose text-justify font-poppins lg:w-full sm:text-lg">
          Hack The League envisions the empowering combination of technology and
          opportunities to generate practical solutions for real-world problems
          and produce an ever-increasing impact. HTL 1.0 witnessed 2200+
          members, 180+ projects, 10+ workshops and sessions and increased
          professional creativity and self-expression by using the most
          innovative and modern technological solutions with the spirit of
          impact driven community.
        </p>
        <img
          src={
            "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288898/hacktheleague/aboutus_mafj62.png"
          }
          className="flex-1 "
          alt="img"
        />
      </div>
    </section>
  );
};

export default AboutUs;
