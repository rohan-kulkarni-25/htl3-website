import Location from "../../assets/meetups/Location.svg";
import Divider from "../../assets/meetups/Divider.svg";
import Calendar from "../../assets/meetups/Calendar.svg";

const MeetupCard = ({ placeImg, meetupName, place, date }) => {
  return (
    <div className="flex items-start gap-10 hover:scale-110 cursor-pointer ">
      <div className="w-[345px] h-[355px] bg-black rounded-3xl bg-opacity-30 backdrop-filter backdrop-blur-lgp-6 ">
        <div className="flex pt-4 flex-col content-center items-center gap-4">
          <div className="flex flex-col px-4 gap-2.5 items-start ">
            <div className=" w-[315px] h-44 border-2 rounded-2xl border-pink-600">
              <img src={placeImg} alt="City" className="w-full h-full p-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col content-end items-start gap-4 p-4">
          <h1 className=" font-poppins font-semibold text-2xl text-blue-600">
            {meetupName}
          </h1>
          <div className="flex flex-row items-center  gap-2">
            <div className="flex gap-1 items-center">
              <img src={Location} alt="Location" />
              <h1 className="font-normal text-sm font-poppins text-center text-white">
                {place}
              </h1>
            </div>
            <img src={Divider} alt="Divider" />
            <div className="flex gap-1 items-center">
              <img src={Calendar} alt="Calendar" />
              <h1 className="font-normal text-sm font-poppins text-center text-white">
                {date}
              </h1>
            </div>
          </div>
          <button className="flex py-2.5 px-5 justify-center items-center self-stretch gap-2.5 rounded-2xl border">
            <h1 className="font-normal font-poppins text-center text-white">
              The Event is over now
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetupCard;
