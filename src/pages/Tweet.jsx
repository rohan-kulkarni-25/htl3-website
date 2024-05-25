import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Tweet = () => {
  const [url, setURL] = useState("");

  // Handle POST TWEET FUNCTION

  const handlePostTweet = async () => {
      const response = await axios({
        method:"POST",
        data,
        url:""
      });
      console.log(response);
  }
  
  return (
    <div className="  gap-4 mt-24 items-center flex flex-col ">
      <p className="text-white text-2xl">Paste your tweet url 👇🏻 </p>
      <input type="text" className="rounded-md h-fit py-2 px-4 text-2xl" />
    </div>
  );
};

export default Tweet;
