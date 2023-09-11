import Star from "../../assets/FeedbackStar.png";

const FeedBackCard = () => {
  return (
    <div className="bg-black rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg w-96  py-8 px-4 flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />
      </div>
      <p className="text-white font-medium leading-relaxed text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi
        recusandae at assumenda, iure optio, odio exercitationem aspernatur
        minima asperiores nihil sed sit quo incidunt.
      </p>
      <div className="flex flex-row gap-4">
        <img
          className="h-16 rounded-full"
          src="https://github.com/rohan-kulkarni-25.png"
          alt=""
        />
        <div className="flex flex-col place-self-center">
          <span className="font-semibold text-lg text-white">Rohan Kulkarni</span>
          <span className="italic text-white">@rohan_2502</span>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
