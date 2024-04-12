const PrizeCard = ({amount,title}) => {
  return (
    <div className="w-96 bg-black/20 my-8 mx-4  p-4 rounded-md ">
      <div className="flex flex-col justify-between h-full gap-8  bg-contain bg-center bg-no-repeat ">        
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            <p className="  font-bold font-mokoto tracking-wider text-5xl text-center">
              {amount} ₹
            </p>
          </div>
        <div className="flex flex-col items-center justify-center gap-4 z-30">
          <div className="b">
            <p className=" text-white font-bold font-mokoto tracking-wider text-xl">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrizeCard