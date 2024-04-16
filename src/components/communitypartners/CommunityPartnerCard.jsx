const CommunityPartnerCard = ({ url,name,socialprofile }) => {
  return (
    <a target="_blank" rel="noreferrer" href={socialprofile} className="flex sm:gap-2  sm:mt-4  sm:h-fit shadow-sm shadow-white  rounded-md ">
      <img className="aspect-auto p-1 h-20" src={url} alt={name} />
    </a>
  );
};

export default CommunityPartnerCard;
