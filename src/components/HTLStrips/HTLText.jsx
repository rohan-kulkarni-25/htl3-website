import STAR from "../../assets/star.png";
const HTLText = () => {
  return (
    <p className="flex flex-row gap-8 mx-6 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
      HACK THE LEAGUE <img alt="star" className="w-8 h-8" src={STAR} />
    </p>
  );
};

export default HTLText;
