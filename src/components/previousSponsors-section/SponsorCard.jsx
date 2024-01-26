function SponsorCard({ data }) {
  return (
    <div className="  bg-white  rounded-2xl h-60 w-60 p-4 sm:h-20 sm:w-20 sm:p-1">
      <div className="h-full flex-col justify-center align-middle flex ">
        <img alt="logo" src={data.url} />
      </div>
    </div>
  );
}

export default SponsorCard;
