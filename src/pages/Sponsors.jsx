
import PageHeading from '../components/PageHeading'
import TBAComponent from '../components/TBAComponent'

const Sponsors = () => {
  return (
    <div className=" flex flex-col gap-8  mt-8  mx-24 sm:mx-4 sm:gap-12 overflow-hidden ">
      <PageHeading title={"[SPONSORS]"} />
      <div className='mx-auto'>
      <TBAComponent/>
      </div>

    </div>
  )
}

export default Sponsors