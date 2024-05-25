import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TweetsContainer = () => {

    let tweets = ["1793680562198311412","1794054235169984704","1793754883473977796","1644641869429895168","1793979366323679710"];

  return (
    <div className="h-full  flex justify-center  overflow-hidden relative bg-countdown">
      <div className="flex justify-center flex-col items-center w-full gap-8  animate-scroll">

{
    tweets.map((id)=>{
        // return <TwitterTweetEmbed tweetId={id} key={id} />
      return <TwitterTweetEmbed tweetId={id} key={id}  />
})
}
        

      </div>
    </div>
  );
};

export default TweetsContainer;
