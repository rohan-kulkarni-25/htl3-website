import Star from "../../assets/FeedbackStar.png";

const FeedBackCard = () => {
  return (
    <div className="bg-gray-200 w-96 rounded-lg py-8 px-4 flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />
      </div>
      <p className="font-medium leading-relaxed text-lg">
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
          <span className="font-semibold text-lg">Rohan Kulkarni</span>
          <span className="italic">@rohan_2502</span>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
