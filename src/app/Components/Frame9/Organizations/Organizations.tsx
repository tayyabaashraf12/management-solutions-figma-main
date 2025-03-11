import React from "react";
import Rectangles from "./Rectangles/Rectangles";
import OrganizationText from "./OrganizationText/OrganizationText";
import SelectOrganization from "./SelectOrganization/SelectOrganization";

const Organizations = () => {
  return (
    <div className="w-[306px] h-[239px] gap-1  absolute flex items-center justify-center flex-col  top-[393px] left-[565px] text-[#FFFFFF] ">
      <Rectangles />
      <OrganizationText />
      <SelectOrganization />
    </div>
  );
};
export default Organizations;
// border border-red-50
