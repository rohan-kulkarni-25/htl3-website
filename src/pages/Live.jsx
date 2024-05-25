import AgendaRow from "../components/live/AgendaRow";
import Countdown from "../components/live/Countdown";
import { Tweet } from "react-tweet";
// import Tweet from 'react-tweet'

const Live = () => {
  return (
    <div className="bg-black w-screen h-screen overflow-hidden flex justify-center items-center">
      <div
        style={{ height: "96%" }}
        className=" w-full flex m-4  rounded-md gap-4 "
      >
        <div
          style={{ width: "40%" }}
          className=" h-full   my-auto rounded-md bg-gradient-to-br from-teal-500 to-purple-500 "
        >
          <div
            style={{ height: "99%" }}
            className=" m-1  from-black bg-countdown bg-cover bg-no-repeat  to-gray-500 overflow-hidden"
          >
            <div className="h-full relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw58xmffd/image/upload/v1716083886/4_rvzylm.png"
                alt=""
                className="absolute  h-96 right-0"
              />
              <div className=" h-full flex flex-col items-start">
                <p className="mt-12 ml-8 font-justiceLeague text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text text-6xl ">
                  AGENDA
                </p>
                <div className="flex flex-col place-self-center gap-4 my-12 mx-12 h-96">
                  {/* ONE ROW */}
                  <AgendaRow />
                  <AgendaRow />
                  <AgendaRow current={true} />
                  <AgendaRow />
                  <AgendaRow />
                  <AgendaRow />
                </div>
                <div className="absolute bottom-0 w-full ">
                  <img
                    className="w-72 bottom-2 mx-auto p-4"
                    src="https://res.cloudinary.com/dw58xmffd/image/upload/v1716085632/Group_1261154003_azgtnv.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: "99%", width: "70%" }}
          className="  rounded-md flex flex-col gap-4 "
        >
          <Countdown />
          <div className="bg-white h-2/3 w-full rounded-md p-1 bg-gradient-to-br from-teal-500 to-purple-500">
            <div
              style={{ height: "100%", fontSize:"50%"}}
              className=" bg-countdown   flex flex-wrap justify-evenly overflow-scroll bg-cover my-auto rounded-md from-black  to-gray-500 gap-8 p-4"
            >
              <div className="w-1/3 h-fit ">
                <Tweet id="1791797488007184465"  />
              </div>
              <div className="w-1/3">
                <Tweet id="1791797488007184465"  />
              </div>
              <div className="w-1/3 ">
                <Tweet id="1791797488007184465"  />
              </div>
              <div className="w-1/3 ">
                <Tweet id="1791797488007184465"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
