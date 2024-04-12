import PageHeading from "../components/PageHeading"
import TBAComponent from "../components/TBAComponent"
import PrizeCard from "../components/prizes/PrizeCard"

const Prizes = () => {
  return (
    <div className="h-full flex flex-col w-full  items-center mx-auto py-12 overflow-y-scroll ">
    <PageHeading title={"[PRIZES]"}/>
    <div className="mt-8">
      <PrizeCard amount={"35,000"} title={"Winner"} />
    </div>
    <div className="flex flex-row flex-wrap justify-center  items-center">
    <PrizeCard amount={"25,000"} title={"First Runner Up"} />      <PrizeCard amount={"15,000"} title={"Second Runner Up"} />
    <PrizeCard amount={"5,000"} title={"Best All Beginners Team"} />      <PrizeCard amount={"5,000"} title={"Best HTL Pick"} />
    </div>
    <div className="flex flex-row">

    </div>
    <TBAComponent/>
  </div>
  )
}

export default Prizes