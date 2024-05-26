// import React, { useState, useEffect } from "react";

// const Countdown = ({ startTimestamp, endTimestamp }) => {
//   const calculateTimeLeft = (target) => {
//     const now = new Date().getTime();
//     const difference = target - now;

//     let timeLeft = {};
//     if (difference > 0) {
//       timeLeft = {
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     } else {
//       timeLeft = {
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       };
//     }
//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startTimestamp));
//   const [isCountingDownToStart, setIsCountingDownToStart] = useState(true);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (isCountingDownToStart) {
//         setTimeLeft(calculateTimeLeft(startTimestamp));
//         if (new Date().getTime() > startTimestamp) {
//           setIsCountingDownToStart(false);
//         }
//       } else {
//         setTimeLeft(calculateTimeLeft(endTimestamp));
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [startTimestamp, endTimestamp, isCountingDownToStart]);

//   return (
//     <div className="bg-white h-1/3 w-full rounded-md p-1 bg-gradient-to-br from-teal-500 to-purple-500">
//       <div
//         style={{ height: "100%" }}
//         className="bg-countdown bg-no-repeat bg-cover my-auto rounded-md from-black to-gray-500 flex flex-col items-center justify-center"
//       >
//         {isCountingDownToStart ? (
//           <p className="font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-6xl">
//             HACKING STARTS IN
//           </p>
//         ) : (
//           <p className="font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-6xl">
//             HACKING ENDS IN
//           </p>
//         )}
//         <p className="text-7xl text-center font-mokoto tracking-widest text-white animate-pulse">
//           {String(timeLeft.hours).padStart(2, "0")}:
//           {String(timeLeft.minutes).padStart(2, "0")}:
//           {String(timeLeft.seconds).padStart(2, "0")}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Countdown;

import React, { useState, useEffect } from "react";

const Countdown = ({ startTimestamp, endTimestamp }) => {
  const calculateTimeLeft = (target) => {
    const now = new Date().getTime();
    const difference = target - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startTimestamp));
  const [isCountingDownToStart, setIsCountingDownToStart] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isCountingDownToStart) {
        setTimeLeft(calculateTimeLeft(startTimestamp));
        if (new Date().getTime() > startTimestamp) {
          setIsCountingDownToStart(false);
        }
      } else {
        setTimeLeft(calculateTimeLeft(endTimestamp));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startTimestamp, endTimestamp, isCountingDownToStart]);

  return (
    <div className="bg-white h-full w-full rounded-md p-1 bg-gradient-to-br from-teal-500 to-purple-500">
      <div
        style={{ height: "100%" }}
        className="bg-countdown bg-no-repeat bg-cover my-auto rounded-md from-black to-gray-500 flex flex-col items-center justify-center gap-8"
      >
        {isCountingDownToStart ? (
          <p className="font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-6xl">
            HACKING STARTS IN
          </p>
        ) : (
          <p className="font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-7xl">
            HACKING ENDS IN
          </p>
        )}
        <p className="text-8xl text-center font-mokoto tracking-widest text-white animate-pulse">
          {/* {String(timeLeft.days).padStart(2, "0")}d{" "} */}
          {String(timeLeft.hours).padStart(2, "0")}h:
          {String(timeLeft.minutes).padStart(2, "0")}m:
          {String(timeLeft.seconds).padStart(2, "0")}s
        </p>
      </div>
    </div>
  );
};

export default Countdown;

