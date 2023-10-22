import MeetupCard from "./MeetupCard";
import Jaipur from '../../assets/meetups/Jaipur.svg';
import Mumbai from '../../assets/meetups/Mumbai.svg';
import Delhi from '../../assets/meetups/Delhi.svg';
import Pune from '../../assets/meetups/Pune.svg';
import Nagpur from '../../assets/meetups/Nagpur.svg';
import Ahmedabad from '../../assets/meetups/Ahmedabad.svg';

const PreviousMeetups = () => {
    const Meetups = [
        { placeImg: Jaipur, meetupName: "Jaipur City Meetup", place: "Jaipur", date: "4th November 2022" },
        { placeImg: Nagpur, meetupName: "Nagpur City Meetup", place: "Nagpur", date: "11th November 2022" },
        { placeImg: Mumbai, meetupName: "Mumbai City Meetup", place: "Mumbai", date: "12th November 2022" },
        { placeImg: Pune, meetupName: "Pune City Meetup", place: "Pune", date: "12th November 2022" },
        { placeImg: Delhi, meetupName: "Delhi City Meetup", place: "Delhi", date: "19th November 2022" },
        { placeImg: Ahmedabad, meetupName: "Ahmedabad City Meetup", place: "Ahmedabad", date: "20th November 2022" }

    ];
    return (
        <section className="mx-48 flex flex-col mt-24 gap-24 lg:mx-24 lg:gap-4 sm:mx-8 sm:mt-24">
            <div className="flex flex-row gap-7 place-items-center lg:mx-24 sm:mx-8">
                <h2 className="text-4xl font-semibold font-poppins text-white lg:text-5xl sm:text-3xl">
                    City Meetup 2022
                </h2>
                <p className="h-0.5 rouded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
            </div>
            <div className="flex flex-wrap justify-center items-start content-start gap-12">
                {Meetups.map((meetup) => (
                    <MeetupCard placeImg={meetup.placeImg} meetupName={meetup.meetupName} place={meetup.place} date={meetup.date} />
                ))
                }
            </div>

        </section>
    );
};

export default PreviousMeetups;
