// export default Schedule
import { useState, useEffect } from "react";
import AgendaRow from "./AgendaRow";



const day1Date = new Date();
const day2Date = new Date(day1Date);
day2Date.setDate(day1Date.getDate() + 1);

// Define the start times for day 1 and day 2
const day1StartTime = new Date(day1Date.setHours(8, 0, 0, 0)).getTime(); // Day 1 starts at 8:00 AM
const day2StartTime = new Date(day2Date.setHours(9, 15, 0, 0)).getTime(); // Day 2 starts at 9:15 AM

// Create the schedule array
const schedule = [
  { event: "Breakfast", timestamp: new Date(day1StartTime).setHours(9, 30) },
  { event: "Hacking Ends", timestamp: new Date(day1StartTime).setHours(13, 40) },
  { event: "Judging Starts", timestamp: new Date(day1StartTime).setHours(15, 0) },
  { event: "Judging Ends", timestamp: new Date(day1StartTime).setHours(16, 30) },
  { event: "Closing Ceremony & Results Announcements", timestamp: new Date(day1StartTime).setHours(17, 0) }
];

// Sort the events by timestamp in ascending order
schedule.sort((a, b) => a.timestamp - b.timestamp);


const Schedule = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent(getCurrentEvent(schedule));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentEvent) {
      const currentIndex = schedule.findIndex(
        (event) => event.timestamp === currentEvent.timestamp
      );
      setStartIndex(
        Math.max(0, Math.min(currentIndex - 2, schedule.length - 5))
      );
    }
  }, [currentEvent]);

  const getCurrentEvent = (schedule) => {
    const now = Date.now();
    for (const event of schedule) {
      if (event.timestamp > now) {
        return event;
      }
    }
    return null;
  };

  return (
    <div className="h-full px-8 flex flex-col items-start overflow-hidden">
      <p className="mt-12 ml-8 font-justiceLeague text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text text-6xl">
        AGENDA
      </p>
      <div className="flex  flex-col place-self-center gap-4 my-12 mx-12 h-96">
        {schedule.slice(startIndex, startIndex + 5).map((event) => {
            console.log(event.event);
          return (
            <AgendaRow
              key={event.timestamp}
              time={formatTime(event.timestamp)}
              date={formatDate(event.timestamp)}
              event={event.event}
              current={
                currentEvent && currentEvent.timestamp === event.timestamp
              }
            />
          );
        })}
      </div>
      <div className="absolute bottom-0 w-full">
        <img
          className="w-72 bottom-2 mx-auto p-4"
          src="https://res.cloudinary.com/dw58xmffd/image/upload/v1716085632/Group_1261154003_azgtnv.png"
          alt="Decoration"
        />
      </div>
    </div>
  );
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  return `${day} ${month}`;
};

export default Schedule;
