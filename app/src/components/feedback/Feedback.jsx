import FeedBackCard from "./FeedBackCard";

const Feedback = () => {
  return (
    <section className="mx-7  md:mx-12 2xl:mx-48 flex flex-col gap-24">
        <div className="flex flex-row gap-7 place-items-center ">
          <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">Feedbacks</h2>
        </div>

        <div className="flex justify-evenly flex-col xl:flex-row place-items-center gap-8">
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
      <div className="flex justify-evenly flex-col xl:flex-row place-items-center gap-8">
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
