import React from "react";
import Rectangles from "./Rectangles/Rectangles";
import OrganizationProfilePicture from "./OrganizationProfilePicture/OrganizationProfilePicture";
import OrganizationText from "./OrganizationText/OrganizationText";
import SelectOrganization from "./SelectOrganization/SelectOrganization";
import Kryptomind1 from "./Kryptomind1/Kryptomind1";

const Frame4 = () => {
  return (
    <div className="w-[1440px]  h-[1024px] top-[7062px] left-[10789px] bg-[#071410] ">
      <Rectangles />
      <OrganizationProfilePicture />
      <OrganizationText />
      <SelectOrganization />
      <Kryptomind1 />
    </div>
  );
};
export default Frame4;
