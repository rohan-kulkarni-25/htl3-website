import React from "react";
import { Tweet } from "react-tweet";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetsContainer = () => {
  let tweets = [
    "1794317750170751202",
    "1794309454554599528",
    "1794289254526513182",
    "1794277058069282928",
    "1794274342723002551",
    "1794267038569120016",
    "1794248135507927387",
    "1794267038569120016",
    "1794253048031961151",
    "1793346171244568924",

  ];

  return (
    <div className="h-full  flex justify-center  overflow-hidden relative bg-countdown">
      <div className="flex  justify-center flex-col items-center w-full gap-3  animate-scroll">
        {tweets.map((id) => {
          return <div className="w-3/4" key={id}>
            <Tweet id={id} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default TweetsContainer;
