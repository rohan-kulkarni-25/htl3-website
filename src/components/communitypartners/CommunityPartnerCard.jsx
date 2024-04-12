const CommunityPartnerCard = ({ url,name,socialprofile }) => {
  return (
    <a target="_blank" rel="noreferrer" href={socialprofile} className="flex sm:gap-2 h-20 sm:mt-4 shadow-sm shadow-white  rounded-md ">
      <img className="aspect-auto p-1 flex-1 " src={url} alt={name} />
    </a>
  );
};

export default CommunityPartnerCard;
