import FeedBackCard from "./FeedBackCard";

const Feedback = () => {
  return (
    <section className=" mx-52 flex flex-col">
      <div className="flex mb-24 flex-row gap-16 place-items-center ">
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <h2 className="text-6xl font-bold">Feedbacks</h2>
      </div>
      <div className="flex justify-evenly flex-row place-items-center gap-8">
        <div>
          <FeedBackCard />
        </div>
        <div className="mt-20">
          <FeedBackCard />
        </div>
        <div>
          <FeedBackCard />
        </div>
      </div>
      <div className="flex justify-evenly flex-row place-items-center gap-8">
        <div>
          <FeedBackCard />
        </div>
        <div className="mt-20">
          <FeedBackCard />
        </div>
        <div>
          <FeedBackCard />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
