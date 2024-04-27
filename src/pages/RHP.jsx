import React from "react";
import PageHeading from "../components/PageHeading";

const RHP = () => {
  return (
    <section className=" flex flex-col gap-8  mt-8  mx-4 sm:mx-4 sm:gap-12 overflow-hidden">
      <PageHeading title={"[ REMOTE HACKER PROGRAM ]"} />
      <div className="flex flex-row flex-wrap gap-12 sm:gap-0  pb-24 justify-center sm:gap-3 h-full overflow-y-scroll ">
        <div className="w-4/5 bg-black/20 py-8 sm:w-full">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Remote Participation Instructions
              </h2>
              <p className="text-white mb-6">
                Welcome to our hackathon! We're excited to offer a remote
                participation option to accommodate everyone's schedule. Please
                read the following instructions carefully before applying for
                remote participation:
              </p>
              <div className="flex flex-wrap justify-around sm:flex-col sm:gap-8">
                <div className="mb-6 w-1/2 px-8 sm:w-full sm:px-0">
                  <h3 className="text-xl font-bold text-white mb-2">
                    1. Application Process
                  </h3>
                  <p className="text-white tracking-wider">
                    To apply for remote participation, please fill out the
                    application form with your name, email, institution, reason
                    for wanting to participate remotely, availability during the
                    hackathon period, and any relevant skills or experience.
                  </p>
                </div>
                <div className="mb-6 w-1/2 px-8 sm:w-full sm:px-0">
                  <h3 className="text-xl font-bold text-white mb-2">
                    2. Selection Criteria
                  </h3>
                  <p className="text-white tracking-wider">
                    Applications will be reviewed by our dedicated committee.
                    Priority will be given to participants who are having their
                    exams during the schedule of hackathon. Skills, experience,
                    and availability will also be taken into consideration. 10
                    Teams will be selected.
                  </p>
                </div>
                <div className="mb-6 w-1/2 px-8 sm:w-full sm:px-0">
                  <h3 className="text-xl font-bold text-white mb-2">
                    3. Deadline
                  </h3>
                  <p className="text-white tracking-wider">
                    The deadline to submit your application for remote
                    participation is 5th of May. Late applications
                    will not be considered, so be sure to apply before the
                    deadline.
                  </p>
                </div>
                <div className="mb-6 w-1/2 px-8 tracking-wider sm:w-full sm:px-0">
                  <h3 className="text-xl font-bold text-white mb-2">
                    4. Important Notes
                  </h3>
                  <ul className="list-disc list-inside text-white">
                    <li>
                      Remote participation is subject to availability, and only
                      selected participants will be notified.
                    </li>
                    <li>
                      Selected participants will receive further instructions
                      closer to the hackathon date.
                    </li>
                    <li>
                      Remote participants are expected to adhere to the same
                      rules and guidelines as in-person participants.
                    </li>
                    <li>
                      Monitoring will be in place to ensure fairness for all
                      participants.
                    </li>
                  </ul>
                </div>
              </div>
              <a
                target="_blank"
                href="https://lu.ma/HTLRemoteHackerProgram"
                rel="noreferrer"
              >
                <button className="px-6 py-3 my-12  border-[#4652DD] bg-none hover:bg-[#4652DD] hover:text-white  bg-white hover:text-black ease-in hover:duration-300 border rounded-2xl font-medium font-poppins flex flex-row justify-center gap-4 items-center   text-lg mx-auto  sm:text-lg">
                  {/* <MdOutlineDateRange /> */}
                  APPLY NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RHP;
