import React from "react";
import Rectangles from "./Rectangles/Rectangles";
import OrganizationProfilePicture from "./OrganizationProfilePicture/OrganizationProfilePicture";
import OrganizationText from "./OrganizationText/OrganizationText";
import SelectOrganization from "./SelectOrganization/SelectOrganization";
import Kryptomind1 from "./Kryptomind1/Kryptomind1";

const Frame10 = () => {
  return (
    <div className="w-[1440px]  h-[1024px]  top-[8344px] left-[10789px] bg-[#A21A36] ">
      <Rectangles />
      <OrganizationProfilePicture />
      <OrganizationText />
      <SelectOrganization />
      <Kryptomind1 />
    </div>
  );
};
export default Frame10;
