import CommunityPartnerCard from "../components/communitypartners/CommunityPartnerCard";
import PageHeading from "../components/PageHeading";
import communitypartners from './../components/communitypartners/communitypartners.json';

const CommunityPartner = () => {
  let communityPartners = communitypartners.partners;

  return (
    <div className=" flex flex-col gap-8  mt-8  mx-24 sm:mx-4 sm:gap-12 overflow-hidden">
      <PageHeading title={"[COMMUNITY PARTNERS]"} />
      <div className="flex flex-row flex-wrap gap-12  pb-24 justify-center sm:gap-3 h-full overflow-y-scroll ">
        {communityPartners.map((partner) => (
          <CommunityPartnerCard
            url={partner.url}
            name={partner.name}
            socialprofile={partner.socialprofile}
            key={partner.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityPartner;
