import PageHeading from "../PageHeading";

const AboutUs = () => {
  return (
    <section className="mx-48 flex flex-col gap-12 my-12 lg:mx-24 sm:mx-8 " id="about">
      <PageHeading title={"[ ABOUT US ]"}/>
      <div className="w-3/4 mx-auto flex flex-row gap-16 place-items-center sm:flex-col-reverse">
        <p className=" text-white text-lg leading-loose text-justify font-poppins lg:w-full sm:text-lg">
          Hack The League envisions the empowering combination of technology and
          opportunities to generate practical solutions for real-world problems
          and produce an ever-increasing impact. HTL 1.0 & 2.0 witnessed 3000+
          members, 220+ projects, 20+ workshops and sessions and increased
          professional creativity and self-expression by using the most
          innovative and modern technological solutions with the spirit of
          impact driven community.
        </p>
        {/* <img
          src={
            "https://res.cloudinary.com/dw58xmffd/image/upload/v1706288898/hacktheleague/aboutus_mafj62.png"
          }
          className="flex-1 "
          alt="img"
        /> */}
      </div>
    </section>
  );
};

export default AboutUs;
