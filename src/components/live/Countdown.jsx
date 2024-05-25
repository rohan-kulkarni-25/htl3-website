// import React, { useState, useEffect } from "react";

// // Utility function to format time
// const formatTime = (time) => {
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;
//   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// };

// const Countdown = ({ startTimestamp, endTimestamp }) => {
//   const [currentTime, setCurrentTime] = useState(Date.now());
//   const [timeRemaining, setTimeRemaining] = useState(0);
//   const [stage, setStage] = useState('start'); // 'start' or 'hacking'

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = Date.now();
//       setCurrentTime(now);

//       if (now < startTimestamp) {
//         setStage('start');
//         setTimeRemaining(Math.floor((startTimestamp - now) / 1000));
//       } else if (now < endTimestamp) {
//         setStage('hacking');
//         setTimeRemaining(Math.floor((endTimestamp - now) / 1000));
//       } else {
//         setStage('ended');
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [startTimestamp, endTimestamp]);

//   return (
//     <div className="bg-white h-1/3 w-full rounded-md p-1 bg-gradient-to-br from-teal-500 to-purple-500">
//       <div
//         style={{ height: "100%" }}
//         className="bg-countdown bg-no-repeat bg-cover my-auto rounded-md from-black to-gray-500 flex flex-col items-center justify-center"
//       >
//         <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text flex flex-col gap-4">
//           {stage === 'start' && (
//             <>
//               <p className="font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-6xl">
//                 HACKING STARTS IN
//               </p>
//               <p className="text-7xl text-center font-mokoto tracking-widest text-white animate-pulse">
//                 {formatTime(timeRemaining)}
//               </p>
//             </>
//           )}
//           {stage === 'hacking' && (
//             <>
//               <p className="font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-6xl">
//                 HACKING ENDS IN
//               </p>
//               <p className="text-7xl text-center font-mokoto tracking-widest text-white animate-pulse">
//                 {formatTime(timeRemaining)}
//               </p>
//             </>
//           )}
//           {stage === 'ended' && (
//             <p className="font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-6xl">
//               HACKATHON HAS ENDED
//             </p>
//           )}
//         </div>
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
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
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
    <div className="bg-white h-1/3 w-full rounded-md p-1 bg-gradient-to-br from-teal-500 to-purple-500">
      <div
        style={{ height: "100%" }}
        className="bg-countdown bg-no-repeat bg-cover my-auto rounded-md from-black to-gray-500 flex flex-col items-center justify-center"
      >
        {isCountingDownToStart ? (
          <p className="font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-6xl">
            HACKING STARTS IN
          </p>
        ) : (
          <p className="font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest text-6xl">
            HACKING ENDS IN
          </p>
        )}
        <p className="text-7xl text-center font-mokoto tracking-widest text-white animate-pulse">
          {String(timeLeft.hours).padStart(2, "0")}:
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default Countdown;
