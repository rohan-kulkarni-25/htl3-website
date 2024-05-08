const PrizeCard = ({amount,title}) => {
  return (
    <div className="w-80 bg-black/20 my-8 mx-4  p-4 rounded-md sm:w-40 sm:my-2 h-36">
      <div className="flex flex-col justify-between h-full gap-4 sm:justify-start bg-contain bg-center bg-no-repeat ">        
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            <p className="  font-bold font-mokoto tracking-widest text-3xl sm:text-xl text-center">
              {amount} ₹
            </p>
          </div>
        <div className="flex flex-col items-center justify-center gap-4 z-30">
          <div className="b">
            <p className=" text-white font-bold font-mokoto tracking-wider sm:text-base text-xl text-center">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrizeCard