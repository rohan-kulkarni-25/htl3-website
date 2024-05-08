const PageHeading = ({ title }) => {
  return (
    <div className="flex flex-row items-center w-3/4 sm:w-full justify-center  mx-auto gap-8 text-4xl sm:mb-8 sm:text-xl">
      <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
        <p className=" font-mokoto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest">
          {title}
        </p>
      </div>
      <p className="h-0.5 rounded-lg flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/3"></p>
    </div>
  );
};

export default PageHeading;
