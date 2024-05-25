import Countdown from "../components/live/Countdown";
import Schedule from "../components/live/Schedule";
import TweetsContainer from "../components/live/TweetContainer";

const Live = () => {
  const startTimestamp = new Date("2024-05-25T11:00:00").getTime();
  const endTimestamp = new Date("2024-05-26T13:40:00").getTime();

  return (
    <div className="bg-black px-8 w-screen h-screen overflow-hidden flex justify-center items-center">
      <div
        style={{ height: "96%" }}
        className=" w-full flex m-4  rounded-md gap-4 "
      >
        <div
          style={{ width: "75%" }}
          className=" h-full   my-auto rounded-md bg-gradient-to-br from-teal-500 to-purple-500 "
        >
          <Countdown
            startTimestamp={startTimestamp}
            endTimestamp={endTimestamp}
          />
          <div
            style={{ height: "90%" }}
            className=" m-1  from-black bg-countdown bg-cover bg-no-repeat  to-gray-500 overflow-hidden"
          >
            <div className="h-full  relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw58xmffd/image/upload/v1716083886/4_rvzylm.png"
                alt=""
                className="absolute  h-96 right-0"
              />
              <Schedule />
            </div>
          </div>
        </div>
        {/* <div
            style={{ height: "99%", width: "30%" }}
            className="  rounded-md flex flex-col gap-4 "
          >
            <div className="bg-white h-1/3 w-full rounded-md p-1 bg-gradient-to-br from-teal-500 to-purple-500">
              <div
                style={{ height: "100%" }}
                className="bg-countdown bg-no-repeat bg-cover my-auto rounded-md from-black to-gray-500 flex flex-col items-center justify-center"
              >
                <p
                  className=" text-center text-white 
              px-4 tracking-wide text-xl"
                >
                  🚀 Ready to showcase your hackathon triumphs? Head over to
                  hacktheleague.com/tweet and drop your Twitter URL to share
                  your journey with the world! Let's amplify the buzz together.
                  💬 #HackTheLeague #InnovationUnleashed
                </p>
              </div>
            </div>
          </div> */}
        <div
          style={{ width: "25%" }}
          className="bg-white h-full   rounded-md p-1 bg-gradient-to-br from-teal-500 to-purple-500"
        >
          <TweetsContainer />
        </div>
      </div>
    </div>
  );
};

export default Live;
